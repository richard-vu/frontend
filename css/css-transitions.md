# CSS Transitions / Chuyển đổi trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Counters](./css-counters.md)  
**➡️ Bài sau / Next:** [View Transitions](./css-view-transitions.md)

---

## Mô tả / Description

CSS Transitions (Chuyển đổi) cho phép bạn thay đổi giá trị thuộc tính một cách mượt mà (chậm rãi) trong một khoảng thời gian nhất định, thay vì thay đổi ngay lập tức. Đây là cách đơn giản nhất để tạo hiệu ứng động (animations) khi người dùng tương tác với phần tử (ví dụ: `:hover`, `:focus`).

CSS Transitions allow you to change property values smoothly (gradually) over a given duration, rather than instantly. This is the simplest way to create animations when users interact with elements (e.g., `:hover`, `:focus`).

## Khái niệm chính / Main Concepts

### 1. `transition` Shorthand / Cú pháp rút gọn

Cách viết ngắn gọn để khai báo tất cả thuộc tính chuyển đổi.

A concise way to declare all transition properties.

```css
/* property | duration | timing-function | delay */
.button {
    transition: background-color 0.3s ease-in-out;
}
```

### 2. Transition Properties / Các thuộc tính

- `transition-property`: Tên thuộc tính muốn hiệu ứng (vd: `width`, `color`, `all`).
- `transition-duration`: Thời gian chạy (vd: `0.5s`, `300ms`).
- `transition-timing-function`: Tốc độ chuyển động (vd: `linear`, `ease`, `cubic-bezier`).
- `transition-delay`: Thời gian chờ trước khi bắt đầu.

```css
.card {
    transition-property: transform, box-shadow;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
}
```

### 3. Animatable Properties / Các thuộc tính có thể chuyển đổi

Không phải tất cả thuộc tính đều có thể transition. Chỉ những thuộc tính có giá trị số (length, percentage, color, number) hoặc transform mới hoạt động.
- ✅ `opacity`, `color`, `background-color`, `transform`, `width`, `height`.
- ❌ `display` (không thể chuyển từ `none` sang `block` mượt mà).

### 4. Transitioning `display: none` (New Feature)

Trước đây, ta không thể animate `display`. Nhưng hiện nay với tính năng `@starting-style` và `transition-behavior: allow-discrete`, điều này đã khả thi trên các trình duyệt hiện đại.

Previously, we couldn't animate `display`. But now with `@starting-style` and `transition-behavior: allow-discrete`, this is possible in modern browsers.

```css
.box {
    opacity: 0;
    transition: opacity 0.5s, display 0.5s allow-discrete;
    display: none;
}

.box.open {
    display: block;
    opacity: 1;
}

@starting-style {
    .box.open {
        opacity: 0;
    }
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Better UX**: Giúp người dùng cảm nhận được sự thay đổi trạng thái tự nhiên, tránh bị "giật mình".
- **Performance**: Hiệu năng cao (60fps) nếu chỉ transition `transform` và `opacity`.
- **Simplicity**: Dễ viết và bảo trì hơn `@keyframes` animation.

### Ứng dụng thực tế / Real-world Applications
- **Button Hover**: Đổi màu nền từ từ khi di chuột.
- **Dropdown Menu**: Menu trượt xuống hoặc mờ dần hiện ra.
- **Form Focus**: Input field mở rộng hoặc đổi màu viền khi click vào.
- **Card Zoom**: Ảnh phóng to nhẹ khi hover vào bài viết.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `transform` và `opacity` để đạt hiệu năng tốt nhất (GPU accelerated).
- ✅ **DO**: Luôn đặt `transition` ở state gốc (ví dụ `.btn`), đừng đặt ở `.btn:hover` (nếu đặt ở hover, hiệu ứng sẽ biến mất ngay lập tức khi chuột rời đi - transition-out bị mất).
- ✅ **DO**: Sử dụng biến thời gian (`--duration-fast: 0.2s`) để đồng bộ tốc độ toàn trang.
- ❌ **DON'T**: Đừng dùng `transition: all` nếu không cần thiết, nó có thể ảnh hưởng hiệu năng nếu bạn thay đổi nhiều thuộc tính nặng (như `box-shadow` diện tích lớn).

## Ví dụ hoàn chỉnh / Complete Example

### Interactive Button Effects

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: system-ui;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 50px;
            background: #f4f4f4;
        }

        /* 1. Color Fade */
        .btn-fade {
            padding: 12px 24px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            
            /* Transition */
            transition: background-color 0.3s ease;
        }

        .btn-fade:hover {
            background-color: #2980b9;
        }

        /* 2. Transform Scale */
        .card-zoom {
            width: 200px;
            height: 120px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            
            /* Transition nhiều thuộc tính */
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        box-shadow 0.3s ease;
        }

        .card-zoom:hover {
            transform: scale(1.05); /* Phóng to nhẹ */
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* 3. Input Expand */
        .search-input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 20px;
            width: 150px;
            outline: none;
            
            transition: width 0.4s ease-in-out, border-color 0.4s;
        }

        .search-input:focus {
            width: 250px;
            border-color: #3498db;
        }
    </style>
</head>
<body>

    <h3>Color Fade Transition</h3>
    <button class="btn-fade">Hover Me!</button>

    <h3>Transform Scale (Spring Effect)</h3>
    <div class="card-zoom">Hover Card</div>

    <h3>Width Expansion</h3>
    <input type="text" class="search-input" placeholder="Search...">

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Easings.net - Visualization of easing functions](https://easings.net/)
