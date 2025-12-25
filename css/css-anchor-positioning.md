# CSS Anchor Positioning / Định vị neo trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Z-index](./css-z-index.md)  
**➡️ Bài sau / Next:** [Popover](./css-popover.md)

---

## Mô tả / Description

**Anchor Positioning** là một tính năng hiện đại và mạnh mẽ (mới ra mắt gần đây), cho phép bạn "neo" (gắn) một phần tử định vị tuyệt đối (absolute positioned element) vào một phần tử khác trên trang mà không cần dùng JavaScript để tính toán tọa độ. Đây là giải pháp "native" cho các vấn đề kinh điển như Tooltips, Dropdown menus, và Select lists.

**Anchor Positioning** is a powerful modern feature (recently released) that allows you to "anchor" an absolutely positioned element to another element on the page without using JavaScript to calculate coordinates. This is the "native" solution for classic problems like Tooltips, Dropdown menus, and Select lists.

> [!WARNING]
> Tính năng này còn khá mới. Hãy kiểm tra [Can I Use](https://caniuse.com/css-anchor-positioning) để xem hỗ trợ trình duyệt (Chủ yếu là Chrome 125+ tại thời điểm viết bài).
> This feature is quite new. Check [Can I Use](https://caniuse.com/css-anchor-positioning) for browser support (Mainly Chrome 125+ at the time of writing).

## Khái niệm chính / Main Concepts

### 1. Defining an Anchor / Định nghĩa Neo

Sử dụng thuộc tính `anchor-name` để đặt tên cho phần tử muốn làm điểm neo. Tên phải bắt đầu bằng dấu gạch ngang `--`.

Use the `anchor-name` property to name the element you want to serve as the anchor. The name must start with dashes `--`.

```css
.button-trigger {
    anchor-name: --my-dropdown;
}
```

### 2. Positioning the Target / Định vị phần tử mục tiêu

Sử dụng `position-anchor` để liên kết với neo, và hàm `anchor()` để lấy vị trí.

Use `position-anchor` to link to the anchor, and the `anchor()` function to retrieve position.

```css
.dropdown-menu {
    position: absolute;
    position-anchor: --my-dropdown; /* Liên kết với neo */
    
    /* Neo cạnh trên của menu vào cạnh dưới của nút */
    /* Pin top of menu to bottom of button */
    top: anchor(bottom); 
    
    /* Neo cạnh trái của menu vào cạnh trái của nút */
    /* Pin left of menu to left of button */
    left: anchor(left);
}
```

### 3. Quick Positioning with `inset-area` / Định vị nhanh

Một cách viết tắt cực kỳ tiện lợi mới được giới thiệu.

An extremely convenient shorthand recently introduced.

```css
.tooltip {
    position: absolute;
    position-anchor: --info-icon;
    
    /* Đặt tooltip ở phía trên chính giữa */
    /* Place tooltip at top center */
    inset-area: top; 
    
    /* Hoặc: top start, bottom center, right span-all... */
}
```

### 4. `position-try` / Tự động điều chỉnh vị trí

Tương tự như Popper.js, CSS giờ đây có thể tự động thay đổi vị trí nếu hết chỗ (ví dụ: tooltip lật xuống dưới nếu bên trên hết màn hình).

Similar to Popper.js, CSS can now automatically flip positions if running out of space (e.g., tooltip flips down if no space above).

```css
.tooltip {
    /* Thử ở trên trước, nếu hết chỗ thì lật xuống dưới */
    /* Try top first, if no space flip to bottom */
    position-try-options: flip-block;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **No JavaScript**: Loại bỏ hoàn toàn sự cần thiết của các thư viện JS nặng nề (như Popper.js, Floating UI) cho các tác vụ layout cơ bản.
- **Performance**: Chạy trên main thread của trình duyệt, mượt mà hơn tính toán JS.
- **Semantic Link**: Kết nối rõ ràng giữa trigger và content trong CSS.

### Ứng dụng thực tế / Real-world Applications
- **Tooltips**: Hiển thị chú thích khi hover.
- **Dropdown Menus**: Menu xổ xuống gắn liền với nút kích hoạt.
- **Context Menus**: Menu chuột phải (kết hợp với Popover API).
- **Select Lists**: Tự tạo custom select box.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `@supports(anchor-name: --foo)` để cung cấp fallback cho trình duyệt chưa hỗ trợ.
- ✅ **DO**: Kết hợp với **Popover API** (bài sau) để tạo ra các thành phần tương tác hoàn chỉnh không cần JS.
- ❌ **DON'T**: Đừng dùng cho layout tĩnh bình thường. Chỉ dùng cho các phần tử "nổi" (popups, overlays).

## Ví dụ hoàn chỉnh / Complete Example

Một tooltip đơn giản sử dụng Anchor Positioning. (Lưu ý: Có thể cần Chrome mới nhất để chạy).

A simple tooltip using Anchor Positioning. (Note: May require latest Chrome to run).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: system-ui; 
            height: 100vh; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background: #f0f2f5;
        }

        /* 1. Thiết lập Anchor */
        .anchor-btn {
            anchor-name: --my-tooltip-anchor;
            
            padding: 10px 20px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        /* 2. Thiết lập Target */
        .tooltip {
            /* Cần position absolute hoặc fixed */
            position: absolute;
            position-anchor: --my-tooltip-anchor;
            
            /* Định vị bằng inset-area (cách mới) */
            inset-area: top; 
            
            /* Hoặc cách thủ công (cách cũ hơn):
            bottom: anchor(top);
            left: anchor(center);
            transform: translateX(-50%);
            */

            margin-bottom: 10px; /* Khoảng cách */
            padding: 8px 12px;
            background: #333;
            color: white;
            border-radius: 4px;
            font-size: 0.9em;
            
            /* Ẩn mặc định, hiện khi hover */
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
        }

        /* Mũi tên tooltip (Option) */
        .tooltip::after {
            content: '';
            position: absolute;
            position-anchor: --my-tooltip-anchor;
            left: anchor(center);
            bottom: -5px;
            border: 5px solid transparent;
            border-top-color: #333;
            transform: translateX(-50%);
        }

        /* Logic hiển thị */
        .anchor-btn:hover + .tooltip {
            opacity: 1;
        }
    </style>
</head>
<body>

    <button class="anchor-btn">Hover me</button>
    <div class="tooltip">I am anchored to the button!</div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Anchor_Positioning)
- [Chrome Developers - Introducing Anchor Positioning](https://developer.chrome.com/blog/anchor-positioning-api)
