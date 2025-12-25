# CSS Pseudo-classes / Lớp giả trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Pseudo-elements](./css-pseudo-elements.md)  
**➡️ Bài sau / Next:** [Borders](./css-borders.md)

---

## Mô tả / Description

Pseudo-classes (Lớp giả) cho phép bạn áp dụng CSS dựa trên *trạng thái* hoặc *vị trí* của phần tử, thay vì chỉ dựa trên cấu trúc cây DOM tĩnh. Ví dụ: khi người dùng di chuột vào nút, khi một liên kết đã được truy cập, hoặc phần tử con thứ 3 trong danh sách. Pseudo-classes bắt đầu bằng một dấu hai chấm `:`.

Pseudo-classes allow you to apply CSS based on the *state* or *position* of an element, rather than just the static DOM tree structure. For example: when a user hovers over a button, when a link has been visited, or the 3rd child in a list. Pseudo-classes start with a single colon `:`.

## Khái niệm chính / Main Concepts

### 1. User Action Pseudo-classes / Hành động người dùng

Các trạng thái tương tác phổ biến nhất.

The most common interaction states.

```css
button:hover {
    /* Khi chuột di vào / Mouse over */
    background-color: blue;
}

button:active {
    /* Khi đang nhấn chuột xuống / Mouse click down */
    transform: scale(0.98);
}

a:visited {
    /* Link đã từng truy cập / Link visited */
    color: purple;
}

input:focus {
    /* Khi đang nhập liệu / Input focused */
    outline: 2px solid blue;
}
```

### 2. Structural Pseudo-classes / Cấu trúc

Chọn phần tử dựa trên vị trí của nó trong cha mẹ.

Select elements based on their position within the parent.

```css
/* Phần tử con đầu tiên / First child */
li:first-child { font-weight: bold; }

/* Phần tử con cuối cùng / Last child */
li:last-child { margin-bottom: 0; }

/* Công thức nth-child / nth-child formula */
li:nth-child(2) { color: red; } /* Phần tử thứ 2 */
li:nth-child(odd) { background: #eee; } /* Phần tử lẻ (1, 3, 5...) */
li:nth-child(even) { background: #ccc; } /* Phần tử chẵn (2, 4, 6...) */
li:nth-child(3n) { color: green; } /* Mỗi 3 phần tử (3, 6, 9...) */
```

### 3. Form State Pseudo-classes / Trạng thái Form

Rất hữu ích để style cho forms.

Very useful for styling forms.

```css
input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

input:checked + label {
    font-weight: bold; /* Label đậm khi checkbox được chọn */
}

input:required {
    border-left: 3px solid red;
}

input:invalid {
    border-color: red; /* Email không đúng định dạng */
}
```

### 4. Functional Pseudo-classes / Hàm giả

Các class nhận tham số selector.

Classes that accept selector arguments.

```css
/* Chọn tất cả P NGOẠI TRỪ class .special */
/* Select all P EXCEPT class .special */
p:not(.special) {
    color: gray;
}

/* Chọn bất kỳ cái nào khớp (Syntactic sugar) */
/* Select any match */
:is(header, main, footer) p {
    line-height: 1.5;
}

/* Có phần tử con cụ thể */
/* Has specific child (Parent Selector!) */
div:has(img) {
    padding: 10px;
    border: 1px solid #ddd;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Interactivity**: Tạo phản hồi trực quan ngay lập tức cho người dùng (hover, focus).
- **Reduced Classes**: Không cần thêm class thủ công như `.first-item`, `.last-item` vào HTML.
- **Form Validation**: Style các form nhập liệu sai/đúng mà không cần JS.
- **Logic Selection**: `:has()` và `:not()` mang lại sức mạnh logic cho CSS.

### Ứng dụng thực tế / Real-world Applications
- **Striped Tables**: Bảng có các dòng màu xen kẽ (`:nth-child(odd)`).
- **Navigation Menus**: Highlight mục hiện tại hoặc bỏ border mục cuối cùng.
- **Custom Checkboxes**: Ẩn checkbox thật, style `label` dựa trên `:checked`.
- **Skeleton Loading**: Sử dụng `:empty` để style các container chưa có dữ liệu.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Tuân thủ thứ tự **LVHA** cho link: `:link` -> `:visited` -> `:hover` -> `:active`. Nếu sai thứ tự, một số style sẽ bị ghi đè.
- ✅ **DO**: Sử dụng `:focus-visible` thay vì `:focus` nếu bạn muốn giữ outline cho bàn phím nhưng ẩn nó cho người dùng chuột.
- ✅ **DO**: Tận dụng `:nth-child` để giữ HTML sạch sẽ.
- ❌ **DON'T**: Lạm dụng `:not()` quá nhiều lớp lồng nhau gây khó đọc (`:not(:first-child):not(:last-child)`).

## Ví dụ hoàn chỉnh / Complete Example

Một danh sách sản phẩm với nhiều trạng thái.

A product list with multiple states.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: system-ui; padding: 20px; }

        .product-list {
            list-style: none;
            padding: 0;
            max-width: 400px;
        }

        .product-item {
            padding: 15px;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 4px;
            transition: all 0.2s;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
        }

        /* 1. Structural: Màu nền xen kẽ */
        .product-item:nth-child(even) {
            background-color: #f9f9f9;
        }

        /* 2. User Action: Hover & Active */
        .product-item:hover {
            border-color: #3498db;
            transform: translateX(5px); /* Trượt nhẹ sang phải */
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .product-item:active {
            transform: translateX(2px);
        }

        /* 3. Has selector: Highlight item có tag "New" */
        .product-item:has(.badge-new) {
            border-left: 4px solid #e74c3c;
        }

        /* 4. First child styling */
        .product-item:first-child {
            border-top: 4px solid #3498db;
        }

        .badge-new {
            background: #e74c3c;
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.8em;
        }
    </style>
</head>
<body>

    <h3>Product List</h3>
    <ul class="product-list">
        <li class="product-item">
            <span>Product A (Best Seller)</span>
        </li>
        <li class="product-item">
            <span>Product B</span>
            <span class="badge-new">NEW</span>
        </li>
        <li class="product-item">
            <span>Product C</span>
        </li>
        <li class="product-item">
            <span>Product D</span>
        </li>
        <li class="product-item">
            <span>Product E</span>
            <span class="badge-new">NEW</span>
        </li>
    </ul>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS-Tricks - A Complete Guide to CSS Pseudo-Classes](https://css-tricks.com/pseudo-class-selectors/)
