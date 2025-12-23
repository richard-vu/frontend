# Specificity / Độ ưu tiên CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [The Cascade](./css-cascade.md)  
**➡️ Bài sau / Next:** [Inheritance](./css-inheritance.md)

---

## Mô tả / Description

Bài học này đi sâu vào khái niệm Specificity (độ ưu tiên) - một phần quan trọng của cơ chế Cascade trong CSS. Specificity quyết định quy tắc CSS nào được áp dụng khi nhiều selectors cùng target một phần tử. Bạn sẽ học cách tính toán specificity, hiểu cách nó ảnh hưởng đến styles, và áp dụng best practices để viết CSS dễ maintain và dự đoán được.

This lesson delves into the concept of Specificity - an important part of the Cascade mechanism in CSS. Specificity determines which CSS rule is applied when multiple selectors target the same element. You will learn how to calculate specificity, understand how it affects styles, and apply best practices to write maintainable and predictable CSS.

## Khái niệm chính / Main Concepts

### What is Specificity? / Specificity là gì?

Specificity là một giá trị số được tính toán cho mỗi CSS selector, xác định mức độ "cụ thể" của selector đó. Giá trị specificity cao hơn sẽ thắng khi có xung đột giữa các rules.

Specificity is a numerical value calculated for each CSS selector, determining how "specific" that selector is. Higher specificity values win when there are conflicts between rules.

```css
/* Ba rules cùng target element <p class="text" id="intro"> */
/* Three rules targeting the same element <p class="text" id="intro"> */

/* Specificity: (0,0,0,1) = 1 */
p {
    color: black;
}

/* Specificity: (0,0,1,0) = 10 - Thắng rule trên / Wins over above */
.text {
    color: blue;
}

/* Specificity: (0,1,0,0) = 100 - Thắng tất cả / Wins all */
#intro {
    color: red; /* Màu cuối cùng là red / Final color is red */
}
```

```html
<p class="text" id="intro">This text will be red</p>
```

### Specificity Calculation / Cách tính Specificity

Specificity được biểu diễn bằng 4 số: (a, b, c, d). Mỗi số đại diện cho một loại selector khác nhau.

Specificity is represented by 4 numbers: (a, b, c, d). Each number represents a different type of selector.

```
Công thức / Formula: (a, b, c, d)

a = Inline styles (style attribute) / Thuộc tính style inline
b = ID selectors / Bộ chọn ID
c = Classes, attributes, pseudo-classes / Classes, thuộc tính, pseudo-classes
d = Elements, pseudo-elements / Elements, pseudo-elements
```

```css
/* (0, 0, 0, 1) - Specificity = 0001 */
div {
    background: white;
}

/* (0, 0, 1, 0) - Specificity = 0010 */
.button {
    background: blue;
}

/* (0, 0, 1, 1) - Specificity = 0011 */
div.button {
    background: green;
}

/* (0, 1, 0, 0) - Specificity = 0100 */
#submit {
    background: yellow;
}

/* (0, 1, 1, 1) - Specificity = 0111 */
#submit.button {
    background: orange;
}

/* (0, 2, 0, 0) - Specificity = 0200 */
#header #nav {
    background: purple;
}

/* (0, 0, 2, 1) - Specificity = 0021 */
.container .button.primary {
    background: red;
}
```

> [!IMPORTANT]
> **So sánh Specificity**: Đọc như số từ trái sang phải. (0,1,0,0) > (0,0,10,0) vì 1 ID > 10 classes.
> 
> **Comparing Specificity**: Read like numbers from left to right. (0,1,0,0) > (0,0,10,0) because 1 ID > 10 classes.

### Specificity Hierarchy / Thứ bậc Specificity

Các loại selectors có mức độ specificity khác nhau theo thứ tự từ cao xuống thấp.

Different selector types have different specificity levels in order from high to low.

```css
/* 1. Inline Styles - Cao nhất (1,0,0,0) = 1000 */
/* 1. Inline Styles - Highest (1,0,0,0) = 1000 */
/* <div style="color: red;">Inline</div> */

/* 2. IDs (0,1,0,0) = 100 */
#unique-id {
    color: blue;
}

/* 3. Classes, Attributes, Pseudo-classes (0,0,1,0) = 10 */
.class-name {
    color: green;
}

[type="text"] {
    color: green;
}

:hover {
    color: green;
}

/* 4. Elements, Pseudo-elements (0,0,0,1) = 1 */
div {
    color: orange;
}

::before {
    color: orange;
}

/* 5. Universal selector - Không có specificity (0,0,0,0) = 0 */
/* 5. Universal selector - No specificity (0,0,0,0) = 0 */
* {
    color: gray;
}
```

### Complex Selector Examples / Ví dụ Selector phức tạp

Cách tính specificity cho các selectors kết hợp nhiều loại.

How to calculate specificity for selectors combining multiple types.

```css
/* Ví dụ 1: nav ul li a */
/* (0,0,0,4) = 4 elements */
nav ul li a {
    color: blue;
}

/* Ví dụ 2: .menu .item a:hover */
/* (0,0,3,1) = 2 classes + 1 pseudo-class + 1 element */
.menu .item a:hover {
    color: red;
}

/* Ví dụ 3: #header .nav .menu-item */
/* (0,1,2,0) = 1 ID + 2 classes */
#header .nav .menu-item {
    color: green;
}

/* Ví dụ 4: form input[type="submit"] */
/* (0,0,1,2) = 1 attribute + 2 elements */
form input[type="submit"] {
    color: purple;
}

/* Ví dụ 5: .card > .header h2::before */
/* (0,0,2,2) = 2 classes + 1 element + 1 pseudo-element */
.card > .header h2::before {
    content: "→";
}

/* Ví dụ 6: body #main .container .card:not(.active) */
/* (0,1,3,1) = 1 ID + 2 classes + 1 :not() + 1 element */
/* Lưu ý: :not() không thêm vào specificity, nhưng selector bên trong có */
/* Note: :not() doesn't add to specificity, but selector inside does */
body #main .container .card:not(.active) {
    opacity: 0.5;
}
```

> [!TIP]
> **Mẹo tính nhanh**: Đếm số lượng từng loại selector, rồi ghép lại thành (a,b,c,d).
> 
> **Quick calculation tip**: Count quantity of each selector type, then combine into (a,b,c,d).

### The !important Rule / Quy tắc !important

`!important` ghi đè tất cả specificity calculations và nên tránh sử dụng khi có thể.

`!important` overrides all specificity calculations and should be avoided when possible.

```css
/* Ví dụ xung đột / Conflict example */

/* Specificity cao nhưng KHÔNG có !important */
/* High specificity but NO !important */
#header nav .menu li a {
    /* (0,1,2,3) = 123 */
    color: blue;
}

/* Specificity thấp nhưng CÓ !important */
/* Low specificity but HAS !important */
a {
    /* (0,0,0,1) = 1 + !important */
    color: red !important; /* THẮNG / WINS */
}
```

```css
/* Khi cả hai đều có !important, specificity lại được áp dụng */
/* When both have !important, specificity applies again */

.link {
    color: blue !important; /* Specificity: (0,0,1,0) */
}

#special {
    color: red !important; /* Specificity: (0,1,0,0) - THẮNG / WINS */
}
```

> [!WARNING]
> **Tránh !important**: Chỉ dùng trong trường hợp đặc biệt như override third-party CSS.
> 
> **Avoid !important**: Only use in special cases like overriding third-party CSS.

### Combinators and Specificity / Combinators và Specificity

Combinators (>, +, ~, space) KHÔNG thêm vào specificity, chỉ các selectors mới thêm.

Combinators (>, +, ~, space) do NOT add to specificity, only selectors do.

```css
/* Combinator không ảnh hưởng specificity */
/* Combinators don't affect specificity */

/* (0,0,1,1) = 11 - descendant combinator (space) */
.parent .child {
    color: blue;
}

/* (0,0,1,1) = 11 - child combinator (>) - CÙNG specificity */
/* (0,0,1,1) = 11 - child combinator (>) - SAME specificity */
.parent > .child {
    color: red; /* Thắng vì source order / Wins due to source order */
}

/* (0,0,1,1) = 11 - adjacent sibling (+) */
h2 + .paragraph {
    color: green;
}

/* (0,0,1,1) = 11 - general sibling (~) */
h2 ~ .paragraph {
    color: purple;
}
```

### Pseudo-classes and Specificity / Pseudo-classes và Specificity

Hầu hết pseudo-classes thêm (0,0,1,0) vào specificity, ngoại trừ một số trường hợp đặc biệt.

Most pseudo-classes add (0,0,1,0) to specificity, except for some special cases.

```css
/* Pseudo-classes thông thường / Regular pseudo-classes */

/* (0,0,1,1) = 11 - :hover adds class specificity */
a:hover {
    color: red;
}

/* (0,0,2,1) = 21 - :focus and :active both add */
input:focus:active {
    border-color: blue;
}

/* (0,0,1,1) = 11 - :first-child */
li:first-child {
    font-weight: bold;
}

/* (0,0,1,1) = 11 - :nth-child() */
li:nth-child(2n) {
    background: #f0f0f0;
}

/* Trường hợp đặc biệt: :not(), :is(), :where() */
/* Special cases: :not(), :is(), :where() */

/* :not() - Bản thân không thêm, nhưng selector bên trong có */
/* :not() - Itself doesn't add, but selector inside does */
/* (0,0,1,0) = 10 - chỉ .active được tính */
/* (0,0,1,0) = 10 - only .active is counted */
p:not(.active) {
    color: gray;
}

/* :is() - Lấy specificity cao nhất trong danh sách */
/* :is() - Takes highest specificity from list */
/* (0,1,0,0) = 100 - #header là cao nhất */
/* (0,1,0,0) = 100 - #header is highest */
:is(nav, #header, .menu) {
    background: white;
}

/* :where() - LUÔN có specificity 0 */
/* :where() - ALWAYS has specificity 0 */
/* (0,0,0,1) = 1 - chỉ div được tính */
/* (0,0,0,1) = 1 - only div is counted */
div:where(.class1, #id1) {
    color: blue;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Predictable CSS**: Hiểu specificity giúp viết CSS dễ dự đoán / Understanding specificity helps write predictable CSS
- **Easier debugging**: Debug CSS conflicts nhanh hơn / Debug CSS conflicts faster
- **Better architecture**: Thiết kế CSS architecture tốt hơn / Design better CSS architecture
- **Avoid !important**: Giảm dependency vào !important / Reduce dependency on !important
- **Maintainability**: Code dễ maintain và scale / Code is easier to maintain and scale
- **Override control**: Kiểm soát tốt hơn việc override styles / Better control over style overrides

### Ứng dụng thực tế / Real-world Applications
- **Theme systems**: Tạo theme systems có thể override / Create overridable theme systems
- **Component libraries**: Xây dựng components với proper specificity / Build components with proper specificity
- **Utility classes**: Design utility classes override được / Design overridable utility classes
- **Framework integration**: Tích hợp nhiều CSS frameworks / Integrate multiple CSS frameworks
- **Style debugging**: Nhanh chóng tìm ra style conflicts / Quickly find style conflicts
- **CSS organization**: Tổ chức CSS theo specificity layers / Organize CSS by specificity layers

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Giữ specificity thấp, sử dụng classes / Keep specificity low, use classes
- ✅ **DO**: Tránh IDs cho styling, dùng cho JavaScript / Avoid IDs for styling, use for JavaScript
- ✅ **DO**: Sử dụng :where() để reset specificity / Use :where() to reset specificity
- ✅ **DO**: Organize CSS theo increasing specificity / Organize CSS by increasing specificity
- ✅ **DO**: Document các !important overrides / Document !important overrides
- ❌ **DON'T**: Không tạo selectors quá dài và specific / Don't create overly long and specific selectors
- ❌ **DON'T**: Không lạm dụng !important / Don't overuse !important
- ❌ **DON'T**: Không dùng inline styles (trừ dynamic JS) / Don't use inline styles (except dynamic JS)

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Specificity Demo</title>
    <link rel="stylesheet" href="specificity.css">
</head>
<body>
    <div class="container">
        <h1>CSS Specificity Examples</h1>
        
        <!-- Example 1: Specificity conflicts / Xung đột specificity -->
        <section class="demo">
            <h2>Specificity Conflicts</h2>
            <p class="text" id="special">
                Which style wins? Check Developer Tools!
            </p>
        </section>
        
        <!-- Example 2: Button variations / Biến thể button -->
        <section class="demo">
            <h2>Button Specificity</h2>
            <button class="btn">Default Button</button>
            <button class="btn btn-primary">Primary Button</button>
            <button class="btn btn-primary" id="special-btn">Special Primary</button>
        </section>
        
        <!-- Example 3: Navigation with nested styles -->
        <nav id="main-nav">
            <ul class="menu">
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" class="special">Services</a></li>
            </ul>
        </nav>
        
        <!-- Example 4: Card with override demonstration -->
        <div class="card featured-card" id="hero-card">
            <div class="card-header">
                <h3>Specificity in Action</h3>
            </div>
            <div class="card-body">
                <p>This card demonstrates various specificity levels.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

```css
/* File: specificity.css */

/* ===========================================
   SPECIFICITY DEMONSTRATION
   Các rules được sắp xếp theo increasing specificity
   =========================================== */

/* Universal selector - (0,0,0,0) = 0 */
* {
    box-sizing: border-box;
}

/* Element selectors - (0,0,0,1) = 1 */
body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 20px;
}

h1, h2, h3 {
    color: #2c3e50;
}

p {
    /* (0,0,0,1) = 1 */
    color: #333;
    line-height: 1.8;
}

/* Class selectors - (0,0,1,0) = 10 */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.demo {
    background: white;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.text {
    /* (0,0,1,0) = 10 */
    color: blue;
    font-size: 1.1rem;
}

/* Element + Class - (0,0,1,1) = 11 */
p.text {
    color: green;
    font-weight: 500;
}

/* ID selector - (0,1,0,0) = 100 - THẮNG / WINS */
#special {
    color: red !important;
    font-weight: bold;
}

/* ===========================================
   BUTTON SPECIFICITY EXAMPLES
   =========================================== */

/* (0,0,1,0) = 10 - Base button */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #95a5a6;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.btn:hover {
    /* (0,0,2,0) = 20 */
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* (0,0,2,0) = 20 - Modifier class */
.btn.btn-primary {
    background: #3498db;
}

.btn.btn-primary:hover {
    /* (0,0,3,0) = 30 */
    background: #2980b9;
}

/* (0,1,0,0) = 100 - ID override */
#special-btn {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    padding: 15px 30px;
    font-weight: bold;
}

/* ===========================================
   NAVIGATION SPECIFICITY
   =========================================== */

/* (0,1,1,2) = 112 */
#main-nav ul.menu li {
    list-style: none;
    display: inline-block;
    margin-right: 10px;
}

/* (0,1,1,3) = 113 */
#main-nav ul.menu li a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    display: block;
    transition: background 0.3s ease;
}

/* (0,1,1,4) = 114 - :hover adds to specificity */
#main-nav ul.menu li a:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* (0,1,2,3) = 123 - Active class */
#main-nav ul.menu li a.active {
    background: rgba(255, 255, 255, 0.3);
    font-weight: bold;
}

/* (0,1,2,3) = 123 - Special class */
#main-nav ul.menu li a.special {
    background: #e74c3c;
}

/* ===========================================
   CARD COMPONENT SPECIFICITY
   =========================================== */

/* (0,0,1,0) = 10 - Base card */
.card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

/* (0,0,2,0) = 20 - Featured modifier */
.card.featured-card {
    border: 3px solid #f39c12;
}

/* (0,1,0,0) = 100 - ID specific */
#hero-card {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
}

/* (0,0,2,0) = 20 */
.card .card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
}

/* (0,1,2,0) = 120 - Override cho hero card */
/* (0,1,2,0) = 120 - Override for hero card */
#hero-card .card-header {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.card .card-body {
    /* (0,0,2,0) = 20 */
    padding: 20px;
}

/* ===========================================
   USING :where() for ZERO specificity
   Sử dụng :where() để specificity bằng 0
   =========================================== */

/* (0,0,0,1) = 1 - :where() không thêm specificity */
/* (0,0,0,1) = 1 - :where() doesn't add specificity */
div:where(.card, #hero-card) {
    /* Styles này dễ override / These styles are easy to override */
}

/* ===========================================
   !important EXAMPLES (AVOID WHEN POSSIBLE)
   =========================================== */

/* Trường hợp hợp lệ: Reset styles từ third-party */
/* Valid case: Reset styles from third-party */
.override-external {
    margin: 0 !important;
    padding: 0 !important;
}

/* ===========================================
   SPECIFICITY TIPS & NOTES
   
   1. Keep specificity as low as possible
   2. Use classes over IDs for styling
   3. Avoid deep nesting
   4. Use :where() to reduce specificity
   5. Reserve !important for exceptional cases
   6. Organize CSS by increasing specificity
   =========================================== */
```

## Specificity Calculator / Công cụ tính Specificity

| Selector | a | b | c | d | Total | Wins? |
|----------|---|---|---|---|-------|-------|
| `*` | 0 | 0 | 0 | 0 | 0 | - |
| `div` | 0 | 0 | 0 | 1 | 1 | - |
| `.class` | 0 | 0 | 1 | 0 | 10 | ✅ |
| `div.class` | 0 | 0 | 1 | 1 | 11 | ✅ |
| `#id` | 0 | 1 | 0 | 0 | 100 | ✅ |
| `#id .class` | 0 | 1 | 1 | 0 | 110 | ✅ |
| `inline style` | 1 | 0 | 0 | 0 | 1000 | ✅ |

## Tài liệu tham khảo / References

- [MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [W3C - Calculating Specificity](https://www.w3.org/TR/selectors-3/#specificity)
- [Specificity Calculator](https://specificity.keegan.st/)
- [CSS Tricks - Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
