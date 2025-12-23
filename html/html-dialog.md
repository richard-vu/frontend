# Dialog / Hộp thoại HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Details and Summary](./html-details-summary.md)  
**➡️ Bài sau / Next:** Không có / None

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng phần tử dialog để đại diện cho các hộp thoại (dialogs, modals). Dialog element cho phép xây dựng các cửa sổ tương tác (modal/non-modal) một cách chuẩn hóa, với accessibility được tích hợp sẵn.

This lesson introduces how to use the dialog element to represent dialogs and modals. The dialog element allows building interactive windows (modal/non-modal) in a standardized way, with built-in accessibility.

## Khái niệm chính / Main Concepts

### Basic Dialog / Dialog cơ bản

```html
<button id="openDialog">Mở dialog / Open dialog</button>

<dialog id="myDialog">
    <h2>Tiêu đề Dialog / Dialog Title</h2>
    <p>Nội dung dialog / Dialog content</p>
    <button id="closeDialog">Đóng / Close</button>
</dialog>

<script>
const dialog = document.getElementById('myDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');

openBtn.addEventListener('click', () => {
    dialog.showModal(); // Hoặc / Or: dialog.show()
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});
</script>
```

### Modal vs Non-Modal

```html
<script>
// Modal (có backdrop, block tương tác)
// Modal (with backdrop, blocks interaction)
dialog.showModal();

// Non-modal (không block tương tác)
// Non-modal (doesn't block interaction)
dialog.show();
</script>
```

### Dialog with Form / Dialog với Form

```html
<dialog id="formDialog">
    <form method="dialog">
        <h2>Đăng nhập / Login</h2>
        
        <label for="username">Tên / Username:</label>
        <input type="text" id="username" name="username" required>
        
        <label for="password">Mật khẩu / Password:</label>
        <input type="password" id="password" name="password" required>
        
        <button type="submit">Đăng nhập / Login</button>
        <button type="button" value="cancel">Hủy / Cancel</button>
    </form>
</dialog>

<script>
const formDialog = document.getElementById('formDialog');

formDialog.addEventListener('close', () => {
    console.log('Return value:', formDialog.returnValue);
});
</script>
```

### Styling Dialog / Style Dialog

```html
<style>
dialog {
    border: none;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
}

dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
}

dialog[open] {
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>

<dialog id="styledDialog">
    <h2>Styled Dialog</h2>
    <p>Dialog với animation / Dialog with animation</p>
    <button onclick="this.closest('dialog').close()">
        Đóng / Close
    </button>
</dialog>
```

### Close on Backdrop Click / Đóng khi click backdrop

```html
<dialog id="backdropDialog">
    <h2>Click outside to close</h2>
    <p>Nhấp bên ngoài để đóng / Click outside to close</p>
</dialog>

<script>
const backdropDialog = document.getElementById('backdropDialog');

backdropDialog.addEventListener('click', (e) => {
    const rect = backdropDialog.getBoundingClientRect();
    const isInDialog = (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
    );
    
    if (!isInDialog) {
        backdropDialog.close();
    }
});
</script>
```

### Keyboard Handling / Xử lý bàn phím

```html
<dialog id="keyboardDialog">
    <h2>Press ESC to close</h2>
    <p>Nhấn ESC để đóng / Press ESC to close</p>
    <button>Close button</button>
</dialog>

<script>
const keyboardDialog = document.getElementById('keyboardDialog');

// ESC key automatically closes modal dialogs
// Phím ESC tự động đóng modal dialogs

// Custom keyboard handling
keyboardDialog.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Dialog closing / Dialog đang đóng');
    }
});
</script>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Native element**: Không cần thư viện / No library needed
- **Accessibility**: Accessibility tích hợp sẵn / Built-in accessibility
- **Focus management**: Quản lý focus tự động / Automatic focus management
- **Backdrop**: Backdrop tự động / Automatic backdrop

### Ứng dụng thực tế / Real-world Applications

- **Confirmation dialogs**: Xác nhận hành động / Action confirmations
- **Login forms**: Form đăng nhập / Login forms
- **Alerts**: Thông báo / Notifications
- **Image lightbox**: Xem ảnh phóng to / Image viewer
- **Settings panels**: Bảng cài đặt / Settings panels

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `showModal()` cho modal dialogs / Use `showModal()` for modal dialogs
- ✅ **DO**: Provide close button / Provide close button
- ✅ **DO**: Handle ESC key / Handle ESC key
- ✅ **DO**: Return focus sau khi đóng / Return focus after closing
- ❌ **DON'T**: Không lạm dụng modals / Don't overuse modals
- ❌ **DON'T**: Không quên accessibility / Don't forget accessibility

## Tài liệu tham khảo / References

- [MDN - dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [MDN - HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
