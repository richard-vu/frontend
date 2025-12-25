# CSS Shapes & Masks / Hình dạng và Mặt nạ

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Functions](./css-functions.md)  
**➡️ Bài sau / Next:** [Gradients](./css-gradients.md)

---

## Mô tả / Description

Web mặc định là "những ô vuông" (everything is a rectangle). Nhưng với **Shapes (Hình dạng)**, **Clipping (Cắt)** và **Masking (Mặt nạ)**, bạn có thể phá vỡ sự vuông vức nhàm chán đó. Bạn có thể tạo ra các hình tròn, đa giác, ngôi sao, hoặc văn bản bao quanh hình ảnh (text wrap) theo đường cong tự nhiên.

The web defaults to "rectangles". But with **Shapes**, **Clipping**, and **Masking**, you can break that boring boxiness. You can create circles, polygons, stars, or have text wrap around images naturally.

## Khái niệm chính / Main Concepts

### 1. `clip-path` / Cắt hình

Thuộc tính này xác định vùng hiển thị của một phần tử. Phần nào nằm NGOÀI vùng cắt sẽ bị ẩn đi.

This property defines the visible region of an element. Parts OUTSIDE the clipping path are hidden.

```css
.circle {
    /* Cắt thành hình tròn */
    clip-path: circle(50% at center);
}

.triangle {
    /* Cắt thành đa giác (tam giác) bằng tọa độ x y */
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

### 2. `shape-outside` / Hình dạng bao quanh

Cho phép văn bản (inline content) chạy bao quanh (wrap) theo một hình dạng tùy ý thay vì hình vuông bao quanh ảnh. **Lưu ý:** Chỉ hoạt động trên phần tử `float`.

Allows text (inline content) to wrap around a custom shape instead of the image's bounding box. **Note:** Only works on `float` elements.

```css
.float-img {
    float: left;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    
    /* Xác định hình dạng để chữ tránh ra */
    shape-outside: circle(50%);
    margin-right: 20px;
}
```

### 3. `mask-image` / Mặt nạ ảnh

Tương tự như Clipping nhưng mạnh mẽ hơn vì hỗ trợ độ mờ (alpha transparency). Ảnh mặt nạ (thường là PNG hoặc gradient) sẽ quyết định độ trong suốt của phần tử.

Similar to Clipping but more powerful as it supports alpha transparency. The mask image (usually PNG or gradient) determines the transparency of the element.

- **Màu đen (hoặc có màu)**: Hiển thị.
- **Trong suốt**: Ẩn đi.

```css
.faded-bottom {
    /* Tạo hiệu ứng mờ dần xuống dưới */
    -webkit-mask-image: linear-gradient(to bottom, black, transparent);
    mask-image: linear-gradient(to bottom, black, transparent);
}
```

### 4. `offset-path` (Motion Path) / Đường chuyển động

Cho phép phần tử di chuyển theo một đường dẫn (path) bất kỳ, không chỉ là đường thẳng.

Allows an element to move along any path, not just straight lines.

```css
.moving-circle {
    offset-path: path('M0,0 C150,0 150,150 300,150');
    animation: move 3s infinite alternate;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Creative Layouts**: Tạo ra các thiết kế tạp chí, brochure độc đáo với văn bản uốn lượn.
- **Performance**: `clip-path` và `mask` sủ dụng GPU acceleration, mượt mà hơn việc dùng ảnh PNG trong suốt nặng nề.
- **Interactivity**: Có thể animate `clip-path` để tạo hiệu ứng biến hình (morphing) thú vị.

### Ứng dụng thực tế / Real-world Applications
- **Avatars**: Avatar hình lục giác hoặc ngôi sao bằng `clip-path`.
- **Text Wrap**: Chữ bao quanh ảnh cà phê tròn trịa trong bài viết blog.
- **Gradient Text**: Dùng `background-clip: text` để làm chữ màu gradient.
- **Image Reveal**: Hiệu ứng xuất hiện ảnh bằng cách mở rộng `clip-path`.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng công cụ tạo clip-path online (như Clippy) để lấy tọa độ polygon dễ dàng.
- ✅ **DO**: Cung cấp fallback cho trình duyệt cũ (dù hỗ trợ hiện nay đã khá tốt).
- ❌ **DON'T**: Đừng dùng `clip-path` để ẩn phần tử thay cho `display: none` nếu bạn muốn nó biết mất hoàn toàn khỏi cây khả năng truy cập (accessibility tree). `clip-path` chỉ ẩn về mặt thị giác.

## Ví dụ hoàn chỉnh / Complete Example

### Demo 1: Text Wrapping with Shape Outside

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: serif; line-height: 1.6; padding: 40px; }
        
        .article {
            max-width: 600px;
            margin: auto;
            text-align: justify;
        }

        .shape-img {
            float: left;
            width: 150px;
            height: 150px;
            background: #3498db;
            /* Tạo hình tròn hiển thị */
            clip-path: circle(50%); 
            /* Tạo đường bao cho chữ tránh ra */
            shape-outside: circle(50%);
            margin: 10px 20px 10px 0;
        }

        .hexagon {
            width: 100px;
            height: 100px;
            background: #e74c3c;
            /* Hình lục giác */
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            margin: 20px auto;
        }
    </style>
</head>
<body>

    <div class="article">
        <h3>The Circle Wrap</h3>
        <div class="shape-img"></div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cục diện văn bản này sẽ uốn lượn xung quanh hình tròn màu xanh bên trái. 
            Đây là sức mạnh của thuộc tính <code>shape-outside</code>. 
            Nó giúp phá vỡ cấu trúc khối vuông vức thông thường của web, 
            mang lại cảm giác tự nhiên giống như dàn trang tạp chí in ấn.
            Nullam id dolor id nibh ultricies vehicula ut id elit. 
            Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
    </div>

    <h3 style="text-align: center;">Hexagon Clip Path</h3>
    <div class="hexagon"></div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [Clippy - CSS Clip-path maker](https://bennettfeely.com/clippy/)
- [MDN - Clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- [MDN - Shape-outside](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)
