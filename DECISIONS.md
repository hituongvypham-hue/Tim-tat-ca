# 🎯 DECISIONS.md - Quyết Định Kiến Trúc

> **File này ghi lại TẠI SAO chọn cách này thay vì cách khác.**

---

## Architecture Decisions

### 1. Single HTML File thay vì Multi-page
**Quyết định:** Tất cả code trong 1 file `index.html`

**Tại sao:**
- User không biết code, dễ quản lý 1 file
- Không cần build tools
- Deploy đơn giản (GitHub Pages)

**Trade-offs:**
- ❌ File lớn (~16,000 dòng)
- ❌ Khó tìm code
- ✅ Không cần build process
- ✅ Deploy 1 click

**Tương lai:** Có thể tách thành modules nếu file quá lớn

---

### 2. Vanilla JS thay vì Framework (React/Vue)
**Quyết định:** Dùng JavaScript thuần

**Tại sao:**
- Project cá nhân, không cần scale
- Không có team, không cần component standardization
- Load nhanh hơn, không bundle
- Dễ debug trong browser

**Trade-offs:**
- ❌ Code dài hơn
- ❌ Không có state management
- ✅ Zero dependencies
- ✅ Load instant

---

### 3. LocalStorage thay vì Database
**Quyết định:** Lưu data trong browser localStorage

**Tại sao:**
- Không cần backend
- Free, không tốn hosting
- Data riêng mỗi user
- Simple read/write

**Trade-offs:**
- ❌ Mất data khi clear browser
- ❌ Không sync giữa các device (có Google Drive sync)
- ✅ Free
- ✅ Instant access

---

### 4. CSS-only Cinema Mode thay vì DOM Manipulation
**Quyết định:** Dùng CSS class để vào Cinema Mode

**Tại sao:**
- DOM manipulation (appendChild) làm iframe reload
- CSS positioning không trigger reload
- Smooth transition

**Commit:** Sau bug fix `a7d1973`

**Cách cũ (bị lỗi):**
```javascript
// ❌ Làm video reload
cinemaContainer.appendChild(playerContainer);
```

**Cách mới:**
```javascript
// ✅ Không reload
playerContainer.classList.add('player-cinema-mode');
```

---

### 5. Caching API thay vì Multi-key Rotation
**Quyết định:** Cache results 1 giờ, xóa multi-key rotation

**Tại sao:**
- Multi-key rotation vi phạm YouTube ToS
- Caching tiết kiệm 50-80% quota hợp pháp
- Đơn giản hơn, không cần manage nhiều keys

**Commit:** `2401907`

---

### 6. Partial Response cho YouTube API
**Quyết định:** Dùng `fields` parameter

**Tại sao:**
- Giảm data transfer ~40%
- API response nhanh hơn
- Không cần data thừa

**Implementation:**
```javascript
const YT_SEARCH_FIELDS = 'items(id,snippet(title,thumbnails/medium))';
```

---

### 7. Google Drive Sync thay vì Custom Backend
**Quyết định:** Sync data qua Google Drive API

**Tại sao:**
- Free storage (15GB)
- User đã có Google account
- Không cần maintain server
- OAuth built-in

**Trade-offs:**
- ❌ Cần user đăng nhập Google
- ❌ Phụ thuộc Google API
- ✅ Free
- ✅ Secure

---

## Pending Decisions

### Tách code thành modules?
**Status:** Chưa quyết định

**Options:**
1. **Giữ nguyên** - Dễ quản lý cho vibe coding
2. **Tách JS files** - youtube-player.js, api-utils.js, ui-components.js
3. **Dùng ES modules** - import/export

**Cần cân nhắc:**
- User không biết code
- Có cần scale không?
- Complexity vs Maintainability

---

*Thêm decision mới khi có thay đổi kiến trúc quan trọng.*
