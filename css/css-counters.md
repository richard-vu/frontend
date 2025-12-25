# CSS Counters / Bộ đếm trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Lists](./css-lists.md)  
**➡️ Bài sau / Next:** [Transitions](./css-transitions.md)

---

## Mô tả / Description

CSS Counters giống như "biến số" dùng để đếm số lượng phần tử. Nó cho phép bạn tự động đánh số thứ tự cho tiêu đề, mục lục, hoặc bất kỳ phần tử lặp lại nào mà không cần dùng `<ol>` hay viết thủ công (1., 2., 3...). Thậm chí nó hỗ trợ đếm lồng nhau (1.1, 1.2, 2.1...).

CSS Counters are like "variables" for counting elements. They allow you to automatically number headers, table of contents, or any repetitive elements without using `<ol>` or manual typing (1., 2., 3...). It even supports nested counting (1.1, 1.2, 2.1...).

## Khái niệm chính / Main Concepts

### 1. `counter-reset` / Khởi tạo bộ đếm

Tạo hoặc reset lại giá trị của bộ đếm. Thường đặt ở phần tử cha.

Creates or resets the counter value. Usually placed on the parent element.

```css
body {
    /* Tạo bộ đếm tên là 'section-counter', bắt đầu từ 0 */
    counter-reset: section-counter 0;
}
```

### 2. `counter-increment` / Tăng bộ đếm

Tăng giá trị của bộ đếm lên (mặc định là 1). Đặt ở phần tử muốn đếm.

Increments the counter value (default is 1). Placed on the element being counted.

```css
h2 {
    /* Tăng counter mỗi khi gặp thẻ h2 */
    counter-increment: section-counter; 
}
```

### 3. `content: counter()` / Hiển thị bộ đếm

Dùng trong pseudo-element `::before` để in số ra màn hình.

Used in `::before` pseudo-element to print the number.

```css
h2::before {
    content: "Section " counter(section-counter) ": ";
    /* Kết quả: "Section 1: " */
    color: gray;
}
```

### 4. Nested Counters / Bộ đếm lồng nhau

Sử dụng hàm `counters()` (có s) để nối các cấp độ bằng dấu phân cách.

Using the `counters()` function (with 's') to join levels with a separator.

```css
ol {
    counter-reset: item;
    list-style: none;
}
li::before {
    counter-increment: item;
    content: counters(item, ".") " "; 
    /* Kết quả: 1.1, 1.2, 1.2.1 ... */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Automatic**: Không cần sửa lại số thủ công khi chèn thêm mục vào giữa danh sách.
- **Flexible Styling**: Style số riêng biệt với nội dung (màu sắc, kích thước, font).
- **Complex Hierarchies**: Xử lý tốt các tài liệu pháp lý hoặc kỹ thuật phức tạp (Điều 1, Khoản 2, Mục a).

### Ứng dụng thực tế / Real-world Applications
- **Table of Contents**: Mục lục tự động đánh số chương hồi.
- **Top Lists**: Xếp hạng Top 10 với số thứ tự được style đẹp mắt.
- **Pagination**: Đếm số trang.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Đặt tên counter rõ ràng, dễ hiểu (vd: `chapter`, `figure`, `step`).
- ✅ **DO**: Sử dụng `list-style: none` trên `ol` nếu bạn muốn dùng Counters tùy chỉnh thay thế số mặc định của trình duyệt.
- ❌ **DON'T**: Đừng dùng Counters cho dữ liệu không có thứ tự logic, gây hiểu nhầm cho người đọc.

## Ví dụ hoàn chỉnh / Complete Example

### Automatic Chapter Numbering

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: system-ui;
            padding: 40px;
            counter-reset: chapter; /* Khởi tạo bộ đếm chương */
        }

        h2 {
            counter-increment: chapter; /* Tăng +1 */
            counter-reset: section; /* Reset bộ đếm mục con cho chương mới */
        }

        h2::before {
            content: "Chapter " counter(chapter) ". ";
            color: #e74c3c;
        }

        h3 {
            counter-increment: section;
            margin-left: 20px;
        }

        h3::before {
            content: counter(chapter) "." counter(section) " ";
            color: #3498db;
        }
    </style>
</head>
<body>

    <h1>My Book Title</h1>

    <h2>Introduction</h2>
    <h3>Motivation</h3>
    <h3>History</h3>

    <h2>Main Concepts</h2>
    <h3>Concept A</h3>
    <h3>Concept B</h3>
    <h3>Concept C</h3>

    <h2>Conclusion</h2>
    <h3>Summary</h3>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Using CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- [CSS-Tricks - Counter Increment](https://css-tricks.com/almanac/properties/c/counter-increment/)
