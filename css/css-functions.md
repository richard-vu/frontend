# CSS Functions / Hàm trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Popover](./css-popover.md)  
**➡️ Bài sau / Next:** [Shapes & Masks](./css-shapes-and-masks.md)

---

## Mô tả / Description

CSS không chỉ là các cặp thuộc tính-giá trị tĩnh. Nó cung cấp nhiều hàm (functions) mạnh mẽ để tính toán giá trị, điều khiển màu sắc, lấy dữ liệu và xử lý URL. Nắm vững các hàm này giúp CSS của bạn trở nên linh hoạt và thông minh hơn (lập trình hơn).

CSS is not just static property-value pairs. It provides many powerful functions to calculate values, manipulate colors, retrieve data, and handle URLs. Mastering these functions makes your CSS more flexible and intelligent (more programmatic).

## Khái niệm chính / Main Concepts

### 1. Math Functions / Hàm Toán học

Các hàm phổ biến nhất để tính toán kích thước.

The most common functions for calculating sizes.

- `calc()`: Thực hiện phép tính toán học cơ bản (+, -, *, /) kết hợp nhiều đơn vị khác nhau.
- `min()`: Chọn giá trị nhỏ nhất trong danh sách.
- `max()`: Chọn giá trị lớn nhất trong danh sách.
- `clamp()`: Giới hạn giá trị trong một khoảng (min, preferred, max).

```css
.container {
    /* Chiều rộng bằng 100% trừ đi 50px lề */
    width: calc(100% - 50px);
    
    /* Chiều rộng TỐI ĐA là 500px, nếu màn hình nhỏ hơn thì 50% */
    width: min(50%, 500px);
    
    /* Fluid typography: Tối thiểu 1rem, ưu tiên 5vw, tối đa 3rem */
    font-size: clamp(1rem, 5vw, 3rem);
}
```

### 2. URL Functions / Hàm URL

Dùng để tham chiếu đến tài nguyên bên ngoài.

Used to reference external resources.

```css
.bg {
    background-image: url("images/pattern.png");
}

@font-face {
    src: url("fonts/myfont.woff2") format("woff2");
}
```

### 3. Attribute Functions / Hàm thuộc tính

- `attr()`: Lấy giá trị của thuộc tính HTML (đã học ở bài Pseudo-elements).
- `var()`: Lấy giá trị của biến CSS (đã học ở bài Custom Properties).

```css
.tooltip::after {
    content: attr(data-tooltip);
    color: var(--text-color);
}
```

### 4. Color Functions / Hàm Màu sắc

Ngoài `rgb()`, `hsl()`, CSS hiện đại có thêm:
- `color-mix()`: Trộn hai màu với nhau theo tỷ lệ.
- `light-dark()`: Tự động chọn màu dựa trên chế độ sáng/tối của hệ thống (cần `color-scheme`).

```css
.element {
    /* Trộn 70% đỏ với xanh */
    color: color-mix(in srgb, red 70%, blue);
    
    /* Tự động đổi màu theo theme */
    background-color: light-dark(white, black);
}
```

### 5. Shape Functions / Hàm Hình dạng

Dùng trong `clip-path` hoặc `shape-outside`.
- `circle()`, `ellipse()`, `polygon()`, `path()`.

```css
.avatar {
    clip-path: circle(50%);
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Responsiveness**: `clamp()` và `min()`/`max()` giúp tạo layout linh hoạt mà không cần Media Queries.
- **Dynamic Calculation**: `calc()` cho phép trộn lẫn `%` và `px`, điều mà trước đây không thể làm được.
- **Theming**: Các hàm màu mới giúp tạo biến thể màu (đậm hơn/nhạt hơn) tự động từ một màu gốc.

### Ứng dụng thực tế / Real-world Applications
- **Fluid Typography**: Cỡ chữ tự động to nhỏ mượt mà theo màn hình (`clamp`).
- **Dynamic Spacing**: Khoảng cách thích ứng (`min(5vw, 20px)`).
- **Aspect Ratio Boxes**: (Mẹo cũ dùng `padding-top: calc(...)`), giờ đã có `aspect-ratio` nhưng `calc` vẫn hữu ích để tinh chỉnh.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `clamp()` cho font-size để đảm bảo chữ không quá bé trên mobile và không quá to trên màn hình rộng.
- ✅ **DO**: Đảm bảo có khoảng trắng quanh dấu toán tử trong `calc()` (`calc(100% - 20px)` thay vì `calc(100%-20px)` - sai cú pháp).
- ✅ **DO**: Sử dụng `min()` cho width container (`width: min(100% - 2rem, 600px)`) để thay thế cho `max-width` + `width` + `margin` phức tạp.
- ❌ **DON'T**: Đừng lồng quá nhiều `calc()` vào nhau (nested calc) gây khó đọc và khó debug.

## Ví dụ hoàn chỉnh / Complete Example

Demo sử dụng các hàm toán học để tạo Responsive Card.

Demo using math functions to create a Responsive Card.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        :root {
            /* Hệ thống màu */
            --primary: #3498db;
            /* Tạo màu tối hơn 20% từ màu gốc */
            --primary-dark: color-mix(in srgb, var(--primary), black 20%);
        }

        body {
            font-family: system-ui;
            padding: 40px;
            background: #f4f4f9;
            display: flex;
            justify-content: center;
        }

        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            
            /* Width thông minh:
               - Ưu tiên: 50% chiều rộng cha
               - Tối thiểu: 300px (để không bị quá bé)
               - Tối đa: 600px (để không bị quá to)
               Kết hợp min/max để đạt được điều này tương đương clamp
               hoặc đơn giản hơn:
               width: min(100%, 600px); 
            */
            width: clamp(300px, 50vw, 600px);
            
            padding: clamp(1rem, 3vw, 3rem); /* Padding cũng co giãn */
        }

        h2 {
            /* Font size co giãn từ 1.5rem đến 3rem */
            font-size: clamp(1.5rem, 5vw, 3rem);
            color: var(--primary);
            margin-top: 0;
        }

        .calc-box {
            background: #eee;
            height: 50px;
            /* Width = 100% - 20px padding trái - 20px phải = calc(100% - 40px) */
            /* Nhưng thực tế width auto đã làm việc này. Calc hữu ích khi bạn set width cụ thể */
            width: calc(100% - 2rem);
            margin: 1rem auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed #999;
        }

        .btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .btn:hover {
            background: var(--primary-dark); /* Dùng màu đã mix */
        }
    </style>
</head>
<body>

    <div class="card">
        <h2>Smart Functions</h2>
        <p>This card uses <code>clamp()</code> for width, padding, and font-size.</p>
        <p>Resize your browser window to see the magic!</p>
        
        <div class="calc-box">
            I am calculated width
        </div>

        <button class="btn">Hover me (Color Mix)</button>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - CSS Math Functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions)
- [CSS-Tricks - A Guide to CSS Functions](https://css-tricks.com/complete-guide-to-css-functions/)
