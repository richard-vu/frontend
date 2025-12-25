# CSS View Transitions for SPAs / Chuyển đổi Khung nhìn

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Transitions](./css-transitions.md)  
**➡️ Bài sau / Next:** [Overflow](./css-overflow.md)

---

## Mô tả / Description

**View Transitions API** là một bước nhảy vọt trong công nghệ web. Nó cho phép bạn tạo ra hiệu ứng chuyển trang (page transition) mượt mà như ứng dụng native (mobile app). Trước đây, việc chuyển trang web thường bị giật (flash) hoặc phải reset lại toàn bộ màn hình. Với View Transitions, trình duyệt chụp ảnh trạng thái cũ và mới, sau đó cho phép bạn animate sự thay đổi giữa chúng bằng CSS.

**View Transitions API** is a giant leap in web technology. It allows you to create smooth page transitions just like native apps. Previously, navigating web pages often caused a flash or a full screen reset. With View Transitions, the browser captures snapshots of the old and new states, then allows you to animate the change between them using CSS.

## Khái niệm chính / Main Concepts

### 1. `document.startViewTransition()`

Để kích hoạt hiệu ứng, bạn cần gọi hàm JS này khi cập nhật DOM.

To trigger the effect, you need to call this JS function when updating the DOM.

```javascript
document.startViewTransition(() => {
    // Cập nhật DOM ở đây (ví dụ: đổi trang trong React/Vue, hoặc thay đổi HTML)
    updateTheDOM();
});
```

### 2. The Pseudo-elements Tree / Cây phần tử giả

Khi transition bắt đầu, CSS tạo ra một cây pseudo-elements đặc biệt nằm trên cùng (Top Layer):
- `::view-transition`: Container gốc.
- `::view-transition-group(root)`: Nhóm chứa ảnh cũ và mới của trang.
- `::view-transition-image-pair(root)`: Cặp ảnh.
- `::view-transition-old(root)`: Ảnh chụp màn hình cũ (đang mờ dần).
- `::view-transition-new(root)`: Ảnh chụp màn hình mới (đang hiện dần).

### 3. `view-transition-name` / Định danh chuyển đổi

Đây là chìa khóa để tạo hiệu ứng "morph" (biến hình). Nếu bạn gán cùng một `view-transition-name` cho hai phần tử ở hai trang khác nhau (ví dụ: ảnh thumbnail ở trang danh sách và ảnh lớn ở trang chi tiết), trình duyệt sẽ tự động làm hiệu ứng bay và phóng to ảnh đó từ vị trí cũ sang vị trí mới.

This is the key to creating "morph" effects. If you assign the same `view-transition-name` to two elements on different pages (e.g., a thumbnail on a list page and a large image on a detail page), the browser will automatically animate that image flying and expanding from the old position to the new one.

```css
/* Trang danh sách */
.thumbnail {
    view-transition-name: product-image;
    contain: layout; /* Bắt buộc cho performance */
}

/* Trang chi tiết */
.hero-image {
    view-transition-name: product-image; /* Cùng tên! */
}
```

### 4. Customizing Animations / Tùy chỉnh hoạt ảnh

Mặc định là hiệu ứng Fade (mờ dần). Bạn có thể viết lại bằng CSS Animations tiêu chuẩn.

Default is a Fade effect. You can override it using standard CSS Animations.

```css
/* Custom slide-in effect */
::view-transition-old(root) {
    animation: fade-out 0.5s ease-in-out;
}
::view-transition-new(root) {
    animation: slide-in-from-right 0.5s ease-in-out;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Native Feel**: Web app không còn cảm giác rời rạc giữa các lần click.
- **Continuity**: Giúp người dùng giữ ngữ cảnh (context) khi di chuyển giữa các view.
- **Easy Morphing**: Hiệu ứng biến hình (Shared Element Transition) cực kỳ khó làm thủ công bằng JS, nay trở nên tầm thường với CSS.

### Ứng dụng thực tế / Real-world Applications
- **Gallery -> Detail**: Click vào ảnh nhỏ, ảnh đó phóng to ra toàn màn hình.
- **Video Player**: Video nhỏ ở góc dưới bay lên thành player lớn.
- **Dark Mode Toggle**: Hiệu ứng lan tỏa (ripple) chuyển đổi toàn trang từ sáng sang tối.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Đảm bảo `view-transition-name` là duy nhất trên trang tại một thời điểm.
- ✅ **DO**: Sử dụng `contain: paint` hoặc `layout` trên các phần tử tham gia transition để tránh lỗi rendering.
- ❌ **DON'T**: Đừng lạm dụng animation quá chậm (duration > 0.5s) cho việc chuyển trang, gây cảm giác chậm chạp cho ứng dụng.

## Ví dụ hoàn chỉnh / Complete Example

### Simple Thumbnail Morph Demo

Lưu ý: Demo này giả lập việc thay đổi DOM bằng JS đơn giản. Để xem hiệu quả thực tế cần Chrome 111+.

Note: This demo simulates DOM change with simple JS. Requires Chrome 111+ to view.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: system-ui; padding: 20px; }

        /* LIST VIEW STYLES */
        .list-view {
            display: flex;
            gap: 20px;
        }
        .thumb {
            width: 100px;
            height: 100px;
            background: #3498db;
            border-radius: 8px;
            cursor: pointer;
            view-transition-name: hero-box; /* Tên định danh */
        }

        /* DETAIL VIEW STYLES */
        .detail-view {
            background: #f0f0f0;
            padding: 20px;
            border-radius: 16px;
        }
        .hero {
            width: 100%;
            height: 300px;
            background: #e74c3c; /* Màu khác để thấy rõ đổi màu luôn */
            border-radius: 8px;
            view-transition-name: hero-box; /* Cùng tên định danh */
        }

        /* Ẩn hiện view */
        .hidden { display: none; }
    </style>
</head>
<body>

    <h3>Click the blue box to morph!</h3>

    <!-- View 1: List -->
    <div id="view1" class="list-view">
        <div class="thumb" onclick="toggleView()"></div>
        <p>Item description...</p>
    </div>

    <!-- View 2: Detail -->
    <div id="view2" class="detail-view hidden">
        <div class="hero" onclick="toggleView()"></div>
        <h1>Detail Page</h1>
        <p>Click red box to go back.</p>
    </div>

    <script>
        function toggleView() {
            // Kiểm tra trình duyệt có hỗ trợ không
            if (!document.startViewTransition) {
                updateDOM();
                return;
            }

            // Bắt đầu transition
            document.startViewTransition(() => {
                updateDOM();
            });
        }

        function updateDOM() {
            const v1 = document.getElementById('view1');
            const v2 = document.getElementById('view2');
            
            v1.classList.toggle('hidden');
            v2.classList.toggle('hidden');
        }
    </script>

</body>
</html>
```

## Tài liệu tham khảo / References
- [Chrome Developers - View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [MDN - View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
