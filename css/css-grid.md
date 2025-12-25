# CSS Grid / Bố cục Lưới CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Flexbox](./css-flexbox.md)  
**➡️ Bài sau / Next:** [Logical Properties](./css-logical-properties.md)

---

## Mô tả / Description

Bài học này giới thiệu CSS Grid Layout - hệ thống layout 2 chiều (2-dimensional) mạnh nhất hiện nay trong CSS. Khác với Flexbox (chỉ quản lý 1 chiều), Grid cho phép bạn điều khiển cả hàng (rows) và cột (columns) cùng lúc. Bạn sẽ học cách tạo grid container, định nghĩa tracks, đặt items vào các vùng cụ thể, và sử dụng các tính năng mạnh mẽ như `minmax`, `auto-fit` để tạo layouts responsive phức tạp mà không cần nhiều media queries.

This lesson introduces CSS Grid Layout - the most powerful 2-dimensional layout system available in CSS today. Unlike Flexbox (which manages 1 dimension), Grid allows you to control both rows and columns simultaneously. You will learn how to create grid containers, define tracks, place items in specific areas, and use powerful features like `minmax` and `auto-fit` to create complex responsive layouts without many media queries.

## Khái niệm chính / Main Concepts

### Grid Container & Items / Container và Items

Tương tự Flexbox, bắt đầu bằng `display: grid`.

Similar to Flexbox, start with `display: grid`.

```css
.container {
    display: grid; /* hoặc inline-grid */
    
    /* Định nghĩa cột: 3 cột kích thước 200px, 1 phần, 1 phần */
    /* Define columns: 3 cols size 200px, 1 fraction, 1 fraction */
    grid-template-columns: 200px 1fr 1fr;
    
    /* Định nghĩa hàng: 2 hàng cao 100px và 200px */
    /* Define rows: 2 rows height 100px and 200px */
    grid-template-rows: 100px 200px;
    
    /* Khoảng cách / Gap */
    gap: 20px; /* row-gap column-gap */
}
```

### Grid Tracks & Fr Unit / Tracks và Đơn vị fr

- **Grid Track**: Là không gian giữa hai đường grid (một hàng hoặc một cột).
- **fr (fraction)**: Đơn vị đặc biệt của Grid, đại diện cho một phần không gian *còn trống*.

- **Grid Track**: The space between two grid lines (a row or a column).
- **fr (fraction)**: Special Grid unit, represents a fraction of the *available* space.

```css
.columns {
    display: grid;
    /* 3 cột bằng nhau / 3 equal columns */
    grid-template-columns: 1fr 1fr 1fr;
    
    /* Cột đầu 2 phần, cột sau 1 phần / First col 2 parts, second 1 part */
    grid-template-columns: 2fr 1fr;
    
    /* Auto layout: Lặp lại 4 cột bằng nhau */
    /* Auto layout: Repeat 4 equal columns */
    grid-template-columns: repeat(4, 1fr);
}
```

### Placing Items / Đặt vị trí Items

Bạn có thể đặt items chính xác vào vị trí mong muốn bằng số dòng (Line Numbers).

You can place items exactly where you want using Line Numbers.

```css
.item1 {
    /* Cột: Bắt đầu dòng 1, kết thúc dòng 3 (chiếm 2 cột) */
    /* Column: Start line 1, end line 3 (spans 2 cols) */
    grid-column-start: 1;
    grid-column-end: 3;
    
    /* Shorthand: start / end */
    grid-column: 1 / 3;
    
    /* Span keywords: bắt đầu tại 1, kéo dài 2 ô */
    /* Span keywords: start at 1, span 2 cells */
    grid-column: 1 / span 2;
}

.item2 {
    /* Hàng: dòng 2 đến dòng 4 */
    /* Row: line 2 to line 4 */
    grid-row: 2 / 4;
}

.item-full {
    /* Chiếm toàn bộ chiều ngang (-1 là dòng cuối cùng) */
    /* Spans full width (-1 is the last line) */
    grid-column: 1 / -1;
}
```

### Grid Template Areas / Vùng mẫu Grid

Cách trực quan để visual layout bằng tên.

A visual way to define layout layout using names.

```css
.layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    
    /* Vẽ layout bằng tên / Draw layout with names */
    grid-template-areas: 
        "header header"
        "sidebar content"
        "footer footer";
}

/* Gán items vào vùng / Assign items to areas */
header { grid-area: header; }
aside  { grid-area: sidebar; }
main   { grid-area: content; }
footer { grid-area: footer; }
```

### Responsive Grid (minmax & auto-fit)

Tạo layouts tự động thích ứng mà không cần media queries. Đây là "phép thuật" của Grid.

Create auto-adapting layouts without media queries. This is the "magic" of Grid.

```css
.responsive-grid {
    display: grid;
    
    /* Tự động điền cột, mỗi cột tối thiểu 250px, tối đa 1fr */
    /* Auto fill columns, each min 250px, max 1fr */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    gap: 20px;
}
/* Trình duyệt sẽ tự tính toán số cột dựa trên chiều rộng màn hình */
/* Browser automatically calculates number of cols based on screen width */
```

### Alignment / Căn chỉnh

Grid kế thừa các thuộc tính căn chỉnh giống Flexbox nhưng áp dụng cho hệ lưới 2D.

Grid inherits alignment properties like Flexbox but applies them to a 2D grid.

```css
.container {
    /* Căn chỉnh TOÀN BỘ lưới trong container */
    /* Align WHOLE grid inside container */
    justify-content: center; /* Ngang / Horizontal */
    align-content: center;   /* Dọc / Vertical */
    
    /* Căn chỉnh ITEMS trong cells của chúng */
    /* Align ITEMS inside their cells */
    justify-items: center;   /* Ngang / Horizontal */
    align-items: center;     /* Dọc / Vertical */
    
    /* Shorthand: align justify */
    place-items: center center;
}

.item {
    /* Ghi đè căn chỉnh cho item cụ thể */
    /* Override alignment for specific item */
    justify-self: start;
    align-self: end;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **2D Control**: Quản lý cả hàng và cột cùng lúc / Manage both rows and cols at once
- **Layout Precision**: Đặt items chính xác bất cứ đâu trên lưới / Place items exactly anywhere on grid
- **Less HTML**: Không cần div lồng nhau phức tạp như Flexbox/Float / No complex nested divs needed
- **Visual Clarity**: `grid-template-areas` làm code dễ đọc như bản vẽ / `grid-template-areas` makes code readable like a blueprint
- **Powerful Responsive**: `auto-fit` và `minmax` giảm thiểu query / `auto-fit` and `minmax` reduce queries

### Ứng dụng thực tế / Real-world Applications
- **Full Page Layouts**: Header, Sidebar, Content, Footer structures
- **Image Galleries**: Lưới ảnh đều nhau hoặc masonry layouts
- **Dashboard Grids**: Các widget phức tạp sắp xếp trên bảng điều khiển
- **Card Collections**: Danh sách sản phẩm responsive
- **Magazine Layouts**: Bố cục tạp chí phức tạp, chồng lớp (layering items)

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Dùng Grid cho bố cục chính của trang (Macro Layout) / Use Grid for main page layout (Macro Layout)
- ✅ **DO**: Dùng `gap` để tạo khoảng trống, không dùng margin cho grid items / Use `gap` for spacing, not margin
- ✅ **DO**: Dùng `minmax()` để đảm bảo nội dung không bị vỡ / Use `minmax()` to ensure content doesn't break
- ✅ **DO**: Sử dụng Named Areas cho layout phức tạp để dễ bảo trì / Use Named Areas for complex layouts for maintenance
- ❌ **DON'T**: Đừng dùng Grid cho thanh điều hướng đơn giản 1 chiều (Dùng Flexbox tốt hơn) / Don't use Grid for simple 1D nav bars (Flexbox is better)

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Grid Demo</title>
    <link rel="stylesheet" href="grid.css">
</head>
<body>
    <div class="layout">
        <header class="header">Header</header>
        <aside class="sidebar">Sidebar</aside>
        <main class="content">
            <h1>Responsive Photo Grid</h1>
            <div class="gallery">
                <div class="photo">1</div>
                <div class="photo">2</div>
                <div class="photo wide">3 (Wide)</div>
                <div class="photo">4</div>
                <div class="photo tall">5 (Tall)</div>
                <div class="photo">6</div>
            </div>
        </main>
        <footer class="footer">Footer</footer>
    </div>
</body>
</html>
```

```css
/* File: grid.css */
body {
    margin: 0;
    font-family: system-ui, sans-serif;
}

/* 1. Page Layout using Named Areas */
.layout {
    display: grid;
    min-height: 100vh;
    
    /* Cấu trúc lưới */
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    
    /* Bản vẽ layout */
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
}

.header { 
    grid-area: header; 
    background: #2c3e50; 
    color: white; 
    padding: 20px;
}

.sidebar { 
    grid-area: sidebar; 
    background: #34495e; 
    color: white; 
    padding: 20px;
}

.content { 
    grid-area: content; 
    padding: 40px; 
    background: #ecf0f1;
}

.footer { 
    grid-area: footer; 
    background: #2c3e50; 
    color: white; 
    padding: 20px; 
    text-align: center;
}

/* 2. Responsive Gallery inside content */
.gallery {
    display: grid;
    /* Responsive magic line! */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    grid-auto-rows: 150px; /* Chiều cao mặc định của hàng mới */
    grid-auto-flow: dense; /* Lấp đầy khoảng trống nếu có */
}

.photo {
    background: #3498db;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-radius: 8px;
}

/* Items with special spans */
.wide {
    grid-column: span 2; /* Chiếm 2 cột */
    background: #e74c3c;
}

.tall {
    grid-row: span 2; /* Chiếm 2 hàng */
    background: #f1c40f;
}

/* Responsive adjustment for Page Layout */
@media (max-width: 768px) {
    .layout {
        /* Chuyển sang 1 cột trên mobile */
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "content"
            "sidebar"
            "footer";
    }
}
```

## Tài liệu tham khảo / References

- [MDN - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden - A game for learning CSS Grid](https://cssgridgarden.com/)
- [Learn CSS Grid - Jonathan Suh](https://learncssgrid.com/)
