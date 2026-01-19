/**
 * DriveSync - Google Drive Sync Module for Director Context
 * Saves notes and files to Google Drive appDataFolder for persistence
 */

const DriveSync = {
    // Configuration - Replace with your Google Cloud credentials
    CLIENT_ID: '', // Will be set from settings
    API_KEY: '',   // Will be set from settings
    SCOPES: 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.email',
    
    // State
    isInitialized: false,
    isSignedIn: false,
    userEmail: null,
    tokenClient: null,
    
    // Data
    recentNotes: [],
    recentFiles: [],
    CONFIG_FILE_NAME: 'director_config.json',
    MAX_RECENT_NOTES: 10,
    MAX_RECENT_FILES: 10,

    /**
     * Initialize the GAPI and GIS libraries
     */
    async init() {
        // Get credentials from localStorage
        this.CLIENT_ID = localStorage.getItem('googleClientId') || '';
        this.API_KEY = localStorage.getItem('googleApiKey') || '';

        if (!this.CLIENT_ID || !this.API_KEY) {
            console.log('DriveSync: No credentials configured');
            this.updateUI();
            return false;
        }

        try {
            // Load GAPI library
            await this.loadScript('https://apis.google.com/js/api.js');
            await new Promise((resolve) => gapi.load('client', resolve));
            
            await gapi.client.init({
                apiKey: this.API_KEY,
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
            });

            // Load GIS library
            await this.loadScript('https://accounts.google.com/gsi/client');
            
            this.tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: this.CLIENT_ID,
                scope: this.SCOPES,
                callback: '', // Will be set later
            });

            this.isInitialized = true;

            // Check for existing token
            const token = localStorage.getItem('driveAccessToken');
            const tokenExpiry = localStorage.getItem('driveTokenExpiry');
            
            if (token && tokenExpiry && Date.now() < parseInt(tokenExpiry)) {
                gapi.client.setToken({ access_token: token });
                this.isSignedIn = true;
                this.userEmail = localStorage.getItem('driveUserEmail');
                await this.loadRecentItems();
            }

            this.updateUI();
            return true;
        } catch (error) {
            console.error('DriveSync init error:', error);
            return false;
        }
    },

    /**
     * Load external script
     */
    loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    },

    /**
     * Sign in with Google
     */
    signIn() {
        if (!this.isInitialized) {
            toast('⚠️ Vui lòng cấu hình Google Drive API trước');
            this.showSettingsModal();
            return;
        }

        this.tokenClient.callback = async (response) => {
            if (response.error) {
                console.error('Sign in error:', response);
                toast('❌ Lỗi đăng nhập Google');
                return;
            }

            // Save token
            localStorage.setItem('driveAccessToken', response.access_token);
            localStorage.setItem('driveTokenExpiry', Date.now() + (response.expires_in * 1000));
            
            this.isSignedIn = true;

            // Get user email
            try {
                const userInfo = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                    headers: { Authorization: `Bearer ${response.access_token}` }
                });
                const user = await userInfo.json();
                this.userEmail = user.email;
                localStorage.setItem('driveUserEmail', user.email);
            } catch (e) {
                console.error('Failed to get user info:', e);
            }

            await this.loadRecentItems();
            this.updateUI();
            toast('✅ Đã kết nối Google Drive');
        };

        this.tokenClient.requestAccessToken({ prompt: 'consent' });
    },

    /**
     * Sign out
     */
    signOut() {
        const token = gapi.client.getToken();
        if (token) {
            google.accounts.oauth2.revoke(token.access_token);
            gapi.client.setToken('');
        }
        
        localStorage.removeItem('driveAccessToken');
        localStorage.removeItem('driveTokenExpiry');
        localStorage.removeItem('driveUserEmail');
        
        this.isSignedIn = false;
        this.userEmail = null;
        this.recentNotes = [];
        this.recentFiles = [];
        
        this.updateUI();
        toast('Đã ngắt kết nối Google Drive');
    },

    /**
     * Show settings modal for API configuration
     */
    showSettingsModal() {
        const modal = document.getElementById('driveSettingsModal');
        if (modal) {
            document.getElementById('googleClientIdInput').value = this.CLIENT_ID || '';
            document.getElementById('googleApiKeyInput').value = this.API_KEY || '';
            modal.classList.add('show');
        }
    },

    /**
     * Save Google API credentials
     */
    saveCredentials() {
        const clientId = document.getElementById('googleClientIdInput').value.trim();
        const apiKey = document.getElementById('googleApiKeyInput').value.trim();
        
        if (!clientId || !apiKey) {
            toast('⚠️ Vui lòng nhập đầy đủ thông tin');
            return;
        }

        localStorage.setItem('googleClientId', clientId);
        localStorage.setItem('googleApiKey', apiKey);
        
        this.CLIENT_ID = clientId;
        this.API_KEY = apiKey;
        
        const modal = document.getElementById('driveSettingsModal');
        if (modal) modal.classList.remove('show');
        
        toast('✅ Đã lưu cấu hình, đang khởi tạo...');
        this.init();
    },

    /**
     * Load recent items from Google Drive
     */
    async loadRecentItems() {
        if (!this.isSignedIn) return;

        try {
            // Find config file in appDataFolder
            const response = await gapi.client.drive.files.list({
                spaces: 'appDataFolder',
                fields: 'files(id, name)',
                q: `name='${this.CONFIG_FILE_NAME}'`
            });

            if (response.result.files && response.result.files.length > 0) {
                const fileId = response.result.files[0].id;
                const contentResponse = await gapi.client.drive.files.get({
                    fileId: fileId,
                    alt: 'media'
                });
                
                const config = JSON.parse(contentResponse.body);
                this.recentNotes = config.notes || [];
                this.recentFiles = config.files || [];
            }

            this.renderRecentItems();
        } catch (error) {
            console.error('Load recent items error:', error);
        }
    },

    /**
     * Save config to Google Drive
     */
    async saveConfig() {
        if (!this.isSignedIn) return;

        const config = {
            notes: this.recentNotes,
            files: this.recentFiles,
            updatedAt: new Date().toISOString()
        };

        try {
            // Check if config file exists
            const listResponse = await gapi.client.drive.files.list({
                spaces: 'appDataFolder',
                fields: 'files(id)',
                q: `name='${this.CONFIG_FILE_NAME}'`
            });

            const boundary = '-------314159265358979323846';
            const metadata = {
                name: this.CONFIG_FILE_NAME,
                mimeType: 'application/json',
                parents: ['appDataFolder']
            };

            let body = '';
            body += '--' + boundary + '\r\n';
            body += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            body += JSON.stringify(metadata) + '\r\n';
            body += '--' + boundary + '\r\n';
            body += 'Content-Type: application/json\r\n\r\n';
            body += JSON.stringify(config) + '\r\n';
            body += '--' + boundary + '--';

            const token = gapi.client.getToken().access_token;
            
            if (listResponse.result.files && listResponse.result.files.length > 0) {
                // Update existing file
                const fileId = listResponse.result.files[0].id;
                await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(config)
                });
            } else {
                // Create new file
                await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': `multipart/related; boundary=${boundary}`
                    },
                    body: body
                });
            }

            console.log('DriveSync: Config saved');
        } catch (error) {
            console.error('Save config error:', error);
        }
    },

    /**
     * Save a note to recent items
     */
    async saveNote(content) {
        if (!content || !this.isSignedIn) return;

        // Check if note already exists
        const existingIndex = this.recentNotes.findIndex(n => n.content === content);
        
        if (existingIndex >= 0) {
            // Update existing note
            this.recentNotes[existingIndex].usedAt = new Date().toISOString();
            this.recentNotes[existingIndex].usedCount++;
            // Move to top
            const note = this.recentNotes.splice(existingIndex, 1)[0];
            this.recentNotes.unshift(note);
        } else {
            // Add new note
            this.recentNotes.unshift({
                id: Date.now().toString(),
                content: content,
                preview: content.substring(0, 50) + (content.length > 50 ? '...' : ''),
                createdAt: new Date().toISOString(),
                usedAt: new Date().toISOString(),
                usedCount: 1
            });
        }

        // Limit to max items
        if (this.recentNotes.length > this.MAX_RECENT_NOTES) {
            this.recentNotes = this.recentNotes.slice(0, this.MAX_RECENT_NOTES);
        }

        await this.saveConfig();
        this.renderRecentItems();
    },

    /**
     * Save a file to recent items
     */
    async saveFile(name, content) {
        if (!name || !content || !this.isSignedIn) return;

        // Check if file already exists
        const existingIndex = this.recentFiles.findIndex(f => f.name === name);
        
        if (existingIndex >= 0) {
            // Update existing
            this.recentFiles[existingIndex].content = content;
            this.recentFiles[existingIndex].usedAt = new Date().toISOString();
            this.recentFiles[existingIndex].usedCount++;
            // Move to top
            const file = this.recentFiles.splice(existingIndex, 1)[0];
            this.recentFiles.unshift(file);
        } else {
            // Add new file
            this.recentFiles.unshift({
                id: Date.now().toString(),
                name: name,
                content: content,
                size: content.length,
                createdAt: new Date().toISOString(),
                usedAt: new Date().toISOString(),
                usedCount: 1
            });
        }

        // Limit to max items
        if (this.recentFiles.length > this.MAX_RECENT_FILES) {
            this.recentFiles = this.recentFiles.slice(0, this.MAX_RECENT_FILES);
        }

        await this.saveConfig();
        this.renderRecentItems();
    },

    /**
     * Load a note into the context textarea
     */
    loadNote(id) {
        const note = this.recentNotes.find(n => n.id === id);
        if (note) {
            const textarea = document.getElementById('directorContext');
            if (textarea) {
                textarea.value = note.content;
                toast('📝 Đã load ghi chú');
            }
        }
    },

    /**
     * Load a file into the uploaded files list
     */
    loadFile(id) {
        const file = this.recentFiles.find(f => f.id === id);
        if (file && typeof window.directorFileContents !== 'undefined') {
            // Check if already added
            const exists = window.directorFileContents.some(f => f.name === file.name);
            if (!exists && window.directorFileContents.length < 3) {
                window.directorFileContents.push({
                    name: file.name,
                    size: file.size,
                    content: file.content
                });
                if (typeof renderDirectorFileList === 'function') {
                    renderDirectorFileList();
                }
                toast('📁 Đã thêm file: ' + file.name);
            } else if (exists) {
                toast('⚠️ File đã có trong danh sách');
            } else {
                toast('⚠️ Tối đa 3 file');
            }
        }
    },

    /**
     * Delete a note from recent items
     */
    async deleteNote(id) {
        this.recentNotes = this.recentNotes.filter(n => n.id !== id);
        await this.saveConfig();
        this.renderRecentItems();
        toast('Đã xóa ghi chú');
    },

    /**
     * Delete a file from recent items
     */
    async deleteFile(id) {
        this.recentFiles = this.recentFiles.filter(f => f.id !== id);
        await this.saveConfig();
        this.renderRecentItems();
        toast('Đã xóa file');
    },

    /**
     * Render recent items in the UI
     */
    renderRecentItems() {
        // Render notes
        const notesContainer = document.getElementById('recentNotesList');
        if (notesContainer) {
            if (this.recentNotes.length === 0) {
                notesContainer.innerHTML = '<span class="recent-empty">Chưa có ghi chú nào</span>';
            } else {
                notesContainer.innerHTML = this.recentNotes.map(note => `
                    <div class="recent-chip" onclick="DriveSync.loadNote('${note.id}')" title="${this.escapeHtml(note.content)}">
                        <span class="recent-chip-text">${this.escapeHtml(note.preview)}</span>
                        <button class="recent-chip-delete" onclick="event.stopPropagation(); DriveSync.deleteNote('${note.id}')" title="Xóa">×</button>
                    </div>
                `).join('');
            }
        }

        // Render files
        const filesContainer = document.getElementById('recentFilesList');
        if (filesContainer) {
            if (this.recentFiles.length === 0) {
                filesContainer.innerHTML = '<span class="recent-empty">Chưa có file nào</span>';
            } else {
                filesContainer.innerHTML = this.recentFiles.map(file => `
                    <div class="recent-chip recent-chip-file" onclick="DriveSync.loadFile('${file.id}')" title="${this.escapeHtml(file.name)}">
                        <span class="recent-chip-icon">📄</span>
                        <span class="recent-chip-text">${this.escapeHtml(file.name)}</span>
                        <button class="recent-chip-delete" onclick="event.stopPropagation(); DriveSync.deleteFile('${file.id}')" title="Xóa">×</button>
                    </div>
                `).join('');
            }
        }
    },

    /**
     * Update UI based on connection status
     */
    updateUI() {
        const connectBtn = document.getElementById('driveConnectBtn');
        const statusEl = document.getElementById('driveStatus');
        const recentSection = document.getElementById('driveRecentSection');

        if (connectBtn && statusEl) {
            if (!this.CLIENT_ID || !this.API_KEY) {
                connectBtn.textContent = '⚙️ Cấu hình Google Drive';
                connectBtn.onclick = () => this.showSettingsModal();
                statusEl.textContent = 'Chưa cấu hình';
                statusEl.className = 'drive-status-unconfigured';
            } else if (this.isSignedIn) {
                connectBtn.textContent = '🔓 Ngắt kết nối';
                connectBtn.onclick = () => this.signOut();
                statusEl.textContent = `✓ ${this.userEmail || 'Đã kết nối'}`;
                statusEl.className = 'drive-status-connected';
            } else {
                connectBtn.textContent = '🔗 Kết nối Google Drive';
                connectBtn.onclick = () => this.signIn();
                statusEl.textContent = 'Chưa kết nối';
                statusEl.className = 'drive-status-disconnected';
            }
        }

        if (recentSection) {
            recentSection.style.display = this.isSignedIn ? 'block' : 'none';
        }
    },

    /**
     * Escape HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    DriveSync.init();
});
