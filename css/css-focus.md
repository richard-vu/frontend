# CSS Focus Management / Quản lý Trạng thái Focus trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Shadows](./css-shadows.md)  
**➡️ Bài sau / Next:** [Cursor Styling](./css-cursor-styling.md)

---

## Mô tả / Description

Trạng thái `focus` (tiêu điểm) là cực kỳ quan trọng đối với khả năng truy cập (Accessibility - a11y). Nó cho người dùng biết họ đang tương tác với phần tử nào khi sử dụng bàn phím (tabbing) hoặc các thiết bị hỗ trợ khác. Một sai lầm phổ biến của lập trình viên là xóa bỏ outline mặc định (`outline: none`) mà không cung cấp thay thế, làm cho website trở nên vô dụng với người dùng bàn phím.

The `focus` state is crucial for Accessibility (a11y). It tells users which element they are interacting with when using a keyboard (tabbing) or other assistive devices. A common mistake developers make is removing the default outline (`outline: none`) without providing a replacement, rendering the website unusable for keyboard users.

## Khái niệm chính / Main Concepts

### 1. `:focus` Selector

Áp dụng khi phần tử nhận được tiêu điểm (click vào input, hoặc tab tới link/button).

Applies when an element receives focus (clicking an input, or tabbing to a link/button).

```css
button:focus {
    outline: 2px solid blue;
    background-color: #e6f7ff;
}
```

### 2. `:focus-visible` Selector (New & Best Practice)

Đây là cải tiến hiện đại. Nó chỉ hiển thị focus style **khi người dùng thực sự cần nó** (ví dụ: dùng bàn phím). Nếu người dùng dùng chuột click vào button, `:focus` sẽ kích hoạt nhưng `:focus-visible` thường thì không (trình duyệt tự quyết định thông minh).

This is a modern improvement. It only shows focus styles **when the user actually needs them** (e.g., using a keyboard). If a user clicks a button with a mouse, `:focus` triggers but `:focus-visible` usually doesn't (smart browser heuristic).

```css
/* Tốt nhất cho Nút bấm / Best for Buttons */
button:focus {
    outline: none; /* Xóa outline mặc định cho click chuột */
}

button:focus-visible {
    outline: 2px solid blue; /* Chỉ hiện khi Tab bằng bàn phím */
    outline-offset: 2px;
}
```

### 3. `:focus-within` Selector (Parent Power)

Áp dụng style cho phần tử cha khi **bất kỳ con nào** của nó đang được focus. Rất mạnh mẽ!

Applies styles to the parent element when **any of its children** are focused. Very powerful!

```css
/* Highlight toàn bộ form khi user đang nhập liệu bên trong */
.search-form:focus-within {
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border-color: blue;
}
```

### 4. Customizing Outline / Tùy chỉnh Outline

Sử dụng `outline`, `outline-offset`, và `outline-color`. `outline` khác `border` ở chỗ nó không chiếm diện tích layout.

Using `outline`, `outline-offset`, and `outline-color`. `outline` differs from `border` as it doesn't take up layout space.

```css
.card:focus-visible {
    animation: pulse 1s infinite;
    outline: 2px dashed red;
    outline-offset: 4px; /* Cách xa phần tử 4px */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Accessibility (First Priority)**: Đảm bảo người khuyết tật hoặc người chỉ dùng bàn phím có thể điều hướng web của bạn.
- **UX Enhancement**: Cung cấp phản hồi thị giác rõ ràng vị trí con trỏ hiện tại.
- **Smart Stying**: `:focus-visible` giải quyết vấn đề thẩm mỹ (outline xấu xí khi click chuột) mà không hy sinh tính năng truy cập.

### Ứng dụng thực tế / Real-world Applications
- **Skip Links**: Link ẩn "Skip to content" chỉ hiện ra khi focus, giúp user bỏ qua menu dài.
- **Input Highlights**: Làm sáng input field hoặc đổi màu icon đi kèm khi user focus.
- **Dropdown Menus**: Giữ menu mở khi focus vào các mục con bên trong (`:focus-within`).

## Best Practices / Thực hành tốt nhất

- ❌ **NEVER**: `outline: none;` hoặc `outline: 0;` mà không có style thay thế nào khác (như `box-shadow` hoặc `background`). Đây là lỗi WCAG nghiêm trọng.
- ✅ **DO**: Sử dụng `:focus-visible` làm mặc định để cân bằng giữa thẩm mỹ và trải nghiệm bàn phím.
- ✅ **DO**: Đảm bảo độ tương phản màu sắc (contrast) của focus indicator đủ cao để nhìn thấy.
- ✅ **DO**: Sử dụng `outline-offset` để focus ring không bị dính vào viền phần tử, trông đẹp hơn.

## Ví dụ hoàn chỉnh / Complete Example

So sánh các loại Focus và ứng dụng thực tế của `:focus-within`.

Comparing Focus types and real-world `:focus-within` application.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: system-ui; padding: 40px; }

        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 400px;
        }

        /* 1. Classic Focus (Luôn hiện, kể cả click chuột) */
        .btn-classic:focus {
            outline: 4px solid red; /* Khá khó chịu khi click */
        }

        /* 2. Modern Focus-Visible (Chỉ hiện khi Tab) - HÃY THỬ DÙNG TAB! */
        .btn-modern:focus {
            outline: none; /* Ẩn cho chuột */
        }
        .btn-modern:focus-visible {
            outline: 3px solid #3498db;
            outline-offset: 2px;
        }

        /* 3. Focus Within Form */
        .search-wrapper {
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 8px;
            display: flex;
            gap: 10px;
            transition: all 0.3s;
        }

        /* Khi input bên trong được focus, tô màu cả wrapper cha */
        .search-wrapper:focus-within {
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            transform: scale(1.02);
        }

        input {
            border: none;
            outline: none; /* Tắt outline input vì cha đã xử lý */
            flex: 1;
        }
    </style>
</head>
<body>

    <div class="container">
        <h3>Focus Management</h3>
        <p>Try clicking vs pressing "Tab" key.</p>

        <button class="btn-classic">Old Style (Always Outline)</button>
        <button class="btn-modern">New Style (:focus-visible)</button>

        <h3>Focus Within Demo</h3>
        <div class="search-wrapper">
            <span>🔎</span>
            <input type="text" placeholder="Focus me to light up parent...">
            <button class="btn-modern">Go</button>
        </div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - :focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
- [MDN - :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
- [MDN - :focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
- [A11y Project - Never remove CSS outlines](https://www.a11yproject.com/posts/never-remove-css-outlines/)
