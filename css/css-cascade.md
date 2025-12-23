# The Cascade / Tầng CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Nesting](./css-nesting.md)  
**➡️ Bài sau / Next:** [Specificity](./css-specificity.md)

---

## Mô tả / Description

Bài học này tìm hiểu về The Cascade - một trong những khái niệm cốt lõi của CSS. Cascade xác định cách trình duyệt chọn quy tắc CSS nào để áp dụng khi có nhiều quy tắc cùng tác động lên một phần tử. Bạn sẽ học về origin, specificity, source order và cách chúng tương tác để quyết định style cuối cùng. Hiểu rõ cascade giúp bạn viết CSS hiệu quả và dễ dự đoán.

This lesson explores The Cascade - one of the core concepts of CSS. The Cascade determines how browsers choose which CSS rule to apply when multiple rules affect the same element. You will learn about origin, specificity, source order, and how they interact to determine the final style. Understanding the cascade helps you write effective and predictable CSS.

## Khái niệm chính / Main Concepts

### What is The Cascade? / Cascade là gì?

Cascade là thuật toán mà trình duyệt sử dụng để kết hợp các giá trị thuộc tính từ nhiều nguồn CSS khác nhau. Khi có xung đột (nhiều rules áp dụng cùng thuộc tính), cascade quyết định rule nào thắng.

The Cascade is the algorithm browsers use to combine property values from different CSS sources. When there are conflicts (multiple rules applying the same property), the cascade determines which rule wins.

```css
/* Ví dụ xung đột / Conflict example */

/* Rule 1 */
p {
    color: blue;
    font-size: 16px;
}

/* Rule 2 */
p {
    color: red; /* Xung đột với Rule 1 / Conflicts with Rule 1 */
    line-height: 1.6;
}

/* Kết quả / Result:
 * color: red (Rule 2 thắng vì đến sau / Rule 2 wins because it comes later)
 * font-size: 16px (từ Rule 1 / from Rule 1)
 * line-height: 1.6 (từ Rule 2 / from Rule 2)
 */
```

```html
<p>This paragraph will be red with 16px font size.</p>
```

### Cascade Layers / Các tầng Cascade

Cascade xem xét ba yếu tố chính theo thứ tự: Origin and Importance, Specificity, và Order of Appearance.

The Cascade considers three main factors in order: Origin and Importance, Specificity, and Order of Appearance.

```
Thứ tự ưu tiên Cascade / Cascade Priority Order:
1. Origin and Importance (nguồn gốc và tầm quan trọng)
2. Specificity (độ cụ thể)
3. Order of Appearance (thứ tự xuất hiện)
```

### Origin and Importance / Nguồn gốc và Tầm quan trọng

CSS có thể đến từ nhiều nguồn khác nhau, mỗi nguồn có mức độ ưu tiên khác nhau.

CSS can come from different sources, each with different priority levels.

```css
/* 1. User Agent Stylesheet (trình duyệt) - Ưu tiên thấp nhất */
/* 1. User Agent Stylesheet (browser) - Lowest priority */
/* Ví dụ: h1 { font-size: 2em; } */

/* 2. User Stylesheet (người dùng) */
/* 2. User Stylesheet (user) */
/* Người dùng có thể tùy chỉnh styles / Users can customize styles */

/* 3. Author Stylesheet (developer - BẠN) - Ưu tiên cao nhất */
/* 3. Author Stylesheet (developer - YOU) - Highest priority */
h1 {
    font-size: 2.5rem;
    color: #2c3e50;
}

/* !important đảo ngược thứ tự ưu tiên */
/* !important reverses the priority order */
p {
    color: blue !important; /* Có ưu tiên rất cao / Has very high priority */
}

/* Thứ tự ưu tiên với !important (từ cao xuống thấp) */
/* Priority order with !important (high to low) */
/*
1. User !important
2. Author !important  
3. Author normal
4. User normal
5. User Agent (browser)
*/
```

> [!WARNING]
> **Tránh lạm dụng !important**: Chỉ dùng khi thực sự cần thiết, vì nó làm CSS khó maintain.
> 
> **Avoid overusing !important**: Only use when truly necessary, as it makes CSS hard to maintain.

### Specificity / Độ cụ thể

Specificity quyết định rule nào thắng khi có nhiều rules cùng target một element. Specificity được tính theo công thức (inline, IDs, classes/attributes, elements).

Specificity determines which rule wins when multiple rules target the same element. Specificity is calculated as (inline, IDs, classes/attributes, elements).

```css
/* Specificity được tính theo (a, b, c, d) */
/* Specificity is calculated as (a, b, c, d) */
/* a = inline styles (1 hoặc 0) */
/* b = ID selectors (số lượng IDs) */
/* c = class selectors, attribute selectors, pseudo-classes */
/* d = element selectors, pseudo-elements */

/* (0, 0, 0, 1) - Specificity = 1 */
p {
    color: black;
}

/* (0, 0, 1, 0) - Specificity = 10 */
.text {
    color: blue;
}

/* (0, 0, 1, 1) - Specificity = 11 */
p.text {
    color: green;
}

/* (0, 1, 0, 0) - Specificity = 100 */
#main {
    color: purple;
}

/* (0, 1, 1, 1) - Specificity = 111 */
#main p.text {
    color: orange; /* Thắng vì specificity cao nhất / Wins due to highest specificity */
}

/* Inline style - (1, 0, 0, 0) - Specificity = 1000 */
/* <p style="color: red;">Inline wins!</p> */
```

```html
<!-- Ví dụ / Example -->
<div id="main">
    <p class="text" style="color: yellow;">
        <!-- Color sẽ là yellow (inline style thắng) -->
        <!-- Color will be yellow (inline style wins) -->
        This text color demonstration
    </p>
</div>
```

> [!TIP]
> **Tính Specificity**: Để so sánh, đọc như số: (0,1,1,1) = 111 > (0,0,1,1) = 11
> 
> **Calculating Specificity**: To compare, read like numbers: (0,1,1,1) = 111 > (0,0,1,1) = 11

### Source Order / Thứ tự nguồn

Khi hai rules có cùng specificity, rule xuất hiện sau sẽ thắng.

When two rules have the same specificity, the rule that appears later wins.

```css
/* Cả hai rules có cùng specificity (0,0,1,0) */
/* Both rules have same specificity (0,0,1,0) */

.button {
    background: blue;
    color: white;
}

.button {
    background: red; /* Thắng vì đến sau / Wins because it comes later */
    /* color: white vẫn được áp dụng / color: white is still applied */
}

/* Kết quả: background là red, color là white */
/* Result: background is red, color is white */
```

```css
/* Thứ tự trong nhiều file CSS / Order across multiple CSS files */
/* File được load sau override file trước cùng specificity */
/* Later loaded file overrides earlier file with same specificity */
```

```html
<head>
    <!-- File 1 load trước / File 1 loads first -->
    <link rel="stylesheet" href="base.css">
    
    <!-- File 2 load sau, có ưu tiên hơn / File 2 loads later, has priority -->
    <link rel="stylesheet" href="theme.css">
</head>
```

### Inheritance vs Cascade / Kế thừa vs Tầng

Inheritance (kế thừa) và Cascade là hai khái niệm khác nhau nhưng hoạt động cùng nhau.

Inheritance and Cascade are two different concepts but work together.

```css
/* Inheritance - Thuộc tính được thừa hưởng từ parent */
/* Inheritance - Properties inherited from parent */
body {
    color: #333; /* Tất cả text trong body được thừa hưởng / All text in body inherits this */
    font-family: Arial, sans-serif;
}

/* Cascade - Quyết định giá trị khi có xung đột */
/* Cascade - Decides value when there's conflict */
p {
    color: blue; /* Override inherited color / Ghi đè color được thừa hưởng */
}

/* Một số thuộc tính KHÔNG được thừa hưởng / Some properties are NOT inherited */
div {
    border: 1px solid black; /* Không được thừa hưởng / Not inherited */
    padding: 20px; /* Không được thừa hưởng / Not inherited */
}
```

### The 'all' Property / Thuộc tính 'all'

Thuộc tính `all` cho phép reset hoặc thiết lập tất cả properties cùng lúc.

The `all` property allows resetting or setting all properties at once.

```css
/* Reset tất cả properties / Reset all properties */
.reset {
    all: initial; /* Reset về giá trị initial / Reset to initial value */
}

.inherit-all {
    all: inherit; /* Thừa hưởng tất cả từ parent / Inherit all from parent */
}

.unset-all {
    all: unset; /* Unset tất cả (inherit hoặc initial) / Unset all (inherit or initial) */
}

/* Ví dụ thực tế / Practical example */
.widget {
    /* Reset để tránh conflicts từ global styles */
    /* Reset to avoid conflicts from global styles */
    all: initial;
    
    /* Sau đó áp dụng widget styles riêng */
    /* Then apply widget-specific styles */
    padding: 20px;
    background: white;
}
```

### Cascade Layers (Modern CSS) / Tầng Cascade (CSS Hiện đại)

CSS Cascade Layers cho phép tạo các tầng ưu tiên rõ ràng trong CSS.

CSS Cascade Layers allow creating clear priority layers in CSS.

```css
/* Định nghĩa layers / Define layers */
@layer reset, base, theme, utilities;

/* Layer reset có ưu tiên thấp nhất / reset layer has lowest priority */
@layer reset {
    * {
        margin: 0;
        padding: 0;
    }
}

/* Layer base / base layer */
@layer base {
    body {
        font-family: system-ui;
        line-height: 1.6;
    }
}

/* Layer theme / theme layer */
@layer theme {
    body {
        color: #333;
        background: white;
    }
}

/* Layer utilities có ưu tiên cao nhất / utilities layer has highest priority */
@layer utilities {
    .text-center {
        text-align: center;
    }
}

/* Unlayered styles có ưu tiên cao hơn tất cả layers */
/* Unlayered styles have higher priority than all layers */
.important-override {
    color: red;
}
```

> [!NOTE]
> **Cascade Layers** là tính năng mới (2022). Kiểm tra browser support.
> 
> **Cascade Layers** is a new feature (2022). Check browser support.

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Predictable styling**: Hiểu cascade giúp CSS dễ dự đoán / Understanding cascade makes CSS predictable
- **Conflict resolution**: Giải quyết xung đột styles một cách có hệ thống / Resolves style conflicts systematically
- **Maintainability**: Code dễ maintain khi hiểu cascade / Code is easier to maintain when understanding cascade
- **Debugging**: Debug CSS nhanh hơn khi biết cascade hoạt động / Debug CSS faster knowing how cascade works
- **Performance**: Viết CSS hiệu quả hơn / Write more efficient CSS
- **Organization**: Tổ chức CSS theo layers logic / Organize CSS in logical layers

### Ứng dụng thực tế / Real-world Applications
- **Theme systems**: Quản lý multiple themes với cascade / Manage multiple themes with cascade
- **Component libraries**: Xây dựng overridable components / Build overridable components
- **Reset stylesheets**: Tạo base styles với specificity thấp / Create base styles with low specificity
- **Utility classes**: Thiết kế utility classes override được / Design overridable utility classes
- **Framework integration**: Tích hợp nhiều CSS frameworks / Integrate multiple CSS frameworks
- **Design systems**: Xây dựng scalable design systems / Build scalable design systems

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Giữ specificity thấp bằng cách dùng classes / Keep specificity low by using classes
- ✅ **DO**: Tổ chức CSS theo thứ tự logic (reset, base, components) / Organize CSS in logical order
- ✅ **DO**: Sử dụng cascade layers cho large projects / Use cascade layers for large projects
- ✅ **DO**: Hiểu specificity trước khi override / Understand specificity before overriding
- ✅ **DO**: Document các !important overrides / Document !important overrides
- ❌ **DON'T**: Không lạm dụng !important / Don't overuse !important
- ❌ **DON'T**: Không tạo selectors quá specific / Don't create overly specific selectors
- ❌ **DON'T**: Không dựa vào source order cho logic quan trọng / Don't rely on source order for critical logic

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Cascade Demo</title>
    <link rel="stylesheet" href="cascade.css">
</head>
<body>
    <!-- Demo cascade và specificity -->
    <!-- Demo cascade and specificity -->
    <div class="container">
        <h1>Understanding The Cascade</h1>
        
        <!-- Specificity examples / Ví dụ độ cụ thể -->
        <section class="demo-section" id="specificity-demo">
            <h2>Specificity Examples</h2>
            
            <!-- Element selector (0,0,0,1) -->
            <p>Element selector - lowest specificity</p>
            
            <!-- Class selector (0,0,1,1) -->
            <p class="highlighted">Class selector - medium specificity</p>
            
            <!-- ID selector (0,1,1,1) -->
            <p class="highlighted" id="special">ID selector - high specificity</p>
            
            <!-- Inline style (1,0,0,0) -->
            <p style="color: purple;">Inline style - highest specificity</p>
        </section>
        
        <!-- Source order demo / Demo thứ tự nguồn -->
        <section class="demo-section">
            <h2>Source Order Demo</h2>
            <div class="box box-blue box-red">
                Which color wins? (Check the CSS!)
            </div>
        </section>
        
        <!-- Cascade conflict resolution / Giải quyết xung đột cascade -->
        <section class="demo-section">
            <h2>Cascade Conflict Resolution</h2>
            <div class="card">
                <div class="card-header">
                    <h3>Card Title</h3>
                </div>
                <div class="card-body">
                    <p>This demonstrates how cascade resolves conflicts.</p>
                </div>
            </div>
        </section>
    </div>
</body>
</html>
```

```css
/* File: cascade.css */

/* ========================================
   LAYER 1: RESET - Ưu tiên thấp nhất
   LAYER 1: RESET - Lowest priority
   ======================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ========================================
   LAYER 2: BASE STYLES
   ======================================== */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

h1, h2, h3 {
    color: white;
    margin-bottom: 20px;
}

/* ========================================
   LAYER 3: LAYOUT
   ======================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* ========================================
   LAYER 4: COMPONENTS
   ======================================== */

/* Demo section */
.demo-section {
    background: white;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.demo-section h2 {
    color: #2c3e50;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
}

/* ========================================
   SPECIFICITY EXAMPLES
   Demonstrating different specificity levels
   ======================================== */

/* (0, 0, 0, 1) - Specificity = 1 */
p {
    color: #555;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
}

/* (0, 0, 1, 1) - Specificity = 11 */
p.highlighted {
    background: #fff3cd;
    color: #856404;
    border-left: 4px solid #ffc107;
}

/* (0, 1, 1, 1) - Specificity = 111 */
#specificity-demo p.highlighted {
    background: #d1ecf1;
    color: #0c5460;
    border-left: 4px solid #17a2b8;
}

/* (0, 1, 0, 0) - Specificity = 100 */
#special {
    background: #f8d7da;
    color: #721c24;
    border-left: 4px solid #dc3545;
    font-weight: bold;
}

/* Inline style sẽ thắng tất cả (specificity = 1000) */
/* Inline style will win over all (specificity = 1000) */

/* ========================================
   SOURCE ORDER DEMO
   Demonstrating source order importance
   ======================================== */

.box {
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
}

/* Cả hai có cùng specificity (0,0,1,0) = 10 */
/* Both have same specificity (0,0,1,0) = 10 */

.box-blue {
    background: #3498db;
    color: white;
}

.box-red {
    /* Thắng vì đến sau, cùng specificity */
    /* Wins because it comes later, same specificity */
    background: #e74c3c;
    color: white;
}

/* ========================================
   CARD COMPONENT
   Multiple rules targeting same elements
   ======================================== */

/* Base card styles - (0,0,1,0) = 10 */
.card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Card header - (0,0,2,0) = 20 */
.card .card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
}

.card .card-header h3 {
    color: white;
    margin: 0;
}

/* Card body - (0,0,2,0) = 20 */
.card .card-body {
    padding: 20px;
}

.card .card-body p {
    color: #555;
    line-height: 1.8;
}

/* ========================================
   UTILITIES - Highest layer
   Override với !important nếu cần
   ======================================== */

/* Avoid using !important khi có thể / Avoid using !important when possible */
.text-center {
    text-align: center;
}

.mt-large {
    margin-top: 40px;
}

.hidden {
    /* Trường hợp hợp lệ để dùng !important */
    /* Valid case to use !important */
    display: none !important;
}

/* ========================================
   RESPONSIVE - Media queries
   Cũng tuân theo cascade rules
   ======================================== */

@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
    
    .demo-section {
        padding: 20px;
    }
    
    h1 {
        font-size: 1.8rem;
    }
    
    /* Override previous styles cho mobile */
    /* Override previous styles for mobile */
    .box {
        font-size: 1rem;
        padding: 20px;
    }
}

/* ========================================
   DEMONSTRATION OF CASCADE ORDER
   
   1. Origin & Importance:
      - User Agent (browser) < User < Author
      - Reversed with !important
   
   2. Specificity:
      - Inline (1,0,0,0) > ID (0,1,0,0) > Class (0,0,1,0) > Element (0,0,0,1)
   
   3. Source Order:
      - Later rules win when specificity is equal
   ======================================== */
```

## Tài liệu tham khảo / References

- [MDN - Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [W3C - CSS Cascading and Inheritance](https://www.w3.org/TR/css-cascade-4/)
- [Specificity Calculator](https://specificity.keegan.st/)
- [CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
