# React JS Document Rules / Quy tắc tài liệu React JS

## Mục đích / Purpose
Tài liệu này định nghĩa cấu trúc và quy tắc cho các bài học React JS. Mỗi bài học phải tuân theo format chuẩn để đảm bảo tính nhất quán và dễ theo dõi.

This document defines the structure and rules for React JS lesson documents. Each lesson must follow the standard format to ensure consistency and readability.

---

## Cấu trúc File / File Structure

### Quy tắc đặt tên / Naming Convention
- Mỗi bài học là một file riêng biệt / Each lesson is a separate file
- Format: `react_[topic_name].md`
- Ví dụ / Examples:
  - `react_components.md`
  - `react_hooks_usestate.md`
  - `react_context_api.md`

### Vị trí / Location
- Tất cả các file bài học nằm trong thư mục `reactjs/documents/`
- All lesson files are located in the `reactjs/documents/` directory

---

## Template Bài học / Lesson Template

Mỗi file bài học **BẮT BUỘC** phải bao gồm các phần sau theo thứ tự:

Each lesson file **MUST** include the following sections in order:

### 0. Metadata (Phần đầu file) / Metadata (Top of file)

**BẮT BUỘC** - Mỗi file phải bắt đầu với metadata section ngay sau tiêu đề chính:

**REQUIRED** - Each file must start with a metadata section right after the main title:

```markdown
# [Lesson Title]

---

**📅 Created / Ngày tạo:** YYYY-MM-DD  
**📅 Last Updated / Ngày cập nhật:** YYYY-MM-DD

**⬅️ Previous / Bài trước:** [Previous Lesson Name](./react_previous_topic.md)  
**➡️ Next / Bài sau:** [Next Lesson Name](./react_next_topic.md)

---
```

**Quy tắc / Rules:**
- **Created (Ngày tạo)**: Date when file was first created, format `YYYY-MM-DD` / Ngày tạo file lần đầu
- **Last Updated (Ngày cập nhật)**: Date of most recent modification, format `YYYY-MM-DD` / Ngày sửa đổi gần nhất
- **Previous (Bài trước)**: Link to previous lesson in the sequence / Link tới bài học trước đó
  - If first lesson, write: `None / Không có`
- **Next (Bài sau)**: Link to next lesson in the sequence / Link tới bài học tiếp theo
  - If last lesson, write: `None / Không có`
- Use emoji for easy recognition: 📅 for dates, ⬅️ for previous, ➡️ for next
- Separate metadata from Description with `---` line

---

### 1. Tên bài học / Lesson Title
```markdown
# [Lesson Title]
```

**Quy tắc / Rules:**
- Use heading level 1 (`#`)
- Clear and concise title
- **MANDATORY** bilingual English-Vietnamese / **BẮT BUỘC** song ngữ Anh-Việt

**Ví dụ / Example:**
```markdown
# React Components / Components trong React
```

---

### 2. Mô tả nội dung / Content Description
```markdown
## Description / Mô tả

[Detailed description of the lesson content in English]

[Mô tả chi tiết về nội dung bài học bằng tiếng Việt]
```

**Quy tắc / Rules:**
- Use heading level 2 (`##`)
- Brief description (2-4 sentences) about the lesson content
- Explain why this lesson is important
- **MANDATORY** two separate paragraphs: English first, Vietnamese second / **BẮT BUỘC** hai đoạn riêng biệt: tiếng Anh trước, tiếng Việt sau

**Ví dụ / Example:**
```markdown
## Description / Mô tả

This lesson introduces Components, the fundamental building blocks of React applications. You will learn how to create Functional Components and Class Components, as well as how to use JSX to describe the user interface.

Bài học này giới thiệu về Components, khối xây dựng cơ bản của ứng dụng React. Bạn sẽ học cách tạo Functional Components và Class Components, cũng như cách sử dụng JSX để mô tả giao diện người dùng.
```

---

### 3. Khái niệm chính / Main Concepts
```markdown
## Main Concepts / Khái niệm chính

### [Concept 1]
[Explanation in English]

[Giải thích bằng tiếng Việt]

​```jsx
// Code example with bilingual comments
// Ví dụ code với comments song ngữ
const Example = () => {
    return <div>Hello</div>;
};
​```
```

**Quy tắc / Rules:**
- Use heading level 2 (`##`) for main section
- Use heading level 3 (`###`) for each concept
- List 3-7 most important concepts
- Each concept must have:
  - Clear definition in **two separate paragraphs** (English, Vietnamese)
  - React code example (JSX)
  - Comments in code must be bilingual (English first)
  - Usage explanation

**Ví dụ / Example:**
```markdown
## Main Concepts / Khái niệm chính

### Functional Components / Functional Components

Functional Components are JavaScript functions that return JSX. This is the most common way to create components in modern React.

Functional Components là các hàm JavaScript trả về JSX. Đây là cách phổ biến nhất để tạo components trong React hiện đại.

​```jsx
// Define component / Định nghĩa component
const Welcome = (props) => {
    // Return JSX / Trả về JSX
    return <h1>Hello, {props.name}</h1>;
};

// Use component / Sử dụng component
const App = () => {
    return (
        <div>
            <Welcome name="Sara" />
        </div>
    );
};
​```
```

---

### 4. Lợi ích/Ứng dụng / Benefits/Applications
```markdown
## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích
- **[Benefit 1]**: English explanation / Giải thích tiếng Việt
- **[Benefit 2]**: English explanation / Giải thích tiếng Việt

### Real-world Applications / Ứng dụng thực tế
- **[Application 1]**: English description / Mô tả tiếng Việt
- **[Application 2]**: English description / Mô tả tiếng Việt
```

**Quy tắc / Rules:**
- Use heading level 2 (`##`) for main section
- Divide into 2 subsections: Benefits and Applications
- Use bullet points
- List at least 3 benefits
- List at least 3 real-world applications
- **MANDATORY** each bullet point has both languages (English / Vietnamese)

---

## Các phần bổ sung (Tùy chọn) / Additional Sections (Optional)

### Complete Example / Ví dụ hoàn chỉnh
```markdown
## Complete Example / Ví dụ hoàn chỉnh

​```jsx
// Complete code example with bilingual comments
// Code example hoàn chỉnh với comments song ngữ
​```
```

### Best Practices / Thực hành tốt nhất
```markdown
## Best Practices / Thực hành tốt nhất

- ✅ **DO**: [Should do] / [Nên làm]
- ❌ **DON'T**: [Should not do] / [Không nên làm]
```

### Common Mistakes / Lỗi thường gặp
```markdown
## Common Mistakes / Lỗi thường gặp

### Error 1: [Error Name]
**Description**: [Error description in English] / [Mô tả lỗi bằng tiếng Việt]
**Solution**: [Solution in English] / [Cách sửa bằng tiếng Việt]
```

### References / Tài liệu tham khảo
```markdown
## References / Tài liệu tham khảo

- [React Documents](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
```

---

## Quy tắc Format / Formatting Rules

### Code Blocks
- Use syntax highlighting with `jsx`, `javascript` or `tsx`
- React code: ` ```jsx `

### Code Comments / Chú thích Code
**MANDATORY** - All code comments must be bilingual (English first):

**BẮT BUỘC** - Tất cả comments trong code phải song ngữ (Tiếng Anh trước):

```jsx
// Good / Tốt
// Handle click event / Xử lý sự kiện click
const handleClick = () => {
    console.log('Clicked');
};
```

### Alerts / Thông báo
Use GitHub-style alerts when needing emphasis (NOTE, TIP, IMPORTANT, WARNING, CAUTION).

### Links
- Internal link: `[Lesson Name](./react_topic.md)`
- External link: `[Source Name](https://example.com)`

---

## Quy tắc Song ngữ / Bilingual Content Rules

> [!IMPORTANT]
> **MANDATORY** - All lesson content must be written in bilingual English-Vietnamese format.
> 
> **BẮT BUỘC** - Tất cả nội dung bài học phải được viết bằng song ngữ Anh-Việt.

- **Every content section** must have both English and Vietnamese / **Mọi phần nội dung** phải có cả tiếng Anh và tiếng Việt
- English always comes first, followed by Vietnamese / Tiếng Anh luôn đi trước, tiếng Việt theo sau

---

## Checklist Tạo bài học mới / New Lesson Checklist

When creating a new lesson, ensure:

Khi tạo một bài học mới, đảm bảo:

- [ ] File name format `react_[topic].md`
- [ ] Complete metadata (Created, Last Updated, Previous/Next links)
- [ ] All 4 mandatory sections (Title, Description, Main Concepts, Benefits/Applications)
- [ ] **Bilingual English-Vietnamese content (MANDATORY)** / **Nội dung song ngữ Anh-Việt (BẮT BUỘC)**
- [ ] **English first, Vietnamese second** / **Tiếng Anh trước, Tiếng Việt sau**
- [ ] **All code comments are bilingual** / **Tất cả code comments đều song ngữ**
- [ ] Code examples use `jsx` or `tsx` syntax
- [ ] Check spelling and grammar
