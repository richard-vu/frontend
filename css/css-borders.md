# CSS Borders / Viền CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Pseudo-classes](./css-pseudo-classes.md)  
**➡️ Bài sau / Next:** [Shadows](./css-shadows.md)

---

## Mô tả / Description

Thuộc tính `border` cho phép bạn chỉ định kiểu dáng, độ rộng và màu sắc của viền phần tử. Viền nằm giữa `margin` và `padding` trong Box Model. Ngoài ra, thuộc tính `border-radius` giúp bo tròn các góc, tạo nên giao diện mềm mại hơn.

The `border` property allows you to specify the style, width, and color of an element's border. The border sits between the `margin` and `padding` in the Box Model. Additionally, `border-radius` helps round the corners, creating a softer interface.

## Khái niệm chính / Main Concepts

### 1. Border Shorthand / Cú pháp rút gọn

Cách phổ biến nhất để khai báo viền.

The most common way to declare a border.

```css
/* width | style | color */
.box {
    border: 2px solid #333;
}

.dashed-box {
    border: 1px dashed red;
}
```

### 2. Individual Sides / Từng cạnh riêng lẻ

```css
.card {
    border-top: 4px solid blue;
    border-bottom: 1px solid #ccc;
    border-left: none;
    border-right: none;
}
```

### 3. Border Styles / Các kiểu viền

Các giá trị `border-style`:
- `solid`: Liền mạch (phổ biến nhất)
- `dashed`: Nét đứt
- `dotted`: Dấu chấm
- `double`: Viền đôi
- `none`: Không viền
- `hidden`: Ẩn viền

### 4. Border Radius / Bo góc

Để tạo hình tròn hoặc góc bo mềm mại.

To create circles or soft corners.

```css
.button {
    border-radius: 4px; /* Bo nhẹ cả 4 góc */
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Hình tròn */
}

.pill {
    border-radius: 9999px; /* Hình viên thuốc (Pill shape) */
}
```

### 5. `outline` vs `border`

- **Border**: Chiếm không gian (layout), đẩy nội dung vào trong.
- **Outline**: KHÔNG chiếm không gian, nằm đè lên trên, thường dùng cho trạng thái focus.

- **Border**: Takes up space (layout), pushes content inward.
- **Outline**: Does NOT take up space, sits on top, often used for focus states.

```css
.input:focus {
    /* Không làm xê dịch layout như border */
    outline: 2px solid blue;
    outline-offset: 2px; /* Cách xa element một chút */
}
```

### 6. Logical Borders / Viền Logic

Hỗ trợ đa ngôn ngữ hướng đọc.

Supporting multi-language reading directions.

```css
.quote {
    /* Viền ở cạnh bắt đầu dòng văn bản (Trái với tiếng Anh, Phải với tiếng Ả Rập) */
    border-inline-start: 4px solid #ccc;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Structure**: Viền giúp định hình rõ ràng ranh giới của các thành phần.
- **Visual Styles**: Tạo nút bấm, thẻ bài, input fields rõ ràng.
- **Debugging**: `border: 1px solid red;` là kỹ thuật debug huyền thoại để xem kích thước phần tử.

### Ứng dụng thực tế / Real-world Applications
- **Separators**: Dùng `border-bottom` cho tiêu đề hoặc các mục trong danh sách.
- **Avatars**: Dùng `border-radius: 50%` cho ảnh đại diện người dùng.
- **Forms**: Input fields thường có `border` và đổi màu khi `focus`.
- **Cards**: Viền mỏng xung quanh nội dung để tạo khối.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `border-radius` nhất quán trong toàn bộ design system (VD: tất cả các nút đều bo 4px).
- ✅ **DO**: Dùng `outline` cho focus state để tránh nhảy layout.
- ✅ **DO**: Sử dụng `box-sizing: border-box` để border không làm tăng kích thước tổng thể width/height của phần tử.
- ❌ **DON'T**: Đừng dùng `border` để tạo tam giác (CSS Triangles hack) trừ khi thực sự cần thiết, hãy cân nhắc SVG hoặc `clip-path` hiện đại hơn.

## Ví dụ hoàn chỉnh / Complete Example

Các loại button và Card thông dụng.

Common Buttons and Card types.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: system-ui; 
            padding: 40px; 
            background: #f4f6f8;
            display: flex;
            gap: 20px;
            align-items: flex-start;
        }

        /* 1. Card có viền và bo góc */
        .card {
            background: white;
            border: 1px solid #e1e4e8;
            border-radius: 8px; /* Bo góc card */
            padding: 20px;
            width: 250px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .card-header {
            border-bottom: 1px solid #eee; /* Đường kẻ ngang */
            padding-bottom: 10px;
            margin-bottom: 10px;
            font-weight: bold;
        }

        /* 2. Avatar tròn */
        .avatar {
            width: 50px;
            height: 50px;
            background: #ddd;
            border-radius: 50%; /* Tròn tuyệt đối */
            border: 2px solid white; /* Viền trắng tách nền */
            outline: 2px solid #3498db; /* Viền xanh bên ngoài không tốn chỗ */
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* 3. Buttons */
        .btn {
            padding: 8px 16px;
            cursor: pointer;
            font-weight: 500;
        }

        .btn-primary {
            background: #3498db;
            color: white;
            border: none; /* Không viền */
            border-radius: 4px;
        }

        .btn-outline {
            background: white;
            color: #3498db;
            border: 2px solid #3498db; /* Viền dày */
            border-radius: 4px;
        }
        
        .btn-pill {
            background: #2ecc71;
            color: white;
            border: none;
            border-radius: 999px; /* Bo tròn 2 đầu */
        }
    </style>
</head>
<body>

    <div class="card">
        <div class="card-header">User Profile</div>
        <div class="avatar">👤</div>
        <p>This card uses consistent border-radius and separator lines.</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-primary">Save</button>
            <button class="btn btn-outline">Cancel</button>
            <button class="btn btn-pill">Active</button>
        </div>
    </div>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [MDN - Border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
