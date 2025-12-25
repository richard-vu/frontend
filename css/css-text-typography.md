# CSS Text & Typography / Văn bản và Kiểu chữ

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Backgrounds](./css-backgrounds.md)  
**➡️ Bài sau / Next:** [Scroll-driven Animations](./css-scroll-driven-animations.md)

---

## Mô tả / Description

95% nội dung trên web là văn bản. Vì vậy, việc điều khiển kiểu chữ (Typography) là kỹ năng quan trọng nhất của một Frontend Developer. CSS cho phép bạn kiểm soát mọi thứ từ phông chữ, kích thước, khoảng cách, màu sắc cho đến hướng văn bản.

95% of web content is text. Therefore, Typography control is the most crucial skill for a Frontend Developer. CSS allows you to control everything from fonts, sizes, spacing, colors to text direction.

## Khái niệm chính / Main Concepts

### 1. Font Properties / Thuộc tính Phông chữ

- `font-family`: Danh sách phông chữ ưu tiên (fallback).
- `font-size`: Kích thước chữ (px, em, rem, vw).
- `font-weight`: Độ đậm (400=normal, 700=bold).
- `font-style`: Kiểu nghiêng (italic, normal).

```css
body {
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.5; /* Khoảng cách dòng quan trọng cho độ dễ đọc */
}
```

### 2. Text Properties / Thuộc tính Văn bản

- `text-align`: Căn lề (left, center, right, justify).
- `text-transform`: Chuyển đổi hoa/thường (uppercase, lowercase, capitalize).
- `text-decoration`: Gạch chân, gạch ngang (none, underline, line-through).
- `letter-spacing`: Khoảng cách giữa các chữ cái.
- `word-spacing`: Khoảng cách giữa các từ.

```css
h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
}
```

### 3. Responsive Typography / Chữ phản hồi

Sử dụng đơn vị viewport (`vw`) hoặc hàm `clamp()` để chữ tự động co giãn theo màn hình.

Using viewport units (`vw`) or the `clamp()` function for fluid typography.

```css
h1 {
    /* Tối thiểu 1.5rem, lý tưởng 5vw, tối đa 3rem */
    font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### 4. Writing Modes / Chế độ viết

Điều chỉnh hướng văn bản (quan trọng cho các ngôn ngữ dọc như tiếng Nhật, Trung, hoặc để tạo hiệu ứng thiết kế).

Adjusting text direction (vital for vertical languages like Japanese, Chinese, or for design effects).

```css
.vertical-text {
    writing-mode: vertical-rl; /* Viết dọc từ phải sang trái */
    text-orientation: mixed;
}
```

### 5. `text-wrap` (New)

Kiểm soát cách xuống dòng thông minh.
- `balance`: Cân bằng độ dài các dòng (tốt cho tiêu đề).
- `pretty`: Tránh "mồ côi" (orphan word) ở cuối đoạn văn.

```css
h1 {
    text-wrap: balance;
}
p {
    text-wrap: pretty;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Legibility**: Cải thiện khả năng đọc hiểu của người dùng.
- **Branding**: Font chữ thể hiện cá tính của thương hiệu (sang trọng, hiện đại, vui tươi).
- **Accessibility**: Khoảng cách dòng (`line-height`) và màu sắc (`contrast`) hợp lý giúp người khiếm thị dễ đọc hơn.

### Ứng dụng thực tế / Real-world Applications
- **Headings**: Tiêu đề đậm, lớn để thu hút sự chú ý.
- **Body Text**: Font serif hoặc sans-serif dễ đọc, màu xám đen (#333) thay vì đen tuyền để đỡ mỏi mắt.
- **Buttons**: Chữ in hoa (`uppercase`), đậm, khoảng cách chữ rộng (`letter-spacing`) để dễ nhận diện.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `rem` cho `font-size` để tôn trọng cài đặt cỡ chữ của người dùng trên trình duyệt.
- ✅ **DO**: Giữ độ dài dòng (line length) khoảng 50-75 ký tự để tối ưu cho việc đọc.
- ✅ **DO**: Luôn load ít font nhất có thể (chỉ load weight Regular và Bold) để tăng tốc độ tải trang.
- ❌ **DON'T**: Đừng dùng `text-align: justify` cho web trừ khi bạn xử lý tốt khoảng trắng (hyphenation), nếu không sẽ tạo ra các "dòng sông trắng" (river of white space) xấu xí.

## Ví dụ hoàn chỉnh / Complete Example

### Typography Showcase

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Roboto:wght@400;700&display=swap');

        :root {
            --font-heading: 'Playfair Display', serif;
            --font-body: 'Roboto', sans-serif;
            --primary: #2c3e50;
        }

        body {
            font-family: var(--font-body);
            color: #444;
            line-height: 1.6;
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
        }

        h1 {
            font-family: var(--font-heading);
            font-size: clamp(2.5rem, 6vw, 4rem);
            color: var(--primary);
            text-align: center;
            text-wrap: balance; /* Cân bằng dòng tiêu đề */
            margin-bottom: 0.5rem;
        }

        .subtitle {
            text-align: center;
            font-style: italic;
            color: #888;
            margin-bottom: 3rem;
        }

        p {
            margin-bottom: 1.5rem;
            text-wrap: pretty; /* Tránh từ mồ côi */
        }

        .drop-cap::first-letter {
            font-family: var(--font-heading);
            font-size: 3.5rem;
            float: left;
            line-height: 0.8;
            margin-right: 0.5rem;
            color: var(--primary);
        }

        blockquote {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            border-left: 4px solid var(--primary);
            margin: 2rem 0;
            padding-left: 1rem;
            font-style: italic;
            background: #f9f9f9;
            padding: 20px;
        }

        .code-snippet {
            font-family: monospace;
            background: #eee;
            padding: 2px 5px;
            border-radius: 3px;
            color: #c7254e;
        }
    </style>
</head>
<body>

    <h1>The Art of Modern Web Typography</h1>
    <div class="subtitle">Exploring contrast, scale, and readability</div>

    <p class="drop-cap">
        Wypography is not just about choosing a font. It is about establishing a hierarchy 
        where the most important information stands out. In modern web design, we have 
        tools like <code>clamp()</code> and <code>text-wrap</code> that give us print-like control 
        over our digital layouts.
    </p>

    <blockquote>
        "Web design is 95% typography." <br>
        <small>- Oliver Reichenstein</small>
    </blockquote>

    <p>
        Notice how the body text uses a clean sans-serif font for readability, while the 
        headings use a serif font to add elegance and character. This combination is a 
        classic pairing that works well for editorial content.
    </p>

</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [Google Fonts](https://fonts.google.com/)
- [Practical Typography](https://practicaltypography.com/)
