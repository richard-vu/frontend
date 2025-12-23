# Color / Màu sắc CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Inheritance](./css-inheritance.md)  
**➡️ Bài sau / Next:** [Sizing Units](./css-sizing-units.md)

---

## Mô tả / Description

Bài học này khám phá các cách khác nhau để chỉ định màu sắc trong CSS và các giá trị màu phổ biến. Bạn sẽ học về các color formats như hex, RGB, HSL, named colors, và các tính năng hiện đại như opacity, color functions, và color variables. Hiểu rõ về color systems giúp tạo ra designs đẹp mắt và accessible.

This lesson explores different ways to specify colors in CSS and common color values. You will learn about color formats like hex, RGB, HSL, named colors, and modern features like opacity, color functions, and color variables. Understanding color systems helps create beautiful and accessible designs.

## Khái niệm chính / Main Concepts

### Color Keywords / Từ khóa màu

CSS cung cấp 140+ named colors có thể sử dụng trực tiếp bằng tên.

CSS provides 140+ named colors that can be used directly by name.

```css
/* Basic named colors / Màu cơ bản có tên */
.red-text {
    color: red;
}

.blue-bg {
    background-color: blue;
}

/* Extended named colors / Màu mở rộng */
.colors {
    color: coral;
    background: lightblue;
    border-color: tomato;
}

/* Common named colors / Màu thường dùng */
.examples {
    /* Whites / Trắng */
    color: white;           /* #FFFFFF */
    color: snow;            /* #FFFAFA */
    color: ivory;           /* #FFFFF0 */
    
    /* Grays / Xám */
    color: black;           /* #000000 */
    color: gray;            /* #808080 */
    color: silver;          /* #C0C0C0 */
    color: dimgray;         /* #696969 */
    
    /* Reds / Đỏ */
    color: crimson;         /* #DC143C */
    color: firebrick;       /* #B22222 */
    
    /* Blues / Xanh dương */
    color: navy;            /* #000080 */
    color: royalblue;       /* #4169E1 */
    color: skyblue;         /* #87CEEB */
}
```

### Hexadecimal Colors / Màu Hex

Hex colors sử dụng mã 6 hoặc 3 ký tự với format #RRGGBB hoặc #RGB.

Hex colors use 6 or 3 character codes with format #RRGGBB or #RGB.

```css
/* 6-digit hex / Hex 6 số */
.hex-colors {
    color: #FF0000;         /* Red - Đỏ / 255,0,0 */
    color: #00FF00;         /* Green - Xanh lá / 0,255,0 */
    color: #0000FF;         /* Blue - Xanh dương / 0,0,255 */
    color: #FFFFFF;         /* White - Trắng */
    color: #000000;         /* Black - Đen */
    color: #808080;         /* Gray - Xám */
}

/* 3-digit shorthand / Rút gọn 3 số */
.shorthand {
    color: #F00;            /* Same as #FF0000 */
    color: #0F0;            /* Same as #00FF00 */
    color: #00F;            /* Same as #0000FF */
    color: #FFF;            /* Same as #FFFFFF */
    color: #000;            /* Same as #000000 */
}

/* 8-digit hex với alpha channel / 8 số với alpha */
.hex-alpha {
    color: #FF0000FF;       /* Red, fully opaque / Đỏ, không trong suốt */
    color: #FF000080;       /* Red, 50% opacity / Đỏ, 50% trong suốt */
    color: #00FF0033;       /* Green, 20% opacity / Xanh lá, 20% trong suốt */
}

/* 4-digit shorthand với alpha / Rút gọn 4 số với alpha */
.shorthand-alpha {
    color: #F00F;           /* Red, fully opaque */
    color: #F008;           /* Red, ~50% opacity */
    color: #0F03;           /* Green, ~20% opacity */
}
```

> [!TIP]
> **Hex values**: RR (Red), GG (Green), BB (Blue). Mỗi cặp từ 00-FF (0-255).
> 
> **Hex values**: RR (Red), GG (Green), BB (Blue). Each pair from 00-FF (0-255).

### RGB and RGBA / RGB và RGBA

RGB sử dụng red, green, blue values từ 0-255. RGBA thêm alpha (opacity) từ 0-1.

RGB uses red, green, blue values from 0-255. RGBA adds alpha (opacity) from 0-1.

```css
/* RGB - Red, Green, Blue */
.rgb-colors {
    color: rgb(255, 0, 0);      /* Red / Đỏ */
    color: rgb(0, 255, 0);      /* Green / Xanh lá */
    color: rgb(0, 0, 255);      /* Blue / Xanh dương */
    color: rgb(255, 255, 255);  /* White / Trắng */
    color: rgb(0, 0, 0);        /* Black / Đen */
    color: rgb(128, 128, 128);  /* Gray / Xám */
}

/* RGBA - RGB with Alpha (opacity) */
.rgba-colors {
    background: rgba(255, 0, 0, 1);     /* Red, 100% opaque / Đỏ, không trong suốt */
    background: rgba(255, 0, 0, 0.5);   /* Red, 50% opacity / Đỏ, 50% trong suốt */
    background: rgba(0, 0, 0, 0.8);     /* Black, 80% opacity / Đen, 80% trong suốt */
    background: rgba(255, 255, 255, 0.1); /* White, 10% opacity / Trắng, 10% trong suốt */
}

/* Modern RGB syntax với space separator */
/* Modern RGB syntax with space separator */
.modern-rgb {
    color: rgb(255 0 0);           /* Red */
    color: rgb(255 0 0 / 0.5);     /* Red, 50% opacity */
    color: rgb(0 128 255 / 80%);   /* Blue, 80% opacity */
}

/* Practical examples / Ví dụ thực tế */
.overlay {
    background: rgba(0, 0, 0, 0.5); /* Black overlay 50% / Lớp phủ đen 50% */
}

.glass-effect {
    background: rgba(255, 255, 255, 0.1); /* Glassmorphism */
    backdrop-filter: blur(10px);
}
```

### HSL and HSLA / HSL và HSLA

HSL sử dụng Hue (màu sắc), Saturation (độ bão hòa), Lightness (độ sáng). Dễ điều chỉnh hơn RGB.

HSL uses Hue (color), Saturation (intensity), Lightness (brightness). Easier to adjust than RGB.

```css
/* HSL - Hue, Saturation, Lightness */
/* Hue: 0-360 degrees / độ (color wheel / bánh xe màu) */
/* Saturation: 0-100% (0% = gray, 100% = full color) */
/* Lightness: 0-100% (0% = black, 100% = white) */

.hsl-colors {
    color: hsl(0, 100%, 50%);       /* Red / Đỏ - 0° */
    color: hsl(120, 100%, 50%);     /* Green / Xanh lá - 120° */
    color: hsl(240, 100%, 50%);     /* Blue / Xanh dương - 240° */
    color: hsl(0, 0%, 0%);          /* Black / Đen */
    color: hsl(0, 0%, 100%);        /* White / Trắng */
    color: hsl(0, 0%, 50%);         /* Gray / Xám */
}

/* HSLA - HSL with Alpha */
.hsla-colors {
    background: hsla(0, 100%, 50%, 0.5);     /* Red, 50% opacity */
    background: hsla(240, 100%, 50%, 0.3);   /* Blue, 30% opacity */
}

/* Modern HSL syntax */
.modern-hsl {
    color: hsl(0 100% 50%);         /* Red */
    color: hsl(0 100% 50% / 0.5);   /* Red, 50% opacity */
    color: hsl(240 100% 50% / 80%); /* Blue, 80% opacity */
}

/* Tạo color variations dễ dàng / Easy color variations */
.primary {
    --hue: 240; /* Blue hue / Màu xanh dương */
    
    background: hsl(var(--hue), 100%, 50%);     /* Base color / Màu cơ bản */
}

.primary-light {
    background: hsl(var(--hue), 100%, 70%);     /* Lighter / Sáng hơn */
}

.primary-dark {
    background: hsl(var(--hue), 100%, 30%);     /* Darker / Tối hơn */
}

.primary-muted {
    background: hsl(var(--hue), 50%, 50%);      /* Less saturated / Ít bão hòa */
}
```

> [!TIP]
> **HSL advantages**: Dễ tạo color schemes và variations hơn RGB.
> 
> **HSL advantages**: Easier to create color schemes and variations than RGB.

### Modern Color Functions / Hàm màu hiện đại

CSS hiện đại cung cấp các color functions mạnh mẽ để manipulate colors.

Modern CSS provides powerful color functions to manipulate colors.

```css
/* color-mix() - Trộn hai màu / Mix two colors */
.mixed-colors {
    /* Mix 50-50 */
    background: color-mix(in srgb, red, blue);
    
    /* Mix với tỷ lệ khác nhau / Mix with different ratios */
    background: color-mix(in srgb, red 80%, blue 20%);
    
    /* Mix với white để lighten / Mix with white to lighten */
    background: color-mix(in srgb, #3498db, white 30%);
    
    /* Mix với black để darken / Mix with black to darken */
    background: color-mix(in srgb, #3498db, black 20%);
}

/* light-dark() - Theme-aware colors / Màu theo theme */
.theme-aware {
    color: light-dark(#000, #fff);    /* Black in light mode, white in dark */
    background: light-dark(#fff, #000);
}

/* Relative colors - Adjust existing colors / Điều chỉnh màu có sẵn */
.relative-colors {
    --base: #3498db;
    
    /* Lighten / Làm sáng */
    background: rgb(from var(--base) r g b / 0.5);
    
    /* Adjust in HSL / Điều chỉnh trong HSL */
    background: hsl(from var(--base) h s calc(l + 20%));
}
```

> [!NOTE]
> **Browser support**: Các color functions mới cần kiểm tra browser support.
> 
> **Browser support**: New color functions need browser support checking.

### currentColor Keyword / Từ khóa currentColor

`currentColor` tham chiếu đến giá trị `color` hiện tại của element.

`currentColor` references the current `color` value of the element.

```css
/* currentColor matches text color / currentColor khớp với màu text */
.icon-text {
    color: #3498db;
    
    /* Border sử dụng cùng màu với text */
    /* Border uses same color as text */
    border: 2px solid currentColor;
}

.button {
    color: white;
    background: #3498db;
    
    /* Icon fill matches text color */
    /* Fill của icon khớp với màu text */
}

.button svg {
    fill: currentColor; /* Sẽ là white / Will be white */
}

/* Hover effects / Hiệu ứng hover */
.link {
    color: #3498db;
    text-decoration-color: currentColor;
}

.link:hover {
    color: #e74c3c;
    /* text-decoration màu cũng thay đổi theo */
    /* text-decoration color also changes */
}
```

### CSS Color Variables / Biến màu CSS

Sử dụng CSS custom properties để quản lý color systems.

Use CSS custom properties to manage color systems.

```css
/* Color palette với variables / Color palette with variables */
:root {
    /* Primary colors / Màu chính */
    --color-primary: #3498db;
    --color-secondary: #2ecc71;
    --color-accent: #e74c3c;
    
    /* Neutral colors / Màu trung tính */
    --color-text: #2c3e50;
    --color-text-light: #7f8c8d;
    --color-bg: #ffffff;
    --color-bg-alt: #ecf0f1;
    
    /* Semantic colors / Màu ngữ nghĩa */
    --color-success: #27ae60;
    --color-warning: #f39c12;
    --color-error: #c0392b;
    --color-info: #3498db;
    
    /* With opacity / Với độ trong suốt */
    --color-overlay: rgba(0, 0, 0, 0.5);
    --color-shadow: rgba(0, 0, 0, 0.1);
}

/* Usage / Sửdụng */
.component {
    color: var(--color-text);
    background: var(--color-bg);
    border: 1px solid var(--color-primary);
}

.button-primary {
    background: var(--color-primary);
    color: white;
}

.alert-success {
    background: var(--color-success);
    color: white;
}

/* Dark mode / Chế độ tối */
[data-theme="dark"] {
    --color-text: #ecf0f1;
    --color-bg: #2c3e50;
    --color-bg-alt: #34495e;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Flexibility**: Nhiều cách để define cùng một màu / Multiple ways to define same color
- **Precision**: Control chính xác màu sắc / Precise color control
- **Maintainability**: Color variables dễ maintain / Color variables easy to maintain
- **Accessibility**: Tạo color contrasts tốt / Create good color contrasts
- **Theming**: Dễ dàng implement themes / Easy to implement themes
- **Consistency**: Đảm bảo consistency trong design / Ensure design consistency

### Ứng dụng thực tế / Real-world Applications
- **Brand colors**: Define brand color palette / Định nghĩa bảng màu thương hiệu
- **Theme systems**: Light/dark mode implementation / Triển khai light/dark mode
- **UI states**: Success, error, warning colors / Màu trạng thái UI
- **Overlays**: Semi-transparent backgrounds / Nền bán trong suốt
- **Gradients**: Create beautiful gradients / Tạo gradients đẹp mắt
- **Accessibility**: Ensure WCAG contrast ratios / Đảm bảo tỷ lệ tương phản WCAG

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng CSS variables cho color systems / Use CSS variables for color systems
- ✅ **DO**: Đảm bảo sufficient color contrast / Ensure sufficient color contrast
- ✅ **DO**: Sử dụng HSL cho color variations / Use HSL for color variations
- ✅ **DO**: Test colors với color blindness simulators / Test with color blindness simulators
- ✅ **DO**: Define semantic color names / Define semantic color names
- ❌ **DON'T**: Không hard-code colors khắp nơi / Don't hard-code colors everywhere
- ❌ **DON'T**: Không rely chỉ vào màu để convey information / Don't rely only on color
- ❌ **DON'T**: Không sử dụng quá nhiều colors / Don't use too many colors

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors Demo</title>
    <link rel="stylesheet" href="colors.css">
</head>
<body>
    <div class="container">
        <h1>CSS Color Systems</h1>
        
        <!-- Color format examples -->
        <section class="color-section">
            <h2>Color Formats</h2>
            <div class="color-grid">
                <div class="color-box hex">Hex: #3498db</div>
                <div class="color-box rgb">RGB: rgb(52, 152, 219)</div>
                <div class="color-box hsl">HSL: hsl(204, 70%, 53%)</div>
                <div class="color-box named">Named: dodgerblue</div>
            </div>
        </section>
        
        <!-- Opacity examples -->
        <section class="color-section">
            <h2>Opacity & Transparency</h2>
            <div class="opacity-demo">
                <div class="overlay opacity-100">100%</div>
                <div class="overlay opacity-75">75%</div>
                <div class="overlay opacity-50">50%</div>
                <div class="overlay opacity-25">25%</div>
            </div>
        </section>
        
        <!-- Color palette -->
        <section class="color-section">
            <h2>Color Palette</h2>
            <div class="palette">
                <div class="palette-item primary">Primary</div>
                <div class="palette-item secondary">Secondary</div>
                <div class="palette-item success">Success</div>
                <div class="palette-item warning">Warning</div>
                <div class="palette-item error">Error</div>
            </div>
        </section>
        
        <!-- HSL variations -->
        <section class="color-section">
            <h2>HSL Color Variations</h2>
            <div class="hsl-variations">
                <div class="hsl-box hsl-dark">Dark</div>
                <div class="hsl-box hsl-base">Base</div>
                <div class="hsl-box hsl-light">Light</div>
                <div class="hsl-box hsl-muted">Muted</div>
            </div>
        </section>
    </div>
</body>
</html>
```

```css
/* File: colors.css */

/* ===========================================
   COLOR SYSTEM WITH CSS VARIABLES
   Hệ thống màu với biến CSS
   =========================================== */

:root {
    /* Brand colors / Màu thương hiệu */
    --color-primary: #3498db;
    --color-secondary: #2ecc71;
    
    /* Semantic colors / Màu ngữ nghĩa */
    --color-success: #27ae60;
    --color-warning: #f39c12;
    --color-error: #e74c3c;
    --color-info: #3498db;
    
    /* Neutral colors / Màu trung tính */
    --color-text: #2c3e50;
    --color-text-light: #7f8c8d;
    --color-bg: #ecf0f1;
    --color-white: #ffffff;
    --color-black: #000000;
    
    /* Shadows & overlays / Bóng & lớp phủ */
    --shadow-sm: rgba(0, 0, 0, 0.1);
    --shadow-md: rgba(0, 0, 0, 0.15);
    --shadow-lg: rgba(0, 0, 0, 0.2);
    --overlay: rgba(0, 0, 0, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-align: center;
}

h2 {
    color: var(--color-text);
    font-size: 1.5rem;
    margin-bottom: 20px;
}

/* ===========================================
   COLOR FORMAT DEMONSTRATIONS
   =========================================== */

.color-section {
    background: var(--color-white);
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px var(--shadow-lg);
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.color-box {
    padding: 40px 20px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
    transition: transform 0.3s ease;
}

.color-box:hover {
    transform: translateY(-5px);
}

/* Different color formats / Các format màu khác nhau */
.hex {
    background: #3498db; /* Hex format */
}

.rgb {
    background: rgb(52, 152, 219); /* RGB format */
}

.hsl {
    background: hsl(204, 70%, 53%); /* HSL format */
}

.named {
    background: dodgerblue; /* Named color */
}

/* ===========================================
   OPACITY DEMONSTRATIONS
   =========================================== */

.opacity-demo {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><rect width="10" height="10" fill="%23eee"/><rect x="10" y="10" width="10" height="10" fill="%23eee"/></svg>');
    padding: 20px;
    border-radius: 10px;
}

.overlay {
    flex: 1;
    min-width: 150px;
    padding: 30px;
    text-align: center;
    font-weight: bold;
    color: white;
    border-radius: 8px;
}

.opacity-100 {
    background: rgba(52, 152, 219, 1); /* 100% opaque */
}

.opacity-75 {
    background: rgba(52, 152, 219, 0.75); /* 75% opaque */
}

.opacity-50 {
    background: rgba(52, 152, 219, 0.5); /* 50% opaque */
}

.opacity-25 {
    background: rgba(52, 152, 219, 0.25); /* 25% opaque */
    color: var(--color-text); /* Dark text for light background */
}

/* ===========================================
   COLOR PALETTE
   =========================================== */

.palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
}

.palette-item {
    padding: 30px 20px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: white;
    transition: all 0.3s ease;
}

.palette-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px var(--shadow-md);
}

.primary {
    background: var(--color-primary);
}

.secondary {
    background: var(--color-secondary);
}

.success {
    background: var(--color-success);
}

.warning {
    background: var(--color-warning);
}

.error {
    background: var(--color-error);
}

/* ===========================================
   HSL COLOR VARIATIONS
   Using HSL for easy color manipulation
   =========================================== */

.hsl-variations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
}

.hsl-box {
    padding: 40px 20px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: white;
    --base-hue: 204; /* Blue hue / Màu xanh dương */
}

.hsl-dark {
    background: hsl(var(--base-hue), 70%, 30%); /* Darker / Tối hơn */
}

.hsl-base {
    background: hsl(var(--base-hue), 70%, 53%); /* Base / Cơ bản */
}

.hsl-light {
    background: hsl(var(--base-hue), 70%, 70%); /* Lighter / Sáng hơn */
}

.hsl-muted {
    background: hsl(var(--base-hue), 30%, 53%); /* Less saturated / Ít bão hòa */
}

/* ===========================================
   USING currentColor
   =========================================== */

.icon-demo {
    color: var(--color-primary);
    border: 2px solid currentColor; /* Matches text color */
    padding: 15px;
}

/* ===========================================
   RESPONSIVE
   =========================================== */

@media (max-width: 768px) {
    .color-grid,
    .palette,
    .hsl-variations {
        grid-template-columns: 1fr;
    }
    
    .opacity-demo {
        flex-direction: column;
    }
}
```

## Color Contrast / Tương phản màu

| Text Color | Background | Contrast Ratio | WCAG Level |
|------------|------------|----------------|------------|
| #000000 | #FFFFFF | 21:1 | AAA ✅ |
| #333333 | #FFFFFF | 12.6:1 | AAA ✅ |
| #666666 | #FFFFFF | 5.7:1 | AA ✅ |
| #999999 | #FFFFFF | 2.8:1 | ❌ Fail |
| #FFFFFF | #3498db | 4.5:1 | AA ✅ |

## Tài liệu tham khảo / References

- [MDN - CSS Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [MDN - Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- [WebAIM - Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors - Color Palette Generator](https://coolors.co/)
- [Adobe Color Wheel](https://color.adobe.com/)
