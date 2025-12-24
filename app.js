/**
 * Video Search Hub Pro
 * Enhanced Multi-Platform Video Search for Video Editors
 * Updated: 12/2025 based on market research
 */

// Platform search URL configurations - Sorted by popularity
const PLATFORMS = {
    // International - Top platforms
    youtube: {
        name: 'YouTube',
        searchUrl: (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`,
        icon: '▶️',
        users: '2.85B',
        region: 'global',
        rank: 1
    },
    tiktok: {
        name: 'TikTok',
        searchUrl: (q) => `https://www.tiktok.com/search?q=${encodeURIComponent(q)}`,
        icon: '🎵',
        users: '1.8B',
        region: 'global',
        rank: 2
    },
    vimeo: {
        name: 'Vimeo',
        searchUrl: (q) => `https://vimeo.com/search?q=${encodeURIComponent(q)}`,
        icon: '🎥',
        users: 'Pro',
        region: 'global',
        rank: 3
    },
    instagram: {
        name: 'Instagram',
        searchUrl: (q) => `https://www.instagram.com/explore/tags/${encodeURIComponent(q.replace(/\s+/g, ''))}/`,
        icon: '📸',
        users: '2B+',
        region: 'global'
    },
    facebook: {
        name: 'Facebook',
        searchUrl: (q) => `https://www.facebook.com/search/videos?q=${encodeURIComponent(q)}`,
        icon: '📘',
        users: '3B+',
        region: 'global'
    },
    twitch: {
        name: 'Twitch',
        searchUrl: (q) => `https://www.twitch.tv/search?term=${encodeURIComponent(q)}`,
        icon: '🎮',
        users: 'Live',
        region: 'global'
    },
    dailymotion: {
        name: 'Dailymotion',
        searchUrl: (q) => `https://www.dailymotion.com/search/${encodeURIComponent(q)}`,
        icon: '🎞️',
        users: 'EU',
        region: 'global'
    },

    // China - Top platforms
    douyin: {
        name: 'Douyin 抖音',
        searchUrl: (q) => `https://www.douyin.com/search/${encodeURIComponent(q)}`,
        icon: '🎶',
        users: '766M',
        region: 'china',
        rank: 1
    },
    kuaishou: {
        name: 'Kuaishou 快手',
        searchUrl: (q) => `https://www.kuaishou.com/search/video?searchKey=${encodeURIComponent(q)}`,
        icon: '⚡',
        users: '640M',
        region: 'china',
        rank: 2
    },
    bilibili: {
        name: 'Bilibili 哔哩',
        searchUrl: (q) => `https://search.bilibili.com/all?keyword=${encodeURIComponent(q)}`,
        icon: '📺',
        users: '100M+',
        region: 'china',
        rank: 3
    },
    xiaohongshu: {
        name: '小红书',
        searchUrl: (q) => `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(q)}`,
        icon: '📕',
        users: '200M+',
        region: 'china'
    },
    weibo: {
        name: 'Weibo 微博',
        searchUrl: (q) => `https://s.weibo.com/video?q=${encodeURIComponent(q)}`,
        icon: '🔴',
        users: '580M',
        region: 'china'
    }
};

// Preset configurations
const PRESETS = {
    'top-global': ['youtube', 'tiktok', 'vimeo'],
    'china': ['douyin', 'bilibili', 'kuaishou', 'xiaohongshu'],
    'short-video': ['tiktok', 'douyin', 'instagram', 'youtube'],
    'pro-footage': ['vimeo', 'youtube', 'dailymotion'],
    'all': Object.keys(PLATFORMS)
};

// Language configurations
const LANGUAGES = {
    '': { name: 'Tất cả', code: '' },
    'vi': { name: 'Tiếng Việt', code: 'vi' },
    'en': { name: 'English', code: 'en' },
    'zh': { name: '中文', code: 'zh-CN' },
    'ja': { name: '日本語', code: 'ja' },
    'ko': { name: '한국어', code: 'ko' },
    'th': { name: 'ภาษาไทย', code: 'th' },
    'ru': { name: 'Русский', code: 'ru' }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const searchAllBtn = document.getElementById('searchAllBtn');
const saveKeywordBtn = document.getElementById('saveKeywordBtn');
const selectAllBtn = document.getElementById('selectAllBtn');
const deselectAllBtn = document.getElementById('deselectAllBtn');
const savedKeywordsContainer = document.getElementById('savedKeywords');
const searchHistoryContainer = document.getElementById('searchHistory');
const noKeywordsMsg = document.getElementById('noKeywords');
const noHistoryMsg = document.getElementById('noHistory');

// State
let savedKeywords = JSON.parse(localStorage.getItem('videoSearchKeywords') || '[]');
let searchHistory = JSON.parse(localStorage.getItem('videoSearchHistory') || '[]');
let previousLang = '';
let isTranslating = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSavedKeywords();
    renderSearchHistory();
    updatePlatformCount();

    // Focus search input on load
    searchInput.focus();

    // Add language change listeners
    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', handleLanguageChange);
    });

    // Add preset button listeners
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
    });

    // Add platform change listeners for count update
    document.querySelectorAll('.platform-card input').forEach(checkbox => {
        checkbox.addEventListener('change', updatePlatformCount);
    });

    // Smart language-platform suggestion
    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', suggestPlatformsForLanguage);
    });
});

// Apply preset
function applyPreset(presetName) {
    const platforms = PRESETS[presetName];
    if (!platforms) return;

    // Update active state on buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.preset === presetName);
    });

    // Update checkboxes
    document.querySelectorAll('.platform-card input').forEach(checkbox => {
        const platform = checkbox.closest('.platform-card').dataset.platform;
        checkbox.checked = platforms.includes(platform);
    });

    updatePlatformCount();
    showToast(`Đã chọn preset: ${presetName}`, 'success');
}

// Suggest platforms based on language
function suggestPlatformsForLanguage(e) {
    const lang = e.target.value;

    if (lang === 'zh') {
        // Chinese selected - suggest China platforms
        showToast('💡 Tip: Đã chọn tiếng Trung - nên dùng Douyin, Bilibili, Kuaishou', 'success');
    } else if (lang === 'ja') {
        showToast('💡 Tip: Đã chọn tiếng Nhật - nên dùng YouTube, TikTok, Bilibili', 'success');
    } else if (lang === 'ko') {
        showToast('💡 Tip: Đã chọn tiếng Hàn - nên dùng YouTube, TikTok', 'success');
    }
}

// Update platform count
function updatePlatformCount() {
    const count = document.querySelectorAll('.platform-card input:checked').length;
    const countEl = document.querySelector('.platform-count');
    if (countEl) {
        countEl.textContent = `(${count} đã chọn)`;
    }
}

// Handle language change - translate the search input
async function handleLanguageChange(e) {
    const newLang = e.target.value;
    const query = searchInput.value.trim();

    if (!query || newLang === previousLang || newLang === '') {
        previousLang = newLang;
        return;
    }

    await translateQuery(query, LANGUAGES[newLang]?.code || newLang);
    previousLang = newLang;
}

// Translate query using Google Translate API
async function translateQuery(text, targetLang) {
    if (isTranslating || !targetLang) return;

    isTranslating = true;
    searchInput.classList.add('translating');
    showToast(`🔄 Đang dịch sang ${LANGUAGES[Object.keys(LANGUAGES).find(k => LANGUAGES[k].code === targetLang)]?.name || targetLang}...`, 'success');

    try {
        // Google Translate API (unofficial but reliable)
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Google Translate request failed');
        }

        const data = await response.json();

        // Google returns array: [[["translated text","original text",null,null,10]],null,"en",...]
        if (data && data[0]) {
            // Combine all translated parts (for longer text)
            let translated = '';
            for (let i = 0; i < data[0].length; i++) {
                if (data[0][i] && data[0][i][0]) {
                    translated += data[0][i][0];
                }
            }

            if (translated && translated.toLowerCase() !== text.toLowerCase()) {
                searchInput.value = translated;
                showToast(`✅ Google Translate: "${text}" → "${translated}"`, 'success');
            } else {
                showToast(`ℹ️ Không cần dịch hoặc đã là ngôn ngữ đích`, 'success');
            }
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Google Translate error:', error);
        showToast(`❌ Lỗi dịch. Thử mở Google Translate trực tiếp?`, 'error');

        // Offer to open Google Translate directly
        const googleTranslateUrl = `https://translate.google.com/?sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}&op=translate`;

        // Auto-copy the URL or open in new tab after 2 seconds
        setTimeout(() => {
            if (confirm(`Mở Google Translate để dịch "${text}"?`)) {
                window.open(googleTranslateUrl, '_blank');
            }
        }, 1000);
    } finally {
        isTranslating = false;
        searchInput.classList.remove('translating');
    }
}

// Event Listeners
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchAll();
    }
});

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
});

searchAllBtn.addEventListener('click', searchAll);
saveKeywordBtn.addEventListener('click', saveKeyword);
selectAllBtn.addEventListener('click', () => toggleAllPlatforms(true));
deselectAllBtn.addEventListener('click', () => toggleAllPlatforms(false));

// Copy Links button
const copyLinksBtn = document.getElementById('copyLinksBtn');
if (copyLinksBtn) {
    copyLinksBtn.addEventListener('click', copyAllLinks);
}

// Copy all search links to clipboard
function copyAllLinks() {
    const query = searchInput.value.trim();

    if (!query) {
        showToast('Vui lòng nhập từ khóa!', 'error');
        return;
    }

    const selectedPlatforms = getSelectedPlatforms();

    if (selectedPlatforms.length === 0) {
        showToast('Vui lòng chọn ít nhất một nền tảng!', 'error');
        return;
    }

    // Generate all URLs
    const urls = selectedPlatforms.map(platform => {
        return `${PLATFORMS[platform].name}: ${PLATFORMS[platform].searchUrl(query)}`;
    }).join('\n');

    // Copy to clipboard
    navigator.clipboard.writeText(urls).then(() => {
        showToast(`📋 Đã copy ${selectedPlatforms.length} link vào clipboard!`, 'success');
    }).catch(err => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = urls;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`📋 Đã copy ${selectedPlatforms.length} link!`, 'success');
    });
}

// Functions
function getSelectedPlatforms() {
    const selected = [];
    document.querySelectorAll('.platform-card input:checked').forEach(checkbox => {
        const platform = checkbox.closest('.platform-card').dataset.platform;
        if (platform && PLATFORMS[platform]) {
            selected.push(platform);
        }
    });
    return selected;
}

function getSelectedLanguage() {
    const selected = document.querySelector('input[name="language"]:checked');
    return selected ? selected.value : '';
}

function searchAll() {
    let query = searchInput.value.trim();

    if (!query) {
        showToast('Vui lòng nhập từ khóa tìm kiếm!', 'error');
        searchInput.focus();
        return;
    }

    const selectedPlatforms = getSelectedPlatforms();

    if (selectedPlatforms.length === 0) {
        showToast('Vui lòng chọn ít nhất một nền tảng!', 'error');
        return;
    }

    // Add to search history (original query)
    addToHistory(query);

    const langCode = getSelectedLanguage();
    const langName = langCode ? ` (${LANGUAGES[langCode]?.name})` : '';

    // If too many platforms, warn about popup blocker
    if (selectedPlatforms.length > 3) {
        showToast(`⚠️ Đang mở ${selectedPlatforms.length} tab - Nếu bị chặn, hãy cho phép popup!`, 'warning');
    }

    // Open tabs with longer delays to avoid popup blocker
    let openedCount = 0;
    let blockedCount = 0;

    selectedPlatforms.forEach((platform, index) => {
        const url = PLATFORMS[platform].searchUrl(query);

        setTimeout(() => {
            try {
                const newWindow = window.open(url, '_blank');
                if (newWindow) {
                    openedCount++;
                } else {
                    blockedCount++;
                    console.log(`Blocked: ${platform} - ${url}`);
                }

                // Show result after last attempt
                if (index === selectedPlatforms.length - 1) {
                    setTimeout(() => {
                        if (blockedCount > 0) {
                            showToast(`⚠️ Mở ${openedCount}/${selectedPlatforms.length} tab. ${blockedCount} bị chặn - cho phép popup!`, 'error');
                        } else {
                            showToast(`✅ Đã mở ${openedCount} tab tìm kiếm "${query}"${langName}`, 'success');
                        }
                    }, 500);
                }
            } catch (e) {
                blockedCount++;
            }
        }, index * 800); // Longer delay: 800ms between each tab
    });
}

function saveKeyword() {
    const keyword = searchInput.value.trim();

    if (!keyword) {
        showToast('Vui lòng nhập từ khóa để lưu!', 'error');
        return;
    }

    if (savedKeywords.includes(keyword)) {
        showToast('Từ khóa này đã được lưu!', 'error');
        return;
    }

    savedKeywords.unshift(keyword);

    if (savedKeywords.length > 20) {
        savedKeywords.pop();
    }

    localStorage.setItem('videoSearchKeywords', JSON.stringify(savedKeywords));
    renderSavedKeywords();
    showToast(`Đã lưu từ khóa "${keyword}"`, 'success');
}

function deleteKeyword(keyword) {
    savedKeywords = savedKeywords.filter(k => k !== keyword);
    localStorage.setItem('videoSearchKeywords', JSON.stringify(savedKeywords));
    renderSavedKeywords();
}

function addToHistory(query) {
    searchHistory = searchHistory.filter(q => q !== query);
    searchHistory.unshift(query);

    if (searchHistory.length > 10) {
        searchHistory.pop();
    }

    localStorage.setItem('videoSearchHistory', JSON.stringify(searchHistory));
    renderSearchHistory();
}

function deleteFromHistory(query) {
    searchHistory = searchHistory.filter(q => q !== query);
    localStorage.setItem('videoSearchHistory', JSON.stringify(searchHistory));
    renderSearchHistory();
}

function useKeyword(keyword) {
    searchInput.value = keyword;
    searchInput.focus();
}

function renderSavedKeywords() {
    if (savedKeywords.length === 0) {
        savedKeywordsContainer.innerHTML = '';
        noKeywordsMsg.style.display = 'block';
        return;
    }

    noKeywordsMsg.style.display = 'none';
    savedKeywordsContainer.innerHTML = savedKeywords.map(keyword => `
        <div class="keyword-tag" onclick="useKeyword('${escapeHtml(keyword)}')">
            <span>⭐</span>
            <span>${escapeHtml(keyword)}</span>
            <button class="delete-btn" onclick="event.stopPropagation(); deleteKeyword('${escapeHtml(keyword)}')" title="Xóa">✕</button>
        </div>
    `).join('');
}

function renderSearchHistory() {
    if (searchHistory.length === 0) {
        searchHistoryContainer.innerHTML = '';
        noHistoryMsg.style.display = 'block';
        return;
    }

    noHistoryMsg.style.display = 'none';
    searchHistoryContainer.innerHTML = searchHistory.map(query => `
        <div class="history-item" onclick="useKeyword('${escapeHtml(query)}')">
            <span>🕐</span>
            <span>${escapeHtml(query)}</span>
            <button class="delete-btn" onclick="event.stopPropagation(); deleteFromHistory('${escapeHtml(query)}')" title="Xóa">✕</button>
        </div>
    `).join('');
}

function toggleAllPlatforms(selected) {
    document.querySelectorAll('.platform-card input').forEach(checkbox => {
        checkbox.checked = selected;
    });
    updatePlatformCount();

    // Update preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.toggle('active', selected && btn.dataset.preset === 'all');
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/'/g, "\\'");
}

// Toast notification
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
