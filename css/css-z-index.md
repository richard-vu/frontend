# CSS Z-index & Stacking Contexts / Thứ tự xếp chồng

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Cursors](./css-cursors.md)  
**➡️ Bài sau / Next:** [Anchor Positioning](./css-anchor-positioning.md)

---

## Mô tả / Description

Mặc định, các phần tử HTML xếp chồng lên nhau theo thứ tự xuất hiện trong code. `z-index` cho phép bạn thay đổi thứ tự này trên trục Z (trục chiều sâu hướng về phía người dùng). Tuy nhiên, `z-index` thường gây đau đầu cho lập trình viên vì khái niệm **Stacking Context (Ngữ cảnh xếp chồng)**.

By default, HTML elements stack in the order they appear in the code. `z-index` allows you to change this order on the Z-axis (depth axis facing the user). However, `z-index` often causes headaches for developers due to the concept of **Stacking Context**.

## Khái niệm chính / Main Concepts

### 1. Basic Z-index / Z-index cơ bản

`z-index` chỉ hoạt động trên các phần tử đã được định vị (có `position` khác `static`) hoặc là con của Flex/Grid container.

`z-index` only works on positioned elements (having `position` other than `static`) or children of Flex/Grid containers.

```css
.box-top {
    position: absolute; /* Bắt buộc! */
    z-index: 10;
    background: red;
}

.box-bottom {
    position: absolute;
    z-index: 5;
    background: blue;
}
/* box-top sẽ nằm đè lên box-bottom */
```

### 2. The Stacking Context / Ngữ cảnh xếp chồng

Đây là quy tắc quan trọng nhất: **Z-index không phải là toàn cục (global)**. Nó chỉ so sánh được trong cùng một Ngữ cảnh xếp chồng.

Một ngữ cảnh xếp chồng mới được tạo ra khi:
- Element có `position: relative/absolute` VÀ `z-index` khác `auto`.
- Element có `position: fixed` hoặc `sticky`.
- Element có `opacity` < 1.
- Element có `transform` khác `none`.
- Element có `filter` khác `none`.
- Element là con của `display: grid/flex` VÀ có `z-index` khác `auto`.

This is the most important rule: **Z-index is not global**. It only compares within the same Stacking Context.

A new stacking context is created when:
- Element has `position: relative/absolute` AND `z-index` not `auto`.
- Element has `position: fixed` or `sticky`.
- Element has `opacity` < 1.
- Element has `transform`, `filter` not `none`.
- Element is a Flex/Grid child AND `z-index` not `auto`.

### 3. The "Trap" / Cái bẫy thường gặp

Nếu cha (Parent A) có `z-index: 1` và cha (Parent B) có `z-index: 2` => Mọi con của Parent A sẽ LUÔN nằm dưới Parent B, bất kể con của A có `z-index: 9999`.

If Parent A has `z-index: 1` and Parent B has `z-index: 2` => All children of Parent A will ALWAYS be below Parent B, even if A's child has `z-index: 9999`.

```css
.parent-low {
    z-index: 1;
    position: relative;
}
.child-high {
    z-index: 9999; /* Vô dụng khi so với parent-high bên ngoài */
}

.parent-high {
    z-index: 2;
    position: relative;
}
```

### 4. Negative Z-index / Z-index âm

Dùng để đẩy phần tử xuống phía sau cha của nó (nếu cha không tạo stacking context nền).

Used to push an element behind its parent (if the parent typically doesn't create a background stacking context).

```css
.background-decoration {
    z-index: -1;
    position: absolute;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Layering**: Kiểm soát chính xác cái gì nằm trên, cái gì nằm dưới (Header trên banner, Modal trên cùng).
- **Design Effects**: Tạo các hiệu ứng xếp lớp nghệ thuật, parallax.

### Ứng dụng thực tế / Real-world Applications
- **Modals & Overlays**: Thường có z-index rất cao (vd: 1000) để đảm bảo che phủ mọi thứ.
- **Sticky Headers**: Cần z-index cao hơn nội dung cuộn bên dưới.
- **Tooltips**: Phải nổi lên trên các thành phần khác.
- **Dropdowns**: Tránh bị ẩn bởi các nội dung của phần tử tiếp theo.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Quản lý z-index theo hệ thống biến số (variables) để tránh "cuộc chiến z-index" (z-index war: 99999 vs 999999).
- ✅ **DO**: Giữ z-index thấp nhất có thể. Đừng dùng 9999 nếu chỉ cần 2.
- ❌ **DON'T**: Đừng gán `z-index` ngẫu nhiên. Nếu nó không hoạt động, hãy kiểm tra Stacking Context của cha mẹ.
- ❌ **DON'T**: Đừng dùng `opacity` hay `transform` vô tình tạo ra stacking context không mong muốn làm hỏng thứ tự xếp lớp.

## Ví dụ hoàn chỉnh / Complete Example

Minh họa về Stacking Context Trap.

Illustrating the Stacking Context Trap.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: sans-serif; padding: 40px; }
        
        div {
            padding: 20px;
            border: 1px solid black;
            border-radius: 8px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
        }

        /* TEAM RED */
        .team-red {
            background: #ffcccc;
            position: relative;
            z-index: 1; /* Tạo context thấp */
            margin-bottom: -30px; /* Chồng lấn để test */
        }
        
        .red-soldier {
            background: red;
            color: white;
            position: absolute;
            bottom: -20px;
            right: 20px;
            z-index: 9999; /* Rất cao! Nhưng chỉ trong team-red */
        }

        /* TEAM BLUE */
        .team-blue {
            background: #ccccff;
            position: relative;
            z-index: 2; /* Cao hơn team-red */
            margin-left: 50px;
        }

        .blue-soldier {
            background: blue;
            color: white;
            position: relative;
            z-index: 1; /* Rất thấp! */
        }
    </style>
</head>
<body>

    <h2>The Stacking Context Trap</h2>
    <p>Red Soldier (z-index: 9999) is UNDER Blue Soldier (z-index: 1).</p>
    <p>Because Red Team (z-index: 1) is lower than Blue Team (z-index: 2).</p>

    <div class="team-red">
        Team Red (z-index: 1)
        <div class="red-soldier">Red Soldier (9999)</div>
    </div>

    <div class="team-blue">
        Team Blue (z-index: 2)
        <div class="blue-soldier">Blue Soldier (1)</div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [MDN - Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [Philip Walton - What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)
