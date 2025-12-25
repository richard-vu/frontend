# CSS Scroll-driven Animations / Hoạt ảnh theo cuộn

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Text & Typography](./css-text-typography.md)  
**➡️ Bài sau / Next:** [Container Queries](./css-container-queries.md)

---

## Mô tả / Description

Trước đây, để tạo hiệu ứng "thanh tiến trình đọc bài viết" (reading progress bar) hoặc "phần tử bay vào khi cuộn tới" (scroll reveal), chúng ta bắt buộc phải dùng JavaScript (`IntersectionObserver` hoặc sự kiện `scroll`). Giờ đây, CSS đã hỗ trợ native với **Scroll-driven Animations**. Bạn có thể liên kết một animation với vị trí cuộn của thanh cuộn hoặc vị trí hiển thị của phần tử trong viewport.

Previously, to create effects like a "reading progress bar" or "scroll reveal", we had to use JavaScript (`IntersectionObserver` or `scroll` events). Now, CSS natively supports this with **Scroll-driven Animations**. You can link an animation to the scroll progress of a scrollbar or the visibility of an element within the viewport.

> [!WARNING]
> Đây là tính năng rất mới. Kiểm tra [Can I Use](https://caniuse.com/css-scroll-driven-animations) để xem hỗ trợ (Chủ yếu Chrome 115+).

## Khái niệm chính / Main Concepts

### 1. `animation-timeline`

Thuộc tính cốt lõi để thay đổi trục thời gian của animation từ "thời gian thực" (seconds) sang "tiến độ cuộn" (scroll progress).

The core property to change the animation timeline from "real-time" (seconds) to "scroll progress".

```css
.progress-bar {
    animation-name: grow-width;
    animation-timeline: scroll(); /* Liên kết với thanh cuộn trang */
}

@keyframes grow-width {
    from { width: 0%; }
    to { width: 100%; }
}
```

### 2. `scroll()` Function / Hàm scroll()

Theo dõi tiến độ cuộn của một container cụ thể (mặc định là `nearest` - cha gần nhất có thanh cuộn, hoặc `root` - trang web).

Tracks the scroll progress of a specific container (defaults to `nearest` scrollable ancestor, or `root`).

```css
/* Theo dõi thanh cuộn dọc (block) của trang gốc */
animation-timeline: scroll(block root);
```

### 3. `view()` Function / Hàm view()

Theo dõi khả năng hiển thị của **chính phần tử đó** trong viewport. Dùng để làm hiệu ứng "Scroll Reveal" (hiện ra khi cuộn tới).

Tracks the visibility of **the element itself** within the viewport. Used for "Scroll Reveal" effects (appearing when scrolled into view).

```css
.image-reveal {
    animation-name: fade-in-up;
    animation-timeline: view();
    
    /* Animation chạy từ khi phần tử bắt đầu vào (entry) đến khi vào hết (cover) */
    animation-range: entry 0% cover 50%;
}
```

### 4. `animation-range`

Xác định điểm bắt đầu và kết thúc của animation trên trục cuộn.
- `entry`: Khi phần tử bắt đầu ló vào màn hình.
- `exit`: Khi phần tử bắt đầu rời khỏi màn hình.
- `cover`: Toàn bộ quá trình từ lúc chạm mép dưới đến khi khuất khỏi mép trên.

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Zero JS**: Loại bỏ hoàn toàn sự phụ thuộc vào JS scroll event (vốn rất nặng và gây giật lag nếu không debounce kỹ).
- **Smoother**: Chạy trên main thread của compositor, mượt mà 60-120fps.
- **Easy**: Cú pháp khai báo đơn giản.

### Ứng dụng thực tế / Real-world Applications
- **Reading Progress Bar**: Thanh ngang trên cùng báo hiệu đã đọc được bao nhiêu % bài viết.
- **Parallax Images**: Ảnh nền di chuyển chậm hơn nội dung khi cuộn.
- **Scroll Reveal**: Các khối nội dung trượt lên (`translateY`) và hiện rõ (`opacity`) khi người dùng cuộn xuống.
- **Carousel Indicators**: Đánh dấu vị trí slide đang xem trong carousel cuộn ngang.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn kiểm tra hỗ trợ trình duyệt bằng `@supports (animation-timeline: scroll())`.
- ✅ **DO**: Giữ animation đơn giản (opacity, transform) để đảm bảo hiệu năng tối đa.
- ❌ **DON'T**: Đừng lạm dụng quá nhiều hiệu ứng parallax phức tạp gây chóng mặt cho người dùng (Motion Sickness).

## Ví dụ hoàn chỉnh / Complete Example

### 1. Progress Bar & 2. Image Reveal

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { margin: 0; font-family: system-ui; }

        /* 1. Reading Progress Bar */
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 8px;
            background: #eb2f06;
            width: 0%;
            z-index: 100;
            
            /* Magic here */
            animation: grow-progress linear;
            animation-timeline: scroll(); /* Theo scroll body */
        }

        @keyframes grow-progress {
            to { width: 100%; }
        }

        /* Content for demo */
        .content {
            max-width: 600px;
            margin: 0 auto;
            padding: 100px 20px;
        }
        
        p { line-height: 1.8; margin-bottom: 2rem; color: #555; font-size: 1.1rem; }

        /* 2. Scroll Reveal Images */
        .reveal-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            margin: 50px 0;
            opacity: 0;
            transform: translateY(100px) scale(0.8);
            
            /* Magic here */
            animation: reveal linear forwards;
            animation-timeline: view();
            /* Bắt đầu khi vào 10% viewport, kết thúc khi vào 50% */
            animation-range: entry 10% entry 50%;
        }

        @keyframes reveal {
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
    </style>
</head>
<body>

    <div class="progress-bar"></div>

    <div class="content">
        <h1>Scroll Down to see Magic</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <img src="https://picsum.photos/id/10/800/400" class="reveal-img" alt="Nature">
        
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
        <img src="https://picsum.photos/id/20/800/400" class="reveal-img" alt="Desk">
        
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <img src="https://picsum.photos/id/30/800/400" class="reveal-img" alt="Cup">
        
        <p>THE END.</p>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [Chrome Developers - Scroll-driven Animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [MDN - animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
