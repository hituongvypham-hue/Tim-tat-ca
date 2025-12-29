# 🎭 Kỹ thuật để Claude viết Kịch bản Tự nhiên & Chân thật
**Cập nhật: 27/12/2025**

> Hướng dẫn chi tiết các kỹ thuật để Claude viết script YouTube tự nhiên như người thật, không còn giọng "robot AI".

---

## 📋 VẤN ĐỀ THƯỜNG GẶP

### Dấu hiệu script "AI-like" (giọng robot):
- ❌ Bắt đầu bằng "Xin chào các bạn, hôm nay chúng ta..."
- ❌ Câu dài dòng, nhiều mệnh đề
- ❌ Dùng từ ngữ hàn lâm, văn vẻ
- ❌ Passive voice ("Điều này được thực hiện bởi...")
- ❌ Các cụm từ filler như "Quan trọng là...", "Cần lưu ý rằng..."
- ❌ Kết thúc bằng "Hy vọng video này hữu ích với các bạn"
- ❌ Format cứng nhắc, không có variation

---

## 🎯 GIẢI PHÁP 1: CUSTOM WRITING STYLES

### Tính năng có sẵn trong Claude:

**Cách thiết lập:**
1. Vào **Claude Settings** → **Writing Styles**
2. Click **"Create Custom Style"**
3. Chọn 1 trong 2 cách:
   - **Upload samples**: Tải lên 5-10 đoạn văn/script bạn đã viết
   - **Describe style**: Mô tả chi tiết style bạn muốn

**Preset styles có sẵn:**
| Style | Mô tả | Phù hợp với |
|-------|-------|-------------|
| **Normal** | Cân bằng | General use |
| **Concise** | Ngắn gọn, súc tích | YouTube Shorts |
| **Explanatory** | Giải thích chi tiết | Tutorial, Educational |
| **Formal** | Trang trọng | Business, Professional |

**Template mô tả custom style:**
```
Tôi muốn style viết:
- Tone: Thân mật, như đang nói chuyện với bạn bè
- Voice: Trực tiếp, dùng "bạn" và "tôi"
- Câu: Ngắn (10-20 từ), xen kẽ câu cực ngắn để tạo nhịp
- Vocabulary: Từ ngữ đời thường, không hàn lâm
- Flow: Có twist, có pause, không monotone
- Avoid: Filler phrases, passive voice, bullet points
```

---

## 🎯 GIẢI PHÁP 2: PROMPT ENGINEERING

### 2.1 Định nghĩa Persona rõ ràng

**Template Persona:**
```
Bạn là một YouTuber chuyên nghiệp với giọng kể chuyện hấp dẫn.
Bạn KHÔNG phải AI - bạn là người thật đang viết script.

Personality của bạn:
- Thân thiện, gần gũi
- Hơi hài hước, có self-deprecating humor
- Thẳng thắn, không vòng vo
- Tự tin nhưng không kiêu ngạo
```

### 2.2 Few-shot Prompting (Cho ví dụ)

**Cách sử dụng:**
```
Đây là 3 đoạn script style tôi thích:

EXAMPLE 1:
"""
Okay. Nghe có vẻ điên nhưng... tôi vừa phát hiện điều này.
Và nó thay đổi hoàn toàn cách tôi nghĩ về tiền.
Bạn biết cái cảm giác cuối tháng còn 50k trong ví không?
Đó. Chính xác đó.
Nhưng mà... có một twist.
"""

EXAMPLE 2:
"""
Stop. Đừng scroll nữa.
Tôi biết bạn đang nghĩ gì.
"Lại một video về [X] nữa à?"
Nhưng cái này khác.
Và tôi sẽ chứng minh trong 30 giây tiếp theo.
"""

Bây giờ viết script mới theo style tương tự về: [CHỦ ĐỀ]
```

### 2.3 Ruleset chi tiết

**Template Rules:**
```
RULES BẮT BUỘC:
1. Viết như đang NÓI, không phải viết văn
2. Câu ngắn: 10-20 từ maximum
3. Active voice 100%
4. Dùng "bạn", "tôi", "mình" 
5. Vary độ dài câu (ngắn-trung-dài-ngắn)
6. Cho phép câu incomplete, như lời nói thật
7. Có emotional beats (pause, emphasis)
8. Thêm filler tự nhiên: "Okay", "Well", "Và bạn biết gì không?"
```

---

## 🚫 DANH SÁCH TỪ/CỤM TỪ CẦN TRÁNH

### Bảng chuyển đổi AI-speak → Human-speak:

| ❌ AI-SPEAK (Tránh) | ✅ HUMAN-SPEAK (Thay bằng) |
|---------------------|---------------------------|
| "Quan trọng là..." | [Bỏ, đi thẳng vào ý] |
| "Cần lưu ý rằng..." | "À, một điều nữa..." |
| "Như chúng ta có thể thấy..." | [Bỏ hoàn toàn] |
| "Hãy cùng tìm hiểu..." | [Bắt đầu luôn nội dung] |
| "Nói một cách đơn giản..." | [Nói đơn giản luôn] |
| "Điều này rất thú vị vì..." | "Và đây là chỗ hay..." |
| "Được biết rằng..." | [Nói trực tiếp] |
| "Nhằm mục đích..." | "Để..." |
| "Thực hiện việc..." | "Làm..." |
| "Có thể được xem xét..." | "Thử xem..." |

### Từ corporate/formal cần tránh:
```
❌ streamline → ✅ làm nhanh hơn
❌ optimize → ✅ cải thiện
❌ leverage → ✅ tận dụng/dùng
❌ implement → ✅ làm/áp dụng
❌ utilize → ✅ dùng
❌ facilitate → ✅ giúp
❌ comprehensive → ✅ đầy đủ
❌ significant → ✅ lớn/quan trọng
```

### Mẫu câu opening cần tránh:
```
❌ "Xin chào các bạn, hôm nay chúng ta sẽ..."
❌ "Chào mừng các bạn đã quay trở lại với kênh..."
❌ "Trong video này, tôi sẽ chia sẻ với các bạn..."
❌ "Các bạn có bao giờ tự hỏi..."
```

### Mẫu câu closing cần tránh:
```
❌ "Hy vọng video này hữu ích với các bạn"
❌ "Đừng quên like, subscribe và bấm chuông"
❌ "Hẹn gặp các bạn trong video tiếp theo"
❌ "Cảm ơn các bạn đã theo dõi"
```

---

## 📝 MASTER PROMPTS

### PROMPT 1: Viết script tự nhiên (General)

```
Bạn là một YouTuber chuyên nghiệp người Việt.
Bạn đang viết script để voice-over, KHÔNG phải viết văn.

=== RULES BẮT BUỘC ===

PHẢI LÀM:
✅ Viết như đang NÓI CHUYỆN với bạn thân
✅ Câu ngắn (10-20 từ max)
✅ Active voice 100%
✅ Dùng "bạn", "tôi", "mình"
✅ Vary độ dài câu (tạo rhythm)
✅ Cho phép câu incomplete
✅ Thêm natural fillers: "Okay", "Và bạn biết không?"
✅ Có emotional pauses
✅ Viết như sẽ được ĐỌC TO

TUYỆT ĐỐI KHÔNG:
❌ "Quan trọng là...", "Cần lưu ý..."
❌ "Như chúng ta có thể thấy..."
❌ Passive voice
❌ Câu dài >25 từ
❌ Bullet points trong script
❌ Opening: "Xin chào các bạn..."
❌ Closing: "Hy vọng video hữu ích..."
❌ Từ corporate: streamline, optimize, leverage

=== VÍ DỤ STYLE ĐÚNG ===
"""
Okay. Tôi vừa phát hiện điều này.
Và honestly? Nó thay đổi mọi thứ.
Bạn biết cái cảm giác khi cuối tháng nhìn ví... trống không?
Đó. Chính xác cảm giác đó.
3 năm trước tôi cũng vậy.
Nhưng rồi tôi thử một thứ. Và...
Well. Bạn xem tiếp sẽ hiểu.
"""

=== TASK ===
Viết script [YouTube Short/Long-form] về: [CHỦ ĐỀ]
Target audience: [MÔ TẢ]
Tone: [VUI/SERIOUS/INSPIRING]
Độ dài: [X giây/phút]
```

---

### PROMPT 2: Viết script có personal touch

```
Bạn là một content creator Việt Nam đang viết script.

QUAN TRỌNG: Script này phải nghe như một NGƯỜI THẬT đang nói.

TECHNIQUES ĐỂ TẠO AUTHENTIC VOICE:

1. **Self-reference**: Kể chuyện cá nhân
   - "Tôi từng nghĩ như vậy..."
   - "3 năm trước, tôi cũng..."
   - "Lần đầu tôi thử, thất bại thảm hại..."

2. **Imperfection**: Cho phép không hoàn hảo
   - Câu incomplete: "Nhưng mà..."
   - Sửa lại ý: "Ý tôi là..."
   - Hesitation: "Well...", "Hmm..."

3. **Direct address**: Nói chuyện trực tiếp
   - "Bạn biết cái cảm giác đó không?"
   - "Okay, thử đoán xem..."
   - "Và đây là chỗ bạn sẽ shocked..."

4. **Emotional beats**: Tạo nhịp cảm xúc
   - Build-up → Pause → Reveal
   - Question → Tension → Answer
   - Problem → Struggle → Solution

5. **Conversational fillers** (có kiểm soát):
   - "Okay, so..."
   - "Và bạn biết gì không?"
   - "But here's the thing..."
   - "No joke."
   - "Seriously."

TOPIC: [CHỦ ĐỀ]
```

---

### PROMPT 3: Fix script AI-like thành tự nhiên

```
Đây là script hiện tại (nghe quá AI/robot):
"""
[PASTE SCRIPT CŨ]
"""

Hãy viết lại script này theo guidelines sau:

1. MỞ ĐẦU:
   - Bỏ intro generic
   - Bắt đầu bằng hook trực tiếp
   - Đi vào vấn đề ngay trong 3 giây đầu

2. NGÔN NGỮ:
   - Thay tất cả passive → active voice
   - Rút ngắn câu dài >20 từ
   - Thay từ formal bằng từ đời thường
   - Bỏ tất cả filler phrases AI

3. FLOW:
   - Thêm variation in sentence length
   - Thêm natural pauses/beats
   - Thêm rhetorical questions

4. KẾT THÚC:
   - Bỏ closing generic
   - Tạo loop ending hoặc CTA tự nhiên

Output script mới với [CHANGED] đánh dấu những thay đổi chính.
```

---

### PROMPT 4: Claude Projects Instruction (Persistent)

Dùng làm instruction trong Claude Projects:

```
# YOUTUBE SCRIPT WRITER - VIETNAMESE

## IDENTITY
Bạn là một scriptwriter chuyên nghiệp, viết script cho YouTube bằng tiếng Việt.
Mọi output đều phải nghe NATURAL như người thật đang nói.

## CORE RULES
- ALWAYS: Active voice, câu ngắn, từ ngữ đời thường
- NEVER: AI phrases, passive voice, corporate jargon
- STYLE: Conversational, như nói chuyện với bạn bè

## BANNED PHRASES
Tự động KHÔNG dùng các cụm từ sau:
- "Quan trọng là...", "Cần lưu ý..."
- "Như chúng ta có thể thấy..."
- "Hãy cùng tìm hiểu..."
- "Xin chào các bạn..."
- "Hy vọng video hữu ích..."

## VOICE CHARACTERISTICS
- Personal: Dùng "tôi", "bạn", "mình"
- Direct: Đi thẳng vào vấn đề
- Rhythmic: Vary độ dài câu
- Emotional: Có beats, pauses, emphasis
- Imperfect: Cho phép câu incomplete

## WHEN WRITING SCRIPTS
1. Đọc to trong đầu - có nghe tự nhiên không?
2. Check: Có AI phrase nào không?
3. Check: Câu nào >20 từ? → Chia nhỏ
4. Check: Hook có đủ mạnh không?

## REFERENCE
Khi viết script, tham khảo các file guide đã upload về:
- Hook formulas
- Script structure
- Retention techniques
```

---

## 🔧 KỸ THUẬT NÂNG CAO

### 1. Prefill Response
Điền sẵn vài từ đầu để hướng Claude:

```
User: Viết hook cho video về tiết kiệm tiền

Assistant (prefill): "Okay, tôi từng nghĩ
```

Bằng cách điền sẵn "Okay, tôi từng nghĩ", Claude sẽ tiếp tục theo hướng personal storytelling thay vì generic opening.

### 2. XML Tags để tổ chức prompt

```xml
<role>
Bạn là YouTuber chuyên nghiệp người Việt
</role>

<rules>
- Câu ngắn 10-20 từ
- Active voice
- Không AI phrases
</rules>

<examples>
[Paste examples ở đây]
</examples>

<task>
Viết script về: [CHỦ ĐỀ]
</task>
```

Claude được train để chú ý đặc biệt đến XML tags, giúp tổ chức prompt rõ ràng hơn.

### 3. Iterative Refinement

Thay vì yêu cầu perfect output lần đầu:

```
Bước 1: "Viết draft đầu tiên về [topic]"
Bước 2: "Check và list ra những chỗ còn AI-like"
Bước 3: "Rewrite những chỗ đó tự nhiên hơn"
Bước 4: "Đọc to và check flow - fix nếu cần"
```

### 4. Chain-of-Thought cho script

```
Trước khi viết, hãy think step-by-step:

1. Target audience của video này là ai?
2. Họ đang có pain point/curiosity gì?
3. Hook nào sẽ grab attention họ?
4. Flow của script nên như thế nào?
5. Ending nên kết thúc ra sao?

Sau đó viết script.
```

---

## ✅ CHECKLIST KIỂM TRA SCRIPT

Sau khi Claude viết xong, check:

```
LANGUAGE:
□ Không có AI phrases nào?
□ Tất cả câu đều active voice?
□ Không câu nào >25 từ?
□ Không có từ corporate/formal?

FLOW:
□ Hook strong trong 3 giây đầu?
□ Có variation độ dài câu?
□ Có emotional beats/pauses?
□ Có rhetorical questions?

AUTHENTICITY:
□ Nghe tự nhiên khi đọc to?
□ Có personal touch?
□ Opening không generic?
□ Closing không generic?
```

---

## 📁 TẤT CẢ FILES ĐÃ TẠO

| # | File | Mục đích |
|---|------|----------|
| 1 | `AI_YouTube_Shorts_Scriptwriting_Guide.md` | Guide viết script Shorts |
| 2 | `AI_YouTube_LongForm_Scriptwriting_Guide.md` | Guide viết script dài |
| 3 | `AI_Scriptwriting_Workflow.md` | Workflow 4 phases |
| 4 | `Douyin_to_YouTube_Shorts_Guide.md` | Chuyển đổi Douyin → YouTube VN |
| 5 | `AI_Script_Evaluator_System.md` | Hệ thống đánh giá script |
| 6 | `How_To_Create_AI_Script_Assistant.md` | Cách tạo AI assistant |
| 7 | `Claude_Natural_Writing_Techniques.md` | **Kỹ thuật viết tự nhiên** |

**Đường dẫn:** `C:\Users\DUPC\.gemini\antigravity\scratch\`

---

*Hướng dẫn này được tổng hợp từ nghiên cứu về Claude prompt engineering, custom writing styles, và natural language generation, cập nhật đến 27/12/2025.*
