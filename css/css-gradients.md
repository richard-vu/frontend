# CSS Gradients / Dải màu trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Shapes & Masks](./css-shapes-and-masks.md)  
**➡️ Bài sau / Next:** [Animations](./css-animations.md)

---

## Mô tả / Description

CSS Gradients cho phép bạn tạo ra các dải chuyển màu mượt mà giữa hai hoặc nhiều màu sắc. Gradient được coi là một loại số liệu "hình ảnh" (`<image>`) trong CSS, vì vậy nó thường được dùng trong thuộc tính `background-image` chứ không phải `background-color`. Có 3 loại gradient chính: Tuyến tính (Linear), Tỏa tròn (Radial), và Hình nón (Conic).

CSS Gradients allow you to create smooth transitions between two or more colors. Gradients are treated as an "image" type (`<image>`) in CSS, so they are typically used in the `background-image` property, not `background-color`. There are 3 main types: Linear, Radial, and Conic.

## Khái niệm chính / Main Concepts

### 1. Linear Gradient / Gradient Tuyến tính

Chuyển màu theo một đường thẳng (lên, xuống, chéo).

Transitions along a straight line (up, down, diagonal).

```css
.linear {
    /* Mặc định từ trên xuống dưới */
    background-image: linear-gradient(red, blue);
    
    /* Sang phải */
    background-image: linear-gradient(to right, red, yellow);
    
    /* Góc chéo 45 độ */
    background-image: linear-gradient(45deg, blue, pink);
}
```

### 2. Radial Gradient / Gradient Tỏa tròn

Chuyển màu tỏa ra từ một tâm điểm (hình tròn hoặc elip).

Transitions radiating from a center point (circle or ellipse).

```css
.radial {
    /* Tỏa từ tâm */
    background-image: radial-gradient(circle, red, yellow, green);
    
    /* Vị trí tâm khác (góc trên trái) */
    background-image: radial-gradient(circle at top left, white, blue);
}
```

### 3. Conic Gradient / Gradient Hình nón

Chuyển màu xoay quanh một tâm điểm (giống biểu đồ tròn).

Transitions rotating around a center point (like a pie chart).

```css
.conic {
    /* Xoay từ 0 độ: đổ -> vàng -> xanh */
    background-image: conic-gradient(red, yellow, green);
    
    /* Tạo biểu đồ tròn đơn giản */
    background-image: conic-gradient(red 0% 30%, blue 30% 70%, green 70% 100%);
}
```

### 4. Repeating Gradients / Gradient Lặp lại

Lặp lại mẫu gradient vô tận.

Repeat the gradient pattern infinitely.

```css
.stripes {
    /* Tạo sọc chéo */
    background-image: repeating-linear-gradient(
        45deg,
        yellow 0px,
        yellow 10px,
        black 10px,
        black 20px
    );
}
```

### 5. Hard Stops / Điểm dừng cứng

Tạo ra các vạch màu sắc nét thay vì chuyển màu mượt mà.

Creating sharp color lines instead of smooth transitions.

```css
.flag {
    /* 50% là xanh, từ 50% trở đi là đỏ (không có vùng mờ) */
    background-image: linear-gradient(to right, blue 50%, red 50%);
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **No Images**: Giảm số lượng HTTP request vì không cần tải file ảnh nền.
- **Scalable**: Vector 100%, không bị vỡ hạt khi phóng to thu nhỏ.
- **Performance**: Nhanh hơn tải ảnh raster (jpg/png).

### Ứng dụng thực tế / Real-world Applications
- **Buttons**: Tạo hiệu ứng nổi khối 3D nhẹ nhàng cho nút.
- **Text Gradient**: Chữ màu gradient (kết hợp `background-clip: text`).
- **Pie Charts**: Vẽ biểu đồ tròn cực nhanh bằng `conic-gradient`.
- **Patterns**: Tạo họa tiết bàn cờ (checkerboard), sọc kẻ bằng `repeating-gradient`.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn đặt một `background-color` dự phòng trước khi đặt `background-image` gradient, phòng trường hợp gradient không hiển thị.
- ✅ **DO**: Sử dụng các công cụ tạo gradient online (như CSSGradient.io) để trực quan hóa vì viết tay cú pháp phức tạp rất dễ sai.
- ❌ **DON'T**: Đừng chèn quá nhiều điểm màu (color stops) không cần thiết, làm code rối rắm.

## Ví dụ hoàn chỉnh / Complete Example

### 1. Button 3D & 2. Pie Chart

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: sans-serif; 
            padding: 40px; 
            display: flex; 
            gap: 40px; 
            align-items: center;
            background: #2c3e50;
        }

        /* 1. 3D Button Style */
        .btn-gradient {
            padding: 15px 30px;
            font-size: 1.2rem;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            
            /* Gradient từ nhạt sang đậm để tạo khối */
            background-image: linear-gradient(to bottom, #3498db, #2980b9);
            box-shadow: 0 4px 0 #1a5276; /* Đổ bóng cứng làm đáy */
            transition: all 0.1s;
        }

        .btn-gradient:active {
            transform: translateY(4px); /* Nhấn xuống */
            box-shadow: none; /* Ẩn bóng đáy */
        }

        /* 2. Pie Chart using Conic Gradient */
        .pie-chart {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            /* Biểu đồ: 40% Đỏ, 20% Xanh (40+20=60), còn lại Vàng */
            background-image: conic-gradient(
                #e74c3c 0% 40%, 
                #3498db 40% 60%, 
                #f1c40f 60% 100%
            );
            position: relative;
        }

        /* 3. Text Gradient */
        .text-gradient {
            font-size: 3rem;
            font-weight: bold;
            background-image: linear-gradient(to right, #violet, #orange);
            background-image: linear-gradient(to right, violet, orange, red);
            
            /* Cắt nền theo chữ */
            -webkit-background-clip: text;
            background-clip: text;
            
            /* Làm chữ trong suốt để lộ nền */
            color: transparent; 
        }
    </style>
</head>
<body>

    <button class="btn-gradient">Click Me</button>

    <div class="pie-chart" title="Red: 40%, Blue: 20%, Yellow: 40%"></div>

    <div class="text-gradient">COOL TEXT</div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)
- [CSS Gradient Generator](https://cssgradient.io/)
