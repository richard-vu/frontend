# Sizing Units / Đơn vị kích thước CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Color](./css-color.md)  
**➡️ Bài sau / Next:** [Layout](./css-layout.md)

---

## Mô tả / Description

Bài học này hướng dẫn cách xác định kích thước phần tử trong môi trường linh hoạt của web. Bạn sẽọc về các đơn vị absolute (px, pt, cm), relative (em, rem, %, vw, vh), và cách chọn đơn vị phù hợp cho từng trường hợp. Hiểu rõ sizing units là chìa khóa để tạo ra responsive và flexible layouts.

This lesson guides you on how to determine element sizes in the flexible web environment. You will learn about absolute units (px, pt, cm), relative units (em, rem, %, vw, vh), and how to choose appropriate units for each case. Understanding sizing units is key to creating responsive and flexible layouts.

## Khái niệm chính / Main Concepts

### Absolute Units / Đơn vị tuyệt đối

Absolute units có kích thước cố định không phụ thuộc vào context. Thường sử dụng cho print media hoặc khi cần kích thước chính xác.

Absolute units have fixed sizes independent of context. Commonly used for print media or when exact sizes are needed.

```css
/* px - Pixels (đơn vị phổ biến nhất) */
.px-example {
    width: 300px;
    height: 200px;
    font-size: 16px;
    border: 1px solid black;
}

/* pt - Points (1pt = 1/72 inch, cho print) */
.pt-example {
    font-size: 12pt; /* Thường dùng cho print / Common for print */
}

/* cm, mm, in - Physical units / Đơn vị vật lý */
.physical {
    width: 10cm;    /* Centimeters / Centimet */
    height: 50mm;   /* Millimeters / Millimet */
    margin: 1in;    /* Inches */
}

/* pc - Picas (1pc = 12pt) */
.picas {
    font-size: 1pc;
}
```

> [!NOTE]
> **px vs physical units**: 1px không phải luôn bằng 1 physical pixel vì pixel density khác nhau. **px vs physical units**: 1px is not always equal to 1 physical pixel due to different pixel densities.

### Relative Font Units / Đơn vị font tương đối

Relative units thay đổi dựa trên font size của parent hoặc root element.

Relative units change based on parent or root element font size.

```css
/* em - Relative to parent font-size / Tương đối với font-size của parent */
.parent {
    font-size: 20px;
}

.em-child {
    font-size: 1.5em;    /* 1.5 * 20px = 30px */
    padding: 1em;        /* 1 * 30px = 30px (dựa trên font-size của chính nó) */
    margin: 0.5em;       /* 0.5 * 30px = 15px */
}

/* em compounds / em tích lũy */
.grandparent {
    font-size: 16px;     /* Base */
}

.parent-em {
    font-size: 1.5em;    /* 1.5 * 16px = 24px */
}

.child-em {
    font-size: 1.5em;    /* 1.5 * 24px = 36px (NOT 1.5 * 16px!) */
}

/* rem - Relative to ROOT font-size / Tương đối với font-size gốc */
html {
    font-size: 16px;     /* Root font size */
}

.rem-example {
    font-size: 1.5rem;   /* 1.5 * 16px = 24px */
    padding: 2rem;       /* 2 * 16px = 32px */
    margin: 1rem;        /* 1 * 16px = 16px */
}

/* rem KHÔNG tích lũy / rem does NOT compound */
.parent-rem {
    font-size: 1.5rem;   /* 1.5 * 16px = 24px */
}

.child-rem {
    font-size: 1.5rem;   /* 1.5 * 16px = 24px (SAME as parent!) */
}
```

> [!TIP]
> **em vs rem**: Sử dụng `rem` cho consistency, `em` cho scaling based on parent.
> 
> **em vs rem**: Use `rem` for consistency, `em` for scaling based on parent.

### Percentage Units / Đơn vị phần trăm

Percentage (%) tương đối với giá trị của parent element.

Percentage (%) is relative to the parent element's value.

```css
/* % với width/height - Relative to parent's dimension */
.parent-box {
    width: 800px;
    height: 600px;
}

.child-box {
    width: 50%;      /* 50% * 800px = 400px */
    height: 75%;     /* 75% * 600px = 450px */
}

/* % với font-size - Relative to parent's font-size */
.parent-text {
    font-size: 20px;
}

.child-text {
    font-size: 150%; /* 150% * 20px = 30px */
}

/* % với position - Relative to parent's dimension */
.positioned {    position: absolute;
    top: 10%;        /* 10% from top */
    left: 20%;       /* 20% from left */
    width: 60%;      /* 60% of parent width */
}

/* % với padding/margin - Relative to parent's WIDTH (not height!) */
.percentage-padding {
    width: 400px;
    padding: 10%;    /* 10% * 400px = 40px (top, right, bottom, left ALL use WIDTH) */
}
```

> [!IMPORTANT]
> **Padding/margin %**: Luôn dựa trên WIDTH của parent, không phải height!
> 
> **Padding/margin %**: Always based on parent's WIDTH, not height!

### Viewport Units / Đơn vị viewport

Viewport units tương đối với kích thước của browser viewport.

Viewport units are relative to browser viewport size.

```css
/* vw - Viewport Width (1vw = 1% of viewport width) */
.vw-example {
    width: 50vw;     /* 50% of viewport width */
    font-size: 5vw;  /* Scales with viewport width */
}

/* vh - Viewport Height (1vh = 1% of viewport height) */
.vh-example {
    height: 100vh;   /* Full viewport height */
    min-height: 50vh; /* At least 50% of viewport */
}

/* vmin - Smaller of vw or vh / Nhỏ hơn giữa vw và vh */
.vmin-example {
    width: 50vmin;   /* 50% of smaller dimension */
    /* Nếu viewport 1000x800, vmin = 800, width = 400px */
    /* If viewport 1000x800, vmin = 800, width = 400px */
}

/* vmax - Larger of vw or vh / Lớn hơn giữa vw và vh */
.vmax-example {
    width: 50vmax;   /* 50% of larger dimension */
    /* Nếu viewport 1000x800, vmax = 1000, width = 500px */
    /* If viewport 1000x800, vmax = 1000, width = 500px */
}

/* Full-screen hero section / Hero section toàn màn hình */
.hero {
    height: 100vh;
    width: 100vw;
}

/* Responsive typography / Typography responsive */
.responsive-heading {
    font-size: clamp(1.5rem, 5vw, 3rem);
    /* Min: 1.5rem, Ideal: 5vw, Max: 3rem */
}
```

### Modern Units / Đơn vị hiện đại

CSS hiện đại cung cấp các units mới cho container queries và dynamic viewport.

Modern CSS provides new units for container queries and dynamic viewport.

```css
/* Container query units / Đơn vị container query */
.container {
    container-type: inline-size;
}

.child {
    /* cqw - Container Query Width */
    width: 50cqw;    /* 50% of container width */
    
    /* cqh - Container Query Height */
    height: 30cqh;   /* 30% of container height */
    
    /* cqi - Container Query Inline (width in horizontal writing) */
    padding: 2cqi;
    
    /* cqb - Container Query Block (height in horizontal writing) */
    margin: 1cqb;
    
    /* cqmin, cqmax - Like vmin/vmax but for container */
    font-size: 3cqmin;
}

/* Dynamic viewport units (mobile-friendly) */
.mobile-friendly {
    /* dvh - Dynamic Viewport Height (accounts for mobile browser UI) */
    height: 100dvh;  /* Adjusts when mobile browser UI shows/hides */
    
    /* svh - Small Viewport Height (smallest possible) */
    min-height: 100svh;
    
    /* lvh - Large Viewport Height (largest possible) */
    max-height: 100lvh;
}
```

> [!NOTE]
> **Dynamic viewport**: Giải quyết vấn đề mobile browser UI ẩn/hiện.
> 
> **Dynamic viewport**: Solves mobile browser UI show/hide problem.

### The `ch` and `ex` Units / Đơn vị `ch` và `ex`

Typography-specific units dựa trên font metrics.

Typography-specific units based on font metrics.

```css
/* ch - Width of "0" character / Chiều rộng ký tự "0" */
.ch-example {
    /* Giới hạn width theo số ký tự / Limit width by character count */
    max-width: 60ch;  /* Optimal line length: 45-75 characters */
    
    /* Input fields */
    width: 10ch;      /* Width for ~10 characters */
}

/* ex - x-height of font (height of lowercase 'x') */
.ex-example {
    /* Useful for vertical alignment */
    margin-top: 1ex;
    line-height: 2ex;
}

/* Practical use: Readable text width / Chiều rộng text dễ đọc */
.article {
    max-width: 65ch;  /* ~65 characters per line for readability */
    font-size: 1.125rem;
    line-height: 1.6;
}
```

### Combining Units with calc() / Kết hợp units với calc()

`calc()` cho phép tính toán với different units.

`calc()` allows calculations with different units.

```css
/* Mixing units / Trộn các đơn vị */
.calc-example {
    /* Viewport minus fixed margin */
    width: calc(100vw - 40px);
    
    /* Percentage minus padding */
    width: calc(100% - 2rem);
    
    /* Multiple operations / Nhiều phép tính */
    height: calc((100vh - 80px) / 2);
    
    /* With CSS variables / Với biến CSS */
    --sidebar-width: 250px;
    width: calc(100% - var(--sidebar-width));
}

/* Responsive spacing / Khoảng cách responsive */
.responsive-spacing {
    padding: calc(1rem + 2vw);    /* Grows with viewport */
    margin: calc(0.5rem + 1vh);
}

/* Grid with fixed gutters / Grid với khoảng cách cố định */
.grid-item {
    width: calc(33.333% - 20px);  /* 3 columns with 20px gap */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Flexibility**: Responsive designs adapt to any screen / Designs responsive thích ứng mọi màn hình
- **Accessibility**: rem units respect user font preferences / rem tôn trọng font preferences của user
- **Maintainability**: Easier to maintain consistent spacing / Dễ maintain spacing nhất quán
- **Precision**: Choose right unit for each use case / Chọn đúng unit cho từng trường hợp
- **Performance**: Viewport units reduce JavaScript / Viewport units giảm JavaScript
- **Scalability**: Designs scale better across devices / Designs scale tốt hơn trên devices

### Ứng dụng thực tế / Real-world Applications
- **Responsive typography**: Scale text with viewport / Scale text theo viewport
- **Fluid layouts**: Responsive widths and heights / Chiều rộng và cao responsive
- **Perfect centering**: vh and vw for centering / vh và vw để căn giữa
- **Readable text**: ch unit for optimal line length / ch cho độ dài dòng tối ưu
- **Mobile-first**: Dynamic viewport units / Dynamic viewport units
- **Design systems**: rem-based spacing scales / Spacing dựa trên rem scales

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng rem cho font-sizes / Use rem for font-sizes
- ✅ **DO**: Sử dụng % cho layouts linh hoạt / Use % for flexible layouts
- ✅ **DO**: Sử dụng px cho borders và small details / Use px for borders and small details
- ✅ **DO**: Sử dụng vh/vw cho full-screen sections / Use vh/vw for full-screen sections
- ✅ **DO**: Combine units với calc() / Combine units with calc()
- ❌ **DON'T**: Không mix quá nhiều unit types / Don't mix too many unit types
- ❌ **DON'T**: Không hard-code px cho everything / Don't hard-code px for everything
- ❌ **DON'T**: Không quên test trên nhiều devices / Don't forget to test on multiple devices

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Sizing Units Demo</title>
    <link rel="stylesheet" href="sizing.css">
</head>
<body>
    <!-- Full viewport hero -->
    <section class="hero">
        <h1>CSS Sizing Units</h1>
        <p>Understanding different measurement units</p>
    </section>
    
    <!-- Container examples -->
    <div class="container">
        <!-- Font units -->
        <section class="demo-section">
            <h2>Font Units: em vs rem</h2>
            <div class="em-demo">
                <p>Parent font-size: 20px</p>
                <p class="em-large">This uses 1.5em (30px)</p>
                <div class="nested">
                    <p class="em-large">Nested: 1.5em compounds (45px)</p>
                </div>
            </div>
            
            <div class="rem-demo">
                <p>Root font-size: 16px</p>
                <p class="rem-large">This uses 1.5rem (24px)</p>
                <div class="nested">
                    <p class="rem-large">Nested: still 1.5rem (24px)</p>
                </div>
            </div>
        </section>
        
        <!-- Percentage units -->
        <section class="demo-section">
            <h2>Percentage Units</h2>
            <div class="parent-box">
                <div class="child-50">50% width</div>
                <div class="child-75">75% width</div>
                <div class="child-100">100% width</div>
            </div>
        </section>
        
        <!-- Viewport units -->
        <section class="demo-section">
            <h2>Viewport Units</h2>
            <div class="viewport-grid">
                <div class="vp-box vw-box">50vw</div>
                <div class="vp-box vh-box">50vh</div>
                <div class="vp-box vmin-box">30vmin</div>
                <div class="vp-box vmax-box">30vmax</div>
            </div>
        </section>
        
        <!-- Readable text -->
        <section class="demo-section">
            <h2>Optimal Reading Width (ch unit)</h2>
            <article class="article">
                <p>This paragraph has a max-width of 65ch, which is optimal for readability. Lines that are too long tire the eyes and make it difficult to track from the end of one line to the beginning of the next.</p>
            </article>
        </section>
    </div>
</body>
</html>
```

```css
/* File: sizing.css */

/* ===========================================
   ROOT SETUP with rem base
   =========================================== */

html {
    /* Base font-size for rem calculations */
    font-size: 16px; /* 1rem = 16px */
}

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

/* ===========================================
   FULL VIEWPORT HERO
   Using vh and vw units
   =========================================== */

.hero {
    /* Full viewport height and width */
    height: 100vh;
    width: 100vw;
    
    /* Center content */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    /* Background */
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero h1 {
    /* Responsive font-size with viewport units */
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 1rem;
}

.hero p {
    font-size: clamp(1rem, 3vw, 1.5rem);
}

/* ===========================================
   CONTAINER
   Using max-width with ch and rem
   =========================================== */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem; /* rem for consistent spacing */
}

.demo-section {
    background: white;
    padding: 2rem; /* rem-based padding */
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.75rem; /* rem for scalable typography */
}

/* ===========================================
   EM vs REM DEMO
   =========================================== */

.em-demo,
.rem-demo {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
}

.em-demo {
    font-size: 20px; /* Base for em calculations */
    background: #e3f2fd;
    border-left: 4px solid #2196f3;
}

.em-demo .em-large {
    font-size: 1.5em; /* 1.5 * 20px = 30px */
    font-weight: bold;
    color: #1976d2;
}

.em-demo .nested {
    margin-left: 2em; /* 2 * 20px = 40px */
    padding: 1em;
}

.em-demo .nested .em-large {
    font-size: 1.5em; /* 1.5 * 30px = 45px (compounded!) */
}

.rem-demo {
    background: #f3e5f5;
    border-left: 4px solid #9c27b0;
}

.rem-demo .rem-large {
    font-size: 1.5rem; /* 1.5 * 16px = 24px */
    font-weight: bold;
    color: #7b1fa2;
}

.rem-demo .nested {
    margin-left: 2rem; /* 2 * 16px = 32px */
    padding: 1rem;
}

.rem-demo .nested .rem-large {
    font-size: 1.5rem; /* Still 1.5 * 16px = 24px (consistent!) */
}

/* ===========================================
   PERCENTAGE UNITS DEMO
   =========================================== */

.parent-box {
    background: #ecf0f1;
    padding: 1rem;
    border-radius: 0.5rem;
}

.child-50,
.child-75,
.child-100 {
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: #3498db;
    color: white;
    border-radius: 0.25rem;
    text-align: center;
    font-weight: bold;
}

.child-50 {
    width: 50%; /* 50% of .parent-box width */
}

.child-75 {
    width: 75%; /* 75% of .parent-box width */
}

.child-100 {
    width: 100%; /* 100% of .parent-box width */
}

/* ===========================================
   VIEWPORT UNITS DEMO
   =========================================== */

.viewport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.vp-box {
    padding: 2rem 1rem;
    border-radius: 0.5rem;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vw-box {
    width: 50vw; /* 50% of viewport width */
    background: #e74c3c;
    min-height: 100px;
}

.vh-box {
    height: 50vh; /* 50% of viewport height */
    background: #2ecc71;
}

.vmin-box {
    width: 30vmin; /* 30% of smaller viewport dimension */
    height: 30vmin;
    background: #f39c12;
}

.vmax-box {
    width: 30vmax; /* 30% of larger viewport dimension */
    height: 100px;
    background: #9b59b6;
}

/* ===========================================
   CH UNIT - READABLE TEXT WIDTH
   =========================================== */

.article {
    /* Optimal line length for readability */
    max-width: 65ch; /* ~65 characters */
    margin: 0 auto;
    
    /* Typography */
    font-size: 1.125rem;
    line-height: 1.8;
    color: #2c3e50;
}

.article p {
    margin-bottom: 1rem;
}

/* ===========================================
   CALC() EXAMPLES
   Combining different units
   =========================================== */

.calc-demo {
    /* Viewport width minus fixed margins */
    width: calc(100vw - 4rem);
    
    /* Percentage minus fixed size */
    height: calc(100% - 2rem);
    
    /* Responsive spacing */
    padding: calc(1rem + 2vw);
}

/* ===========================================
   RESPONSIVE
   =========================================== */

@media (max-width: 768px) {
    html {
        font-size: 14px; /* Smaller rem base on mobile */
    }
    
    .viewport-grid {
        grid-template-columns: 1fr;
    }
    
    .vw-box, .vmin-box, .vmax-box {
        width: 100%;
    }
}
```

## Unit Comparison / So sánh đơn vị

| Unit | Type | Relative To | Best For |
|------|------|-------------|----------|
| px | Absolute | Fixed | Borders, shadows, precise elements |
| em | Relative | Parent font-size | Component-based scaling |
| rem | Relative | Root font-size | Consistent typography |
| % | Relative | Parent dimension | Flexible layouts |
| vw, vh | Viewport | Viewport size | Full-screen sections |
| ch | Typography | Character width | Readable text widths |
| calc() | Function | Mixed | Complex calculations |

## Tài liệu tham khảo / References

- [MDN - CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [MDN - Length Units](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [CSS Tricks - CSS Units](https://css-tricks.com/the-lengths-of-css/)
- [Web.dev - Responsive Design](https://web.dev/responsive-web-design-basics/)
