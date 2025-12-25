# CSS Logical Properties / Thuộc tính Logic CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Grid](./css-grid.md)  
**➡️ Bài sau / Next:** [Custom Properties](./css-custom-properties.md)

---

## Mô tả / Description

Thuộc tính Logic (Logical Properties) trong CSS là cách định nghĩa layout dựa trên *ngữ cảnh văn bản* (Block và Inline) thay vì *hướng vật lý* cố định (Trái, Phải, Trên, Dưới). Trong thế giới web đa ngôn ngữ hiện đại, không phải tất cả ngôn ngữ đều đọc từ trái sang phải, trên xuống dưới. Logical Properties giúp website của bạn tự động thích ứng với các chế độ viết khác nhau (như tiếng Nhật dọc, tiếng Ả Rập phải sang trái) mà không cần viết lại CSS.

Logical Properties in CSS define layout based on *text context* (Block and Inline) instead of fixed *physical directions* (Left, Right, Top, Bottom). In the modern multilingual web, not all languages are read from left to right, top to bottom. Logical Properties help your website automatically adapt to different writing modes (like vertical Japanese, right-to-left Arabic) without rewriting CSS.

## Khái niệm chính / Main Concepts

### 1. Block Axis vs Inline Axis / Trục Khối và Trục Dòng

- **Block Axis**: Hướng mà các khối đoạn văn được xếp chồng lên nhau (mặc định là từ trên xuống dưới).
- **Inline Axis**: Hướng mà văn bản chạy trong một dòng (mặc định là từ trái sang phải).

- **Block Axis**: The direction paragraphs are stacked (defaults to top-to-bottom).
- **Inline Axis**: The direction text runs within a line (defaults to left-to-right).

### 2. Logical Sizing / Kích thước Logic

Thay vì `width` và `height`, chúng ta sử dụng `inline-size` và `block-size`.

Instead of `width` and `height`, we use `inline-size` and `block-size`.

```css
.box {
    /* Thay vì / Instead of: width: 300px; */
    inline-size: 300px;
    
    /* Thay vì / Instead of: height: 200px; */
    block-size: 200px;
}
```

### 3. Logical Margin & Padding / Căn lề và Đệm Logic

Thay thế Top, Bottom, Left, Right bằng Start và End.

Replace Top, Bottom, Left, Right with Start and End.

```css
.card {
    /* top & bottom -> block */
    margin-block: 20px;       /* margin-top & margin-bottom */
    margin-block-start: 20px; /* margin-top */
    margin-block-end: 20px;   /* margin-bottom */
    
    /* left & right -> inline */
    padding-inline: 15px;       /* padding-left & padding-right */
    padding-inline-start: 15px; /* padding-left (LTR) or padding-right (RTL) */
    padding-inline-end: 15px;   /* padding-right (LTR) or padding-left (RTL) */
}
```

### 4. Logical Borders / Viền Logic

Tương tự margin và padding.

Similar to margin and padding.

```css
.quote {
    /* Viền bên trái văn bản (theo hướng đọc) */
    /* Border on the start side of text (reading direction) */
    border-inline-start: 5px solid blue;
    
    /* Viền trên cùng các khối */
    /* Border on top of blocks */
    border-block-start: 1px solid #ccc;
}
```

### 5. Logical Positioning / Định vị Logic

Dùng cho `position: absolute` hoặc `fixed`.

Used for `position: absolute` or `fixed`.

```css
.badge {
    position: absolute;
    /* Thay vì / Instead of: top: 10px; right: 10px; */
    inset-block-start: 10px;
    inset-inline-end: 10px;
}
```

### 6. Text Alignment / Căn chỉnh văn bản

```css
.text {
    /* Thay vì / Instead of: text-align: right; */
    text-align: end; 
    
    /* Thay vì / Instead of: text-align: left; */
    text-align: start;
}
```

### 7. Writing Modes / Chế độ viết

Thuộc tính này thay đổi trục Block và Inline, chứng minh sức mạnh của Logical Properties.

This property changes Variable Block and Inline axes, demonstrating the power of Logical Properties.

```css
.vertical-text {
    /* Văn bản chạy dọc từ phải sang trái (Tiếng Nhật/Trung truyền thống) */
    /* Text flows vertically right-to-left (Traditional Japanese/Chinese) */
    writing-mode: vertical-rl; 
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Internationalization (i18n)**: Tự động hỗ trợ giao diện RTL (Right-to-Left) như tiếng Ả Rập/Do Thái mà không cần CSS riêng (VD: `margin-left` không cần đổi thành `margin-right`).
- **Maintainability**: Code một lần, chạy mọi hướng ngữ cảnh.
- **Component Portability**: Các component có thể đặt vào container ngang hay dọc đều hoạt động đúng.

### Ứng dụng thực tế / Real-world Applications
- **Multi-language CMS**: Các hệ quản trị nội dung hỗ trợ nhiều ngôn ngữ.
- **Vertical Navigation**: Menu dọc bên trái hoặc phải.
- **Typography Layouts**: Các thiết kế tạp chí sáng tạo với chữ chạy dọc.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Bắt đầu sử dụng `margin-inline`, `padding-inline` cho các khoảng cách ngang thay vì `left/right`.
- ✅ **DO**: Sử dụng `text-align: start/end` thay vì `left/right`.
- ✅ **DO**: Kiểm tra layout với `dir="rtl"` trên thẻ html để đảm bảo tính đúng đắn.
- ❌ **DON'T**: Đừng trộn lẫn physical (top/left) và logical properties trong cùng một element nếu không cần thiết, gây khó hiểu.

## Ví dụ hoàn chỉnh / Complete Example

Cùng xem một component "User Card" hoạt động như thế nào trong 2 chế độ khác nhau.

Let's see how a "User Card" component behaves in 2 different modes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Logical Properties Demo</title>
    <style>
        body {
            font-family: system-ui, sans-serif;
            display: flex;
            gap: 50px;
            padding: 50px;
            background: #f0f2f5;
        }

        /* Container cho chế độ mặc định (LTR) */
        .mode-ltr {
            direction: ltr;
        }

        /* Container cho chế độ viết dọc (Vertical RL) */
        .mode-vertical {
            writing-mode: vertical-rl;
        }

        .card {
            background: white;
            /* Logical sizing */
            inline-size: 300px; /* Width in LTR, Height in Vertical */
            /* block-size: auto; */
            
            /* Logical padding */
            padding-block: 20px;
            padding-inline: 30px;
            
            /* Logical border */
            border-inline-start: 5px solid #3498db; /* Blue bar at start */
            
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .title {
            /* Logical margin */
            margin-block-end: 15px; /* Margin bottom usually */
            font-size: 1.5rem;
            font-weight: bold;
        }

        .content {
            line-height: 1.6;
        }

        .btn {
            display: inline-block;
            margin-block-start: 20px;
            padding-block: 10px;
            padding-inline: 20px;
            background: #2c3e50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <!-- Chế độ 1: Mặc định (Tiếng Anh/Việt) -->
    <div class="mode-ltr">
        <h3>Horizontal Mode (LTR)</h3>
        <div class="card">
            <div class="title">Hello World</div>
            <div class="content">
                This card uses logical properties. margin-inline works on the horizontal axis here.
            </div>
            <a href="#" class="btn">Read More &rarr;</a>
        </div>
    </div>

    <!-- Chế độ 2: Viết dọc (Mô phỏng Tiếng Nhật) -->
    <div class="mode-vertical">
        <h3>Vertical Mode (TB-RL)</h3>
        <div class="card">
            <div class="title">こんにちは (Hello)</div>
            <div class="content">
                This text runs vertically. Notice how width/height and margins rotated automatically!
            </div>
            <a href="#" class="btn">Read &darr;</a>
        </div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties_and_Values)
- [CSS-Tricks - CSS Logical Properties](https://css-tricks.com/css-logical-properties/)
