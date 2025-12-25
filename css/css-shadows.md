# CSS Shadows / Đổ bóng trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Borders](./css-borders.md)  
**➡️ Bài sau / Next:** [Focus](./css-focus.md)

---

## Mô tả / Description

Shadows (Bóng) thêm chiều sâu và sự nổi bật cho giao diện. CSS cung cấp hai thuộc tính chính để tạo bóng: `text-shadow` cho văn bản và `box-shadow` cho các phần tử hộp (block elements). Bóng giúp phân lớp giao diện (elevation), làm cho các thành phần như nút bấm hay thẻ bài (cards) trông giống như đang nổi lên khỏi màn hình.

Shadows add depth and emphasis to the interface. CSS provides two main properties for creating shadows: `text-shadow` for text and `box-shadow` for block elements. Shadows help layer the interface (elevation), making components like buttons or cards look like they are lifted off the screen.

## Khái niệm chính / Main Concepts

### 1. Box Shadow / Bóng hộp

Cú pháp: `offset-x offset-y blur-radius spread-radius color`

Syntax: `offset-x offset-y blur-radius spread-radius color`

```css
.card {
    /* x y blur color */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.button {
    /* x y blur spread color */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

- **Offset-x**: Bóng dịch sang phải (+) hoặc trái (-).
- **Offset-y**: Bóng dịch xuống dưới (+) hoặc lên trên (-).
- **Blur**: Độ mờ của bóng (càng cao càng mờ).
- **Spread**: Độ lan rộng của bóng (tăng kích thước bóng).

### 2. Text Shadow / Bóng chữ

Tương tự box-shadow nhưng không có tham số `spread`.

Similar to box-shadow but without the `spread` parameter.

```css
h1 {
    /* x y blur color */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.glow {
    /* Hiệu ứng phát sáng bằng color */
    text-shadow: 0 0 10px #3498db;
    color: white;
}
```

### 3. Inset Shadow / Bóng trong

Thêm từ khóa `inset` để bóng đổ vào bên trong phần tử thay vì ra ngoài. Thường dùng cho inputs hoặc hiệu ứng lõm.

Add the `inset` keyword to cast the shadow inside the element instead of outside. Often used for inputs or sunken effects.

```css
.input-inner {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}
```

### 4. Layering Shadows / Chồng nhiều lớp bóng

Bạn có thể tạo nhiều bóng cho cùng một phần tử bằng dấu phẩy `,`.

You can create multiple shadows for the same element using a comma `,`.

```css
.complex-shadow {
    box-shadow: 
        0 1px 3px rgba(0,0,0,0.12), /* Bóng gần mờ */
        0 1px 2px rgba(0,0,0,0.24); /* Bóng đậm nét hơn */
}
```

### 5. Neumorphism (Soft UI)

Xu hướng thiết kế sử dụng 2 bóng đối lập (sáng và tối) để tạo cảm giác vật thể nổi lên mềm mại.

A design trend using 2 opposing shadows (light and dark) to create a soft lifted effect.

```css
.neumorphism {
    background: #e0e0e0;
    box-shadow: 
        20px 20px 60px #bebebe, 
        -20px -20px 60px #ffffff;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Depth (Z-axis)**: Giả lập chiều sâu (trục Z), giúp người dùng nhận biết thứ tự xếp chồng.
- **Affordance**: Bóng giúp nút bấm trông "có thể bấm được" (clickable).
- **Contrast**: Text-shadow giúp văn bản dễ đọc hơn trên nền ảnh phức tạp.

### Ứng dụng thực tế / Real-world Applications
- **Material Design**: Google sử dụng hệ thống shadow để biểu thị độ cao (elevation) của cards, dialogs, menus.
- **Focus States**: Dùng shadow thay vì border để highlight input đang focus (tránh nhảy layout).
- **Sticky Headers**: Thêm shadow nhỏ vào header khi cuộn trang để tách biệt với nội dung.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng màu bóng bán trong suốt (`rgba(0,0,0,0.1)`) thay vì màu đen đặc (`#000`), để trông tự nhiên hơn trên các nền khác nhau.
- ✅ **DO**: Giữ nguồn sáng nhất quán (thường là từ trên trái chiếu xuống dưới phải).
- ✅ **DO**: Sử dụng shadow nhẹ nhàng (subtle), tránh shadow quá đậm và cứng gây rối mắt.
- ❌ **DON'T**: Đừng dùng `filter: drop-shadow()` thay cho `box-shadow` trừ khi bạn thực sự cần đổ bóng theo hình dạng trong suốt (PNG/SVG), vì nó nặng hơn về hiệu năng.

## Ví dụ hoàn chỉnh / Complete Example

Demo về Elevation (Độ cao) và Text Effects.

Elevation and Text Effects Demo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: system-ui;
            background: #f0f2f5;
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;
        }

        /* 1. Elevation System (Material Design inspired) */
        .elevation-demo {
            display: flex;
            gap: 30px;
        }

        .card {
            width: 100px;
            height: 100px;
            background: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9em;
            color: #555;
            transition: box-shadow 0.3s ease;
        }

        .level-1 {
            /* Nhẹ nhàng, sát mặt nền */
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }

        .level-2 {
            /* Nổi cao hơn */
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
        
        /* Hiệu ứng nhấc lên khi hover */
        .interactive:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            transform: translateY(-2px);
        }

        /* 2. Text Effects */
        .retro-text {
            font-size: 3rem;
            font-weight: bold;
            color: #ff00de;
            /* Hiệu ứng Cyberpunk neon */
            text-shadow: 
                2px 2px 0px #00eaff, 
                -1px -1px 0 #ff00de;
        }

        /* 3. Inset Input */
        .search-box {
            padding: 10px 15px;
            border: none;
            border-radius: 20px;
            background: #e0e0e0;
            width: 200px;
            /* Bóng đổ vào trong tạo cảm giác lõm */
            box-shadow: inset 2px 2px 5px #bebebe, 
                        inset -2px -2px 5px #ffffff;
            outline: none;
        }
    </style>
</head>
<body>

    <h3>Elevation Levels</h3>
    <div class="elevation-demo">
        <div class="card level-1">Level 1</div>
        <div class="card level-2">Level 2</div>
        <div class="card level-1 interactive">Hover Me</div>
    </div>

    <h3>Text Shadow</h3>
    <div class="retro-text">CYBERPUNK</div>

    <h3>Inset Shadow (Neumorphism Style)</h3>
    <input type="text" class="search-box" placeholder="Search...">

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [MDN - text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [Material Design - Elevation](https://m3.material.io/styles/elevation/overview)
