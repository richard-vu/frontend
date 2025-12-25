# CSS Overflow / Xử lý nội dung tràn

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [View Transitions](./css-view-transitions.md)  
**➡️ Bài sau / Next:** [Backgrounds](./css-backgrounds.md)

---

## Mô tả / Description

Thuộc tính `overflow` kiểm soát chuyện gì sẽ xảy ra khi nội dung quá to so với phần tử chứa nó (container). Nội dung có thể bị cắt đi, hiển thị thanh cuộn, hoặc cứ tràn ra ngoài đè lên các phần tử khác.

The `overflow` property controls what happens when content is too big for its container. Content can be clipped, show a scrollbar, or just spill out over other elements.

## Khái niệm chính / Main Concepts

### 1. Overflow Values / Các giá trị cơ bản

- `visible` (mặc định): Nội dung tràn ra ngoài, không bị cắt.
- `hidden`: Nội dung tràn bị cắt bỏ, không có thanh cuộn.
- `scroll`: Luôn hiện thanh cuộn (ngay cả khi không tràn).
- `auto`: Tự động hiện thanh cuộn KHI VÀ CHỈ KHI nội dung tràn.

### 2. X and Y Axis / Trục X và Y

Bạn có thể kiểm soát riêng biệt chiều ngang và dọc.

You can control horizontal and vertical axes separately.

```css
.container {
    overflow-x: hidden; /* Ẩn thanh cuộn ngang */
    overflow-y: scroll; /* Luôn hiện thanh cuộn dọc */
}
```

### 3. `text-overflow` / Tràn văn bản

Chỉ hoạt động khi `white-space: nowrap` và `overflow: hidden`.

Only works when `white-space: nowrap` and `overflow: hidden`.

```css
.ellipsis {
    white-space: nowrap;      /* Không xuống dòng */
    overflow: hidden;         /* Cắt phần thừa */
    text-overflow: ellipsis;  /* Thêm dấu ba chấm (...) */
}

/* Lưu ý: text-overflow chỉ xử lý 1 dòng. 
Để cắt nhiều dòng (multiline ellipsis), cần kỹ thuật line-clamp */
.multiline-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Số dòng muốn hiện */
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

### 4. Customizing Scrollbars / Tùy biến thanh cuộn

Bạn có thể thay đổi màu sắc và kích thước thanh cuộn. Cú pháp khác nhau giữa Webkit (Chrome/Safari) và Firefox.

You can change scrollbar colors and size. Syntax differs between Webkit (Chrome/Safari) and Firefox.

```css
/* Modern Standard (Firefox supports this) */
.scroll-box {
    scrollbar-width: thin; /* mỏng */
    scrollbar-color: #3498db #f0f0f0; /* thumb track */
}

/* Webkit Legacy (Chrome, Edge, Safari) */
.scroll-box::-webkit-scrollbar {
    width: 8px;
}
.scroll-box::-webkit-scrollbar-track {
    background: #f0f0f0;
}
.scroll-box::-webkit-scrollbar-thumb {
    background-color: #3498db;
    border-radius: 4px;
}
```

### 5. `overscroll-behavior`

Kiểm soát hành vi cuộn khi chạm đến mép của container (ví dụ: ngăn trang web chính bị cuộn theo khi cuộn hết modal).

Controls scroll behavior when reaching the edge of a container (e.g., preventing the main page from scrolling when the modal scroll ends).

```css
.modal {
    overscroll-behavior: contain; /* Ngăn "scroll chaining" */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Layout Integrity**: Ngăn nội dung phá vỡ bố cục khi văn bản quá dài hoặc ảnh quá to.
- **UX**: Cung cấp cách thức điều hướng nội dung dài trong không gian hẹp (scrollable areas).
- **Aesthetics**: Tùy chỉnh thanh cuộn giúp giao diện đồng bộ hơn.

### Ứng dụng thực tế / Real-world Applications
- **Card Descriptions**: Cắt ngắn mô tả sản phẩm bằng dấu ba chấm (`...`).
- **Data Tables**: Cho phép bảng dữ liệu cuộn ngang trên mobile (`overflow-x: auto`).
- **Chat Windows**: Khung chat với thanh cuộn dọc.
- **Modals**: Modal dài có thể cuộn độc lập với body.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `overflow: auto` thay vì `scroll` để tránh hiện thanh cuộn vô duyên khi không cần thiết.
- ✅ **DO**: Luôn dùng `overscroll-behavior: contain` cho các sidebar hoặc modal có thanh cuộn riêng để cải thiện trải nghiệm người dùng.
- ❌ **DON'T**: Đừng dùng `overflow: hidden` để xóa float (kỹ thuật cũ), hãy dùng `display: flow-root` hoặc Flexbox/Grid hiện đại.
- ❌ **DON'T**: Đừng ẩn thanh cuộn (`::-webkit-scrollbar { display: none }`) nếu nội dung vẫn cần cuộn, trừ khi bạn cung cấp nút điều hướng thay thế.

## Ví dụ hoàn chỉnh / Complete Example

### 1. Scrollable Card & 2. Text Truncation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: sans-serif; padding: 40px; display: flex; gap: 40px; background: #eee; }

        /* 1. Custom Scrollbar Card */
        .scroller {
            width: 200px;
            height: 150px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            
            /* Logic cuộn */
            overflow-y: auto;     /* Tự động hiện cuộn dọc */
            overflow-x: hidden;   /* Ẩn cuộn ngang */
            overscroll-behavior: contain; /* Chặn cuộn lan ra body */

            /* Style thanh cuộn (Modern) */
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
        }

        /* 2. Text Ellipsis */
        .card-preview {
            width: 200px;
            background: white;
            padding: 15px;
            border-radius: 8px;
        }

        .single-line {
            font-weight: bold;
            width: 100%;
            /* Ba dòng thần thánh để cắt chữ 1 dòng */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .multi-line {
            margin-top: 10px;
            font-size: 0.9em;
            color: #666;
            
            /* Kỹ thuật cắt chữ nhiều dòng */
            display: -webkit-box;
            -webkit-line-clamp: 3; /* Cắt sau 3 dòng */
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    </style>
</head>
<body>

    <div class="scroller">
        <h3>Scroll Me!</h3>
        <p>This is a long text to demonstrate scrolling behavior inside a fixed-height container.</p>
        <p>Keep scrolling down...</p>
        <p>More content here.</p>
        <p>Even more content.</p>
        <p>The end.</p>
    </div>

    <div class="card-preview">
        <div class="single-line">Very Long Title That Will Be Cut Off Here</div>
        <div class="multi-line">
            This is a summary text that is meant to span multiple lines. 
            If it gets too long, it should be clamped after exactly three lines 
            shown in the CSS configuration. This ensures the card height remains consistent.
        </div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [CSS-Tricks - Almanac: Overflow](https://css-tricks.com/almanac/properties/o/overflow/)
