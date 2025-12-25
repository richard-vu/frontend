# Responsive Design Document Rules / Quy tắc tài liệu Thiết kế Đáp ứng

## Mục đích / Purpose
Tài liệu này định nghĩa cấu trúc và quy tắc cho các bài học về Responsive Design. Mỗi bài học là một file riêng biệt và phải tuân theo format chuẩn.

This document defines the structure and rules for Responsive Design lessons. Each lesson is a separate file and must follow the standard format.

---

## Cấu trúc File / File Structure

### Quy tắc đặt tên / Naming Convention
- Mỗi bài học là một file riêng biệt / Each lesson is a separate file
- Format: `responsive-[topic-name].md`
- Ví dụ / Examples:
  - `responsive-media-queries.md`
  - `responsive-flexbox.md`
  - `responsive-grid.md`

### Vị trí / Location
- Tất cả các file bài học nằm trong thư mục `responsive-design/` (hoặc thư mục tương ứng)
- All lesson files are located in the `responsive-design/` directory (or corresponding directory)

---

## Template Bài học / Lesson Template

Mỗi file bài học **BẮT BUỘC** phải bao gồm các phần sau theo thứ tự:

Each lesson file **MUST** include the following sections in order:

### 1. Metadata (Phần đầu file) / Metadata (Top of file)

**BẮT BUỘC** - Mỗi file phải bắt đầu với metadata section ngay sau tiêu đề chính:

**REQUIRED** - Each file must start with a metadata section right after the main title:

```markdown
# [Tên bài học / Lesson Name]

---

**📅 Ngày tạo / Created:** YYYY-MM-DD  
**📅 Ngày cập nhật / Last Updated:** YYYY-MM-DD

**⬅️ Bài trước / Previous:** [Tên bài trước](./responsive-previous-topic.md)  
**➡️ Bài sau / Next:** [Tên bài sau](./responsive-next-topic.md)

---
```

**Quy tắc / Rules:**
- **Ngày tạo / Created**: Ngày tạo file lần đầu / Date when file was first created
- **Ngày cập nhật / Last Updated**: Ngày sửa đổi gần nhất / Date of most recent modification
- **Bài trước / Previous**: Link tới bài học trước đó / Link to previous lesson
  - Nếu là bài đầu tiên, ghi: `Không có / None` / If first lesson, write: `Không có / None`
- **Bài sau / Next**: Link tới bài học tiếp theo / Link to next lesson
  - Nếu là bài cuối cùng, ghi: `Không có / None` / If last lesson, write: `Không có / None`

### 2. Tên bài học / Lesson Name (Title)

```markdown
# [Tên bài học tiếng Việt] / [Lesson Name in English]
```

**Quy tắc / Rules:**
- Sử dụng heading level 1 (`#`) / Use heading level 1 (`#`)
- Song ngữ Anh-Việt / Bilingual English-Vietnamese

### 3. Mô tả nội dung bài học / Lesson Content Description

```markdown
## Mô tả / Description

[Mô tả chi tiết về nội dung bài học bằng tiếng Việt]

[Detailed description of the lesson content in English]
```

**Quy tắc / Rules:**
- Mô tả ngắn gọn về nội dung bài học / Brief description of the lesson content
- **BẮT BUỘC** hai đoạn riêng biệt: tiếng Việt trước, tiếng Anh sau / **MANDATORY** two separate paragraphs: Vietnamese first, English second

### 4. Chủ đề chính / Main Topic

```markdown
## Chủ đề chính / Main Topic

### [Chủ đề 1]
[Giải thích tiếng Việt]

[Explanation in English]

### [Chủ đề 2]
[Giải thích tiếng Việt]

[Explanation in English]
```

**Quy tắc / Rules:**
- Trình bày các kiến thức cốt lõi của bài học / Present the core knowledge of the lesson
- Giải thích rõ ràng, súc tích / Clear and concise explanation
- Song ngữ Việt-Anh / Bilingual Vietnamese-English

---

## Quy tắc Liên kết / Link Rules

- **Bài trước / Previous**: Phải link chính xác đến file bài học trước đó trong lộ trình học.
- **Bài sau / Next**: Phải link chính xác đến file bài học tiếp theo trong lộ trình học.
- **Cập nhật / Update**: Khi thêm hoặc xóa bài học, phải cập nhật lại link của các bài liền kề.

- **Previous**: Must link accurately to the previous lesson file in the learning path.
- **Next**: Must link accurately to the next lesson file in the learning path.
- **Update**: When adding or removing a lesson, links of adjacent lessons must be updated.

---

## Quy tắc Ngày tháng / Date Rules

- **Ngày tạo / Created**: Giữ nguyên ngày tạo file gốc / Keep original file creation date
- **Ngày cập nhật / Last Updated**: Cập nhật sang ngày hiện tại mỗi khi có thay đổi nội dung / Update to current date whenever content is changed
- **Format**: `YYYY-MM-DD`

---

## Quy tắc Song ngữ / Bilingual Rules

> [!IMPORTANT]
> **BẮT BUỘC** - Tất cả nội dung bài học phải được viết bằng song ngữ Việt-Anh.
> 
> **MANDATORY** - All lesson content must be written in bilingual Vietnamese-English format.

- Tiếng Việt viết trước, Tiếng Anh viết sau / Vietnamese first, English second
- Đảm bảo ý nghĩa tương đương / Ensure equivalent meaning

---

## Ví dụ File hoàn chỉnh / Complete File Example

```markdown
# Media Queries / Media Queries

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Introduction to Responsive Design](./responsive-intro.md)  
**➡️ Bài sau / Next:** [Flexible Layouts](./responsive-flexible-layouts.md)

---

## Mô tả / Description

Bài học này giải thích về Media Queries, một kỹ thuật CSS cơ bản để áp dụng các kiểu dáng khác nhau cho các kích thước màn hình khác nhau.

This lesson explains Media Queries, a fundamental CSS technique to apply different styles for different screen sizes.

## Chủ đề chính / Main Topic

### Cú pháp cơ bản / Basic Syntax
Media queries sử dụng từ khóa `@media` để định nghĩa các quy tắc css có điều kiện.

Media queries use the `@media` keyword to define conditional css rules.

### Breakpoints / Điểm ngắt
Các điểm kích thước màn hình phổ biến để thay đổi layout (ví dụ: 768px cho tablet, 1024px cho desktop).

Common screen size points to change layout (e.g., 768px for tablet, 1024px for desktop).
```
