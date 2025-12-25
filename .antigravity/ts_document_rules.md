# Quy tắc Tài liệu TypeScript / TypeScript Documentation Rules

Tài liệu này quy định cách viết và cấu trúc các bài học TypeScript trong dự án.
This document defines how to write and structure TypeScript lessons in the project.

## 1. Quy tắc chung / General Rules

*   **Một file cho một bài học / One file per lesson**: Mỗi bài học phải được viết trong một file Markdown riêng biệt. / Each lesson must be written in a separate Markdown file.
*   **Ngôn ngữ / Language**: Tất cả nội dung phải được viết bằng song ngữ Việt - Anh. / All content must be written in bilingual Vietnamese - English.
*   **Vị trí / Location**: Các file bài học được lưu trong thư mục `typescript/`. / Lesson files are stored in the `typescript/` directory.

## 2. Cấu trúc bài học / Lesson Structure

Mỗi file bài học phải bao gồm các phần sau theo thứ tự:
Each lesson file must include the following sections in order:

### A. Metadata (Đầu file / Top of file)
*   **Ngày tạo / Created Date**: Ngày tạo file.
*   **Ngày cập nhật / Updated Date**: Ngày cập nhật gần nhất.

### B. Nội dung / Content

1.  **Tên học phần / Module Name** (Tiêu đề H1 / H1 Title)
2.  **Mô tả tóm tắt / Short Description**:
    *   Tóm tắt nội dung bài học.
    *   Summarize the lesson content.
3.  **Khái niệm chính / Main Concepts**:
    *   Giải thích các khái niệm cốt lõi, định nghĩa.
    *   Explain core concepts, definitions.
4.  **Lợi ích/Ứng dụng / Benefits/Applications**:
    *   Tại sao cần sử dụng tính năng này? Nó giải quyết vấn đề gì?
    *   Why use this feature? What problem does it solve?
5.  **Ví dụ / Example**:
    *   Đoạn code minh họa rõ ràng, dễ hiểu.
    *   Clear, easy-to-understand code snippets.

### C. Điều hướng / Navigation (Cuối file / Bottom of file)
*   Link tới bài học trước đó (nếu có). / Link to the previous lesson (if applicable).
*   Link tới bài học tiếp theo (nếu có). / Link to the next lesson (if applicable).

---

## 3. Template Mẫu / Sample Template

Dưới đây là mẫu chuẩn cho một file bài học TypeScript:
Below is the standard template for a TypeScript lesson file:

```markdown
<!--
Ngày tạo / Created: 202X-XX-XX
Ngày cập nhật / Updated: 202X-XX-XX
-->

# [Tên Bài Học / Lesson Name]

## 1. Mô tả tóm tắt / Short Description
**VN**: [Mô tả ngắn gọn về nội dung bài học...]
**EN**: [Brief description of the lesson content...]

## 2. Khái niệm chính / Main Concepts
**VN**:
*   [Khái niệm 1...]
*   [Khái niệm 2...]

**EN**:
*   [Concept 1...]
*   [Concept 2...]

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   [Lợi ích 1...]
*   [Ứng dụng thực tế...]

**EN**:
*   [Benefit 1...]
*   [Real-world application...]

## 4. Ví dụ / Example

```typescript
// [Mô tả ví dụ / Example description]
function example() {
  console.log("Hello TypeScript");
}
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Tên bài trước](./previous-lesson.md) | [Bài sau / Next: Tên bài sau](./next-lesson.md) >
```
