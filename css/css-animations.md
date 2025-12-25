# CSS Animations / Hoạt ảnh trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Gradients](./css-gradients.md)  
**➡️ Bài sau / Next:** [Filters](./css-filters.md)

---

## Mô tả / Description

CSS Animations cho phép bạn làm sống động các phần tử web bằng cách thay đổi kiểu dáng của chúng dần dần theo thời gian. Khác với `transition` (chỉ chuyển đổi giữa 2 trạng thái Start/End khi có tương tác), `animation` có thể chạy tự động, lặp lại, và có nhiều giai đoạn (keyframes) phức tạp.

CSS Animations allow you to bring web elements to life by gradually changing their styles over time. Unlike `transition` (which only switches between 2 states Start/End upon interaction), `animation` can run automatically, loop, and have multiple complex stages (keyframes).

## Khái niệm chính / Main Concepts

### 1. @keyframes / Khung hình chính

Đây là nơi bạn định nghĩa "kịch bản" của hoạt ảnh. Bạn chỉ định style tại các thời điểm phần trăm (%) của vòng đời animation.

This is where you define the "script" of the animation. You specify styles at percentage (%) points of the animation lifecycle.

```css
@keyframes slide-in {
    from { transform: translateX(-100%); } /* 0% */
    to   { transform: translateX(0); }     /* 100% */
}

@keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}
```

### 2. Animation Properties / Các thuộc tính Animation

Để sử dụng keyframes, bạn phải gắn nó vào phần tử.

To use keyframes, you must attach them to an element.

```css
.box {
    animation-name: bounce;        /* Tên keyframe */
    animation-duration: 2s;        /* Thời gian chạy 1 vòng */
    animation-timing-function: ease-in-out; /* Tốc độ (nhanh/chậm thế nào) */
    animation-delay: 1s;           /* Chờ 1s rồi mới chạy */
    animation-iteration-count: infinite; /* Lặp vô hạn (hoặc số lần: 3) */
    animation-direction: alternate; /* Chạy đi rồi chạy ngược lại */
    animation-fill-mode: forwards; /* Giữ nguyên trạng thái cuối cùng khi xong */
}

/* Shorthand */
/* name duration timing-function delay iteration direction fill-mode */
.box {
    animation: bounce 2s ease-in-out 1s infinite alternate forwards;
}
```

### 3. Timing Functions / Hàm thời gian

Quyết định gia tốc của chuyển động.
- `linear`: Đều đều (robot).
- `ease`: Mặc định, nhanh ở giữa.
- `ease-in`: Vào chậm.
- `ease-out`: Ra chậm.
- `cubic-bezier(n,n,n,n)`: Tùy chỉnh cao cấp.

### 4. Animation Play State / Trạng thái phát

Tạm dừng hoặc chạy tiếp animation.

Pause or resume animation.

```css
.box:hover {
    animation-play-state: paused;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Pure CSS**: Không cần JavaScript để làm chuyển động phức tạp.
- **Hardware Acceleration**: Hiệu năng cao hơn JS animation vì trình duyệt tối ưu hóa (đặc biệt là transform và opacity).
- **Engagement**: Thu hút sự chú ý của người dùng vào các phần quan trọng (nút mua hàng rung lắc, thông báo trượt vào).

### Ứng dụng thực tế / Real-world Applications
- **Loading Spinners**: Vòng xoay chờ tải dữ liệu.
- **Hero Animations**: Các hiệu ứng xuất hiện ấn tượng ở trang chủ.
- **Micro-interactions**: Nút Like nảy lên khi bấm, icon menu biến thành dấu X.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Chỉ animate các thuộc tính rẻ tiền về hiệu năng (compositor-only properties) như `transform` và `opacity`. Tránh animate `width`, `height`, `left`, `top` vì gây vẽ lại (repaint) tốn kém.
- ✅ **DO**: Tôn trọng người dùng thích giảm chuyển động. Sử dụng media query `prefers-reduced-motion` để tắt animation.
- ❌ **DON'T**: Đừng làm dụng animation quá nhiều gây rối mắt và làm máy người dùng bị lag.

## Ví dụ hoàn chỉnh / Complete Example

### 1. Spinner & 2. Bouncing Ball

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            gap: 100px; 
            background: #222; 
        }

        /* 1. Loading Spinner */
        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255,255,255,0.3);
            border-top-color: #3498db; /* Màu chính xoay */
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        /* 2. Bouncing Ball with Shadow */
        @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-50px); }
        }

        @keyframes shrink-shadow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(0.6); opacity: 0.2; }
        }

        .ball-wrapper {
            position: relative;
            width: 50px;
            height: 50px;
        }

        .ball {
            width: 100%;
            height: 100%;
            background: #e74c3c;
            border-radius: 50%;
            animation: jump 0.6s ease-in-out infinite alternate;
        }

        .shadow {
            position: absolute;
            bottom: -10px;
            left: 5px;
            width: 40px;
            height: 10px;
            background: black;
            border-radius: 50%;
            filter: blur(2px);
            animation: shrink-shadow 0.6s ease-in-out infinite alternate;
        }
    </style>
</head>
<body>

    <div class="spinner"></div>

    <div class="ball-wrapper">
        <div class="ball"></div>
        <div class="shadow"></div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Animate.css - A library of ready-to-use animations](https://animate.style/)
