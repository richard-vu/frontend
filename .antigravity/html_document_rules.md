# HTML Document Rules / Quy tắc tài liệu HTML

## Mục đích / Purpose
Tài liệu này định nghĩa cấu trúc và quy tắc cho các bài học HTML. Mỗi bài học phải tuân theo format chuẩn để đảm bảo tính nhất quán và dễ theo dõi.

This document defines the structure and rules for HTML lesson documents. Each lesson must follow the standard format to ensure consistency and readability.

---

## Cấu trúc File / File Structure

### Quy tắc đặt tên / Naming Convention
- Mỗi bài học là một file riêng biệt / Each lesson is a separate file
- Format: `html-[topic-name].md`
- Ví dụ / Examples:
  - `html-basic-structure.md`
  - `html-forms.md`
  - `html-semantic-elements.md`

### Vị trí / Location
- Tất cả các file bài học nằm trong thư mục `html/`
- All lesson files are located in the `html/` directory

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

**⬅️ Bài trước / Previous:** [Tên bài trước](./html-previous-topic.md)  
**➡️ Bài sau / Next:** [Tên bài sau](./html-next-topic.md)

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
# HTML Basic Structure / Cấu trúc cơ bản HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [HTML Introduction](./html-introduction.md)  
**➡️ Bài sau / Next:** [HTML Elements](./html-elements.md)

---
```

**Ví dụ cho bài đầu tiên / Example for first lesson:**
```markdown
# HTML Introduction / Giới thiệu HTML

---

**📅 Ngày tạo / Created:** 2025-12-20  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** Không có / None  
**➡️ Bài sau / Next:** [HTML Basic Structure](./html-basic-structure.md)

---
```

**Ví dụ cho bài cuối cùng / Example for last lesson:**
```markdown
# HTML Advanced Topics / Chủ đề nâng cao HTML

---

**📅 Ngày tạo / Created:** 2025-12-22  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [HTML APIs](./html-apis.md)  
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
- Có thể song ngữ Anh-Việt / Can be bilingual English-Vietnamese

**Ví dụ / Example:**
```markdown
# HTML Basic Structure / Cấu trúc cơ bản HTML
```

---

### 2. Mô tả nội dung / Content Description
```markdown
## Mô tả / Description

[Mô tả chi tiết về nội dung bài học]
[Detailed description of the lesson content]
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) / Use heading level 2 (`##`)
- Mô tả ngắn gọn (2-4 câu) về nội dung bài học / Brief description (2-4 sentences) about the lesson content
- Giải thích tại sao bài học này quan trọng / Explain why this lesson is important

**Ví dụ / Example:**
```markdown
## Mô tả / Description

Bài học này giới thiệu cấu trúc cơ bản của một tài liệu HTML. Bạn sẽ học về các thẻ HTML bắt buộc và cách tổ chức nội dung trong một trang web. Đây là nền tảng quan trọng để xây dựng bất kỳ website nào.

This lesson introduces the basic structure of an HTML document. You will learn about required HTML tags and how to organize content in a web page. This is an important foundation for building any website.
```

---

### 3. Khái niệm chính / Main Concepts
```markdown
## Khái niệm chính / Main Concepts

### [Khái niệm 1]
[Giải thích chi tiết]

### [Khái niệm 2]
[Giải thích chi tiết]
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) cho phần chính / Use heading level 2 (`##`) for main section
- Sử dụng heading level 3 (`###`) cho mỗi khái niệm / Use heading level 3 (`###`) for each concept
- Liệt kê 3-7 khái niệm quan trọng nhất / List 3-7 most important concepts
- Mỗi khái niệm phải có:
  - Định nghĩa rõ ràng / Clear definition
  - Ví dụ code / Code example
  - Giải thích cách sử dụng / Usage explanation

**Ví dụ / Example:**
```markdown
## Khái niệm chính / Main Concepts

### DOCTYPE Declaration

DOCTYPE là khai báo bắt buộc ở đầu mỗi tài liệu HTML để cho trình duyệt biết phiên bản HTML đang sử dụng.

DOCTYPE is a required declaration at the beginning of each HTML document to inform the browser which HTML version is being used.

​```html
<!DOCTYPE html>
​```

### HTML Element

Thẻ `<html>` là phần tử gốc chứa toàn bộ nội dung của trang web.

The `<html>` tag is the root element that contains all content of the web page.

​```html
<html lang="en">
  <!-- Nội dung / Content -->
</html>
​```
```

---

### 4. Lợi ích/Ứng dụng / Benefits/Applications
```markdown
## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- [Lợi ích 1]
- [Lợi ích 2]
- [Lợi ích 3]

### Ứng dụng thực tế / Real-world Applications
- [Ứng dụng 1]
- [Ứng dụng 2]
- [Ứng dụng 3]
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) cho phần chính / Use heading level 2 (`##`) for main section
- Chia thành 2 phần con: Lợi ích và Ứng dụng / Divide into 2 subsections: Benefits and Applications
- Sử dụng bullet points / Use bullet points
- Liệt kê ít nhất 3 lợi ích / List at least 3 benefits
- Liệt kê ít nhất 3 ứng dụng thực tế / List at least 3 real-world applications

**Ví dụ / Example:**
```markdown
## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Chuẩn hóa**: Đảm bảo tài liệu HTML tuân theo chuẩn quốc tế / Ensures HTML document follows international standards
- **Tương thích**: Hỗ trợ hiển thị đúng trên mọi trình duyệt / Supports correct display across all browsers
- **SEO**: Cấu trúc tốt giúp tối ưu hóa công cụ tìm kiếm / Good structure helps search engine optimization
- **Bảo trì**: Dễ dàng bảo trì và mở rộng code / Easy to maintain and extend code

### Ứng dụng thực tế / Real-world Applications
- **Website cá nhân**: Tạo portfolio, blog, CV online / Create portfolio, blog, online CV
- **Landing page**: Xây dựng trang giới thiệu sản phẩm / Build product introduction pages
- **Web application**: Nền tảng cho các ứng dụng web phức tạp / Foundation for complex web applications
- **Email template**: Thiết kế email marketing / Design marketing emails
```

---

## Các phần bổ sung (Tùy chọn) / Additional Sections (Optional)

### Ví dụ hoàn chỉnh / Complete Example
```markdown
## Ví dụ hoàn chỉnh / Complete Example

​```html
[Code example hoàn chỉnh]
​```
```

### Best Practices / Thực hành tốt nhất
```markdown
## Best Practices / Thực hành tốt nhất

- ✅ **DO**: [Nên làm]
- ❌ **DON'T**: [Không nên làm]
```

### Common Mistakes / Lỗi thường gặp
```markdown
## Common Mistakes / Lỗi thường gặp

### Lỗi 1: [Tên lỗi]
**Mô tả**: [Mô tả lỗi]
**Giải pháp**: [Cách sửa]
```

### Tài liệu tham khảo / References
```markdown
## Tài liệu tham khảo / References

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C HTML Specification](https://www.w3.org/)
```

---

## Quy tắc Format / Formatting Rules

### Code Blocks
- Sử dụng syntax highlighting với ngôn ngữ cụ thể / Use syntax highlighting with specific language
- HTML code: ` ```html `
- CSS code: ` ```css `
- JavaScript code: ` ```javascript `

### Alerts / Thông báo
Sử dụng GitHub-style alerts khi cần nhấn mạnh:

Use GitHub-style alerts when emphasis is needed:

```markdown
> [!NOTE]
> Thông tin bổ sung / Additional information

> [!TIP]
> Mẹo hữu ích / Helpful tips

> [!IMPORTANT]
> Thông tin quan trọng / Important information

> [!WARNING]
> Cảnh báo / Warning

> [!CAUTION]
> Cẩn trọng / Caution
```

### Tables / Bảng
Sử dụng bảng để so sánh hoặc liệt kê thông tin có cấu trúc:

Use tables to compare or list structured information:

```markdown
| Thuộc tính | Mô tả | Ví dụ |
|-----------|-------|-------|
| lang      | Ngôn ngữ / Language | `en`, `vi` |
| charset   | Bộ mã ký tự / Character set | `UTF-8` |
```

### Links
- Link nội bộ: `[Tên bài học](./html-topic.md)`
- Link ngoại: `[Tên nguồn](https://example.com)`

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

### Áp dụng cho các thành phần / Apply to Components

#### 1. Tiêu đề / Headings
```markdown
# HTML Forms / Biểu mẫu HTML
## Mô tả / Description
### The `<form>` Element
```

#### 2. Đoạn văn / Paragraphs
**Cách 1: Hai đoạn riêng biệt** (KHUYẾN KHÍCH) / **Method 1: Two separate paragraphs** (RECOMMENDED)
```markdown
Bài học này giới thiệu cách tạo biểu mẫu trong HTML để thu thập dữ liệu từ người dùng. Bạn sẽ học về các thẻ form, input types, và cách xử lý dữ liệu form.

This lesson introduces how to create forms in HTML to collect data from users. You will learn about form tags, input types, and form data handling.
```

**Cách 2: Inline với dấu `/`** (cho nội dung ngắn) / **Method 2: Inline with `/`** (for short content)
```markdown
Format: `YYYY-MM-DD` / Format: `YYYY-MM-DD`
```

#### 3. Danh sách / Lists
**Bullet points:**
```markdown
### Lợi ích / Benefits
- **Chuẩn hóa**: Đảm bảo tài liệu HTML tuân theo chuẩn quốc tế / Ensures HTML document follows international standards
- **Tương thích**: Hỗ trợ hiển thị đúng trên mọi trình duyệt / Supports correct display across all browsers
```

**Hoặc chia làm hai phần riêng:** / **Or split into two sections:**
```markdown
### Lợi ích / Benefits
**Tiếng Việt:**
- Đảm bảo tài liệu HTML tuân theo chuẩn quốc tế
- Hỗ trợ hiển thị đúng trên mọi trình duyệt

**English:**
- Ensures HTML document follows international standards
- Supports correct display across all browsers
```

#### 4. Bảng / Tables
```markdown
| Thuộc tính | Mô tả | Ví dụ |
| Attribute | Description | Example |
|-----------|-------|-------|
| lang      | Ngôn ngữ / Language | `en`, `vi` |
| charset   | Bộ mã ký tự / Character set | `UTF-8` |
```

#### 5. Code Comments / Chú thích Code
```html
<!-- Nội dung / Content -->
<!-- Form elements here / Các phần tử form ở đây -->
```

#### 6. Alerts và Notes
```markdown
> [!NOTE]
> Thông tin bổ sung về cách sử dụng form elements.
> 
> Additional information about using form elements.

> [!TIP]
> Sử dụng `type="email"` để validate email tự động.
> 
> Use `type="email"` to automatically validate email.
```

### Nguyên tắc dịch / Translation Principles

1. **Chính xác về mặt kỹ thuật** / **Technically accurate**
   - Thuật ngữ kỹ thuật nên giữ nguyên hoặc giải thích rõ ràng / Technical terms should be kept or clearly explained
   - Ví dụ: "HTML element" → "HTML element" hoặc "phần tử HTML"

2. **Tự nhiên về ngôn ngữ** / **Natural language**
   - Không dịch máy cứng nhắc / Don't use stiff machine translation
   - Câu văn phải tự nhiên và dễ hiểu / Sentences must be natural and easy to understand

3. **Nhất quán về thuật ngữ** / **Consistent terminology**
   - Sử dụng thuật ngữ thống nhất xuyên suốt tất cả bài học / Use consistent terminology throughout all lessons
   - Tạo glossary cho các thuật ngữ quan trọng / Create glossary for important terms

### Ví dụ đầy đủ / Complete Example

```markdown
## Khái niệm chính / Main Concepts

### The `<form>` Element

Thẻ `<form>` là container chứa tất cả các elements của biểu mẫu. Nó định nghĩa cách dữ liệu sẽ được gửi đến server thông qua các thuộc tính `action` và `method`.

The `<form>` tag is a container that holds all form elements. It defines how data will be sent to the server through the `action` and `method` attributes.

​```html
<!-- Form cơ bản / Basic form -->
<form action="/submit" method="POST">
  <input type="text" name="username">
  <button type="submit">Gửi / Submit</button>
</form>
​```
```

### Ngoại lệ / Exceptions

**Không cần dịch:** / **No translation needed:**
- Code blocks (trừ comments / except comments)
- URLs
- Technical identifiers (tên function, class, variable)
- Tên riêng (proper names)

**Ví dụ:**
```markdown
```html
<!DOCTYPE html>  <!-- Không cần dịch / No translation needed -->
```

### Kiểm tra chất lượng / Quality Check

Trước khi hoàn thành bài học, đảm bảo:

Before completing a lesson, ensure:

- [ ] Tất cả tiêu đề có cả hai ngôn ngữ / All headings have both languages
- [ ] Tất cả đoạn mô tả có cả hai ngôn ngữ / All description paragraphs have both languages
- [ ] Code comments được dịch / Code comments are translated
- [ ] Bullet points có cả hai ngôn ngữ / Bullet points have both languages
- [ ] Alerts và notes được dịch / Alerts and notes are translated
- [ ] Thuật ngữ kỹ thuật nhất quán / Technical terms are consistent
- [ ] Nội dung hai ngôn ngữ tương đương / Content in both languages is equivalent

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

### Ví dụ chuỗi / Example Sequence
```
1. html-introduction.md
   ⬅️ None
   ➡️ html-basic-structure.md

2. html-basic-structure.md
   ⬅️ html-introduction.md
   ➡️ html-elements.md

3. html-elements.md
   ⬅️ html-basic-structure.md
   ➡️ html-attributes.md

... và tiếp tục / and so on
```

---

## Quy tắc Metadata / Metadata Rules

### Ngày tạo / Created Date
- **Không thay đổi** sau khi tạo file lần đầu / **Do not change** after initial file creation
- Format: `YYYY-MM-DD` (ISO 8601)
- Ví dụ: `2025-12-23`

### Ngày cập nhật / Last Updated Date
- **Phải cập nhật** mỗi khi sửa đổi nội dung / **Must update** whenever content is modified
- Format: `YYYY-MM-DD` (ISO 8601)
- Cập nhật ngay cả với thay đổi nhỏ (typo, formatting) / Update even for minor changes (typo, formatting)
- Ví dụ: `2025-12-23`

### Best Practices cho Metadata
- Luôn sử dụng định dạng ngày nhất quán / Always use consistent date format
- Cập nhật ngày khi:
  - Thêm/xóa nội dung / Adding/removing content
  - Sửa lỗi chính tả hoặc ngữ pháp / Fixing typos or grammar
  - Cập nhật ví dụ code / Updating code examples
  - Thay đổi links / Changing links
- Không cập nhật ngày khi chỉ đọc file / Don't update date when only viewing file

---

## Checklist Tạo bài học mới / New Lesson Checklist

Khi tạo một bài học mới, đảm bảo:

When creating a new lesson, ensure:

- [ ] File được đặt tên đúng format `html-[topic].md`
- [ ] Có metadata đầy đủ:
  - [ ] Ngày tạo / Created date
  - [ ] Ngày cập nhật / Last updated date
  - [ ] Link bài trước / Previous lesson link
  - [ ] Link bài sau / Next lesson link
- [ ] Có đầy đủ 4 phần bắt buộc:
  - [ ] Tên bài học / Lesson Title
  - [ ] Mô tả nội dung / Content Description
  - [ ] Khái niệm chính / Main Concepts
  - [ ] Lợi ích/Ứng dụng / Benefits/Applications
- [ ] Code examples được format đúng với syntax highlighting
- [ ] Nội dung song ngữ Anh-Việt (khuyến khích)
- [ ] Có ít nhất một ví dụ code cho mỗi khái niệm
- [ ] Kiểm tra chính tả và ngữ pháp
- [ ] Link tham khảo (nếu có) hoạt động đúng
- [ ] Đã cập nhật links trong bài trước và bài sau (nếu insert vào giữa chuỗi)

---

## Ví dụ File hoàn chỉnh / Complete File Example

```markdown
# HTML Forms / Biểu mẫu HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [HTML Lists](./html-lists.md)  
**➡️ Bài sau / Next:** [HTML Tables](./html-tables.md)

---

## Mô tả / Description

Bài học này giới thiệu cách tạo biểu mẫu trong HTML để thu thập dữ liệu từ người dùng. Bạn sẽ học về các thẻ form, input types, và cách xử lý dữ liệu form. Forms là thành phần quan trọng trong hầu hết các website tương tác.

This lesson introduces how to create forms in HTML to collect data from users. You will learn about form tags, input types, and form data handling. Forms are important components in most interactive websites.

## Khái niệm chính / Main Concepts

### The `<form>` Element

Thẻ `<form>` là container chứa tất cả các elements của biểu mẫu.

The `<form>` tag is a container that holds all form elements.

​```html
<form action="/submit" method="POST">
  <!-- Form elements here -->
</form>
​```

### Input Types

HTML cung cấp nhiều loại input khác nhau cho các mục đích khác nhau.

HTML provides various input types for different purposes.

​```html
<input type="text" name="username" placeholder="Enter username">
<input type="email" name="email" placeholder="Enter email">
<input type="password" name="password">
<input type="submit" value="Submit">
​```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Thu thập dữ liệu**: Dễ dàng thu thập thông tin từ người dùng
- **Validation**: Hỗ trợ kiểm tra dữ liệu ngay trên trình duyệt
- **Accessibility**: Tương thích tốt với screen readers

### Ứng dụng thực tế / Real-world Applications
- **Form đăng ký**: Tạo tài khoản người dùng
- **Form liên hệ**: Nhận feedback từ khách hàng
- **Form tìm kiếm**: Tìm kiếm nội dung trên website
- **Form thanh toán**: Xử lý giao dịch trực tuyến

## Tài liệu tham khảo / References

- [MDN - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [W3C Forms Specification](https://www.w3.org/TR/html52/sec-forms.html)
```

---

## Lưu ý quan trọng / Important Notes

> [!IMPORTANT]
> - Luôn cập nhật **Ngày cập nhật** khi sửa đổi nội dung / Always update **Last Updated** date when modifying content
> - Kiểm tra và cập nhật navigation links khi thêm/xóa bài học / Check and update navigation links when adding/removing lessons
> - Đảm bảo chuỗi bài học có logic progression / Ensure lesson sequence has logical progression

> [!TIP]
> - Sử dụng script hoặc tool để tự động cập nhật ngày / Use scripts or tools to automatically update dates
> - Tạo index file liệt kê tất cả bài học theo thứ tự / Create an index file listing all lessons in order
> - Review toàn bộ chuỗi bài học định kỳ để đảm bảo tính nhất quán / Review entire lesson sequence periodically for consistency
