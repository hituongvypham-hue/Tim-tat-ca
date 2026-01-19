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

### 4. Cinema Mode Player Không Hiển Thị
- **Triệu chứng:** Bật Cinema Mode chỉ thấy backdrop tối, không thấy player
- **Nguyên nhân GỐC:** CSS cho `.player-cinema-mode` bị đặt **trong @media (max-width: 768px)** → chỉ hoạt động trên mobile, không hoạt động trên desktop!
- **Giải pháp:** 
  - Chuyển toàn bộ Cinema CSS ra khỏi media query → global scope (lines 4625-4721)
  - Xóa duplicate CSS trong media query
- **Bài học:** **LUÔN kiểm tra xem CSS có nằm trong media query không** khi styles không được áp dụng
- **Commit:** `8b3fdc6`
- **Ngày sửa:** 10/01/2026

### 5. Cinema Mode Code Bị Mất Sau Revert
- **Triệu chứng:** Nút 🎬 Cinema không có, code bị xóa
- **Nguyên nhân:** Khi revert code để fix lỗi khác, Cinema Mode code bị mất theo
- **Giải pháp:** Dùng `git show <commit>:index.html` để xem và khôi phục code cũ
- **Bài học:** Trước khi revert, kiểm tra xem commit đó có features nào quan trọng không
- **Commit:** `0f476d6`
- **Ngày sửa:** 10/01/2026

- **Ngày sửa:** 10/01/2026
 
 ### 6. GitHub Pages Update Không Hiển Thị (Deployment Delay)
 - **Triệu chứng:** Push code thành công nhưng trang web vẫn hiện version cũ, check API thấy code mới.
 - **Nguyên nhân:**
   - 1. **Propagation Delay:** GitHub Pages CDNs mất 1-10 phút để update toàn cầu.
   - 2. **Network Timeout:** File lớn hoặc mạng yếu khiến `git push` bị treo/fail ngầm.
 - **Giải pháp:**
   - **Tăng Buffer Git:** `git config --global http.postBuffer 524288000` (500MB).
   - **Force Refresh:** `Ctrl + Shift + R` hoặc mở Incognito.
   - **Check URL:** Thêm query param để bypass cache: `?v=new_version`
 - **Ngày sửa:** 19/01/2026
 
 ### 7. Hardcoded Version String Overwrite
 - **Triệu chứng:** Đã update HTML version nhưng load lại vẫn thấy version cũ (vd: 15:52).
 - **Nguyên nhân:** Có code JS (vd: `updateHeaderClock`) hardcode string version và ghi đè lên HTML lúc runtime.
 - **Giải pháp:** Search toàn bộ project tìm string version cũ (grep "v2026...") và update trong cả HTML lẫn JS.
 - **Ngày sửa:** 19/01/2026
 
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
