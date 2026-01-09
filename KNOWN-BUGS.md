# 🐛 KNOWN-BUGS.md - Bugs Đã Biết & Cách Tránh

> **Tham khảo file này khi gặp lỗi hoặc trước khi sửa code.**

---

## ✅ Bugs Đã Sửa

### 1. Cinema Mode Reload Video
- **Triệu chứng:** Video reload khi vào Cinema Mode
- **Nguyên nhân:** Dùng `appendChild` di chuyển DOM → iframe reload
- **Giải pháp:** Dùng CSS positioning thay vì DOM manipulation
- **Commit:** `a7d1973`
- **Ngày sửa:** 09/01/2026

### 2. API Quota Exceeded Nhanh
- **Triệu chứng:** Hết 10,000 units/ngày nhanh
- **Nguyên nhân:** Không cache, maxResults cao, gọi API liên tục
- **Giải pháp:** Thêm caching 1h, giảm maxResults, partial response
- **Commit:** `da1e101`
- **Ngày sửa:** 09/01/2026

### 3. Code Bị Corrupted (Lines Merged)
- **Triệu chứng:** JavaScript syntax error, lines run together
- **Nguyên nhân:** AI formatting issue khi replace code
- **Giải pháp:** Luôn view file trước khi sửa, sửa từng chunk nhỏ
- **Commit:** `da1e101`
- **Ngày sửa:** 09/01/2026

---

## ⚠️ Bugs Cần Lưu Ý Khi Code

### 1. Regex Broken Khi Multi-line
```javascript
// ❌ SAI: Regex bị break khi trải nhiều dòng
const pattern = /karaoke|instrumental|beat|cover|remix|nightcore
    |slowed|reverb/i;

// ✅ ĐÚNG: Giữ regex trên 1 dòng
const pattern = /karaoke|instrumental|beat|cover|remix|nightcore|slowed|reverb/i;
```

### 2. Template Literal Bị Break
```javascript
// ❌ SAI: Template literal break giữa chừng
container.innerHTML = `<p>Hello
    World</p>`;

// ✅ ĐÚNG: Escape hoặc giữ trên 1 dòng
container.innerHTML = `<p>Hello World</p>`;
```

### 3. YouTube IFrame API Callback
```javascript
// ⚠️ KHÔNG BAO GIỜ xóa hoặc đổi tên function này
function onYouTubeIframeAPIReady() {
    // YouTube API calls this automatically
}
```

---

## 🔴 Anti-patterns Cần Tránh

### 1. Dùng `var` thay vì `const/let`
```javascript
// ❌ var có scope issues
var ytApiKey = '...';

// ✅ Dùng const cho immutable, let cho mutable
const API_URL = 'https://...';
let currentVideo = null;
```

### 2. Query DOM trong Loop
```javascript
// ❌ CHẬM: Query mỗi lần loop
items.forEach(item => {
    document.getElementById('container').appendChild(item);
});

// ✅ NHANH: Query 1 lần
const container = document.getElementById('container');
items.forEach(item => {
    container.appendChild(item);
});
```

### 3. Không Handle API Errors
```javascript
// ❌ SAI: Không handle lỗi
const data = await fetch(url).then(r => r.json());

// ✅ ĐÚNG: Handle errors
try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
        toast('Lỗi: ' + data.error.message);
        return;
    }
} catch (err) {
    console.error(err);
    toast('Lỗi kết nối');
}
```

---

## 📋 Checklist Trước Khi Sửa Code

- [ ] Đã đọc `PROJECT.md` để hiểu cấu trúc
- [ ] Đã view file với line numbers
- [ ] Đã hiểu code xung quanh phần cần sửa
- [ ] Không sửa regex/template literals trải nhiều dòng
- [ ] Không xóa core functions (onYouTubeIframeAPIReady, toast, etc.)
- [ ] Có error handling cho API calls

---

*Thêm bug mới vào đây khi phát hiện.*
