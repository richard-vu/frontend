# CSS Document Rules / Quy tắc tài liệu CSS

## Mục đích / Purpose
Tài liệu này định nghĩa cấu trúc và quy tắc cho các bài học CSS. Mỗi bài học phải tuân theo format chuẩn để đảm bảo tính nhất quán và dễ theo dõi.

This document defines the structure and rules for CSS lesson documents. Each lesson must follow the standard format to ensure consistency and readability.

---

## Cấu trúc File / File Structure

### Quy tắc đặt tên / Naming Convention
- Mỗi bài học là một file riêng biệt / Each lesson is a separate file
- Format: `css-[topic-name].md`
- Ví dụ / Examples:
  - `css-selectors.md`
  - `css-box-model.md`
  - `css-flexbox.md`
  - `css-grid.md`
  - `css-animations.md`

### Vị trí / Location
- Tất cả các file bài học nằm trong thư mục `css/`
- All lesson files are located in the `css/` directory

---

## Template Bài học / Lesson Template

Mỗi file bài học **BẮT BUỘC** phải bao gồm các phần sau theo thứ tự:

Each lesson file **MUST** include the following sections in order:

### 0. Metadata (Phần đầu file) / Metadata (Top of file)

**BẮT BUỘC** - Mỗi file phải bắt đầu với metadata section ngay sau tiêu đề chính:

**REQUIRED** - Each file must start with a metadata section right after the main title:

```markdown
# [Tên bài học]

---

**📅 Ngày tạo / Created:** YYYY-MM-DD  
**📅 Ngày cập nhật / Last Updated:** YYYY-MM-DD

**⬅️ Bài trước / Previous:** [Tên bài trước](./css-previous-topic.md)  
**➡️ Bài sau / Next:** [Tên bài sau](./css-next-topic.md)

---
```

**Quy tắc / Rules:**
- **Ngày tạo (Created)**: Ngày tạo file lần đầu, format `YYYY-MM-DD` / Date when file was first created, format `YYYY-MM-DD`
- **Ngày cập nhật (Last Updated)**: Ngày sửa đổi gần nhất, format `YYYY-MM-DD` / Date of most recent modification, format `YYYY-MM-DD`
- **Bài trước (Previous)**: Link tới bài học trước đó trong chuỗi / Link to previous lesson in the sequence
  - Nếu là bài đầu tiên, ghi: `Không có / None` / If first lesson, write: `Không có / None`
- **Bài sau (Next)**: Link tới bài học tiếp theo trong chuỗi / Link to next lesson in the sequence
  - Nếu là bài cuối cùng, ghi: `Không có / None` / If last lesson, write: `Không có / None`
- Sử dụng emoji để dễ nhận diện: 📅 cho ngày, ⬅️ cho bài trước, ➡️ cho bài sau / Use emoji for easy recognition: 📅 for dates, ⬅️ for previous, ➡️ for next
- Phân cách metadata với phần Mô tả bằng dòng `---` / Separate metadata from Description with `---` line

**Ví dụ / Example:**
```markdown
# CSS Flexbox / CSS Flexbox

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Box Model](./css-box-model.md)  
**➡️ Bài sau / Next:** [CSS Grid](./css-grid.md)

---
```

**Ví dụ cho bài đầu tiên / Example for first lesson:**
```markdown
# Introduction to CSS / Giới thiệu CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** Không có / None  
**➡️ Bài sau / Next:** [CSS Selectors](./css-selectors.md)

---
```

**Ví dụ cho bài cuối cùng / Example for last lesson:**
```markdown
# Advanced CSS Techniques / Kỹ thuật CSS nâng cao

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [CSS Animations](./css-animations.md)  
**➡️ Bài sau / Next:** Không có / None

---
```

---

### 1. Tên bài học / Lesson Title
```markdown
# [Tên bài học]
```

**Quy tắc / Rules:**
- Sử dụng heading level 1 (`#`) / Use heading level 1 (`#`)
- Tên rõ ràng, súc tích / Clear and concise title
- **BẮT BUỘC** song ngữ Anh-Việt / **MANDATORY** bilingual English-Vietnamese

**Ví dụ / Example:**
```markdown
# CSS Selectors / Bộ chọn CSS
```

---

### 2. Mô tả nội dung / Content Description
```markdown
## Mô tả / Description

[Mô tả chi tiết về nội dung bài học bằng tiếng Việt]

[Detailed description of the lesson content in English]
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) / Use heading level 2 (`##`)
- Mô tả ngắn gọn (2-4 câu) về nội dung bài học / Brief description (2-4 sentences) about the lesson content
- Giải thích tại sao bài học này quan trọng / Explain why this lesson is important
- **BẮT BUỘC** hai đoạn riêng biệt: tiếng Việt trước, tiếng Anh sau / **MANDATORY** two separate paragraphs: Vietnamese first, English second

**Ví dụ / Example:**
```markdown
## Mô tả / Description

Bài học này giới thiệu về CSS Flexbox, một công cụ mạnh mẽ để tạo layouts linh hoạt. Bạn sẽ học cách sử dụng flex container và flex items, cách căn chỉnh và phân bổ không gian. Flexbox giúp tạo responsive layouts dễ dàng mà không cần sử dụng float hay positioning phức tạp.

This lesson introduces CSS Flexbox, a powerful tool for creating flexible layouts. You will learn how to use flex containers and flex items, how to align and distribute space. Flexbox makes it easy to create responsive layouts without complex floats or positioning.
```

---

### 3. Khái niệm chính / Main Concepts
```markdown
## Khái niệm chính / Main Concepts

### [Khái niệm 1]
[Giải thích bằng tiếng Việt]

[Explanation in English]

​```css
/* Code example với comments song ngữ / Code example with bilingual comments */
.example {
    property: value;
}
​```

### [Khái niệm 2]
[Giải thích bằng tiếng Việt]

[Explanation in English]

​```css
/* Code example */
​```
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) cho phần chính / Use heading level 2 (`##`) for main section
- Sử dụng heading level 3 (`###`) cho mỗi khái niệm / Use heading level 3 (`###`) for each concept
- Liệt kê 3-7 khái niệm quan trọng nhất / List 3-7 most important concepts
- Mỗi khái niệm phải có:
  - Định nghĩa rõ ràng bằng **hai đoạn riêng biệt** (Việt, Anh) / Clear definition in **two separate paragraphs** (Vietnamese, English)
  - Ví dụ code CSS / CSS code example
  - Comments trong code phải song ngữ / Comments in code must be bilingual
  - Ví dụ HTML kèm theo nếu cần / HTML example if needed
  - Giải thích cách sử dụng / Usage explanation

**Ví dụ / Example:**
```markdown
## Khái niệm chính / Main Concepts

### Flex Container / Container Flex

Để sử dụng Flexbox, bạn cần tạo một flex container bằng cách đặt `display: flex` hoặc `display: inline-flex`. Container này sẽ chứa các flex items và kiểm soát cách chúng được sắp xếp.

To use Flexbox, you need to create a flex container by setting `display: flex` or `display: inline-flex`. This container will hold flex items and control how they are arranged.

​```css
/* Tạo flex container / Create flex container */
.container {
    display: flex;
    
    /* Hướng sắp xếp / Direction of items */
    flex-direction: row; /* row, row-reverse, column, column-reverse */
    
    /* Căn chỉnh theo trục chính / Align along main axis */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
    
    /* Căn chỉnh theo trục phụ / Align along cross axis */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
}
​```

```html
<!-- HTML structure -->
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

### Flex Items / Các mục Flex

Các phần tử con trực tiếp của flex container tự động trở thành flex items. Bạn có thể kiểm soát cách chúng co giãn và sắp xếp.

Direct children of a flex container automatically become flex items. You can control how they grow, shrink, and arrange.

​```css
/* Thuộc tính flex items / Flex items properties */
.item {
    /* Tỷ lệ phát triển / Growth factor */
    flex-grow: 1;
    
    /* Tỷ lệ co lại / Shrink factor */
    flex-shrink: 1;
    
    /* Kích thước ban đầu / Initial size */
    flex-basis: auto;
    
    /* Shorthand cho flex-grow, flex-shrink, flex-basis */
    /* Shorthand for flex-grow, flex-shrink, flex-basis */
    flex: 1 1 auto;
    
    /* Căn chỉnh riêng lẻ / Individual alignment */
    align-self: center;
}
​```
```

---

### 4. Lợi ích/Ứng dụng / Benefits/Applications
```markdown
## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **[Lợi ích 1]**: Giải thích tiếng Việt / English explanation
- **[Lợi ích 2]**: Giải thích tiếng Việt / English explanation
- **[Lợi ích 3]**: Giải thích tiếng Việt / English explanation

### Ứng dụng thực tế / Real-world Applications
- **[Ứng dụng 1]**: Mô tả tiếng Việt / English description
- **[Ứng dụng 2]**: Mô tả tiếng Việt / English description
- **[Ứng dụng 3]**: Mô tả tiếng Việt / English description
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) cho phần chính / Use heading level 2 (`##`) for main section
- Chia thành 2 phần con: Lợi ích và Ứng dụng / Divide into 2 subsections: Benefits and Applications
- Sử dụng bullet points / Use bullet points
- Liệt kê ít nhất 3 lợi ích / List at least 3 benefits
- Liệt kê ít nhất 3 ứng dụng thực tế / List at least 3 real-world applications
- **BẮT BUỘC** mỗi bullet point có cả hai ngôn ngữ / **MANDATORY** each bullet point has both languages

**Ví dụ / Example:**
```markdown
## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Responsive layouts**: Dễ dàng tạo layouts thích ứng với mọi kích thước màn hình / Easy to create layouts that adapt to any screen size
- **Vertical alignment**: Giải quyết vấn đề căn giữa theo chiều dọc một cách đơn giản / Solves vertical centering problems simply
- **Equal height columns**: Tạo các cột có chiều cao bằng nhau tự động / Creates equal-height columns automatically
- **Flexible spacing**: Phân bổ không gian linh hoạt giữa các items / Distributes space flexibly between items
- **Source order independence**: Thay đổi thứ tự hiển thị mà không cần sửa HTML / Change display order without modifying HTML

### Ứng dụng thực tế / Real-world Applications
- **Navigation bars**: Tạo thanh menu ngang với spacing đều / Create horizontal navigation with even spacing
- **Card layouts**: Sắp xếp cards trong grids linh hoạt / Arrange cards in flexible grids
- **Form layouts**: Căn chỉnh labels và inputs dễ dàng / Align labels and inputs easily
- **Page layouts**: Tạo header, content, footer layouts / Create header, content, footer layouts
- **Media objects**: Kết hợp hình ảnh và văn bản / Combine images and text
- **Centered content**: Căn giữa nội dung theo cả hai chiều / Center content both horizontally and vertically
```

---

## Các phần bổ sung (Tùy chọn) / Additional Sections (Optional)

### Ví dụ hoàn chỉnh / Complete Example
```markdown
## Ví dụ hoàn chỉnh / Complete Example

​```html
<!-- HTML structure -->
<div class="example-container">
    <div class="example-item">Item 1</div>
    <div class="example-item">Item 2</div>
</div>
​```

​```css
/* CSS styling với comments song ngữ */
/* CSS styling with bilingual comments */
.example-container {
    /* Styles here */
}

.example-item {
    /* Styles here */
}
​```
```

### Browser Support / Hỗ trợ trình duyệt
```markdown
## Browser Support / Hỗ trợ trình duyệt

| Trình duyệt / Browser | Phiên bản / Version |
|----------------------|---------------------|
| Chrome               | [version]+          |
| Firefox              | [version]+          |
| Safari               | [version]+          |
| Edge                 | [version]+          |

> [!NOTE]
> Thông tin về vendor prefixes hoặc fallbacks nếu cần.
> 
> Information about vendor prefixes or fallbacks if needed.
```

### Best Practices / Thực hành tốt nhất
```markdown
## Best Practices / Thực hành tốt nhất

- ✅ **DO**: [Nên làm] / [Should do]
- ✅ **DO**: [Nên làm] / [Should do]
- ❌ **DON'T**: [Không nên làm] / [Should not do]
- ❌ **DON'T**: [Không nên làm] / [Should not do]
```

### Common Mistakes / Lỗi thường gặp
```markdown
## Common Mistakes / Lỗi thường gặp

### Lỗi 1: [Tên lỗi]
**Mô tả**: [Mô tả lỗi bằng tiếng Việt] / [Error description in English]
**Giải pháp**: [Cách sửa bằng tiếng Việt] / [Solution in English]

​```css
/* Sai / Wrong */
.wrong-example {
    /* ... */
}

/* Đúng / Correct */
.correct-example {
    /* ... */
}
​```
```

### Tài liệu tham khảo / References
```markdown
## Tài liệu tham khảo / References

- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [W3C CSS Specifications](https://www.w3.org/Style/CSS/)
- [Can I Use](https://caniuse.com/)
```

---

## Quy tắc Format / Formatting Rules

### Code Blocks
- Sử dụng syntax highlighting với `css` / Use syntax highlighting with `css`
- CSS code: ` ```css `
- HTML code: ` ```html `
- Multiple files: Sử dụng nhiều code blocks với labels / Use multiple code blocks with labels

### Code Comments / Chú thích Code
**BẮT BUỘC** - Tất cả comments trong code phải song ngữ:

**MANDATORY** - All code comments must be bilingual:

```css
/* Tốt / Good */
/* Tạo container linh hoạt / Create flexible container */
.container {
    display: flex;
}

/* Không tốt / Bad */
/* This creates a flexible container */
.container {
    display: flex;
}
```

### Alerts / Thông báo
Sử dụng GitHub-style alerts khi cần nhấn mạnh:

Use GitHub-style alerts when emphasis is needed:

```markdown
> [!NOTE]
> Thông tin bổ sung bằng tiếng Việt.
> 
> Additional information in English.

> [!TIP]
> Mẹo hữu ích bằng tiếng Việt.
> 
> Helpful tips in English.

> [!IMPORTANT]
> Thông tin quan trọng bằng tiếng Việt.
> 
> Important information in English.

> [!WARNING]
> Cảnh báo bằng tiếng Việt.
> 
> Warning in English.

> [!CAUTION]
> Cẩn trọng bằng tiếng Việt.
> 
> Caution in English.
```

### Tables / Bảng
```markdown
| Thuộc tính / Property | Giá trị / Value | Mô tả / Description |
|----------------------|-----------------|---------------------|
| display              | flex            | Tạo flex container / Creates flex container |
| flex-direction       | row, column     | Hướng sắp xếp / Direction of items |
```

### Visual Examples / Ví dụ trực quan
- Khuyến khích sử dụng CodePen hoặc JSFiddle embeds / Encourage using CodePen or JSFiddle embeds
- Có thể sử dụng hình ảnh minh họa / Can use illustrative images
- Sử dụng diagrams cho box model, flexbox, grid / Use diagrams for box model, flexbox, grid

### Links
- Link nội bộ: `[Tên bài học](./css-topic.md)`
- Link ngoại: `[Tên nguồn](https://example.com)`
- Link MDN: Luôn link đến tài liệu chính thức / Always link to official documentation

---

## Quy tắc Song ngữ / Bilingual Content Rules

> [!IMPORTANT]
> **BẮT BUỘC** - Tất cả nội dung bài học phải được viết bằng song ngữ Việt-Anh.
> 
> **MANDATORY** - All lesson content must be written in bilingual Vietnamese-English format.

### Nguyên tắc chung / General Principles

- **Mọi phần nội dung** phải có cả tiếng Việt và tiếng Anh / **Every content section** must have both Vietnamese and English
- Tiếng Việt luôn đi trước, tiếng Anh theo sau / Vietnamese always comes first, followed by English
- Sử dụng dấu gạch `/` để phân tách hoặc dòng riêng biệt / Use slash `/` separator or separate lines
- Đảm bảo nội dung hai ngôn ngữ tương đương về ý nghĩa / Ensure both language versions are equivalent in meaning

### Áp dụng cho CSS / Apply to CSS

#### Tiêu đề / Headings
```markdown
# CSS Selectors / Bộ chọn CSS
## Khái niệm chính / Main Concepts
### Class Selectors / Bộ chọn Class
```

#### Đoạn văn / Paragraphs
**Hai đoạn riêng biệt (KHUYẾN KHÍCH)** / **Two separate paragraphs (RECOMMENDED)**
```markdown
CSS (Cascading Style Sheets) là ngôn ngữ được sử dụng để mô tả cách hiển thị của các phần tử HTML. CSS cho phép bạn kiểm soát màu sắc, font chữ, kích thước, khoảng cách và nhiều thuộc tính khác.

CSS (Cascading Style Sheets) is a language used to describe the presentation of HTML elements. CSS allows you to control colors, fonts, sizes, spacing, and many other properties.
```

#### Code Comments / Chú thích Code
**BẮT BUỘC song ngữ** / **MANDATORY bilingual**
```css
/* Tạo grid layout / Create grid layout */
.grid-container {
    display: grid;
    
    /* Định nghĩa cột / Define columns */
    grid-template-columns: repeat(3, 1fr);
    
    /* Khoảng cách giữa các items / Gap between items */
    gap: 20px;
}

/* Căn giữa nội dung / Center content */
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

#### Danh sách / Lists
```markdown
### Lợi ích / Benefits
- **Separation of concerns**: Tách biệt nội dung và giao diện / Separates content from presentation
- **Reusability**: Tái sử dụng styles cho nhiều elements / Reuses styles for multiple elements
- **Maintainability**: Dễ bảo trì và cập nhật / Easy to maintain and update
```

---

## Quy tắc Điều hướng / Navigation Rules

### Chuỗi bài học / Lesson Sequence
- Các bài học phải được tổ chức theo chuỗi logic từ cơ bản đến nâng cao / Lessons must be organized in a logical sequence from basic to advanced
- Mỗi bài học phải link đến bài trước và bài sau / Each lesson must link to previous and next lessons
- Tạo navigation flow nhất quán cho người học / Create consistent navigation flow for learners

### Cập nhật Links / Updating Links
- Khi thêm bài học mới vào giữa chuỗi, phải cập nhật links của bài trước và bài sau / When adding a new lesson in the middle of the sequence, must update links of previous and next lessons
- Khi xóa bài học, phải cập nhật links của bài trước và bài sau để liên kết trực tiếp / When removing a lesson, must update links of previous and next lessons to connect directly
- Luôn kiểm tra tất cả links để đảm bảo không có broken links / Always check all links to ensure no broken links

---

## Quy tắc Metadata / Metadata Rules

### Ngày tạo / Created Date
- **Không thay đổi** sau khi tạo file lần đầu / **Do not change** after initial file creation
- Format: `YYYY-MM-DD` (ISO 8601)
- Ví dụ: `2025-12-24`

### Ngày cập nhật / Last Updated Date
- **Phải cập nhật** mỗi khi sửa đổi nội dung / **Must update** whenever content is modified
- Format: `YYYY-MM-DD` (ISO 8601)
- Cập nhật ngay cả với thay đổi nhỏ (typo, formatting, code examples) / Update even for minor changes (typo, formatting, code examples)
- Ví dụ: `2025-12-24`

---

## Checklist Tạo bài học mới / New Lesson Checklist

Khi tạo một bài học mới, đảm bảo:

When creating a new lesson, ensure:

- [ ] File được đặt tên đúng format `css-[topic].md`
- [ ] Có metadata đầy đủ:
  - [ ] Ngày tạo / Created date
  - [ ] Ngày cập nhật / Last updated date
  - [ ] Link bài trước / Previous lesson link
  - [ ] Link bài sau / Next lesson link
- [ ] Có đầy đủ 4 phần bắt buộc:
  - [ ] Tên bài học (song ngữ) / Lesson Title (bilingual)
  - [ ] Mô tả nội dung (song ngữ) / Content Description (bilingual)
  - [ ] Khái niệm chính (song ngữ) / Main Concepts (bilingual)
  - [ ] Lợi ích/Ứng dụng (song ngữ) / Benefits/Applications (bilingual)
- [ ] Code examples được format đúng với syntax highlighting
- [ ] **Nội dung song ngữ Việt-Anh (BẮT BUỘC)** / **Bilingual Vietnamese-English content (MANDATORY)**
- [ ] Có ít nhất một ví dụ code cho mỗi khái niệm
- [ ] **Tất cả code comments đều song ngữ** / **All code comments are bilingual**
- [ ] Có HTML example kèm theo nếu cần thiết / Include HTML examples if necessary
- [ ] Kiểm tra chính tả và ngữ pháp
- [ ] Link tham khảo (nếu có) hoạt động đúng
- [ ] Đã cập nhật links trong bài trước và bài sau (nếu insert vào giữa chuỗi)
- [ ] Test CSS code trên các trình duyệt chính / Test CSS code on major browsers

---

## Ví dụ File hoàn chỉnh / Complete File Example

```markdown
# CSS Flexbox / CSS Flexbox

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Box Model](./css-box-model.md)  
**➡️ Bài sau / Next:** [CSS Grid](./css-grid.md)

---

## Mô tả / Description

Bài học này giới thiệu về CSS Flexbox, một công cụ layout mạnh mẽ cho phép tạo các layouts linh hoạt và responsive. Bạn sẽ học cách sử dụng flex container và flex items, cách căn chỉnh và phân bổ không gian. Flexbox là công cụ thiết yếu trong CSS hiện đại để xây dựng giao diện web.

This lesson introduces CSS Flexbox, a powerful layout tool that allows creating flexible and responsive layouts. You will learn how to use flex containers and flex items, how to align and distribute space. Flexbox is an essential tool in modern CSS for building web interfaces.

## Khái niệm chính / Main Concepts

### Flex Container / Container Flex

Để sử dụng Flexbox, bạn cần tạo một flex container bằng cách đặt `display: flex`. Container này sẽ kiểm soát cách các flex items được sắp xếp.

To use Flexbox, you need to create a flex container by setting `display: flex`. This container will control how flex items are arranged.

​```css
/* Tạo flex container / Create flex container */
.container {
    display: flex;
    
    /* Hướng sắp xếp / Direction of items */
    flex-direction: row;
    
    /* Căn chỉnh ngang / Horizontal alignment */
    justify-content: space-between;
    
    /* Căn chỉnh dọc / Vertical alignment */
    align-items: center;
}
​```

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

### Flex Direction / Hướng Flex

`flex-direction` xác định hướng chính (main axis) mà các flex items được sắp xếp.

`flex-direction` determines the main axis direction in which flex items are arranged.

​```css
/* Các giá trị của flex-direction / flex-direction values */
.row {
    flex-direction: row; /* Mặc định: từ trái sang phải / Default: left to right */
}

.row-reverse {
    flex-direction: row-reverse; /* Từ phải sang trái / Right to left */
}

.column {
    flex-direction: column; /* Từ trên xuống dưới / Top to bottom */
}

.column-reverse {
    flex-direction: column-reverse; /* Từ dưới lên trên / Bottom to top */
}
​```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Responsive layouts**: Dễ dàng tạo layouts thích ứng với mọi kích thước màn hình / Easy to create layouts that adapt to any screen size
- **Vertical centering**: Giải quyết vấn đề căn giữa theo chiều dọc một cách đơn giản / Solves vertical centering problems simply
- **Equal heights**: Tạo các cột có chiều cao bằng nhau tự động / Creates equal-height columns automatically
- **Flexible spacing**: Phân bổ không gian linh hoạt giữa các items / Distributes space flexibly between items

### Ứng dụng thực tế / Real-world Applications
- **Navigation bars**: Tạo thanh menu với spacing đều / Create navigation bars with even spacing
- **Card layouts**: Sắp xếp cards trong grids linh hoạt / Arrange cards in flexible grids
- **Form layouts**: Căn chỉnh labels và inputs dễ dàng / Align labels and inputs easily
- **Page layouts**: Tạo header, content, footer layouts / Create header, content, footer layouts
- **Centered content**: Căn giữa nội dung hoàn hảo / Center content perfectly

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng Flexbox cho one-dimensional layouts / Use Flexbox for one-dimensional layouts
- ✅ **DO**: Kết hợp với CSS Grid cho layouts phức tạp / Combine with CSS Grid for complex layouts
- ✅ **DO**: Sử dụng `gap` thay vì margins cho spacing / Use `gap` instead of margins for spacing
- ❌ **DON'T**: Không lạm dụng flex cho mọi layout / Don't overuse flex for every layout
- ❌ **DON'T**: Không quên fallbacks cho trình duyệt cũ / Don't forget fallbacks for older browsers

## Tài liệu tham khảo / References

- [MDN - CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy - Interactive Game](https://flexboxfroggy.com/)
```

---

## Lưu ý quan trọng / Important Notes

> [!IMPORTANT]
> - Luôn cập nhật **Ngày cập nhật** khi sửa đổi nội dung / Always update **Last Updated** date when modifying content
> - Kiểm tra và cập nhật navigation links khi thêm/xóa bài học / Check and update navigation links when adding/removing lessons
> - Đảm bảo chuỗi bài học có logic progression / Ensure lesson sequence has logical progression
> - **Tất cả code comments phải song ngữ** / **All code comments must be bilingual**
> - Test CSS code trên nhiều trình duyệt / Test CSS code on multiple browsers

> [!TIP]
> - Sử dụng code examples thực tế, dễ hiểu / Use practical, easy-to-understand code examples
> - Kết hợp HTML và CSS để hiển thị result / Combine HTML and CSS to show results
> - Sử dụng CodePen hoặc JSFiddle cho live demos / Use CodePen or JSFiddle for live demos
> - Tạo index file liệt kê tất cả bài học theo thứ tự / Create an index file listing all lessons in order
> - Link tới MDN và CSS-Tricks cho chi tiết / Link to MDN and CSS-Tricks for details
> - Sử dụng visual examples và diagrams khi có thể / Use visual examples and diagrams when possible
