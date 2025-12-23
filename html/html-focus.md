# Focus / Quản lý Tiêu điểm HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [HTML APIs](./html-apis.md)  
**➡️ Bài sau / Next:** [Other Inline Text Elements](./html-inline-text.md)

---

## Mô tả / Description

Bài học này hướng dẫn cách quản lý thứ tự tập trung (focus order) trong các tài liệu HTML. Focus management rất quan trọng cho accessibility, đặc biệt cho người dùng sử dụng bàn phím và keyboard navigation.

This lesson teaches how to manage focus order in HTML documents. Focus management is crucial for accessibility, especially for users using keyboards and keyboard navigation.

## Khái niệm chính / Main Concepts

### Tabindex Attribute / Thuộc tính Tabindex

```html
<!-- tabindex="0": Focusable theo thứ tự tự nhiên -->
<!-- tabindex="0": Focusable in natural order -->
<div tabindex="0">Focusable div</div>

<!-- tabindex="-1": Focusable bằng JavaScript, không bằng Tab -->
<!-- tabindex="-1": Focusable by JavaScript, not by Tab -->
<div tabindex="-1" id="modal">Modal content</div>

<!-- tabindex="1+": Thứ tự tùy chỉnh (không khuyến khích) -->
<!-- tabindex="1+": Custom order (not recommended) -->
<input tabindex="1">
<input tabindex="2">
```

### Focus Styling / Style khi focus

```html
<style>
/* Focus outline / Viền khi focus */
button:focus {
    outline: 2px solid blue;
    outline-offset: 2px;
}

/* Focus visible (chỉ keyboard) */
/* Focus visible (keyboard only) */
button:focus-visible {
    outline: 2px solid orange;
}

/* Remove default outline (không khuyến khích) */
/* Remove default outline (not recommended) */
button:focus {
    outline: none; /* BAD! */
}
</style>

<button>Click me</button>
```

### Focus Management with JavaScript / Quản lý focus với JavaScript

```html
<button id="openModal">Mở modal / Open Modal</button>

<div id="modal" tabindex="-1" style="display: none;">
    <h2>Modal</h2>
    <button id="closeModal">Đóng / Close</button>
</div>

<script>
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.focus(); // Set focus
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    openBtn.focus(); // Return focus
});
</script>
```

### Skip Links / Liên kết bỏ qua

```html
<a href="#main-content" class="skip-link">
    Bỏ qua điều hướng / Skip to main content
</a>

<style>
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
}

.skip-link:focus {
    top: 0;
}
</style>

<nav><!-- Navigation --></nav>

<main id="main-content" tabindex="-1">
    <!-- Main content -->
</main>
```

### Focus Trap / Giữ focus trong modal

```html
<div id="modal" role="dialog" aria-modal="true">
    <h2>Modal Title</h2>
    <button id="firstFocusable">Button 1</button>
    <button>Button 2</button>
    <button id="lastFocusable">Close</button>
</div>

<script>
const modal = document.getElementById('modal');
const firstFocusable = document.getElementById('firstFocusable');
const lastFocusable = document.getElementById('lastFocusable');

lastFocusable.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        firstFocusable.focus();
    }
});

firstFocusable.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        lastFocusable.focus();
    }
});
</script>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Accessibility**: Hỗ trợ người dùng keyboard / Support keyboard users
- **User experience**: Navigation dễ dàng / Easy navigation
- **Screen readers**: Hoạt động tốt với screen readers / Works well with screen readers
- **Compliance**: Tuân thủ WCAG / WCAG compliance

### Ứng dụng thực tế / Real-world Applications

- **Modals**: Quản lý focus trong dialogs / Focus management in dialogs
- **Forms**: Tab order trong forms / Tab order in forms
- **Menus**: Keyboard navigation / Keyboard navigation
- **Custom widgets**: Accessible widgets / Accessible widgets

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng tabindex="0" cho custom focusable elements / Use tabindex="0" for custom focusable elements
- ✅ **DO**: Maintain visible focus indicator / Maintain visible focus indicator
- ✅ **DO**: Return focus sau khi đóng modal / Return focus after closing modal
- ❌ **DON'T**: Không dùng tabindex > 0 / Don't use tabindex > 0
- ❌ **DON'T**: Không remove focus outline without alternative / Don't remove focus outline without alternative

## Tài liệu tham khảo / References

- [MDN - Focus Management](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [WCAG - Keyboard Accessible](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
