# CSS Popover & Dialog / Popover và Hộp thoại

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Anchor Positioning](./css-anchor-positioning.md)  
**➡️ Bài sau / Next:** [Functions](./css-functions.md)

---

## Mô tả / Description

Trong nhiều năm, để tạo modal, tooltip, hoặc menu hamburger, chúng ta phải dùng đủ loại thủ thuật `z-index`, `position: absolute`, và hàng tá JavaScript để quản lý đóng/mở. Giờ đây, HTML và CSS đã hỗ trợ native (nguyên bản) thông qua **Popover API** và thẻ `<dialog>`. Chúng tự động xử lý Top layer (lớp trên cùng), focus trap, và đóng khi click ra ngoài.

For years, to create modals, tooltips, or hamburger menus, we had to use `z-index` hacks, `position: absolute`, and tons of JavaScript to manage open/close states. Now, HTML and CSS support this natively via the **Popover API** and `<dialog>` tag. They automatically handle the Top layer, focus trap, and dismiss-on-outside-click.

## Khái niệm chính / Main Concepts

### 1. The `<dialog>` Element / Thẻ Dialog

Dùng cho các thông báo quan trọng, chặn tương tác (modal) hoặc không chặn (non-modal).

Used for important messages, blocking interaction (modal) or non-blocking (non-modal).

```html
<!-- HTML -->
<dialog id="myDialog">
    <p>This is a native dialog!</p>
    <form method="dialog">
        <button>Close</button>
    </form>
</dialog>
```

```css
/* CSS Styling */
dialog {
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 20px;
}

dialog::backdrop {
    /* Lớp nền mờ phía sau modal */
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
}
```

### 2. The Popover API / Thuộc tính Popover

Dùng cho các phần tử nhẹ nhàng hơn như tooltip, menu, toast message.

Used for lighter elements like tooltips, menus, toast messages.

```html
<!-- Nút kích hoạt -->
<button popovertarget="my-tooltip">Show Info</button>

<!-- Nội dung Popover -->
<div id="my-tooltip" popover>
    I am a popover! Click outside to close me.
</div>
```

```css
/* Styling popover */
[popover] {
    /* Trình duyệt tự động căn giữa và clear style, bạn cần style lại */
    padding: 10px;
    border: 1px solid #ccc;
    background: white;
    
    /* Hiệu ứng xuất hiện */
    transition: opacity 0.3s;
    opacity: 0;
}

/* Pseudo-class mở */
[popover]:popover-open {
    opacity: 1;
}
```

### 3. Top Layer / Lớp trên cùng

Cả `<dialog>` và `popover` đều được đưa lên một lớp đặc biệt gọi là **Top Layer**. Lớp này nằm trên TẤT CẢ các layer khác của trang web, bất chấp `z-index` hay `overflow: hidden` của cha mẹ.

Both `<dialog>` and `popover` are promoted to a special layer called the **Top Layer**. This layer sits above ALL other page layers, ignoring parent `z-index` or `overflow: hidden`.

### 4. `::backdrop` Pseudo-element

Chỉ dành cho Dialog và Popover. Nó cho phép bạn style lớp mờ phía sau hộp thoại.

Only for Dialog and Popover. It allows you to style the dim layer behind the box.

```css
::backdrop {
    background: rgba(0,0,0,0.8);
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Zero JS logic**: Không cần viết code JS `addEventListener('click')` để đóng/mở.
- **Accessibility**: Tự động hỗ trợ phím `Esc` để đóng, quản lý focus hợp lý.
- **Top Layer**: Không bao giờ lo bị `z-index` quá thấp hay bị cắt bởi `overflow: hidden`.

### Ứng dụng thực tế / Real-world Applications
- **Modals**: Form đăng nhập, xác nhận xóa.
- **Toasts**: Thông báo góc màn hình (dùng popover manual).
- **Dropdowns**: Menu điều hướng (kết hợp với Anchor Positioning).

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Dùng `<dialog>` cho các tương tác yêu cầu người dùng trả lời (Confirm/Cancel).
- ✅ **DO**: Dùng `popover` cho các nội dung bổ trợ, tạm thời (Menu, Info).
- ✅ **DO**: Luôn style `::backdrop` để người dùng biết họ cần tập trung vào dialog.
- ❌ **DON'T**: Đừng tự viết lại logic modal bằng `div` trừ khi bạn cần hỗ trợ trình duyệt quá cũ (IE).

## Ví dụ hoàn chỉnh / Complete Example

### Demo 1: Native Popover (No JS required for triggering)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: system-ui; padding: 40px; }

        /* Style cho nút */
        button {
            padding: 10px 20px;
            cursor: pointer;
        }

        /* Style cho Popover */
        #menu-popover {
            padding: 0;
            border: none;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            min-width: 150px;
            
            /* Định vị (Mặc định là giữa màn hình, nhưng có thể dùng anchor) */
            /* Ở đây demo đơn giản để giữa màn hình */
        }

        .menu-item {
            padding: 10px 20px;
            display: block;
            text-decoration: none;
            color: #333;
            transition: background 0.2s;
        }

        .menu-item:hover {
            background: #f0f0f0;
        }

        /* Animation */
        #menu-popover {
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.2s allow-discrete;
        }

        #menu-popover:popover-open {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>

    <h3>Popover API Demo</h3>
    <button popovertarget="menu-popover">Toggle Menu</button>

    <div id="menu-popover" popover>
        <a href="#" class="menu-item">Profile</a>
        <a href="#" class="menu-item">Settings</a>
        <a href="#" class="menu-item">Logout</a>
    </div>

</body>
</html>
```

### Demo 2: Native Dialog (Minimal JS needed for showModal)

```html
<button onclick="document.getElementById('confirmDialog').showModal()">
    Delete Account
</button>

<dialog id="confirmDialog">
    <h3>Are you sure?</h3>
    <p>This action cannot be undone.</p>
    <div style="display: flex; gap: 10px; justify-content: flex-end;">
        <!-- method="dialog" đóng dialog mà không submit form -->
        <form method="dialog">
            <button>Cancel</button>
            <button style="background: red; color: white; border: none; padding: 5px 10px;">Delete</button>
        </form>
    </div>
</dialog>
```

## Tài liệu tham khảo / References
- [MDN - Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [MDN - Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
