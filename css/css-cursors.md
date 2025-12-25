# CSS Cursors and Pointers / Con trỏ trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Focus](./css-focus.md)  
**➡️ Bài sau / Next:** [Z-index](./css-z-index.md)

---

## Mô tả / Description

Thuộc tính `cursor` cho phép bạn thay đổi hình dạng của con trỏ chuột khi người dùng di chuột qua một phần tử. Đây là một cách quan trọng để giao tiếp với người dùng về những gì có thể thực hiện được (ví dụ: hình bàn tay để bấm, hình chữ I để nhập văn bản, hoặc hình tròn cấm để báo hiệu không khả dụng).

The `cursor` property allows you to change the shape of the mouse cursor when a user hovers over an element. This is a vital way to communicate functionality to the user (e.g., a hand for clicking, an I-beam for text input, or a slashed circle for unavailable actions).

## Khái niệm chính / Main Concepts

### 1. Common Cursors / Các con trỏ phổ biến

Các giá trị mặc định thường dùng nhất.

The most frequently used default values.

```css
.btn {
    cursor: pointer; /* Bàn tay (dùng cho nút bấm/link) */
}

.disabled {
    cursor: not-allowed; /* Vòng tròn gạch chéo (không cho phép) */
}

.text-area {
    cursor: text; /* Chữ I (vùng chọn văn bản) */
}

.loading {
    cursor: wait; /* Đồng hồ cát hoặc vòng xoay (đang tải) */
    /* Hoặc */
    cursor: progress; /* Mũi tên kèm vòng xoay (đang xử lý nền) */
}
```

### 2. Action Cursors / Con trỏ hành động

Biểu thị các hành động cụ thể như kéo thả, phóng to.

Indicating specific actions like dragging or zooming.

```css
.draggable {
    cursor: grab; /* Bàn tay mở (sẵn sàng kéo) */
}

.draggable:active {
    cursor: grabbing; /* Bàn tay nắm lại (đang kéo) */
}

.zoom-in {
    cursor: zoom-in; /* Kính lúp cộng */
}

.help {
    cursor: help; /* Dấu chấm hỏi */
}
```

### 3. Custom Cursors / Con trỏ tùy chỉnh

Bạn có thể sử dụng hình ảnh riêng làm con trỏ. Luôn luôn cung cấp một giá trị fallback (dự phòng).

You can use your own images as cursors. Always provide a fallback value.

```css
.custom {
    /* url(path), x y, fallback keyword */
    /* x y là tọa độ điểm nóng (hotspot), mặc định là 0 0 (góc trên trái) */
    cursor: url('images/magic-wand.png') 0 0, auto; 
}
```

### 4. Resizing Cursors / Con trỏ thay đổi kích thước

Thường dùng cho các phần tử có thể kéo giãn.

Often used for resizable elements.

```css
.resize-ew { cursor: ew-resize; } /* East-West (Ngang) */
.resize-ns { cursor: ns-resize; } /* North-South (Dọc) */
.resize-nwse { cursor: nwse-resize; } /* Chéo góc trên-trái xuống dưới-phải */
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **User Feedback**: Báo hiệu ngay lập tức về khả năng tương tác (VD: Có click được không?).
- **Context**: Cho người dùng biết hệ thống đang bận (`wait`) hoặc vùng này để di chuyển (`move`).
- **Identity**: Custom cursor có thể tạo nên nét độc đáo cho thương hiệu (thường dùng trong Portfolio hoặc Game web).

### Ứng dụng thực tế / Real-world Applications
- **Drag and Drop**: Chuyển đổi giữa `grab` và `grabbing` khi người dùng thực hiện thao tác kéo thả.
- **Custom Video Player**: Ẩn con trỏ (`cursor: none`) khi người dùng không di chuyển chuột trong vài giây khi xem video.
- **Image Gallery**: Dùng `zoom-in` khi hover vào ảnh thumbnail.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn dùng `cursor: pointer` cho bất kỳ thứ gì người dùng có thể click (nút, tab, icon đóng).
- ✅ **DO**: Dùng `cursor: not-allowed` cho nút bị disable để giải thích tại sao không bấm được.
- ❌ **DON'T**: Đừng dùng custom cursor quá lớn hoặc chất lượng thấp, gây khó chịu. Giới hạn thường là 32x32 hoặc 64x64 pixel.
- ❌ **DON'T**: Đừng ẩn con trỏ (`cursor: none`) trừ khi có lý do chính đáng (như xem video toàn màn hình), vì người dùng sẽ bị mất phương hướng.

## Ví dụ hoàn chỉnh / Complete Example

Bảng demo các loại con trỏ.

Cursor types demo board.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: system-ui; padding: 40px; background: #fafafa; }
        
        h3 { margin-bottom: 10px; }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 20px;
        }

        .box {
            height: 100px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 0.9em;
            color: #555;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transition: transform 0.2s;
        }

        .box:hover {
            border-color: #3498db;
            color: #3498db;
        }

        /* Classes for Cursor Demo */
        .c-pointer { cursor: pointer; }
        .c-move { cursor: move; }
        .c-not-allowed { cursor: not-allowed; background: #f0f0f0; }
        .c-help { cursor: help; }
        .c-zoom-in { cursor: zoom-in; }
        .c-wait { cursor: wait; }
        .c-text { cursor: text; }
        .c-grab { cursor: grab; }
        .c-grab:active { cursor: grabbing; background: #e0f7fa; }
    </style>
</head>
<body>

    <h2>CSS Cursor Gallery</h2>
    <p>Hover over items to see different cursors.</p>

    <div class="grid">
        <div class="box c-pointer">
            <span>👆 pointer</span>
            <small>Links, Buttons</small>
        </div>
        <div class="box c-not-allowed">
            <span>🚫 not-allowed</span>
            <small>Disabled items</small>
        </div>
        <div class="box c-move">
            <span>✥ move</span>
            <small>Draggable items</small>
        </div>
        <div class="box c-grab">
            <span>✋ grab</span>
            <small>Try clicking!</small>
        </div>
        <div class="box c-zoom-in">
            <span>🔍 zoom-in</span>
            <small>Expand image</small>
        </div>
        <div class="box c-help">
            <span>? help</span>
            <small>Tooltips</small>
        </div>
        <div class="box c-wait">
            <span>⏳ wait</span>
            <small>Loading...</small>
        </div>
        <div class="box c-text">
            <span>I text</span>
            <small>Selectable text</small>
        </div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [CSS-Tricks - Cursor](https://css-tricks.com/almanac/properties/c/cursor/)
