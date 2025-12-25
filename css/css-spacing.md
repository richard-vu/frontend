# CSS Spacing / Khoảng cách trong CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Custom Properties](./css-custom-properties.md)  
**➡️ Bài sau / Next:** [Pseudo-elements](./css-pseudo-elements.md)

---

## Mô tả / Description

Khoảng cách (Spacing) là một trong những yếu tố quan trọng nhất của thiết kế web, giúp tạo ra cấu trúc rõ ràng và nhịp điệu thị giác (visual rhythm). Trong bài học này, chúng ta sẽ khám phá các phương pháp tốt nhất để quản lý khoảng trắng, bao gồm Margin, Padding, thuộc tính `gap` hiện đại, và cách chọn đơn vị đo lường phù hợp.

Spacing is one of the most important aspects of web design, creating clear structure and visual rhythm. In this lesson, we will explore the best methods for managing whitespace, including Margin, Padding, the modern `gap` property, and how to choose the right units.

## Khái niệm chính / Main Concepts

### 1. The Big Three: Padding, Margin, Gap / Ba yếu tố chính

- **Padding**: Khoảng cách *bên trong* phần tử (giữa nội dung và viền).
- **Margin**: Khoảng cách *bên ngoài* phần tử (giữa viền phần tử này với phần tử khác).
- **Gap**: Khoảng cách *giữa* các phần tử con trong Flexbox hoặc Grid container.

- **Padding**: Space *inside* the element (between content and border).
- **Margin**: Space *outside* the element (between this element and others).
- **Gap**: Space *between* child elements in a Flexbox or Grid container.

```css
.card {
    padding: 20px;       /* Nội dung cách viền 20px */
    margin-bottom: 30px; /* Cách phần tử bên dưới 30px */
}

.grid-container {
    display: grid;
    gap: 20px;           /* Khoảng trống giữa các cột và hàng */
}
```

### 2. Margin Collapse / Gộp Margin

Một hiện tượng dễ gây nhầm lẫn: khi hai margin dọc (top/bottom) gặp nhau, chúng không cộng dồn mà sẽ lấy giá trị lớn nhất.

A confusing phenomenon: when two vertical margins (top/bottom) meet, they don't add up; the larger value wins.

```css
/* Nếu h1 có margin-bottom: 20px và p có margin-top: 15px */
/* Khoảng cách thực tế sẽ là 20px (không phải 35px) */
/* The actual space will be 20px (not 35px) */
```

### 3. Logical Spacing / Khoảng cách Logic

Sử dụng logical properties (như đã học ở bài 13) để đảm bảo hỗ trợ đa ngôn ngữ.

Use logical properties (learned in Lesson 13) to ensure multi-language support.

```css
.card {
    /* Thay vì margin-top/bottom */
    margin-block: 2rem;
    
    /* Thay vì padding-left/right */
    padding-inline: 1.5rem;
}
```

### 4. `gap` for Flexbox / Gap cho Flexbox

Trước đây `gap` chỉ dùng cho Grid, nhưng nay đã hỗ trợ tốt cho Flexbox, giúp thay thế các kỹ thuật margin cũ (lobotomized owl selector).

Previously `gap` was only for Grid, but now works well with Flexbox, replacing old margin techniques (lobotomized owl selector).

```css
.nav-links {
    display: flex;
    gap: 15px; /* Không cần margin-right cho từng thẻ li */
}
```

### 5. Spacing Systems / Hệ thống khoảng cách

Không nên dùng giá trị ngẫu nhiên (13px, 19px). Hãy dùng một thang đo (scale) nhất quán.

Don't use random values (13px, 19px). Use a consistent scale.

```css
:root {
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
}
```

### 6. Space-between components / Khoảng cách giữa các components

Sử dụng flow layout helpers.

Using flow layout helpers.

```css
/* Stack pattern: Tạo khoảng cách dọc giữa mọi phần tử con */
/* Stack pattern: Add vertical space between all children */
.stack > * + * {
    margin-block-start: 1rem;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Visual Hierarchy**: Khoảng cách giúp phân biệt nhóm nội dung.
- **Readability**: Văn bản thoáng đãng dễ đọc hơn.
- **Consistency**: Hệ thống spacing cố định tạo cảm giác chuyên nghiệp.

### Ứng dụng thực tế / Real-world Applications
- **Card Layouts**: Padding bên trong card, Gap giữa các cards.
- **Form Groups**: Khoảng cách đồng đều giữa label và input.
- **Section Spacing**: Khoảng cách lớn giữa các phần chính của trang.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `gap` thay vì `margin` cho layout list nếu có thể (dễ quản lý hơn, không cần trừ margin của phần tử cuối).
- ✅ **DO**: Xây dựng hệ thống biến CSS cho spacing (`--space-4`, `--space-8`).
- ✅ **DO**: Tránh dùng `br` để tạo khoảng cách. Dùng margin/padding.
- ❌ **DON'T**: Đừng dùng `height` cố định để chứa nội dung văn bản. Hãy dùng `padding` để tạo không gian.
- ❌ **DON'T**: Đừng set margin cho mọi phía (`margin: 20px`) nếu không cần thiết. Thường chỉ cần `margin-bottom` hoặc `gap`.

## Ví dụ hoàn chỉnh / Complete Example

So sánh cách cũ (Margin) và cách mới (Gap).

Comparing the old way (Margin) and the new way (Gap).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spacing Demo</title>
    <style>
        :root {
            --space-sm: 8px;
            --space-md: 16px;
            --space-lg: 24px;
            --primary: #3498db;
            --secondary: #2ecc71;
        }

        body {
            font-family: system-ui;
            padding: var(--space-lg);
            background: #f5f6fa;
        }

        .container {
            background: white;
            padding: var(--space-lg);
            max-width: 600px;
            margin-inline: auto; /* Center horizontally */
            border-radius: 8px;
        }

        h2 {
            margin-block-end: var(--space-md);
            border-block-end: 2px solid #eee;
            padding-block-end: var(--space-sm);
        }

        /* CÁCH CŨ: Dùng Margin */
        .legacy-list {
            list-style: none;
            padding: 0;
            display: flex;
        }
        .legacy-list li {
            background: var(--primary);
            color: white;
            padding: var(--space-md);
            /* Phải reset margin cho phần tử cuối */
            margin-right: var(--space-md);
        }
        .legacy-list li:last-child {
            margin-right: 0;
        }

        /* CÁCH MỚI: Dùng Gap */
        .modern-list {
            list-style: none;
            padding: 0;
            display: flex;
            gap: var(--space-md); /* Đơn giản hơn nhiều! */
        }
        .modern-list li {
            background: var(--secondary);
            color: white;
            padding: var(--space-md);
        }

        /* Flow Spacing cho nội dung dọc */
        .flow > * + * {
            margin-top: var(--space-md);
        }
    </style>
</head>
<body>
    <div class="container flow">
        <h2>Legacy Spacing (Margin)</h2>
        <ul class="legacy-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>

        <h2>Modern Spacing (Gap)</h2>
        <ul class="modern-list">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
        </ul>

        <div class="info">
            <p>This container uses the "Flow" utility.</p>
            <p>Every element following another gets a top margin automatically.</p>
        </div>
    </div>
</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
- [MDN - Padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
- [Every Layout - The Stack](https://every-layout.dev/layouts/stack/)
