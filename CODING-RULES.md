# 📏 CODING-RULES.md - Quy Tắc Viết Code

> **Tuân thủ các quy tắc này khi viết/sửa code cho project.**

---

## 🛠️ Tech Stack

| Công nghệ | Sử dụng | Ghi chú |
|-----------|---------|---------|
| HTML5 | ✅ | Semantic tags |
| CSS3 | ✅ | CSS Variables, Flexbox |
| Vanilla JavaScript | ✅ | ES6+ syntax |
| jQuery | ❌ | Không dùng |
| React/Vue/Angular | ❌ | Không dùng |
| TypeScript | ❌ | Không dùng |

---

## 📝 Coding Style

### JavaScript

```javascript
// ✅ ĐÚNG: Dùng const/let, không dùng var
const API_KEY = 'xxx';
let currentVideo = null;

// ✅ ĐÚNG: Arrow functions cho callbacks
items.forEach(item => {
    console.log(item);
});

// ✅ ĐÚNG: Template literals
const url = `https://api.example.com?key=${apiKey}`;

// ✅ ĐÚNG: Async/await cho promises
async function fetchData() {
    const response = await fetch(url);
    return response.json();
}

// ❌ SAI: Callback hell
fetch(url).then(res => res.json()).then(data => {
    fetch(url2).then(res2 => res2.json()).then(data2 => {
        // ...
    });
});
```

### CSS

```css
/* ✅ ĐÚNG: Sử dụng CSS variables */
:root {
    --mac-accent: #007aff;
}

.button {
    background: var(--mac-accent);
}

/* ❌ SAI: Hardcode colors */
.button {
    background: #007aff;
}
```

### HTML

```html
<!-- ✅ ĐÚNG: Semantic HTML -->
<section id="ytaudio-tab" class="tab-content">
    <header>...</header>
    <main>...</main>
</section>

<!-- ❌ SAI: Div soup -->
<div id="ytaudio-tab">
    <div>...</div>
</div>
```

---

## 🏷️ Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables | camelCase | `currentVideoId` |
| Constants | UPPER_SNAKE | `API_BASE_URL` |
| Functions | camelCase | `loadYTAudio()` |
| CSS Classes | kebab-case | `yt-player-container` |
| IDs | kebab-case | `ytaudio-tab` |
| Files | kebab-case | `app.js` |

---

## 📦 Code Organization

### Section Comments
```javascript
// ==========================================
// YOUTUBE AUDIO PLAYER
// ==========================================

// Core functions
function loadYTAudio() { ... }

// Helper functions
function extractVideoId() { ... }
```

### Function Comments
```javascript
/**
 * Load and play YouTube audio
 * @param {string} videoId - YouTube video ID
 * @param {string} title - Video title (optional)
 * @param {string} source - 'search' | 'favorites' | 'playlist'
 */
function loadYTAudio(videoId, title = '', source = 'search') {
    // ...
}
```

---

## 🔒 Security Rules

- ✅ Lưu API keys trong `localStorage`, không hardcode
- ✅ Validate user input trước khi dùng
- ✅ Escape HTML khi hiển thị user content
- ✅ Dùng HTTPS cho tất cả external requests
- ❌ Không expose sensitive data trong console.log

---

## ⚡ Performance Rules

- ✅ Cache API responses (đã triển khai với `ytSearchCache`)
- ✅ Lazy load images với `loading="lazy"`
- ✅ Debounce search inputs
- ✅ Dùng `document.getElementById` thay vì `querySelector` khi có thể
- ❌ Không query DOM trong loops

---

## 🧪 Testing

Không có automated tests. Test thủ công bằng cách:
1. Refresh trang
2. Test tính năng đã sửa
3. Kiểm tra Console có lỗi không
4. Test trên cả desktop và mobile

---

*Cập nhật file này khi có quy tắc mới.*
