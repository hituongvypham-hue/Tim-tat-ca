# 🛠️ Hướng dẫn Tạo AI Script Assistant
**Cập nhật: 27/12/2025**

> Hướng dẫn từng bước để tạo AI assistant có thể viết và đánh giá kịch bản YouTube dựa trên các guide đã tạo.

---

## 📋 TỔNG QUAN CÁC PHƯƠNG PHÁP

| Phương pháp | Độ khó | Chi phí | Phù hợp với |
|-------------|--------|---------|-------------|
| **1. Custom GPT (ChatGPT)** | ⭐ Dễ | $20/tháng | Người dùng cá nhân |
| **2. Claude Projects** | ⭐ Dễ | $20/tháng | Người dùng cá nhân |
| **3. Gemini Gems** | ⭐ Dễ | $20/tháng | Người dùng Google |
| **4. System Prompt Method** | ⭐ Dễ | Free/Paid | Mọi AI platform |
| **5. API + Custom App** | ⭐⭐⭐ Khó | Theo usage | Developers |

---

## 🎯 PHƯƠNG PHÁP 1: TẠO CUSTOM GPT (ChatGPT)

### Yêu cầu:
- Tài khoản ChatGPT Plus ($20/tháng)

### Các bước thực hiện:

#### Bước 1: Truy cập GPT Builder
1. Đăng nhập ChatGPT → Sidebar → **"Explore GPTs"**
2. Click **"Create a GPT"** (góc phải)

#### Bước 2: Cấu hình cơ bản
```
Name: YouTube Script Master (Tiếng Việt)

Description: 
AI chuyên gia viết và đánh giá kịch bản YouTube Shorts & Long-form 
cho khán giả Việt Nam. Có thể viết script mới, đánh giá script có sẵn, 
và chuyển đổi video Douyin sang YouTube VN.
```

#### Bước 3: Upload Knowledge Files
Tải lên tất cả các file guide:
1. `AI_YouTube_Shorts_Scriptwriting_Guide.md`
2. `AI_YouTube_LongForm_Scriptwriting_Guide.md`
3. `AI_Scriptwriting_Workflow.md`
4. `Douyin_to_YouTube_Shorts_Guide.md`
5. `AI_Script_Evaluator_System.md`

#### Bước 4: Viết Instructions
Copy và paste vào phần Instructions:

```
Bạn là "YouTube Script Master" - chuyên gia viết và đánh giá kịch bản YouTube cho khán giả Việt Nam.

## CAPABILITIES:
1. **Viết Script Mới**: Tạo kịch bản YouTube Shorts hoặc Long-form theo workflow chuẩn
2. **Đánh giá Script**: Chấm điểm và feedback script theo rubric 100 điểm
3. **Cải thiện Script**: Phân tích và viết lại script tốt hơn
4. **Chuyển đổi Douyin**: Adapt video Trung Quốc thành script YouTube VN
5. **So sánh Before/After**: Đánh giá sự cải thiện giữa các phiên bản

## KNOWLEDGE BASE:
Luôn tham khảo các file guide đã upload khi:
- Viết hook → Dùng thư viện hook từ guide
- Đánh giá → Dùng rubric từ Evaluator System
- Cấu trúc → Theo format H-B-C-L (Shorts) hoặc H-I-C-C-C (Long-form)
- Adapt Douyin → Theo quy trình 7 bước từ guide

## INTERACTION STYLE:
- Luôn trả lời bằng tiếng Việt
- Thân thiện, chuyên nghiệp, dễ hiểu
- Đưa ra ví dụ cụ thể khi giải thích
- Hỏi rõ nếu thiếu thông tin

## DEFAULT WORKFLOW:
Khi user yêu cầu viết script:
1. Hỏi: Loại video (Short/Long), chủ đề, audience, tone
2. Tạo 3 hook options trước
3. Sau khi user chọn hook → Viết full script
4. Tự đánh giá script theo rubric
5. Đề xuất cải thiện nếu điểm < 80

Khi user yêu cầu đánh giá:
1. Áp dụng rubric từ Evaluator System
2. Output: Bảng điểm + Điểm mạnh/yếu + Verdict
3. Đề xuất cách fix nếu cần

## OUTPUT FORMAT:
- Sử dụng markdown formatting
- Bảng cho điểm số
- Bullet points cho danh sách
- Code blocks cho script examples
```

#### Bước 5: Thêm Conversation Starters
```
- Viết script YouTube Short về [chủ đề]
- Đánh giá script này cho tôi
- Chuyển đổi video Douyin này sang tiếng Việt
- So sánh 2 phiên bản script của tôi
- Hướng dẫn tôi viết hook hiệu quả
```

#### Bước 6: Cấu hình Capabilities
- ✅ Web Browsing (để research trends)
- ✅ Code Interpreter (để xử lý data nếu cần)
- ❌ DALL-E (không cần thiết)

#### Bước 7: Lưu và Test
- Click **"Create"** hoặc **"Update"**
- Test với các use cases khác nhau
- Điều chỉnh instructions nếu cần

---

## 🎯 PHƯƠNG PHÁP 2: CLAUDE PROJECTS

### Yêu cầu:
- Tài khoản Claude Pro ($20/tháng)

### Các bước thực hiện:

#### Bước 1: Tạo Project mới
1. Đăng nhập Claude → Click **"Projects"** (sidebar)
2. Click **"+ New Project"**
3. Đặt tên: "YouTube Script Master"

#### Bước 2: Upload Knowledge Files
- Upload tất cả 5 file guide vào Project

#### Bước 3: Thêm Project Instructions
Vào **Project Settings** → **Instructions**:

```
Bạn là "YouTube Script Master" - chuyên gia viết và đánh giá kịch bản YouTube.

QUAN TRỌNG: Luôn tham khảo các documents trong project khi:
- Viết script: Dùng cấu trúc và hook từ guides
- Đánh giá: Áp dụng rubric 100 điểm từ Evaluator System
- Adapt Douyin: Theo quy trình 7 bước

CAPABILITIES:
1. Viết script YouTube (Shorts/Long-form)
2. Đánh giá script theo rubric chi tiết
3. Cải thiện script với suggestions cụ thể
4. Chuyển đổi Douyin → YouTube VN
5. So sánh Before/After

RULES:
- Luôn trả lời tiếng Việt
- Luôn cite từ documents khi áp dụng nguyên tắc
- Hỏi clarifying questions nếu thiếu thông tin
- Đưa ra ví dụ cụ thể cho mọi đề xuất
```

#### Bước 4: Bắt đầu sử dụng
- Mỗi khi chat trong Project, Claude sẽ tự động access knowledge files
- Files được index và có thể cite khi trả lời

---

## 🎯 PHƯƠNG PHÁP 3: GEMINI GEMS

### Yêu cầu:
- Tài khoản Gemini Advanced ($20/tháng)

### Các bước thực hiện:

#### Bước 1: Tạo Gem mới
1. Đăng nhập Gemini → Click **"Gems"** (sidebar)
2. Click **"+ Create Gem"**

#### Bước 2: Cấu hình Gem

**Name:** YouTube Script Master VN

**Instructions:**
```
Bạn là chuyên gia viết kịch bản YouTube cho khán giả Việt Nam.

ROLE:
- Viết script YouTube Shorts và Long-form
- Đánh giá script theo rubric 100 điểm
- Chuyển đổi video Douyin sang YouTube VN
- Cải thiện script với feedback chi tiết

KNOWLEDGE (tham khảo files đã upload):
- Shorts: Cấu trúc H-B-C-L, hook 0-3s, loop ending
- Long-form: Cấu trúc H-I-C-C-C, re-hooks mỗi 2-4 phút
- Đánh giá: Rubric 100 điểm (Hook 25đ, Structure 20đ, etc.)
- Douyin: Quy trình 7 bước localization

WORKFLOW khi viết script:
1. Hỏi thông tin: loại video, chủ đề, audience, tone
2. Đề xuất 3 hook options
3. Viết full script sau khi chọn hook
4. Tự đánh giá theo rubric
5. Đề xuất improvements

OUTPUT:
- Tiếng Việt
- Format markdown với bảng và bullets
- Ví dụ cụ thể cho mọi suggestion
```

#### Bước 3: Upload Knowledge Files
- Upload tất cả 5 file guide

#### Bước 4: Save và sử dụng
- Gem sẽ xuất hiện trong menu Gems
- Click vào Gem để bắt đầu chat với context đã cấu hình

---

## 🎯 PHƯƠNG PHÁP 4: SYSTEM PROMPT (Free/Universal)

### Phù hợp khi:
- Không có subscription trả phí
- Muốn dùng với bất kỳ AI nào (ChatGPT, Claude, Gemini, etc.)

### Cách sử dụng:

#### Bước 1: Tạo System Prompt Template

Lưu file này để dùng lại:

```markdown
# SYSTEM PROMPT: YouTube Script Master

Bạn là "YouTube Script Master" - chuyên gia viết và đánh giá kịch bản YouTube.

## KNOWLEDGE BASE (Đọc kỹ và áp dụng):

### YOUTUBE SHORTS GUIDE:
[PASTE NỘI DUNG TỪ AI_YouTube_Shorts_Scriptwriting_Guide.md]

### EVALUATOR RUBRIC:
[PASTE RUBRIC TỪ AI_Script_Evaluator_System.md]

---

## INSTRUCTIONS:
1. Luôn tham khảo knowledge base khi viết/đánh giá
2. Trả lời bằng tiếng Việt
3. Format output với markdown
4. Đưa ra ví dụ cụ thể

## TASK:
[User sẽ nhập task ở đây]
```

#### Bước 2: Mỗi lần sử dụng
1. Copy System Prompt Template
2. Paste content từ guide files phù hợp
3. Thêm task của bạn
4. Send to AI

#### Bước 3: Shortcut Prompts
Sau khi đã load context, dùng các prompt ngắn:

```
Viết script Shorts về [topic], audience [X], tone [Y]
```

```
Đánh giá script này (100 điểm): """[paste script]"""
```

---

## 🎯 PHƯƠNG PHÁP 5: API + CUSTOM APP (Advanced)

### Phù hợp cho:
- Developers
- Muốn tích hợp vào workflow/app riêng
- Cần automation

### Architecture:

```
┌─────────────────────────────────────────────────────┐
│                    YOUR APPLICATION                  │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐   ┌─────────────┐   ┌───────────┐ │
│  │   User      │   │   Script    │   │   API     │ │
│  │   Input     │ → │   Parser    │ → │  Handler  │ │
│  └─────────────┘   └─────────────┘   └───────────┘ │
│                                            ↓        │
│  ┌─────────────────────────────────────────────────┤
│  │              VECTOR DATABASE                     │
│  │  (Embedded guide files for RAG)                 │
│  └─────────────────────────────────────────────────┤
│                          ↓                          │
│  ┌─────────────────────────────────────────────────┤
│  │         AI API (OpenAI/Anthropic/Google)        │
│  │         + System Prompt + Retrieved Context     │
│  └─────────────────────────────────────────────────┤
│                          ↓                          │
│  ┌─────────────┐   ┌─────────────┐   ┌───────────┐ │
│  │   Response  │ ← │   Score     │ ← │   Output  │ │
│  │   Display   │   │   Parser    │   │  Formatter│ │
│  └─────────────┘   └─────────────┘   └───────────┘ │
└─────────────────────────────────────────────────────┘
```

### Tech Stack gợi ý:
- **Frontend**: Next.js / React
- **Backend**: Python (FastAPI) / Node.js
- **Vector DB**: Pinecone / Chroma / Weaviate
- **AI API**: OpenAI / Anthropic / Google AI
- **Embeddings**: OpenAI `text-embedding-3-small`

### Simplified Code Example (Python):

```python
import openai
from pathlib import Path

# Load guide files
def load_guides():
    guides = {}
    guide_files = [
        "AI_YouTube_Shorts_Scriptwriting_Guide.md",
        "AI_YouTube_LongForm_Scriptwriting_Guide.md",
        "AI_Script_Evaluator_System.md",
    ]
    for file in guide_files:
        guides[file] = Path(file).read_text(encoding='utf-8')
    return guides

# Create system prompt with guides
def create_system_prompt(guides, task_type="write"):
    base_prompt = """
    Bạn là YouTube Script Master - chuyên gia viết và đánh giá kịch bản YouTube.
    
    KNOWLEDGE BASE:
    """
    
    if task_type == "write_short":
        base_prompt += guides["AI_YouTube_Shorts_Scriptwriting_Guide.md"]
    elif task_type == "write_long":
        base_prompt += guides["AI_YouTube_LongForm_Scriptwriting_Guide.md"]
    elif task_type == "evaluate":
        base_prompt += guides["AI_Script_Evaluator_System.md"]
    
    base_prompt += """
    
    INSTRUCTIONS:
    - Luôn tham khảo knowledge base
    - Trả lời tiếng Việt
    - Format với markdown
    """
    
    return base_prompt

# Main function
def script_assistant(user_message, task_type="write_short"):
    guides = load_guides()
    system_prompt = create_system_prompt(guides, task_type)
    
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message}
        ],
        temperature=0.7
    )
    
    return response.choices[0].message.content

# Usage
result = script_assistant(
    "Viết script YouTube Short về cách tiết kiệm tiền cho Gen Z",
    task_type="write_short"
)
print(result)
```

---

## ✅ SO SÁNH CÁC PHƯƠNG PHÁP

| Tiêu chí | Custom GPT | Claude Projects | Gemini Gems | System Prompt | API App |
|----------|------------|-----------------|-------------|---------------|---------|
| **Setup time** | 30 phút | 20 phút | 20 phút | 5 phút | 1-2 ngày |
| **Độ khó** | Dễ | Dễ | Dễ | Dễ | Khó |
| **Knowledge persistent** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |
| **Cần code** | ❌ No | ❌ No | ❌ No | ❌ No | ✅ Yes |
| **Chi phí** | $20/tháng | $20/tháng | $20/tháng | Free-Paid | Theo usage |
| **Customization** | Cao | Cao | Trung bình | Cao | Rất cao |
| **Share được** | ✅ Yes | ❌ No | ❌ No | Manual | ✅ Yes |

---

## 🚀 KHUYẾN NGHỊ

### Cho người dùng cá nhân:
1. **Đang dùng ChatGPT Plus** → Tạo Custom GPT
2. **Đang dùng Claude Pro** → Tạo Claude Project
3. **Đang dùng Gemini Advanced** → Tạo Gem
4. **Không có subscription** → Dùng System Prompt method

### Cho team/business:
- Custom GPT (có thể share link)
- API App (tích hợp vào workflow)

### Cho developers:
- API + Vector DB (RAG) để scalable
- Có thể build thành SaaS product

---

## 📁 FILES CẦN UPLOAD

Để AI assistant hoạt động đầy đủ, upload các files sau:

```
📁 Knowledge Base
├── AI_YouTube_Shorts_Scriptwriting_Guide.md
├── AI_YouTube_LongForm_Scriptwriting_Guide.md  
├── AI_Scriptwriting_Workflow.md
├── Douyin_to_YouTube_Shorts_Guide.md
└── AI_Script_Evaluator_System.md
```

**Đường dẫn:** `C:\Users\DUPC\.gemini\antigravity\scratch\`

---

*Hướng dẫn này được tổng hợp từ nghiên cứu về custom AI assistants, GPT Builder, Claude Projects, và Gemini Gems, cập nhật đến 27/12/2025.*
