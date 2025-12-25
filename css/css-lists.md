# CSS Lists / Danh sách trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Blend Modes](./css-blend-modes.md)  
**➡️ Bài sau / Next:** [Counters](./css-counters.md)

---

## Mô tả / Description

Danh sách (Lists) là thành phần cơ bản của mọi website, từ menu điều hướng đến các bài viết liệt kê. CSS cung cấp các thuộc tính để tùy chỉnh dấu đầu dòng (marker), vị trí của chúng, hoặc thậm chí thay thế chúng bằng hình ảnh.

Lists are a fundamental component of every website, from navigation menus to listicles. CSS provides properties to customize markers (bullets/numbers), their position, or even replace them with images.

## Khái niệm chính / Main Concepts

### 1. `list-style-type` / Kiểu dấu đầu dòng

Thay đổi hình dạng dấu bullet hoặc kiểu số.

Change the bullet shape or number style.

- **Unordered List (`<ul>`)**: `disc` (tròn đặc - mặc định), `circle` (tròn rỗng), `square` (vuông), `none` (ẩn).
- **Ordered List (`<ol>`)**: `decimal` (1, 2, 3), `lower-alpha` (a, b, c), `upper-roman` (I, II, III).

```css
ul.clean {
    list-style-type: none; /* Ẩn dấu chấm, thường dùng cho menu */
    padding: 0; /* Reset padding mặc định */
}

ol.roman {
    list-style-type: upper-roman; /* I, II, III */
}
```

### 2. `list-style-position` / Vị trí dấu đầu dòng

Quyết định dấu chấm nằm bên trong hay bên ngoài khung nội dung (content flow).

Decides whether the marker sits inside or outside the content flow.

- `outside` (mặc định): Dấu chấm nằm ngoài, văn bản thẳng hàng.
- `inside`: Dấu chấm nằm trong dòng văn bản đầu tiên.

```css
ul {
    list-style-position: inside;
}
```

### 3. `list-style-image` / Ảnh dấu đầu dòng

Thay thế dấu chấm bằng một hình ảnh nhỏ.

Replaces the bullet with a small image.

```css
ul.custom-icon {
    list-style-image: url('star-icon.png');
}
```

### 4. `::marker` Pseudo-element / Phần tử giả Marker

(Đã nhắc ở bài Pseudo-elements) Đây là cách hiện đại và linh hoạt nhất để đổi màu hoặc font của dấu chấm mà không ảnh hưởng đến nội dung `<li>`.

(Mentioned in Pseudo-elements lesson) This is the modern and most flexible way to change the marker's color or font without affecting the `<li>` content.

```css
li::marker {
    color: red;
    font-size: 1.5em;
    content: "👉 "; /* Thay thế nội dung marker */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Customization**: Thoát khỏi dấu chấm đen nhàm chán mặc định.
- **Control**: Kiểm soát lề thụt đầu dòng (indentation) tốt hơn với `list-style-position`.
- **Semantic**: Giữ đúng cấu trúc HTML `<ul>` `<ol>` (tốt cho SEO) nhưng vẫn có giao diện đẹp như ý.

### Ứng dụng thực tế / Real-world Applications
- **Navigation Bars**: Menu ngang thường là `<ul>` với `list-style: none` và `display: flex`.
- **Breadcrumbs**: Danh sách liên kết điều hướng.
- **Checklists**: Danh sách công việc với icon checkmark xanh.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `list-style: none` cho các danh sách dùng làm bố cục (layout) như Card Grid hay Menu.
- ✅ **DO**: Reset `padding-left: 0` khi dùng `list-style: none` vì trình duyệt thường có padding mặc định cho `ul`.
- ❌ **DON'T**: Đừng dùng `list-style-image` nếu icon cần căn chỉnh phức tạp (size, position). Hãy dùng `background-image` hoặc `::before` để kiểm soát tốt hơn.

## Ví dụ hoàn chỉnh / Complete Example

### Custom Markers Style

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: system-ui; padding: 40px; }

        /* 1. Reset list style for clean menu */
        .menu {
            list-style: none; /* Xóa dấu chấm */
            padding: 0;
            display: flex;
            gap: 20px;
            background: #f0f0f0;
            padding: 10px;
            border-radius: 4px;
        }

        .menu li a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }

        /* 2. Custom Marker Color */
        .colored-bullets li::marker {
            color: #3498db;
            font-size: 1.2em;
        }

        /* 3. Custom Emoji Marker */
        .emoji-list {
            list-style: none; /* Tắt mặc định để dùng ::before hoặc để content marker */
        }
        
        .emoji-list li::marker {
            content: "✅ "; /* Thay bằng emoji */
        }

        /* 4. Inside vs Outside */
        .pos-outside { list-style-position: outside; border: 1px solid #ccc; width: 200px; margin-bottom: 20px;}
        .pos-inside { list-style-position: inside; border: 1px solid #ccc; width: 200px; }
    </style>
</head>
<body>

    <h3>1. Navigation Menu (No bullets)</h3>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
    </ul>

    <h3>2. Colored Bullets</h3>
    <ul class="colored-bullets">
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    </ul>

    <h3>3. Emoji List</h3>
    <ul class="emoji-list">
        <li>Task Completed</li>
        <li>Task Verified</li>
        <li>Task Archived</li>
    </ul>

    <h3>4. Outside vs Inside Position</h3>
    <ul class="pos-outside">
        <li>Outside: Text aligns cleanly on the left edge. Marker hangs out.</li>
    </ul>
    <ul class="pos-inside">
        <li>Inside: Marker is part of the text flow. Second line wraps under the marker.</li>
    </ul>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Styling Lists](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)
- [MDN - list-style](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)
