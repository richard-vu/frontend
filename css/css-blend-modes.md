# CSS Blend Modes / Chế độ hòa trộn màu

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Filters](./css-filters.md)  
**➡️ Bài sau / Next:** [Lists](./css-lists.md)

---

## Mô tả / Description

Nếu bạn đã từng dùng Photoshop, bạn sẽ quen với các chế độ hòa trộn layer như Multiply, Screen, Overlay. CSS cung cấp khả năng tương tự thông qua `mix-blend-mode` (trộn phần tử với nền phía sau) và `background-blend-mode` (trộn hình nền với màu nền của chính nó).

If you've used Photoshop, you're familiar with layer blending modes like Multiply, Screen, Overlay. CSS offers similar capabilities via `mix-blend-mode` (blending element with background behind) and `background-blend-mode` (blending background image with its own background color).

## Khái niệm chính / Main Concepts

### 1. `mix-blend-mode`

Trộn nội dung của phần tử với phần tử cha hoặc nền phía sau nó.

Blends the element's content with its parent or the background behind it.

- `multiply`: Làm tối (nhân màu). Màu trắng trở nên trong suốt.
- `screen`: Làm sáng. Màu đen trở nên trong suốt.
- `overlay`: Kết hợp Multiply và Screen (tăng độ tương phản).
- `difference`: Đảo màu dựa trên sự khác biệt.

```css
.text-overlay {
    color: white;
    /* Chữ sẽ hòa trộn với ảnh nền bên dưới */
    mix-blend-mode: overlay; 
}

.cut-out-text {
    background: black;
    color: white;
    /* Tạo hiệu ứng chữ đục lỗ nhìn xuyên thấu */
    mix-blend-mode: multiply; 
}
```

### 2. `background-blend-mode`

Trộn các lớp background (ảnh + ảnh, hoặc ảnh + màu) trong cùng một phần tử.

Blends background layers (image + image, or image + color) within the same element.

```css
.tinted-image {
    background-image: url('photo.jpg');
    background-color: red;
    /* Trộn ảnh với màu đỏ */
    background-blend-mode: multiply; 
}
```

### 3. Isolation / Cô lập

Thuộc tính `isolation: isolate` tạo ra một ngữ cảnh xếp chồng (stacking context) mới, ngăn không cho các phần tử con dùng `mix-blend-mode` bị trộn với nền bên ngoài container này.

The `isolation: isolate` property creates a new stacking context, preventing child elements using `mix-blend-mode` from blending with backgrounds outside this container.

```css
.container {
    isolation: isolate;
    /* Con của container này chỉ trộn màu với nhau, không trộn với body */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Creative Typography**: Tạo hiệu ứng chữ lồng ảnh nghệ thuật.
- **Image Treatment**: Đổi màu ảnh (tinting) đồng loạt bằng CSS mà không cần chỉnh sửa từng file ảnh.
- **UI Effects**: Hiệu ứng đèn neon, giao diện Cyberpunk.

### Ứng dụng thực tế / Real-world Applications
- **Darken Background**: Làm tối hình nền để chữ dễ đọc hơn (`background-blend-mode: overlay`).
- **Colorize Icons**: Đổi màu icon đen trắng thành màu thương hiệu.
- **Inverted Cursor**: Con trỏ chuột đổi màu tương phản khi đi qua nền đen/trắng (`mix-blend-mode: difference`).

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `multiply` để xóa nền trắng của logo JPG (biến trắng thành trong suốt).
- ✅ **DO**: Sử dụng `screen` để xóa nền đen của các hiệu ứng ánh sáng (lens flare).
- ❌ **DON'T**: Đừng dùng blend mode trên văn bản quan trọng nếu nền quá phức tạp, có thể làm giảm khả năng đọc (legibility).

## Ví dụ hoàn chỉnh / Complete Example

### 1. Image Tinting & 2. Cut-out Text

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: sans-serif; 
            margin: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100vh;
        }

        /* 1. Background Blend Mode */
        .left-panel {
            background-image: url('https://picsum.photos/800/600');
            background-size: cover;
            background-color: #3498db; /* Màu xanh */
            /* Trộn ảnh với màu xanh -> Ảnh ám xanh */
            background-blend-mode: multiply;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            font-weight: bold;
        }

        /* 2. Mix Blend Mode */
        .right-panel {
            background: #e74c3c;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .text-cutout {
            font-size: 5rem;
            font-weight: 900;
            color: white;
            text-transform: uppercase;
            background: url('https://picsum.photos/id/237/800/600') center/cover;
            /* Phép thuật: Cắt chữ để lộ ảnh nền của chính nó? 
               Không, đây là kỹ thuật blend với nền đỏ */
            mix-blend-mode: screen; 
            /* Screen: Làm sáng. Nếu nền trắng + đỏ = hồng? Không hẳn.
            Cách tốt hơn: background-clip: text (Bài Gradients).
            
            Hãy xem demo khác của mix-blend-mode: Difference */
        }
        
        .circle-blend {
            width: 200px;
            height: 200px;
            background: cyan;
            border-radius: 50%;
            position: absolute;
            /* Sự khác biệt màu sắc với nền đỏ */
            mix-blend-mode: difference;
            animation: move 3s infinite alternate;
        }

        @keyframes move {
            from { transform: translateX(-50px); }
            to { transform: translateX(50px); }
        }
    </style>
</head>
<body>

    <div class="left-panel">
        MULTIPLY MODE
    </div>

    <div class="right-panel">
        <div class="circle-blend"></div>
        <h1 style="position: relative; z-index: 10; font-size: 3rem; color: white; mix-blend-mode: overlay;">OVERLAY TEXT</h1>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
- [CSS-Tricks - Blend Modes](https://css-tricks.com/almanac/properties/m/mix-blend-mode/)
