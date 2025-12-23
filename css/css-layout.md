# Layout / Bố cục CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Sizing Units](./css-sizing-units.md)  
**➡️ Bài sau / Next:** [Flexbox](./css-flexbox.md)

---

## Mô tả / Description

Bài học này cung cấp tổng quan về các phương pháp bố cục khác nhau để xây dựng thành phần hoặc trang web. Bạn sẽ học về các layout techniques từ cơ bản đến nâng cao: normal flow, float, position, flexbox, grid, và multi-column. Hiểu rõ các layout methods giúp bạn chọn công cụ phù hợp cho từng design challenge.

This lesson provides an overview of different layout methods to build components or web pages. You will learn about layout techniques from basic to advanced: normal flow, float, position, flexbox, grid, and multi-column. Understanding layout methods helps you choose the right tool for each design challenge.

## Khái niệm chính /  Main Concepts

### Normal Flow / Luồng bình thường

Normal flow là cách mặc định mà browser hiển thị các phần tử khi không có CSS layout nào được áp dụng.

Normal flow is the default way browsers display elements when no CSS layout is applied.

```css
/* Block elements / Phần tử block */
/* Chiếm toàn bộ width, xếp chồng theo chiều dọc */
/* Takes full width, stacks vertically */
div, p, h1, section, article {
    display: block;
    /* Mỗi element trên một dòng mới */
    /* Each element on a new line */
}

/* Inline elements / Phần tử inline */
/* Chỉ chiếm width của nội dung, xếp ngang */
/* Only takes content width, flows horizontally */
span, a, strong, em {
    display: inline;
    /* Nhiều elements trên cùng một dòng */
    /* Multiple elements on same line */
}

/* Inline-block / Inline-block */
/* Hybrid: flows inline nhưng có block properties */
/* Hybrid: flows inline but has block properties */
.inline-block-example {
    display: inline-block;
    /* Có thể set width, height nhưng vẫn flows horizontally */
    /* Can set width, height but still flows horizontally */
    width: 200px;
    height: 100px;
    margin: 10px;
}
```

```html
<!-- Block elements stack vertically -->
<div>Block 1</div>
<div>Block 2</div>

<!-- Inline elements flow horizontally -->
<span>Inline 1</span> <span>Inline 2</span> <span>Inline 3</span>

<!-- Inline-block combines both -->
<div class="inline-block-example">Box 1</div>
<div class="inline-block-example">Box 2</div>
```

### Float Layout / Bố cục Float

Float ban đầu dùng cho text wrapping, sau dùng rộng rãi cho layouts (legacy technique).

Float was originally for text wrapping, later widely used for layouts (legacy technique).

```css
/* Basic float / Float cơ bản */
.float-left {
    float: left;
    width: 200px;
    margin-right: 20px;
}

.float-right {
    float: right;
    width: 200px;
    margin-left: 20px;
}

/* Clear floats / Xóa floats */
.clear {
    clear: both; /* Ngăn elements float vào hai bên */
    /* Prevents elements from floating on both sides */
}

/* Clearfix technique / Kỹ thuật clearfix */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Float-based columns (legacy) / Cột dựa trên float */
.container {
    width: 100%;
}

.column {
    float: left;
    width: 33.33%;
    padding: 15px;
}

.container::after {
    content: "";
    display: table;
    clear: both;
}
```

> [!WARNING]
> **Float is legacy**: Flexbox và Grid là modern alternatives tốt hơn.
> 
> **Float is legacy**: Flexbox and Grid are better modern alternatives.

### Position / Định vị

Position cho phép đặt elements ở vị trí specific, tách khỏi normal flow.

Position allows placing elements at specific locations, outside normal flow.

```css
/* static - Default / Mặc định */
.static {
    position: static;
    /* Follows normal flow / Theo luồng bình thường */
}

/* relative - Relative to normal position / Tương đối vị trí bình thường */
.relative {
    position: relative;
    top: 20px;    /* Dịch xuống 20px từ vị trí bình thường */
    left: 30px;   /* Dịch phải 30px */
    /* Không ảnh hưởng other elements / Doesn't affect other elements */
}

/* absolute - Relative to positioned ancestor / Tương đối với ancestor được định vị */
.parent {
    position: relative; /* Tạo positioning context */
}

.absolute {
    position: absolute;
    top: 0;      /* Dính vào top của .parent */
    right: 0;    /* Dính vào right của .parent */
    /* Tách khỏi normal flow / Removed from normal flow */
}

/* fixed - Relative to viewport / Tương đối với viewport */
.fixed {
    position: fixed;
    bottom: 20px;  /* 20px from bottom của viewport */
    right: 20px;   /* 20px from right của viewport */
    /* Stays in place khi scroll / Stays when scrolling */
}

/* sticky - Hybrid giữa relative và fixed */
/* sticky - Hybrid between relative and fixed */
.sticky {
    position: sticky;
    top: 0; /* Becomes fixed when scroll reaches this point */
    /* Acts relative until scroll position */
}

/* z-index - Stacking order / Thứ tự xếp chồng */
.layer-1 {
    position: relative;
    z-index: 1;
}

.layer-2 {
    position: relative;
    z-index: 2; /* Appears above layer-1 */
}
```

### Flexbox Layout / Bố cục Flexbox

Flexbox là one-dimensional layout method cho arranging items trong một hướng (row hoặc column).

Flexbox is a one-dimensional layout method for arranging items in one direction (row or column).

```css
/* Flex container / Container flex */
.flex-container {
    display: flex;
    
    /* Direction / Hướng */
    flex-direction: row; /* row, row-reverse, column, column-reverse */
    
    /* Wrap */
    flex-wrap: wrap; /* wrap, nowrap, wrap-reverse */
    
    /* Main axis alignment / Căn chinh trục chính */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    
    /* Cross axis alignment / Căn chỉnh trục phụ */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    
    /* Gap between items / Khoảng cách giữa items */
    gap: 20px;
}

/* Flex items / Items flex */
.flex-item {
    /* Grow factor / Hệ số phát triển */
    flex-grow: 1; /* Chiếm available space */
    
    /* Shrink factor / Hệ số co lại */
    flex-shrink: 1; /* Thu nhỏ khi cần */
    
    /* Base size / Kích thước cơ bản */
    flex-basis: 200px;
    
    /* Shorthand */
    flex: 1 1 200px; /* grow shrink basis */
    
    /* Individual alignment / Căn chỉnh riêng */
    align-self: flex-end;
}

/* Common flexbox patterns / Mẫu flexbox phổ biến */

/* Center everything / Căn giữa mọi thứ */
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Equal columns / Cột đều nhau */
.equal-columns {
    display: flex;
}

.equal-columns > * {
    flex: 1; /* All items equal width */
}

/* Space between / Khoảng cách đều */
.space-between {
    display: flex;
    justify-content: space-between;
}
```

### Grid Layout / Bố cục Grid

CSS Grid là two-dimensional layout system để kiểm soát rows và columns.

CSS Grid is a two-dimensional layout system for controlling rows and columns.

```css
/* Grid container / Container grid */
.grid-container {
    display: grid;
    
    /* Define columns / Định nghĩa cột */
    grid-template-columns: 200px 1fr 200px; /* fixed, flexible, fixed */
    /* hoặc / or */
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    /* hoặc / or */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
    
    /* Define rows / Định nghĩa hàng */
    grid-template-rows: 100px auto 50px;
    
    /* Gap / Khoảng cách */
    gap: 20px; /* row and column gap */
    grid-row-gap: 20px;    /* row gap only */
    grid-column-gap: 20px; /* column gap only */
    
    /* Alignment / Căn chỉnh */
    justify-items: center; /* Horizontal alignment */
    align-items: center;   /* Vertical alignment */
}

/* Grid items placement / Đặt items trong grid */
.grid-item {
    /* Span columns / Trải qua nhiều cột */
    grid-column: 1 / 3; /* From line 1 to line 3 */
    /* hoặc / or */
    grid-column: span 2; /* Span 2 columns */
    
    /* Span rows / Trải qua nhiều hàng */
    grid-row: 1 / 3;
    /* hoặc / or */
    grid-row: span 2;
}

/* Named grid areas / Vùng grid có tên */
.grid-layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}

/* Auto-placement / Tự động đặt */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
}
```

> [!TIP]
> **Grid vs Flexbox**: Dùng Grid cho 2D layouts, Flexbox cho 1D layouts.
> 
> **Grid vs Flexbox**: Use Grid for 2D layouts, Flexbox for 1D layouts.

### Multi-column Layout / Bố cục nhiều cột

Multi-column layout tạo newspaper-style columns cho text content.

Multi-column layout creates newspaper-style columns for text content.

```css
/* Basic columns / Cột cơ bản */
.multi-column {
    /* Number of columns / Số lượng cột */
    column-count: 3;
    
    /* hoặc width-based / or width-based */
    column-width: 250px; /* Browser calculates số columns */
    
    /* Gap between columns / Khoảng cách giữa cột */
    column-gap: 40px;
    
    /* Rule between columns / Đường kẻ giữa cột */
    column-rule: 2px solid #ddd;
    /* hoặc / or */
    column-rule-width: 2px;
    column-rule-style: solid;
    column-rule-color: #ddd;
}

/* Prevent column breaks / Ngăn ngắt cột */
.no-break {
    break-inside: avoid; /* Don't break element across columns */
    column-span: all;    /* Span across all columns */
}

/* Responsive columns / Cột responsive */
.responsive-columns {
    column-width: 300px; /* Auto số columns dựa trên width */
    column-gap: 2rem;
}
```

### Modern Layout Patterns / Mẫu layout hiện đại

Kết hợp các techniques để tạo common layout patterns.

Combining techniques to create common layout patterns.

```css
/* Holy Grail Layout / Layout Holy Grail */
.holy-grail {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
}

/* Card Grid / Lưới card */
.card-grid {
    display: grid;
    grid- template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Sidebar Layout / Layout sidebar */
.sidebar-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
}

@media (max-width: 768px) {
    .sidebar-layout {
        grid-template-columns: 1fr;
    }
}

/* Centered Container / Container căn giữa */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Full-bleed Section / Section full width */
.full-bleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Flexible layouts**: Tạo layouts thích ứng mọi screen size / Create layouts that adapt to any screen size
- **Responsive design**: Dễ dàng implement responsive designs / Easy to implement responsive designs
- **Maintainability**: Code dễ maintain và update / Code is easy to maintain and update
- **Semantic HTML**: Layout methods không ảnh hưởng HTML structure / Layout methods don't affect HTML structure
- **Browser support**: Modern methods có support rộng / Modern methods have wide support
- **Performance**: CSS layouts performance tốt / CSS layouts perform well

### Ứng dụng thực tế / Real-world Applications
- **Page layouts**: Header, sidebar, content, footer layouts / Layouts header, sidebar, content, footer
- **Card grids**: Product grids, image galleries / Lưới sản phẩm, galleries hình ảnh
- **Navigation**: Responsive navigation menus / Menu navigation responsive
- **Forms**: Form layouts với labels và inputs / Layouts form với labels và inputs
- **Dashboards**: Complex dashboard layouts / Layouts dashboard phức tạp
- **Magazine layouts**: Multi-column text layouts / Layouts text nhiều cột

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng Flexbox cho 1D layouts / Use Flexbox for 1D layouts
- ✅ **DO**: Sử dụng Grid cho 2D layouts / Use Grid for 2D layouts
- ✅ **DO**: Mobile-first approach cho responsive / Mobile-first approach for responsive
- ✅ **DO**: Use semantic HTML với layouts / Use semantic HTML with layouts
- ✅ **DO**: Test trên nhiều devices / Test on multiple devices
- ❌ **DON'T**: Không dùng float cho modern layouts / Don't use float for modern layouts
- ❌ **DON'T**: Không dùng tables cho layouts / Don't use tables for layouts
- ❌ **DON'T**: Không tạo layouts quá complex / Don't create overly complex layouts

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Layout Methods Demo</title>
    <link rel="stylesheet" href="layout.css">
</head>
<body>
    <!-- Grid-based page layout -->
    <div class="page-layout">
        <!-- Header -->
        <header class="header">
            <div class="container">
                <h1>CSS Layout Methods</h1>
                <nav class="nav">
                    <a href="#flex">Flexbox</a>
                    <a href="#grid">Grid</a>
                    <a href="#position">Position</a>
                </nav>
            </div>
        </header>
        
        <!-- Main content -->
        <main class="main">
            <div class="container">
                <!-- Flexbox demo -->
                <section id="flex" class="section">
                    <h2>Flexbox Layout</h2>
                    <div class="flex-container">
                        <div class="flex-item">Item 1</div>
                        <div class="flex-item">Item 2</div>
                        <div class="flex-item">Item 3</div>
                    </div>
                </section>
                
                <!-- Grid demo -->
                <section id="grid" class="section">
                    <h2>CSS Grid Layout</h2>
                    <div class="grid-container">
                        <div class="grid-item">1</div>
                        <div class="grid-item">2</div>
                        <div class="grid-item">3</div>
                        <div class="grid-item">4</div>
                        <div class="grid-item">5</div>
                        <div class="grid-item">6</div>
                    </div>
                </section>
                
                <!-- Position demo -->
                <section id="position" class="section">
                    <h2>Position Layout</h2>
                    <div class="position-demo">
                        <div class="box static">Static</div>
                        <div class="box relative">Relative</div>
                        <div class="box absolute">Absolute</div>
                    </div>
                </section>
                
                <!-- Card grid -->
                <section class="section">
                    <h2>Responsive Card Grid</h2>
                    <div class="card-grid">
                        <div class="card">Card 1</div>
                        <div class="card">Card 2</div>
                        <div class="card">Card 3</div>
                        <div class="card">Card 4</div>
                    </div>
                </section>
            </div>
        </main>
        
        <!-- Sidebar -->
        <aside class="sidebar">
            <h3>Sidebar</h3>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </aside>
        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <p>&copy; 2025 CSS Layouts Demo</p>
            </div>
        </footer>
    </div>
    
    <!-- Sticky navigation -->
    <div class="sticky-nav">
        Sticky Navigation
    </div>
</body>
</html>
```

```css
/* File: layout.css */

/* ===========================================
   RESET & BASICS
   =========================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* ===========================================
   PAGE LAYOUT - CSS GRID
   =========================================== */

.page-layout {
    display: grid;
    grid-template-areas:
        "header header"
        "main sidebar"
        "footer footer";
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 0;
}

.header {
    grid-area: header;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1.5rem 0;
}

.main {
    grid-area: main;
    padding: 2rem 0;
    background: #f5f7fa;
}

.sidebar {
    grid-area: sidebar;
    background: white;
    padding: 2rem;
    border-left: 1px solid #ddd;
}

.footer {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    padding: 2rem 0;
    text-align: center;
}

/* Responsive: stack on mobile */
@media (max-width: 968px) {
    .page-layout {
        grid-template-areas:
            "header"
            "main"
            "sidebar"
            "footer";
        grid-template-columns: 1fr;
    }
    
    .sidebar {
        border-left: none;
        border-top: 1px solid #ddd;
    }
}

/* ===========================================
   HEADER NAVIGATION - FLEXBOX
   =========================================== */

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background 0.3s ease;
}

.nav a:hover {
    background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
    .header .container {
        flex-direction: column;
        gap: 1rem;
    }
}

/* ===========================================
   SECTION SPACING
   =========================================== */

.section {
    background: white;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
}

/* ===========================================
   FLEXBOX DEMO
   =========================================== */

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.flex-item {
    flex: 1;
    min-width: 200px;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    border-radius: 0.5rem;
    font-weight: bold;
    transition: transform 0.3s ease;
}

.flex-item:hover {
    transform: translateY(-5px);
}

/* ===========================================
   GRID DEMO
   =========================================== */

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}

.grid-item {
    padding: 2rem;
    background: #3498db;
    color: white;
    text-align: center;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
}

.grid-item:nth-child(1) {
    grid-column: span 2;
    background: #e74c3c;
}

.grid-item:nth-child(4) {
    grid-row: span 2;
    background: #2ecc71;
}

/* ===========================================
   POSITION DEMO
   =========================================== */

.position-demo {
    position: relative;
    height: 300px;
    background: #ecf0f1;
    border-radius: 0.5rem;
    padding: 1rem;
}

.box {
    width: 150px;
    padding: 1rem;
    background: #3498db;
    color: white;
    text-align: center;
    border-radius: 0.25rem;
    font-weight: bold;
}

.static {
    position: static;
    background: #95a5a6;
}

.relative {
    position: relative;
    top: 20px;
    left: 30px;
    background: #3498db;
}

.absolute {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #e74c3c;
}

/* ===========================================
   CARD GRID - AUTO-FIT
   =========================================== */

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.card {
    padding: 2rem;
    background: white;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* ===========================================
   STICKY NAVIGATION
   =========================================== */

.sticky-nav {
    position: sticky;
    top: 0;
    background: #f39c12;
    color: white;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* ===========================================
   SIDEBAR
   =========================================== */

.sidebar h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.sidebar ul {
    list-style: none;
}

.sidebar li {
    padding: 0.75rem 0;
    border-bottom: 1px solid #ecf0f1;
}

.sidebar li:last-child {
    border-bottom: none;
}
```

## Layout Comparison / So sánh layouts

| Method | Best For | Dimensions | Browser Support |
|--------|----------|------------|-----------------|
| Flexbox | 1D layouts, components | One direction | Excellent ✅ |
| Grid | 2D layouts, page layouts | Two directions | Excellent ✅ |
| Position | Overlays, tooltips | Absolute placement | Excellent ✅ |
| Float | Text wrapping | Legacy layouts | Excellent ✅ (legacy) |
| Multi-column | Text content | Newspaper columns | Good ✅ |

## Tài liệu tham khảo / References

- [MDN - CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks - Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks - Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Froggy - Game](https://flexboxfroggy.com/)
- [Grid Garden - Game](https://cssgridgarden.com/)
