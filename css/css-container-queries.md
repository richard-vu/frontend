# CSS Container Queries / Truy vấn vùng chứa

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Scroll-driven Animations](./css-scroll-driven-animations.md)  
**➡️ Bài sau / Next:** [Conclusion](./css-conclusion.md)

---

## Mô tả / Description

Trong hơn một thập kỷ, chúng ta đã xây dựng Responsive Design dựa trên kích thước màn hình (Viewport) bằng `media queries`. Tuy nhiên, khi xây dựng các component tái sử dụng (như Card), chúng không nên quan tâm màn hình to bao nhiêu, mà nên quan tâm **vùng chứa (container)** của nó to bao nhiêu. **Container Queries** sinh ra để giải quyết vấn đề này, đánh dấu một kỷ nguyên mới của Responsive Component-based Design.

For over a decade, we built Responsive Design based on screen size (Viewport) using `media queries`. However, reusable components (like Cards) shouldn't care how big the screen is, but rather how big their **container** is. **Container Queries** solve this, marking a new era of Responsive Component-based Design.

## Khái niệm chính / Main Concepts

### 1. Define Container / Định nghĩa Vùng chứa

Để sử dụng Container Query, bạn phải đánh dấu một phần tử là "container".

To use Container Query, you must mark an element as a "container".

```css
.card-wrapper {
    /* Đánh dấu phần tử này là container để con nó đo đạc */
    container-type: inline-size; 
    
    /* Có thể đặt tên để query cụ thể (optional) */
    container-name: my-card;
}

/* Shorthand */
.card-wrapper { container: my-card / inline-size; }
```

- `inline-size`: Đo kích thước theo chiều ngang (thường dùng nhất).
- `size`: Đo cả ngang và dọc (ít dùng vì dễ gây lỗi layout).
- `normal`: Mặc định (không phải container).

### 2. `@container` Rule / Quy tắc @container

Thay vì `@media`, ta dùng `@container` để viết CSS cho phần tử con dựa trên kích thước cha.

Instead of `@media`, we use `@container` to style child elements based on parent size.

```css
.card {
    display: flex;
    flex-direction: column;
}

/* Khi container cha rộng hơn 400px */
@container (min-width: 400px) {
    .card {
        flex-direction: row; /* Chuyển sang hàng ngang */
    }
}
```

### 3. Container Query Units / Đơn vị Container

Tương tự như `vw/vh` (viewport units), ta có các đơn vị dựa trên container:
- `cqw`: 1% chiều rộng container.
- `cqh`: 1% chiều cao container.
- `cqi`: 1% kích thước inline.
- `cqb`: 1% kích thước block.
- `cqmin` / `cqmax`: Min/Max của cqi và cqb.

```css
h2 {
    /* Font size bằng 5% chiều rộng container cha */
    font-size: 5cqw; 
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **True Modularity**: Một component (ví dụ: Product Card) có thể tự thích ứng khi đặt ở sidebar (nhỏ -> xếp dọc) hoặc main content (to -> xếp ngang) mà không cần viết class override riêng.
- **Write Once, Use Everywhere**: Viết CSS logic một lần, dùng mọi nơi.

### Ứng dụng thực tế / Real-world Applications
- **Product Cards**: Tự động chuyển layout từ dọc sang ngang, ẩn/hiện nút "Mua ngay" tùy theo độ rộng cột chứa nó.
- **Sidebar Widgets**: Widget thời tiết hoặc tin tức có thể co giãn font chữ và icon theo độ rộng sidebar.
- **Pagination**: Ẩn bớt số trang khi container quá hẹp.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `container-type: inline-size` trong 99% trường hợp.
- ✅ **DO**: Kết hợp Container Queries với Grid Layout để tạo ra các dashboard cực kỳ linh hoạt.
- ❌ **DON'T**: Đừng dùng Container Queries cho bố cục trang tổng thể (Page Layout), hãy dùng Media Queries cho việc đó. Container Queries dành cho **Components**.

## Ví dụ hoàn chỉnh / Complete Example

### Responsive Card Component (Context-aware)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { margin: 0; padding: 20px; font-family: system-ui; }

        /* THE CONTAINER */
        .component-wrapper {
            container-type: inline-size; /* Bắt buộc */
            background: #eee;
            padding: 20px;
            resize: horizontal; /* Cho phép user kéo giãn để test */
            overflow: auto;
            max-width: 100%;
        }

        /* THE COMPONENT */
        .product-card {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: white;
            padding: 10px;
            border-radius: 8px;
        }

        .product-img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 4px;
        }

        .product-info h3 { margin: 0; font-size: 1.2rem; }
        .product-info p { margin: 5px 0; color: #666; }
        
        button {
            background: #3498db;
            color: white;
            border: none;
            padding: 8px;
            width: 100%;
            border-radius: 4px;
            font-size: 4cqw; /* Font size theo container width! */
        }

        /* CONTAINER QUERY LOGIC */
        /* Nếu container > 400px: Layout Ngang */
        @container (min-width: 400px) {
            .product-card {
                flex-direction: row;
                align-items: center;
            }
            .product-img {
                width: 150px;
                height: 100%;
            }
            button {
                width: auto;
                font-size: 1rem; /* Reset font size */
            }
        }

        /* Nếu container > 600px: Layout Ngang + Ảnh to hơn */
        @container (min-width: 600px) {
            .product-card {
                padding: 20px;
                gap: 30px;
                background: #fdf5e6; /* Đổi màu nền để dễ nhận biết */
            }
            .product-img {
                width: 250px;
            }
            .product-info h3 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>

    <h2>Resize the wrapper below to see changes:</h2>
    <div class="component-wrapper" style="width: 300px;">
        <div class="product-card">
            <img class="product-img" src="https://picsum.photos/id/1025/400/300" alt="Dog">
            <div class="product-info">
                <h3>Cute Puppy</h3>
                <p>A lovely pug wrapping itself in a blanket.</p>
                <button>Adopt Me</button>
            </div>
        </div>
    </div>

    <p><small>(Drag the bottom-right corner of the grey box)</small></p>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [Ishadeed - Say Hello To CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/)
