# CSS Backgrounds / Nền trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Overflow](./css-overflow.md)  
**➡️ Bài sau / Next:** [Text & Typography](./css-text-typography.md)

---

## Mô tả / Description

Thuộc tính `background` là một trong những thuộc tính phức tạp và quyền năng nhất CSS. Nó không chỉ đơn thuần là tô màu nền, mà còn cho phép bạn xếp lớp nhiều hình ảnh, định vị chúng chính xác, điều chỉnh kích thước, và kiểm soát cách chúng lặp lại.

The `background` property is one of the most complex and powerful in CSS. It's not just about filling a background color; it allows you to layer multiple images, position them precisely, adjust their size, and control how they repeat.

## Khái niệm chính / Main Concepts

### 1. `background-image` / Hình nền

Chèn ảnh (URL) hoặc gradient.

Insert an image (URL) or gradient.

```css
.hero {
    background-image: url('hero.jpg');
}
```

### 2. `background-size` / Kích thước nền

- `cover`: Co giãn ảnh để phủ kín toàn bộ container (có thể bị cắt ảnh). Phổ biến nhất.
- `contain`: Co giãn để ảnh nằm trọn trong container (có thể để lại khoảng trống).
- `auto`: Kích thước gốc.

```css
.hero {
    background-size: cover;
}
```

### 3. `background-position` / Vị trí nền

Đặt vị trí bắt đầu của ảnh.

Sets the starting position of the image.

- `center`, `top`, `bottom`, `left`, `right`.
- Tọa độ: `50% 50%` hoặc `10px 20px`.

```css
.icon {
    background-position: center;
}
```

### 4. `background-repeat` / Lặp lại nền

- `no-repeat`: Không lặp (chỉ hiện 1 lần).
- `repeat` (mặc định): Lặp cả ngang và dọc.
- `repeat-x` / `repeat-y`: Chỉ lặp ngang / dọc.

### 5. `background-attachment` / Nền cố định

- `scroll` (mặc định): Ảnh cuộn theo trang.
- `fixed`: Ảnh đứng yên khi cuộn trang (tạo hiệu ứng Parallax đơn giản).

```css
.parallax {
    background-attachment: fixed;
}
```

### 6. Multiple Backgrounds / Nhiều lớp nền

Bạn có thể khai báo nhiều lớp nền, cách nhau bằng dấu phẩy. Lớp đầu tiên nằm trên cùng.

You can declare multiple background layers, separated by commas. The first layer is on top.

```css
.layered {
    background-image: 
        url('logo.png'),        /* Lớp trên cùng (Top) */
        linear-gradient(red, blue), /* Lớp giữa (Middle) */
        url('pattern.jpg');     /* Lớp dưới cùng (Bottom) */
        
    background-position: center, 0 0, top left;
    background-repeat: no-repeat, no-repeat, repeat;
}
```

### 7. Shorthand `background`

Thứ tự chuẩn: `color image position/size repeat origin clip attachment`.

Standard order: `color image position/size repeat origin clip attachment`.

```css
.box {
    background: #000 url('img.jpg') center/cover no-repeat fixed;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Visual Appeal**: Tạo chiều sâu và ngữ cảnh cho nội dung.
- **Responsiveness**: `background-size: cover` giúp ảnh nền thích ứng mọi màn hình.
- **Efficiency**: CSS Patterns (dùng gradient) nhẹ hơn nhiều so với tải file ảnh.

### Ứng dụng thực tế / Real-world Applications
- **Hero Banner**: Ảnh lớn đầu trang web.
- **Icon Sprites**: Dùng `background-position` để hiển thị một phần của bức ảnh chứa nhiều icon (kỹ thuật cũ nhưng vẫn tốt).
- **Watermarks**: Logo mờ nằm góc trang (`no-repeat bottom right`).
- **Texture Overlays**: Phủ một lớp noise hoặc pattern mờ lên trên ảnh nền chính.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn nén ảnh (compress) trước khi làm background để tối ưu tốc độ tải trang.
- ✅ **DO**: Luôn đặt `background-color` dự phòng để văn bản vẫn đọc được khi ảnh chưa tải xong hoặc bị lỗi.
- ❌ **DON'T**: Đừng dùng `background-image` cho những hình ảnh mang ý nghĩa nội dung (như ảnh sản phẩm, ảnh minh họa bài viết). Hãy dùng thẻ `<img>` cho những trường hợp đó để tốt cho SEO và Accessibility (có alt text). Background chỉ nên dùng để trang trí.

## Ví dụ hoàn chỉnh / Complete Example

### 1. Hero Cover & 2. Multiple Background Pattern

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { margin: 0; font-family: sans-serif; }

        /* 1. Full Screen Hero with Overlay */
        .hero {
            height: 50vh;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            
            /* Gradient đen mờ phủ lên trên ảnh để chữ dễ đọc */
            background-image: 
                linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                url('https://picsum.photos/1920/1080');
            
            /* Căn giữa và phủ kín */
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Parallax effect */
        }

        /* 2. Pattern Container */
        .pattern-box {
            height: 300px;
            margin: 20px;
            border: 1px solid #ccc;
            
            /* Tạo họa tiết chấm bi bằng radial-gradient */
            background-color: #f0f0f0;
            background-image: radial-gradient(#3498db 2px, transparent 2px);
            background-size: 20px 20px; /* Kích thước ô lặp lại */
        }
    </style>
</head>
<body>

    <div class="hero">
        <h1>Welcome to My Website</h1>
    </div>

    <div class="pattern-box">
        <!-- Nội dung -->
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [CSS-Tricks - Background Size](https://css-tricks.com/almanac/properties/b/background-size/)
