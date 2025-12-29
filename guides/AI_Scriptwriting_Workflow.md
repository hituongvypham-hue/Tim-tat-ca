# 🔄 AI YouTube Scriptwriting Workflow
**Cập nhật: 27/12/2025**

> Workflow này hướng dẫn cách sử dụng AI viết kịch bản YouTube hiệu quả nhất, kết hợp với các file guide đã có:
> - `AI_YouTube_Shorts_Scriptwriting_Guide.md` (video ngắn)
> - `AI_YouTube_LongForm_Scriptwriting_Guide.md` (video dài)

---

## 📋 TỔNG QUAN WORKFLOW

```
┌─────────────────────────────────────────────────────────────┐
│                    AI SCRIPTWRITING WORKFLOW                 │
├─────────────────────────────────────────────────────────────┤
│  PHASE 1: FOUNDATION          PHASE 2: CREATION             │
│  ┌─────────────────┐          ┌─────────────────┐           │
│  │ 1. Set AI Role  │    →     │ 4. Outline      │           │
│  │ 2. Define Video │    →     │ 5. Draft Script │           │
│  │ 3. Topic Ideas  │          │                 │           │
│  └─────────────────┘          └─────────────────┘           │
│         ↓                              ↓                    │
│  PHASE 3: REFINEMENT          PHASE 4: FINALIZE             │
│  ┌─────────────────┐          ┌─────────────────┐           │
│  │ 6. Human Review │    →     │ 8. SEO/Metadata │           │
│  │ 7. AI Polish    │    →     │ 9. Final Check  │           │
│  └─────────────────┘          └─────────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 PHASE 1: FOUNDATION (Nền tảng)

### Step 1: Set AI Role (Thiết lập vai trò AI)

**Mục đích:** Định hình AI như một chuyên gia scriptwriting

**PROMPT 1.1 - Thiết lập vai trò:**
```
Bạn là một chuyên gia viết kịch bản YouTube với kinh nghiệm nhiều năm tạo nội dung triệu views.

Chuyên môn của bạn bao gồm:
- Viết hook gây chú ý cao, giữ chân người xem
- Hiểu thuật toán YouTube và tâm lý người xem
- Cấu trúc nội dung tối ưu watch time
- Điều chỉnh tone và style cho từng niche khác nhau
- Kỹ thuật retention: open loops, pattern interrupts, re-hooks

Bạn sẽ làm việc theo từng bước. Sau mỗi bước, chờ tôi xác nhận trước khi tiếp tục.
Tất cả output sẽ bằng tiếng Việt.

Xác nhận bạn đã hiểu và sẵn sàng.
```

### Step 2: Define Video Details (Định nghĩa chi tiết video)

**Mục đích:** Cung cấp context đầy đủ cho AI

**PROMPT 1.2 - Thông tin video:**
```
Đây là thông tin về video tôi muốn tạo:

**Loại video:** [YouTube Short / YouTube Long-form]
**Độ dài mục tiêu:** [30-60 giây / 10-15 phút / 15-20 phút]
**Niche/Chủ đề kênh:** [VD: Kiến thức tài chính cho người mới bắt đầu]
**Đối tượng khán giả:** [VD: Nam/Nữ 25-35 tuổi, quan tâm đầu tư, ít kinh nghiệm]
**Tone giọng điệu:** [VD: Thân thiện, dễ hiểu, hơi hài hước, thực tế]
**Mục tiêu chính:** [VD: Giáo dục, Giải trí, Tutorial, Review]
**CTA mong muốn:** [VD: Subscribe, Comment, Mua sản phẩm]

Xác nhận bạn đã nhận thông tin và sẵn sàng cho bước tiếp theo.
```

### Step 3: Topic & Idea Generation (Tạo ý tưởng)

**Mục đích:** Brainstorm và chọn topic tốt nhất

**PROMPT 1.3 - Tạo ý tưởng:**
```
Dựa trên thông tin video ở trên, hãy tạo 5 ý tưởng video có tiềm năng cao.

Với mỗi ý tưởng, cung cấp:
1. Title hấp dẫn (tối ưu CTR)
2. Lý do tại sao topic này sẽ hoạt động tốt (dựa trên trends, nhu cầu khán giả)
3. Góc độ độc đáo/khác biệt
4. 3 hook options cho video này

Format output:
---
**Ý TƯỞNG 1:**
- Title: 
- Lý do hoạt động tốt:
- Góc độ khác biệt:
- Hook options:
  1.
  2.
  3.
---
```

**PROMPT 1.4 - Chọn và refine topic (sau khi chọn):**
```
Tôi chọn ý tưởng số [X]: "[Paste title]"

Bây giờ hãy:
1. Tạo 3 biến thể title khác (A/B testing options)
2. Đề xuất subtitle/hook line cho mỗi title
3. Liệt kê 5-7 keywords SEO liên quan
4. Xác định "promise" chính của video (người xem sẽ nhận được gì)
```

---

## 🎬 PHASE 2: CREATION (Tạo nội dung)

### Step 4: Outline Generation (Tạo outline)

**Mục đích:** Tạo khung sườn chi tiết trước khi viết full script

**PROMPT 2.1 - Yêu cầu outline (cho YouTube Short):**
```
Tạo outline chi tiết cho YouTube Short với topic: "[Topic đã chọn]"

Sử dụng cấu trúc sau (tham khảo từ guide):
- HOOK (0-3 giây): 3 options hook khác nhau
- BRIDGE (3-7 giây): Kết nối hook với nội dung
- CONTENT (7-50 giây): Nội dung chính với micro-hooks
- CTA + LOOP (50-60 giây): Kết thúc vòng lặp

Với mỗi phần, ghi chú:
- Nội dung chính cần nói
- Visual suggestions (B-roll, text overlay, effects)
- Retention technique sử dụng
```

**PROMPT 2.1 ALT - Yêu cầu outline (cho YouTube Long-form):**
```
Tạo outline chi tiết cho video YouTube dài với topic: "[Topic đã chọn]"

Sử dụng cấu trúc H-I-C-C-C:
- HOOK (0-30 giây): 3 options hook khác nhau
- INTRO (30s-1m30s): Giới thiệu + 3-point preview
- CONTENT: 3-5 sections chính
  - Với mỗi section: Re-hook → Content → Payout
- CTA + OUTRO: Tổng kết và kêu gọi hành động

Với mỗi section, bao gồm:
- Heading/title của section
- 3-5 bullet points nội dung chính
- Retention strategy (open loop, pattern interrupt, etc.)
- Visual notes (B-roll, graphics, demos)
- Estimated duration
```

### Step 5: Full Script Draft (Viết script đầy đủ)

**Mục đích:** Chuyển outline thành script hoàn chỉnh

**PROMPT 2.2 - Viết full script:**
```
Bây giờ hãy expand outline thành full script.

Yêu cầu:
1. Giữ đúng độ dài mục tiêu: [X phút/giây]
2. Tone giọng điệu: [như đã định nghĩa]
3. Viết conversational, như đang nói chuyện với 1 người
4. Câu ngắn, tối đa 15-20 từ/câu
5. Tốc độ đọc: ~150 từ/phút
6. Tích hợp visual notes trong script

Output format (2 cột):
| TIMESTAMP | AUDIO (Lời nói) | VISUAL (Hình ảnh) |
|-----------|-----------------|-------------------|

Đánh dấu [HOOK], [RE-HOOK], [CTA], [OPEN LOOP] trong script.
```

---

## ✨ PHASE 3: REFINEMENT (Tinh chỉnh)

### Step 6: Human Review (Con người review)

**⚠️ BƯỚC NÀY BẮT BUỘC - KHÔNG THỂ BỎ QUA**

**Checklist review thủ công:**
```
□ Hook có đủ mạnh không? (Đọc to 3 giây đầu)
□ Script nghe tự nhiên khi đọc to không?
□ Có phù hợp với giọng nói/style của tôi không?
□ Facts/Data có chính xác không? (AI có thể hallucinate)
□ Có thêm được personal stories/experiences không?
□ Có câu nào quá dài hoặc khó nói không?
□ Tone có đúng với brand của kênh không?
□ CTA có tự nhiên không?
```

**Actions cần làm:**
1. ✏️ Thêm personal touch, câu chuyện cá nhân
2. ✏️ Thay đổi từ ngữ phù hợp với cách nói của bạn
3. ✏️ Verify tất cả facts và số liệu
4. ✏️ Đánh dấu những chỗ cần AI cải thiện

### Step 7: AI Polish (AI hoàn thiện)

**Mục đích:** Để AI cải thiện dựa trên feedback của bạn

**PROMPT 3.1 - Yêu cầu cải thiện:**
```
Đây là script sau khi tôi review. Hãy cải thiện các điểm sau:

[Paste script với notes của bạn]

Cần cải thiện:
1. [Liệt kê các điểm cần sửa cụ thể]
2. [VD: Hook chưa đủ mạnh - viết lại hook gây sốc hơn]
3. [VD: Section 2 quá dài - rút gọn 30%]
4. [VD: Thiếu micro-hooks giữa video]

Giữ nguyên những phần tôi đã edit.
Output script đã cải thiện với [CHANGED] đánh dấu những thay đổi.
```

**PROMPT 3.2 - Kiểm tra retention:**
```
Phân tích script này về mặt retention:

[Paste script]

Đánh giá:
1. Hook: Có đủ mạnh giữ 70%+ người xem không?
2. Drop-off points: Ở đâu người xem có thể rời đi?
3. Re-hooks: Có đủ micro-hooks mỗi 2-3 phút không?
4. Open loops: Có tạo được sự tò mò xuyên suốt không?
5. Pacing: Có đoạn nào quá chậm/nhanh không?

Đề xuất cụ thể cách fix từng vấn đề.
```

---

## 📊 PHASE 4: FINALIZE (Hoàn thiện)

### Step 8: SEO & Metadata

**Mục đích:** Tối ưu cho thuật toán YouTube

**PROMPT 4.1 - Tạo metadata:**
```
Dựa trên script hoàn chỉnh, tạo:

1. **3 Title options** (tối ưu CTR + SEO):
   - Option A: [curiosity-driven]
   - Option B: [benefit-driven]
   - Option C: [number/list-driven]

2. **Video Description** (200-300 từ):
   - Hook line
   - Summary nội dung
   - Timestamps/Chapters
   - Keywords tự nhiên
   - CTAs và links

3. **Tags/Keywords** (10-15 tags)

4. **Timestamps** cho YouTube chapters

5. **Comment đầu tiên** (pin comment để boost engagement)
```

### Step 9: Final Checklist

**Checklist hoàn thiện cuối cùng:**

```
SCRIPT:
□ Hook mạnh (0-3s cho Shorts, 0-30s cho Long-form)
□ Một thông điệp chính rõ ràng
□ Re-hooks mỗi 2-4 phút (long-form) hoặc 20-30s (shorts)
□ Open loop từ đầu, resolve ở cuối
□ CTA tự nhiên, đặt ở vị trí tối ưu
□ Loop ending (cho Shorts)
□ Đọc to nghe tự nhiên
□ Tốc độ phù hợp (~150 từ/phút)
□ Facts đã verify

METADATA:
□ Title optimized
□ Description có keywords
□ Timestamps/Chapters
□ Tags đầy đủ

PRODUCTION NOTES:
□ Visual notes rõ ràng
□ B-roll suggestions
□ Sound effect notes
□ Transition notes
```

---

## 🔁 ADVANCED: ITERATIVE PROMPT CHAIN

Nếu output chưa đạt yêu cầu, sử dụng prompt chain sau:

### Chain 1: Làm mạnh Hook
```
Hook hiện tại: "[paste hook]"

Viết lại hook này theo 5 cách khác nhau:
1. Shocking statement
2. Intriguing question
3. Counter-intuitive claim
4. Story opening
5. FOMO-driven

Với mỗi version, giải thích tại sao nó hiệu quả.
```

### Chain 2: Cải thiện Retention
```
Script hiện tại có retention issues ở [vị trí cụ thể].

Đề xuất 3 cách để:
1. Thêm pattern interrupt tại điểm này
2. Tạo open loop dẫn người xem tiếp tục
3. Viết lại đoạn này ngắn gọn và engaging hơn
```

### Chain 3: Personalization
```
Đây là 3 script/video trước đó của tôi đã hoạt động tốt:
[Paste samples]

Phân tích style writing của tôi:
- Cách dùng từ đặc trưng
- Cấu trúc câu thường dùng
- Humor/personality elements

Sau đó, rewrite script mới này theo style của tôi.
```

---

## 🛠️ CÔNG CỤ KHUYẾN NGHỊ

### AI Platforms:
| Tool | Tốt cho | Ghi chú |
|------|---------|---------|
| **ChatGPT-4** | Brainstorming, Outlining | Ecosystem plugins phong phú |
| **Claude** | Long-form scripts, Analysis | Context window lớn |
| **Gemini** | Research, Fact-checking | Tích hợp Google |

### YouTube-specific Tools:
| Tool | Chức năng |
|------|-----------|
| **VidIQ** | Keyword research, trends |
| **TubeBuddy** | SEO optimization |
| **Opus.pro** | Clip từ video dài |

### Workflow Integration:
| Tool | Chức năng |
|------|-----------|
| **Notion AI** | Outline expansion |
| **Descript** | Script-to-video editing |
| **Canva** | Thumbnails |

---

## 📝 QUICK START TEMPLATE

Copy và paste template này để bắt đầu nhanh:

```
=== AI SCRIPTWRITING SESSION ===

**STEP 1: Load Context**
[Paste nội dung từ guide file phù hợp - Shorts hoặc Long-form]

**STEP 2: Set Role**
Bạn là chuyên gia YouTube scriptwriter. Đọc guide trên và áp dụng khi viết.

**STEP 3: Video Info**
- Loại: [Short/Long]
- Topic: [...]
- Audience: [...]
- Tone: [...]
- Length: [...]

**STEP 4: Request**
Tạo outline → Full script → Metadata

**STEP 5: Review & Iterate**
[Thêm feedback sau mỗi output]
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### AI Limitations (Hạn chế của AI):
- ❌ Không thể hoàn toàn thay thế personality của bạn
- ❌ Có thể tạo ra facts sai (hallucination) - LUÔN verify
- ❌ Không biết trends real-time mới nhất
- ❌ Output có thể generic nếu prompt không cụ thể

### Best Practices:
- ✅ Luôn review và edit output
- ✅ Thêm personal stories/experiences
- ✅ Test nhiều prompt variations
- ✅ Iterate nhiều lần để có kết quả tốt nhất
- ✅ Sử dụng AI như assistant, không phải replacement

### Ethical Considerations:
- 📌 Verify tất cả facts trước khi publish
- 📌 Maintain authentic voice của bạn
- 📌 Consider disclosure khi cần thiết
- 📌 Avoid AI-generated misinformation

---

## 🔗 TÍCH HỢP VỚI GUIDE FILES

### Khi viết YouTube Short:
1. Load file: `AI_YouTube_Shorts_Scriptwriting_Guide.md`
2. Paste nội dung vào conversation với AI
3. Sử dụng "PROMPT TEMPLATE CHO AI" từ guide
4. Follow workflow từ Phase 1-4

### Khi viết YouTube Long-form:
1. Load file: `AI_YouTube_LongForm_Scriptwriting_Guide.md`  
2. Paste nội dung vào conversation với AI
3. Sử dụng "PROMPT TEMPLATE CHO AI" từ guide
4. Follow workflow từ Phase 1-4

---

*Workflow này được tổng hợp từ nghiên cứu về AI scriptwriting best practices, cập nhật đến 27/12/2025.*
