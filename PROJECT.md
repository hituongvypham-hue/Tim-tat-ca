# 📋 Tim-tat-ca Project Documentation

> **Cập nhật lần cuối:** 09/01/2026 08:30
> **File này được Antigravity đọc trước mỗi lần sửa code để hiểu project.**

---

## 🎯 Mô Tả Project

**Tim-tat-ca** là website tổng hợp công cụ cá nhân với giao diện macOS-like, bao gồm:
- Tìm kiếm media (Video, Movie, Ebook, APK, Software)
- YouTube Audio Player (nghe nhạc nền)
- AI Tools (ChatGPT, Gemini proxy)
- Công cụ sáng tạo nội dung (Prompts, Vision, Knowledge Base)

---

## 📁 Cấu Trúc File

```
Tim-tat-ca/
├── index.html      # File chính (~752KB, 16,200 dòng)
├── app.js          # JS phụ (~32KB)
├── styles.css      # CSS phụ (~15KB)
├── logo.png        # Logo
├── robots.txt      # SEO
├── guides/         # Markdown guides cho Knowledge Base
└── PROJECT.md      # File này
```

---

## 🗂️ Các Tab Chính (HTML)

| Tab ID | Tên | Dòng HTML | Mô tả |
|--------|-----|-----------|-------|
| `video-tab` | Video | 5132 | Tìm video YouTube, Vimeo |
| `movie-tab` | Movie | 5269 | Tìm phim |
| `image-tab` | Image | 5393 | Tìm ảnh |
| `ebook-tab` | Ebook | 5490 | Tìm sách |
| `apk-tab` | APK | 5596 | Tìm ứng dụng Android |
| `software-tab` | Software | 5672 | Tìm phần mềm PC |
| `ytaudio-tab` | YT Audio | 5772 | 🎵 Nghe nhạc YouTube |
| `ai-tab` | AI | 5919 | ChatGPT, Gemini links |
| `wiki-tab` | Wiki | 6029 | Wikipedia search |
| `resources-tab` | Resources | 6108 | Link tài nguyên |
| `create-tab` | Create | 6182 | Công cụ sáng tạo |
| `reverse-tab` | Reverse | 6872 | Tìm kiếm ngược ảnh |
| `vision-tab` | Vision | 7177 | AI mô tả ảnh |
| `mytool-tab` | My Tool | 7292 | Công cụ tùy chỉnh |
| `prompt-tab` | Prompt | 7322 | Quản lý prompts |
| `knowledge-tab` | Knowledge | 7396 | Cơ sở kiến thức |
| `director-tab` | Director | 7549 | Công cụ đạo diễn |
| `discover-tab` | Discover | 7007 | Khám phá trending |

---

## 🎵 YOUTUBE AUDIO PLAYER (Chi tiết)

### Vị trí code: Dòng 13930 - 16200

### Biến Global
```javascript
// Dòng 13932-13945
var ytPlayer;                  // YouTube IFrame player instance
var ytAudioHistory;            // Lịch sử phát
var ytSearchKeywords;          // Lịch sử từ khóa search
var ytApiKey;                  // YouTube Data API key
var currentVideoTitle;         // Tên bài đang phát
var currentVideoId;            // ID video đang phát
var playSource;                // 'search' | 'favorites' | 'playlist'
```

### Core Functions

| Function | Dòng | Chức năng |
|----------|------|-----------|
| `ytApiFetch(url, useCache)` | 13978 | Gọi API với **caching 1 giờ** |
| `getCachedSearch(query)` | 13958 | Lấy kết quả từ cache |
| `setCachedSearch(query, data)` | 13967 | Lưu kết quả vào cache |
| `buildSearchUrl(query, max)` | 14020 | Tạo URL search tối ưu (partial response) |
| `loadYTAudio(id, title, source)` | ~14100 | Phát nhạc từ video ID |
| `handleYTSearch()` | ~14485 | Xử lý khi user search |
| `searchYTAudio(keyword)` | ~14530 | Gọi API search YouTube |
| `fetchRelatedVideo()` | ~14250 | Tìm bài liên quan khi hết nhạc |
| `fetchPersonalizedRecommendations()` | ~14360 | Đề xuất dựa trên lịch sử |
| `saveYTApiKey()` | ~14460 | Lưu API key |
| `enterCinemaMode()` | ~14600 | Chế độ Cinema (CSS-only) |
| `exitCinemaMode()` | ~14630 | Thoát Cinema |

### Cách Hoạt Động
```
User nhập từ khóa 
    → handleYTSearch()
    → ytApiFetch() (kiểm tra cache trước)
    → Hiển thị kết quả
    → User click → loadYTAudio()
    → Khi hết bài → fetchRelatedVideo()
```

### Tối Ưu Quota (ĐÃ TRIỂN KHAI)
- ✅ **Caching:** Kết quả search cache 1 giờ, max 50 queries
- ✅ **Partial Response:** Chỉ lấy `items(id,snippet(title,thumbnails/medium))`
- ✅ **Reduced Results:** `maxResults=5-10` thay vì 25
- ❌ ~~Multi-key rotation~~ (đã xóa vì vi phạm ToS)

---

## 🔗 GOOGLE DRIVE SYNC

### Vị trí: Dòng 10946 - 11450

| Function | Chức năng |
|----------|-----------|
| `initGoogleIdentity()` | Khởi tạo Google OAuth |
| `handleCredentialResponse()` | Xử lý response đăng nhập |
| `syncToGoogleDrive()` | Upload data lên Drive |
| `loadFromGoogleDrive()` | Download data từ Drive |
| `autoSyncToDrive()` | Tự động sync khi thay đổi |

---

## 🎨 FORMULA CARDS (Suggestions)

### Vị trí: Dòng 8540 - 8750

Các công thức tìm kiếm theo chủ đề:
- Infrastructure, Technology, Famous People
- Historical Events, Nature, Business
- Sports, Entertainment, Health, Food
- Country Specific

---

## ⚙️ CÁC TÍNH NĂNG KHÁC

| Feature | Dòng bắt đầu | Mô tả |
|---------|--------------|-------|
| AI Analysis (Gemini) | 8817 | Phân tích với Gemini API |
| Settings | 8898 | Cài đặt người dùng |
| Country Dropdown | 8930 | Chọn quốc gia |
| Image Upload (Reverse) | 9787 | Upload ảnh tìm kiếm ngược |
| Draggable Tabs | 10003 | Kéo thả thứ tự tabs |
| Platform Drag-Drop | 10590 | Kéo thả platforms |
| Custom Sites | 10737 | Thêm site tùy chỉnh |
| Wikipedia Preview | 12663 | Xem trước Wikipedia |
| My Tool Tab | 12925 | Công cụ cá nhân |
| Prompt Manager | 13042 | Quản lý prompts |
| Knowledge Base | 13355 | Cơ sở kiến thức |

---

## ⚠️ VẤN ĐỀ ĐÃ BIẾT

- [ ] File `index.html` quá lớn (16,200 dòng) - cần tách modules
- [x] Cinema Mode reload video - ĐÃ SỬA (dùng CSS thay vì DOM)
- [x] API quota cao - ĐÃ SỬA (caching 50-80%)

---

## 📝 LỊCH SỬ THAY ĐỔI

| Ngày | Commit | Mô tả |
|------|--------|-------|
| 10/01/2026 | `e3d9e48` | Fix Cinema Mode CSS global, player display |
| 10/01/2026 | `0f476d6` | Restore Cinema Mode button và functionality |
| 10/01/2026 | `512222f` | Refine quota tracking for playlist imports |
| 10/01/2026 | `4c32270` | Add internal quota tracker + GCloud link |
| 09/01/2026 | `419a7da` | Add API quota countdown timer (Midnight PT) |
| 09/01/2026 | `e7671c9` | Remove Delete All buttons, add keyword delete |
| 09/01/2026 | `2401907` | Xóa multi-key rotation, giữ caching |
| 09/01/2026 | `da1e101` | Thêm caching + partial response |
| 09/01/2026 | `a7d1973` | Tối ưu quota, giảm maxResults |
| 08/01/2026 | - | Sửa Cinema Mode reload |
| 07/01/2026 | - | Thêm Personalized Recommendations |

---

## 📌 HƯỚNG DẪN CHO ANTIGRAVITY

### Khi bắt đầu session mới:
1. Đọc file `PROJECT.md` này trước
2. Kiểm tra header timestamp trong code (`APP_LAST_UPDATE`)
3. Hỏi user về tính năng cần sửa/thêm

### Khi sửa code:
1. Tìm đúng dòng code bằng bảng trên
2. Không sửa code không liên quan
3. Cập nhật `APP_LAST_UPDATE` sau mỗi thay đổi

### Sau khi sửa xong:
1. Cập nhật mục "LỊCH SỬ THAY ĐỔI" trong file này
2. Commit với message rõ ràng
3. Push lên GitHub

---

## 🔑 API KEYS LOCATION

| API | Vị trí lưu | Ghi chú |
|-----|------------|---------|
| YouTube Data API | `localStorage.ytApiKey` | Có caching 1h |
| Gemini API | Inline trong code | Dùng cho AI Analysis |
| Google OAuth | `localStorage.googleToken` | Drive Sync |

---

*File này được cập nhật thủ công hoặc bởi Antigravity sau mỗi thay đổi lớn.*
