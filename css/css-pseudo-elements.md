# CSS Pseudo-elements / Phần tử giả trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Spacing](./css-spacing.md)  
**➡️ Bài sau / Next:** [Pseudo-classes](./css-pseudo-classes.md)

---

## Mô tả / Description

Pseudo-elements (phần tử giả) cho phép bạn tạo kiểu cho một phần cụ thể của phần tử, hoặc chèn nội dung bổ sung vào trang web mà không cần thêm thẻ HTML. Chúng giống như những phần tử "ảo" được CSS tạo ra. Pseudo-elements được phân biệt với Pseudo-classes bằng hai dấu hai chấm `::` (ví dụ `::before` khác `:hover`).

Pseudo-elements allow you to style a specific part of an element, or insert additional content into a webpage without adding HTML tags. They are like "virtual" elements created by CSS. Pseudo-elements are distinguished from Pseudo-classes by double colons `::` (e.g., `::before` vs `:hover`).

## Khái niệm chính / Main Concepts

### 1. `::before` & `::after`

Hai pseudo-elements phổ biến nhất. Dùng để chèn nội dung vào trước hoặc sau nội dung của phần tử. **Bắt buộc** phải có thuộc tính `content`.

The two most common pseudo-elements. Used to insert content before or after an element's content. The `content` property is **mandatory**.

```css
.button::before {
    content: "👉"; /* Chèn emoji trước nút bấm / Insert emoji before button */
    margin-right: 5px;
}

.required::after {
    content: "*";
    color: red;
    margin-left: 2px;
}
```

### 2. `::first-line` & `::first-letter`

Tạo kiểu cho dòng đầu tiên hoặc chữ cái đầu tiên của đoạn văn bản. Thường dùng trong báo chí, tạp chí.

Style the first line or first letter of a text block. Often used in journalism and magazines.

```css
p::first-letter {
    font-size: 3em;
    font-weight: bold;
    float: left;
    margin-right: 5px;
    line-height: 1;
    color: #3498db;
}

p::first-line {
    font-variant: small-caps; /* Chữ in hoa nhỏ cho dòng đầu */
}
```

### 3. `::marker`

Tạo kiểu cho dấu đầu dòng (bullet point) của danh sách `<ul>` hoặc số của `<ol>`.

Style the bullet point (marker) of a `<ul>` list or number of an `<ol>`.

```css
li::marker {
    color: #e74c3c;
    content: "✓ "; /* Thay đổi dấu bullet mặc định */
    font-size: 1.2em;
}
```

### 4. `::selection`

Tạo kiểu cho phần văn bản đang được người dùng bôi đen (highlight).

Style the portion of text that is currently selected (highlighted) by the user.

```css
::selection {
    background: #f1c40f;
    color: black;
}
```

### 5. `attr()` function in `content`

Bạn có thể lấy giá trị từ thuộc tính HTML để đưa vào CSS.

You can retrieve values from HTML attributes to use in CSS.

```css
/* Tooltip đơn giản dùng data-tooltip */
.tooltip::after {
    content: attr(data-tooltip); /* Lấy nội dung từ attribute */
    /* ...style for tooltip... */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Cleaner HTML**: Không cần thêm các thẻ `<span>` hay `<div>` rỗng chỉ để trang trí.
- **Visual Effects**: Tạo hiệu ứng trang trí phức tạp (ribbon, overlays, quotes).
- **Automation**: Tự động thêm biểu tượng, số thứ tự, hoặc văn bản lặp lại.

### Ứng dụng thực tế / Real-world Applications
- **Breadcrumbs**: Thêm dấu `/` giữa các link (`li + li::before { content: "/"; }`).
- **Icons**: Thêm icon phía trước link mở tab mới hoặc link PDF.
- **Overlay**: Tạo lớp phủ mờ trên hình ảnh bằng `::after` với `position: absolute`.
- **Clearfix**: Kỹ thuật cũ để clear float (`.clearfix::after { clear: both; }`).

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Dùng `::` (2 dấu) cho pseudo-elements để đúng chuẩn CSS3 (dù trình duyệt vẫn hỗ trợ `:` cho before/after).
- ✅ **DO**: Sử dụng `aria-hidden="true"` hoặc thuộc tính `alt` thay thế nếu nội dung chèn vào mang ý nghĩa quan trọng (vì Screen Reader có thể bỏ qua hoặc đọc khó hiểu).
- ❌ **DON'T**: Đừng dùng pseudo-elements để chèn nội dung quan trọng (Văn bản chính, thông báo lỗi quan trọng). Nội dung này không thể chọn (select) bằng chuột được.
- ❌ **DON'T**: `::before` và `::after` không hoạt động trên các thẻ tự đóng (replaced elements) như `<img>`, `<input>`, `<br>` ở một số trình duyệt.

## Ví dụ hoàn chỉnh / Complete Example

Demo Quote & Button effects.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: ui-sans-serif, system-ui; padding: 40px; }

        /* 1. Blockquote Stylized */
        blockquote {
            position: relative;
            background: #f9f9f9;
            padding: 20px 40px;
            margin: 0 0 40px 0;
            border-left: 5px solid #3498db;
            font-size: 1.1em;
        }

        /* Dấu ngoặc kép ảo khổng lồ */
        blockquote::before {
            content: "“";
            font-size: 80px;
            color: #ddd;
            position: absolute;
            left: 10px;
            top: -20px;
            font-family: serif;
        }

        /* 2. Button with Hover Effect */
        .btn {
            position: relative;
            padding: 12px 24px;
            background: transparent;
            border: 2px solid #333;
            color: #333;
            text-decoration: none;
            font-weight: bold;
            overflow: hidden; /* Quan trọng để che phần tử giả */
            display: inline-block;
            transition: color 0.3s;
            z-index: 1;
        }

        /* Tạo lớp nền trượt */
        .btn::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            height: 100%;
            background: #333;
            z-index: -1;
            /* Ban đầu lệch sang trái 100% */
            transform: translateX(-100%); 
            transition: transform 0.3s ease;
        }

        .btn:hover {
            color: white;
        }

        .btn:hover::before {
            transform: translateX(0); /* Trượt vào khi hover */
        }
        
    </style>
</head>
<body>

    <h3>Blockquote Design</h3>
    <blockquote>
        Pseudo-elements are like free DOM nodes. Free decoration, free structure, cleaner HTML.
        <br><cite>- A CSS Developer</cite>
    </blockquote>

    <h3>Button Effect</h3>
    <a href="#" class="btn">Hover Me Slide</a>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [CSS-Tricks - ::before & ::after](https://css-tricks.com/almanac/selectors/a/after-and-before/)
