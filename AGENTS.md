# 🤖 AGENTS.md - Hướng dẫn cho AI Agents

> **File này được AI đọc để biết cách làm việc với project.**

---

## 📋 Thông tin Project

- **Tên:** Tim-tat-ca (Media Search Hub Pro)
- **Ngôn ngữ chính:** HTML, CSS, JavaScript (Vanilla)
- **Repo:** https://github.com/hituongvypham-hue/Tim-tat-ca
- **User:** Không biết code, dùng vibe coding

---

## 🎯 Khi Bắt Đầu Session Mới

1. **ĐỌC** `PROJECT.md` trước để hiểu cấu trúc
2. **KIỂM TRA** `APP_LAST_UPDATE` trong code (search: `APP_LAST_UPDATE`)
3. **HỎI** user về tính năng cần làm

---

## ✅ Rules Khi Sửa Code

### DO (Nên làm):
- ✅ Tìm đúng line number trước khi sửa
- ✅ Sử dụng comment `// ===` để đánh dấu section
- ✅ Cập nhật `APP_LAST_UPDATE` sau mỗi thay đổi
- ✅ Cập nhật `PROJECT.md` sau thay đổi lớn
- ✅ Commit với message rõ ràng bằng tiếng Anh
- ✅ Test bằng cách bảo user refresh trang

### DON'T (Không nên):
- ❌ Sửa code không liên quan đến yêu cầu
- ❌ Xóa code mà không hiểu chức năng
- ❌ Thêm library/framework mới (giữ vanilla JS)
- ❌ Sử dụng jQuery, React, Vue (trừ khi user yêu cầu)
- ❌ Hardcode API keys vào code

---

## 📁 File Quan Trọng

| File | Đọc khi | Mục đích |
|------|---------|----------|
| `PROJECT.md` | Đầu session | Hiểu cấu trúc project |
| `CODING-RULES.md` | Trước khi code | Quy tắc viết code |
| `KNOWN-BUGS.md` | Khi gặp lỗi | Bugs đã biết và cách tránh |
| `DECISIONS.md` | Khi thắc mắc | Tại sao làm cách này |

---

## 🔧 Cách Sửa Code An Toàn

```
1. Tìm function/section trong PROJECT.md
2. View file với line numbers cụ thể
3. Đọc code xung quanh để hiểu context
4. Sửa code CHÍNH XÁC phần cần sửa
5. Cập nhật timestamp
6. Commit + Push
7. Cập nhật PROJECT.md nếu thay đổi lớn
```

---

## 🚫 Những Thứ KHÔNG BAO GIỜ Xóa

- `onYouTubeIframeAPIReady()` - YouTube API callback
- `initGoogleIdentity()` - Google OAuth
- `toast()` - Notification function
- CSS variables trong `:root`
- Event listeners trong DOMContentLoaded

---

## 📝 Format Commit Message

```
[Feature] Add new tab for X
[Fix] Fix video reload in cinema mode
[Optimize] Add caching for API calls
[Refactor] Split code into modules
[Docs] Update PROJECT.md
```

---

## 🔄 Workflow Sau Mỗi Thay Đổi

1. `git add .`
2. `git commit -m "[Type] Description"`
3. `git push`
4. Cập nhật `PROJECT.md` nếu cần
5. Thông báo user refresh trang

---

*File này cần được đọc bởi AI trước khi làm việc với project.*
