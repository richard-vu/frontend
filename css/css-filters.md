# CSS Filters / Bộ lọc CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Animations](./css-animations.md)  
**➡️ Bài sau / Next:** [Blend Modes](./css-blend-modes.md)

---

## Mô tả / Description

Thuộc tính `filter` cho phép áp dụng các hiệu ứng đồ họa như làm mờ, thay đổi màu sắc hay độ sáng cho một phần tử *trước khi* nó được vẽ lên màn hình. Nó giống như bộ lọc của Instagram nhưng dùng mã CSS.

The `filter` property allows you to apply graphical effects like blurring, color shifting, or brightness adjustment to an element *before* it is painted to the screen. It's like Instagram filters but using CSS code.

## Khái niệm chính / Main Concepts

### 1. Common Filters / Các bộ lọc phổ biến

- `blur(5px)`: Làm mờ ảnh.
- `grayscale(100%)`: Chuyển sang trắng đen.
- `sepia(100%)`: Chuyển sang màu nâu vàng cổ điển.
- `invert(100%)`: Đảo ngược màu (âm bản).
- `opacity(50%)`: Làm trong suốt (giống thuộc tính opacity nhưng có thể kết hợp trong filter).

```css
.blur-img {
    filter: blur(5px);
}

.black-and-white {
    filter: grayscale(100%);
}
```

### 2. Light & Color Adjustments / Điều chỉnh ánh sáng & màu sắc

- `brightness(150%)`: Tăng độ sáng.
- `contrast(200%)`: Tăng độ tương phản.
- `saturate(200%)`: Tăng độ bão hòa màu (rực rỡ hơn).
- `hue-rotate(90deg)`: Xoay vòng tròn màu sắc (đổi màu tổng thể).

### 3. Drop Shadow Filter / Bóng đổ Filter

Khác với `box-shadow` (đổ bóng theo hình hộp chữ nhật), `drop-shadow()` đổ bóng theo **hình dáng thực tế** của nội dung (kể cả vùng trong suốt của ảnh PNG).

Unlike `box-shadow` (which casts a rectangular shadow), `drop-shadow()` casts a shadow based on the **actual shape** of the content (including transparent areas of PNG images).

```css
.logo-png {
    /* Đổ bóng bám theo hình dáng logo */
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.5));
}
```

### 4. Combining Filters / Kết hợp bộ lọc

Bạn có thể áp dụng nhiều hiệu ứng cùng lúc, cách nhau bằng dấu cách.

You can apply multiple effects at once, separated by spaces.

```css
.vintage-look {
    filter: sepia(80%) contrast(150%) brightness(90%);
}
```

### 5. Backdrop Filter / Bộ lọc nền (Kính mờ)

Thuộc tính `backdrop-filter` áp dụng hiệu ứng cho khu vực **phía sau** phần tử (thường dùng để làm hiệu ứng kính mờ - frosted glass).

The `backdrop-filter` property applies effects to the area **behind** the element (often used for frosted glass effects).

```css
.glass-panel {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px); /* Làm mờ nội dung phía sau */
    border: 1px solid rgba(255, 255, 255, 0.3);
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Non-destructive**: Không làm thay đổi file ảnh gốc.
- **Dynamic**: Có thể thay đổi filter khi hover hoặc qua JS.
- **Performance**: Nhanh hơn việc xử lý Canvas hoặc SVG cho các hiệu ứng đơn giản.

### Ứng dụng thực tế / Real-world Applications
- **Dark Mode Images**: Giảm độ sáng của ảnh trên nền tối (`brightness(80%)`).
- **Interactive Galleries**: Ảnh trắng đen, khi hover chuyển thành có màu.
- **Frosted Glass UI**: Hiệu ứng kính mờ phổ biến trên macOS/Windows 11.
- **Silhouette**: Biến icon thành màu đen bằng `brightness(0)`.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `backdrop-filter` cẩn thận vì nó tốn tài nguyên GPU, có thể gây lag trên thiết bị yếu.
- ✅ **DO**: Sử dụng `drop-shadow` cho các icon PNG/SVG bất đối xứng thay vì `box-shadow`.
- ❌ **DON'T**: Đừng dùng `hue-rotate` để đổi màu quan trọng (brand color) vì khó kiểm soát chính xác mã màu hex.

## Ví dụ hoàn chỉnh / Complete Example

### 1. Instagram Filter & 2. Glassmorphism

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: system-ui; 
            background: url('https://picsum.photos/id/28/1920/1080') no-repeat center center fixed;
            background-size: cover;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }

        /* 1. Image Filter Card */
        .card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            width: 300px;
        }

        .photo {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 4px;
            /* Filter mặc định: Hơi tối và cũ */
            filter: sepia(30%) contrast(120%) brightness(90%);
            transition: filter 0.3s;
        }

        .card:hover .photo {
            /* Hover: Về màu gốc rực rỡ */
            filter: none;
        }

        /* 2. Glassmorphism Panel */
        .glass-panel {
            width: 300px;
            height: 250px;
            padding: 30px;
            border-radius: 16px;
            color: white;
            
            /* Hiệu ứng kính */
            background: rgba(0, 0, 0, 0.4); /* Nền bán trong suốt */
            backdrop-filter: blur(15px) saturate(180%); /* Phép thuật ở đây */
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        h2 { margin-top: 0; }
    </style>
</head>
<body>

    <div class="card">
        <img src="https://picsum.photos/id/64/400/300" alt="Girl" class="photo">
        <h3>Vintage Filter</h3>
        <p>Hover me to restore color!</p>
    </div>

    <div class="glass-panel">
        <h2>Glassmorphism</h2>
        <p>This panel uses <code>backdrop-filter</code> to blur the background image behind it.</p>
        <button style="padding: 10px 20px; border:none; border-radius: 4px; background: rgba(255,255,255,0.8);">Button</button>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [CSS-Tricks - The Complete Guide to CSS Filters](https://css-tricks.com/almanac/properties/f/filter/)
