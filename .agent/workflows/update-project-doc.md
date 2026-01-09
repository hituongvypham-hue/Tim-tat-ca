---
description: How to update PROJECT.md after making changes
---

# Workflow: Cập Nhật PROJECT.md

Sau mỗi thay đổi lớn, thực hiện các bước sau:

## 1. Cập nhật timestamp trong PROJECT.md
Sửa dòng đầu tiên:
```markdown
> **Cập nhật lần cuối:** [NGÀY/THÁNG/NĂM GIỜ:PHÚT]
```

## 2. Cập nhật bảng "LỊCH SỬ THAY ĐỔI"
Thêm dòng mới vào bảng:
```markdown
| [Ngày] | `[commit hash]` | [Mô tả ngắn gọn] |
```

## 3. Nếu thêm/xóa function
Cập nhật bảng "Core Functions" trong mục tương ứng với:
- Tên function
- Dòng code (ước lượng)
- Chức năng

## 4. Nếu thêm/xóa tab mới
Cập nhật bảng "Các Tab Chính" với:
- Tab ID
- Tên hiển thị
- Dòng HTML bắt đầu
- Mô tả ngắn

## 5. Nếu sửa lỗi hoặc vấn đề đã biết
Cập nhật mục "VẤN ĐỀ ĐÃ BIẾT":
- Đánh dấu [x] nếu đã sửa xong
- Thêm mô tả ngắn "ĐÃ SỬA"

// turbo
## 6. Commit PROJECT.md cùng với code changes
```bash
git add PROJECT.md
git commit -m "Update PROJECT.md"
```
