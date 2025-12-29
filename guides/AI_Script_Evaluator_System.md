# 🤖 AI Script Evaluator System
**Cập nhật: 27/12/2025**

> Hệ thống này cho phép AI đánh giá kịch bản YouTube theo các tiêu chuẩn từ guide đã tạo, cung cấp điểm số và feedback chi tiết.

---

## 📋 TỔNG QUAN HỆ THỐNG

### Cách hoạt động:

```
┌─────────────────────────────────────────────────────────────┐
│                 AI SCRIPT EVALUATOR SYSTEM                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  INPUT                    PROCESS                OUTPUT     │
│  ┌──────────┐           ┌──────────┐          ┌──────────┐ │
│  │ Script   │ ────────► │ Rubric   │ ───────► │ Score    │ │
│  │ to check │           │ Matching │          │ + Report │ │
│  └──────────┘           └──────────┘          └──────────┘ │
│                              ▲                              │
│                              │                              │
│                         ┌────┴────┐                        │
│                         │ Guide   │                        │
│                         │ Criteria│                        │
│                         └─────────┘                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2 Chế độ đánh giá:

| Mode | Mô tả | Use case |
|------|-------|----------|
| **Quick Evaluation** | Đánh giá nhanh, scoring overall | Check nhanh trước khi quay |
| **Deep Analysis** | Phân tích chi tiết từng phần | Cải thiện script kỹ lưỡng |

---

## 🎯 RUBRIC ĐÁNH GIÁ YOUTUBE SHORTS

### Bảng tiêu chí chấm điểm (100 điểm):

| Tiêu chí | Trọng số | Mô tả chi tiết |
|----------|----------|----------------|
| **HOOK (0-3s)** | 25 điểm | Câu mở đầu có đủ mạnh để giữ chân người xem? |
| **STRUCTURE** | 20 điểm | Cấu trúc H-B-C-L đầy đủ và rõ ràng? |
| **RETENTION** | 20 điểm | Có micro-hooks, open loops, loop ending? |
| **LANGUAGE** | 15 điểm | Câu ngắn, tự nhiên, conversational? |
| **CTA** | 10 điểm | Call-to-action rõ ràng và phù hợp? |
| **TIMING** | 10 điểm | Thời lượng phù hợp, pacing tốt? |

### Chi tiết thang điểm mỗi tiêu chí:

**HOOK (25 điểm):**
```
25: Hook xuất sắc - gây shock/tò mò mạnh, không thể không xem tiếp
20: Hook tốt - thu hút, có kỹ thuật rõ ràng
15: Hook khá - OK nhưng có thể mạnh hơn
10: Hook yếu - generic, không đặc biệt
5:  Hook rất yếu - có thể khiến người xem lướt qua
0:  Không có hook hoặc bắt đầu bằng "Xin chào các bạn..."
```

**STRUCTURE (20 điểm):**
```
20: Cấu trúc hoàn hảo - có đủ H-B-C-L, chuyển tiếp mượt
16: Cấu trúc tốt - có các phần chính, thiếu chi tiết nhỏ
12: Cấu trúc khá - nhận ra cấu trúc nhưng chưa rõ ràng
8:  Cấu trúc yếu - thiếu 1-2 phần quan trọng
4:  Cấu trúc rất yếu - lan man, không rõ ràng
0:  Không có cấu trúc
```

**RETENTION (20 điểm):**
```
20: Xuất sắc - có open loop, micro-hooks, loop ending đầy đủ
16: Tốt - có 2/3 kỹ thuật retention
12: Khá - có 1 kỹ thuật retention rõ ràng
8:  Yếu - có ý tưởng nhưng chưa triển khai tốt
4:  Rất yếu - gần như không có kỹ thuật retention
0:  Không có gì giữ chân người xem
```

**LANGUAGE (15 điểm):**
```
15: Xuất sắc - tự nhiên như đang nói chuyện, câu ngắn, punch
12: Tốt - tự nhiên, dễ đọc, ít lỗi
9:  Khá - đọc được nhưng có chỗ chưa tự nhiên
6:  Yếu - văn vẻ, câu dài, khó đọc
3:  Rất yếu - cứng nhắc, không phù hợp voice-over
0:  Không thể sử dụng
```

**CTA (10 điểm):**
```
10: Xuất sắc - CTA tự nhiên, phù hợp, có loop ending
8:  Tốt - CTA rõ ràng và phù hợp
6:  Khá - có CTA nhưng generic
4:  Yếu - CTA gượng gạo hoặc đột ngột
2:  Rất yếu - CTA không phù hợp
0:  Không có CTA
```

**TIMING (10 điểm):**
```
10: Hoàn hảo - thời lượng phù hợp, pacing tốt
8:  Tốt - thời lượng OK, pacing hơi không đều
6:  Khá - hơi dài/ngắn, cần điều chỉnh
4:  Yếu - thời lượng có vấn đề rõ ràng
2:  Rất yếu - quá dài hoặc quá ngắn
0:  Không phù hợp với format
```

---

## 🎬 RUBRIC ĐÁNH GIÁ YOUTUBE LONG-FORM

### Bảng tiêu chí chấm điểm (100 điểm):

| Tiêu chí | Trọng số | Mô tả chi tiết |
|----------|----------|----------------|
| **HOOK (0-30s)** | 20 điểm | Hook có đủ mạnh giữ 70%+ người xem? |
| **STRUCTURE** | 20 điểm | H-I-C-C-C đầy đủ? Chia sections rõ ràng? |
| **RE-HOOKS** | 15 điểm | Có re-hooks mỗi 2-4 phút? |
| **RETENTION** | 15 điểm | Open loops, pattern interrupts, payout structure? |
| **LANGUAGE** | 10 điểm | Conversational, câu ngắn, tự nhiên? |
| **CTA** | 10 điểm | CTA placement, độ tự nhiên? |
| **VISUAL NOTES** | 10 điểm | Có visual notes, B-roll suggestions? |

---

## 📝 PROMPT: AI SCRIPT EVALUATOR

### PROMPT 1: Quick Evaluation (Đánh giá nhanh)

Copy prompt này và paste cùng script cần đánh giá:

```
Bạn là một AI Script Evaluator chuyên đánh giá kịch bản YouTube.

**RUBRIC ĐÁNH GIÁ (Shorts):**
- HOOK (25đ): Câu mở đầu 0-3s có đủ mạnh không?
- STRUCTURE (20đ): Có đủ H-B-C-L không?
- RETENTION (20đ): Có open loop, micro-hooks, loop ending?
- LANGUAGE (15đ): Câu ngắn, tự nhiên, conversational?
- CTA (10đ): Call-to-action rõ ràng?
- TIMING (10đ): Thời lượng và pacing?

**SCRIPT CẦN ĐÁNH GIÁ:**
"""
[PASTE SCRIPT Ở ĐÂY]
"""

**YÊU CẦU OUTPUT:**

### 📊 ĐIỂM TỔNG: [X]/100

| Tiêu chí | Điểm | Đánh giá nhanh |
|----------|------|----------------|
| Hook | /25 | [1 dòng nhận xét] |
| Structure | /20 | [1 dòng nhận xét] |
| Retention | /20 | [1 dòng nhận xét] |
| Language | /15 | [1 dòng nhận xét] |
| CTA | /10 | [1 dòng nhận xét] |
| Timing | /10 | [1 dòng nhận xét] |

### ✅ ĐIỂM MẠNH (2-3 điểm):
### ⚠️ CẦN CẢI THIỆN (2-3 điểm):
### 🎯 VERDICT: [ĐẠT / CẦN SỬA / KHÔNG ĐẠT]
```

---

### PROMPT 2: Deep Analysis (Phân tích sâu)

```
Bạn là một AI Script Evaluator chuyên sâu đánh giá kịch bản YouTube.

**CONTEXT:** Tôi đang viết kịch bản cho [YouTube Short / YouTube Long-form].
**MỤC TIÊU:** Đánh giá chi tiết và đề xuất cải thiện cụ thể.

**GUIDE REFERENCE (Tiêu chuẩn áp dụng):**
[COPY PASTE NỘI DUNG TỪ GUIDE PHẦN LIÊN QUAN - HOOK, STRUCTURE, ETC.]

**SCRIPT CẦN ĐÁNH GIÁ:**
"""
[PASTE SCRIPT Ở ĐÂY]
"""

**YÊU CẦU PHÂN TÍCH CHI TIẾT:**

### 1. HOOK ANALYSIS (Chi tiết)
- Loại hook đang dùng: [Identify]
- Điểm mạnh cụ thể:
- Điểm yếu cụ thể:
- Đề xuất viết lại (3 versions):

### 2. STRUCTURE ANALYSIS
- Cấu trúc hiện tại: [Map ra]
- Thiếu phần nào:
- Đề xuất restructure:

### 3. RETENTION ANALYSIS
- Open loops: [Có/Không - ở đâu]
- Micro-hooks: [Có/Không - ở đâu]
- Pattern interrupts: [Có/Không]
- Loop ending: [Có/Không]
- Đề xuất thêm retention elements:

### 4. LANGUAGE ANALYSIS
- Số từ/câu trung bình: [X]
- Câu dài nhất: [Quote + gợi ý rút ngắn]
- Từ ngữ cần thay đổi: [List]
- Tone hiện tại vs tone lý tưởng:

### 5. CTA ANALYSIS
- CTA hiện tại: [Quote]
- Vị trí: [Ở đâu trong script]
- Đề xuất CTA thay thế (2 options):

### 6. OVERALL SCORE

| Tiêu chí | Điểm | Chi tiết |
|----------|------|----------|
| Hook | /25 | |
| Structure | /20 | |
| Retention | /20 | |
| Language | /15 | |
| CTA | /10 | |
| Timing | /10 | |
| **TỔNG** | **/100** | |

### 7. SCRIPT SAU KHI CẢI THIỆN (Viết lại hoàn chỉnh)
[Viết lại script áp dụng tất cả đề xuất]
```

---

### PROMPT 3: Before/After Comparison (So sánh trước/sau)

```
Bạn là một AI Script Evaluator. So sánh 2 phiên bản script và đánh giá sự cải thiện.

**SCRIPT TRƯỚC (Original):**
"""
[PASTE SCRIPT GỐC]
"""

**SCRIPT SAU (Revised):**
"""
[PASTE SCRIPT ĐÃ SỬA]
"""

**YÊU CẦU SO SÁNH:**

### 📊 BẢNG SO SÁNH ĐIỂM:

| Tiêu chí | TRƯỚC | SAU | THAY ĐỔI |
|----------|-------|-----|----------|
| Hook | /25 | /25 | +/- X |
| Structure | /20 | /20 | +/- X |
| Retention | /20 | /20 | +/- X |
| Language | /15 | /15 | +/- X |
| CTA | /10 | /10 | +/- X |
| Timing | /10 | /10 | +/- X |
| **TỔNG** | **/100** | **/100** | **+/- X** |

### ✅ NHỮNG GÌ ĐÃ CẢI THIỆN TỐT:
[List các điểm đã improve]

### ⚠️ NHỮNG GÌ CHƯA FIX HOẶC CÒN YẾU:
[List các điểm chưa được giải quyết]

### 🆕 VẤN ĐỀ MỚI PHÁT SINH (nếu có):
[List các vấn đề mới trong bản revised]

### 🎯 VERDICT:
- Script trước: [X]/100 - [Đạt/Không đạt]
- Script sau: [X]/100 - [Đạt/Không đạt]
- Improvement: [+X điểm]
- Recommendation: [Có thể dùng / Cần sửa thêm]
```

---

## 🎓 PROMPT 4: Teaching Mode (Chế độ dạy học)

Sử dụng khi muốn AI giải thích WHY và HOW:

```
Bạn là một mentor dạy viết kịch bản YouTube.

**SCRIPT CỦA HỌC VIÊN:**
"""
[PASTE SCRIPT]
"""

**YÊU CẦU:**
1. Đánh giá như một giáo viên - nhẹ nhàng nhưng constructive
2. Giải thích TẠI SAO mỗi điểm tốt/chưa tốt (reference đến nguyên tắc)
3. Cho ví dụ cụ thể cách fix
4. Khuyến khích điểm mạnh

**OUTPUT FORMAT:**

### 👋 TỔNG QUAN
[2-3 câu overall impression, tích cực]

### 📚 PHÂN TÍCH CHI TIẾT

**1. HOOK - Điểm: [X]/25**
- Bạn đã làm được: [...]
- Có thể cải thiện: [...]
- TẠI SAO quan trọng: [Giải thích nguyên tắc]
- Ví dụ cách viết lại: [...]

**2. STRUCTURE - Điểm: [X]/20**
[Tương tự format trên]

[...Tiếp tục với các tiêu chí khác...]

### 🎯 BÀI TẬP THỰC HÀNH
1. Viết lại hook theo 3 style khác nhau
2. Thêm 2 micro-hooks vào script
3. Rewrite câu [X] ngắn gọn hơn

### 💪 LỜI KHUYÊN
[1-2 câu động viên + next steps]
```

---

## 🔧 TẠO CUSTOM EVALUATOR RIÊNG

### Nếu bạn muốn tạo AI Evaluator với criteria riêng:

**Template Rubric Builder:**
```
Bạn sẽ tạo một rubric đánh giá script tùy chỉnh.

**THÔNG TIN:**
- Loại video: [YouTube Short / Long / Douyin adapt]
- Niche: [Educational / Entertainment / Tutorial / ...]
- Tiêu chí quan trọng nhất với tôi: [Hook / Storytelling / CTA / ...]
- Yếu tố đặc thù kênh: [VD: Cần có số liệu, cần có humor, ...]

**YÊU CẦU:**
Tạo một rubric đánh giá 100 điểm với:
1. 5-7 tiêu chí phù hợp với niche của tôi
2. Trọng số cho mỗi tiêu chí
3. Thang điểm chi tiết cho mỗi mức
4. Prompt đánh giá hoàn chỉnh

**OUTPUT:**
[Rubric hoàn chỉnh + Prompt để sử dụng]
```

---

## ✅ THANG ĐIỂM VERDICT

| Điểm | Verdict | Ý nghĩa |
|------|---------|---------|
| **90-100** | 🏆 XUẤT SẮC | Sẵn sàng quay, không cần chỉnh |
| **80-89** | ✅ ĐẠT | Có thể quay, fix minor issues sau |
| **70-79** | ⚠️ KHÁ | Cần chỉnh 1-2 điểm trước khi quay |
| **60-69** | 🔄 CẦN SỬA | Cần rewrite một số phần |
| **<60** | ❌ KHÔNG ĐẠT | Cần viết lại đáng kể |

---

## 📱 QUICK COPY PROMPTS

### Cho đánh giá nhanh Shorts:
```
Đánh giá script YouTube Short này (100 điểm): Hook(25), Structure(20), Retention(20), Language(15), CTA(10), Timing(10). Output: bảng điểm + điểm mạnh/yếu + verdict.

Script: """[PASTE]"""
```

### Cho đánh giá nhanh Long-form:
```
Đánh giá script YouTube dài này (100 điểm): Hook(20), Structure(20), Re-hooks(15), Retention(15), Language(10), CTA(10), Visual Notes(10). Output: bảng điểm + điểm mạnh/yếu + verdict.

Script: """[PASTE]"""
```

### Cho đánh giá Douyin adaptation:
```
Đánh giá script YouTube Short (adapted từ Douyin) này. Kiểm tra: Hook đã rewrite cho VN chưa? Đã localize văn hóa chưa? Ngôn ngữ tự nhiên tiếng Việt chưa? Output: điểm + vấn đề localization + đề xuất.

Script: """[PASTE]"""
```

---

## 🔗 TÍCH HỢP VỚI WORKFLOW

### Cách sử dụng trong quy trình:

```
WORKFLOW THÔNG THƯỜNG:
                    
Phase 2: Create Script
         ↓
    ┌─────────────┐
    │ AI Evaluate │ ← Step mới thêm vào
    │ (Quick mode)│
    └─────────────┘
         ↓
    Điểm ≥ 80?
    /        \
   YES        NO
   ↓          ↓
 Phase 3    Revise
 Refine     Script
             ↓
         Re-evaluate
```

### Best Practice:
1. **Sau khi viết xong draft** → Quick Evaluation
2. **Điểm < 80** → Deep Analysis để biết cần fix gì
3. **Sau khi fix** → Before/After Comparison
4. **Điểm ≥ 80** → Proceed to recording/editing

---

## ⚠️ LƯU Ý KHI SỬ DỤNG AI EVALUATOR

### Limitations:
- AI đánh giá dựa trên text, không thể đánh giá visual/audio thực tế
- Điểm số là gợi ý, không phải absolute truth
- Nên kết hợp với judgment của bạn

### Best Practices:
- ✅ Dùng làm checklist đảm bảo không bỏ sót
- ✅ Dùng để identify vấn đề cụ thể cần fix
- ✅ Dùng Before/After để track improvement
- ❌ Không rely 100% vào điểm số
- ❌ Không bỏ qua gut feeling của bạn

---

*System này được thiết kế để tích hợp với các guide files đã tạo, cập nhật đến 27/12/2025.*
