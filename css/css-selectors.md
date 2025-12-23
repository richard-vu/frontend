# Selectors / Bộ chọn CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Box Model](./css-box-model.md)  
**➡️ Bài sau / Next:** [Nesting](./css-nesting.md)

---

## Mô tả / Description

Bài học này khám phá các phương pháp khác nhau để chọn các phần tử HTML và áp dụng CSS cho chúng. Bạn sẽ học về element selectors, class selectors, ID selectors, attribute selectors, và các combinators để chọn elements based on relationships. Selectors là một trong những khái niệm quan trọng nhất trong CSS, cho phép bạn target chính xác các phần tử cần style.

This lesson explores different methods to select HTML elements and apply CSS to them. You will learn about element selectors, class selectors, ID selectors, attribute selectors, and combinators to select elements based on relationships. Selectors are one of the most important concepts in CSS, allowing you to precisely target elements that need styling.

## Khái niệm chính / Main Concepts

### Element Selectors / Bộ chọn phần tử

Element selectors chọn tất cả các phần tử HTML cùng loại. Đây là loại selector đơn giản nhất và được sử dụng khi muốn style tất cả instances của một element.

Element selectors select all HTML elements of the same type. This is the simplest type of selector and is used when you want to style all instances of an element.

```css
/* Chọn tất cả paragraphs / Select all paragraphs */
p {
    color: #333;
    line-height: 1.6;
}

/* Chọn tất cả headings level 1 / Select all h1 headings */
h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
}

/* Chọn tất cả links / Select all links */
a {
    color: #3498db;
    text-decoration: none;
}

/* Chọn tất cả images / Select all images */
img {
    max-width: 100%;
    height: auto;
}
```

```html
<h1>This heading will be styled</h1>
<p>This paragraph will be styled</p>
<a href="#">This link will be styled</a>
```

### Class Selectors / Bộ chọn Class

Class selectors chọn elements dựa trên giá trị của thuộc tính `class`. Một element có thể có nhiều classes, và một class có thể được sử dụng cho nhiều elements.

Class selectors select elements based on the value of the `class` attribute. An element can have multiple classes, and a class can be used for multiple elements.

```css
/* Class selector bắt đầu với dấu chấm / Class selector starts with dot */
.button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.primary {
    background-color: #3498db;
    color: white;
}

.secondary {
    background-color: #95a5a6;
    color: white;
}

/* Kết hợp nhiều classes / Combining multiple classes */
.button.primary {
    /* Chỉ áp dụng cho elements có CẢ HAI classes */
    /* Only applies to elements with BOTH classes */
    border: 2px solid #2980b9;
}

/* Class cho containers / Class for containers */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

```html
<!-- Element với một class / Element with one class -->
<button class="button primary">Primary Button</button>

<!-- Element với nhiều classes / Element with multiple classes -->
<button class="button secondary">Secondary Button</button>

<div class="container">
    <div class="card">Card content</div>
</div>
```

> [!TIP]
> **Best Practice**: Sử dụng classes cho styling, tránh dùng IDs cho CSS.
> 
> **Best Practice**: Use classes for styling, avoid using IDs for CSS.

### ID Selectors / Bộ chọn ID

ID selectors chọn element dựa trên giá trị của thuộc tính `id`. Mỗi ID phải là duy nhất trong một trang HTML.

ID selectors select an element based on the value of the `id` attribute. Each ID must be unique within an HTML page.

```css
/* ID selector bắt đầu với dấu # / ID selector starts with # */
#header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
}

#main-content {
    min-height: 500px;
    padding: 40px 20px;
}

#footer {
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 20px;
}

/* ID có specificity cao hơn class / ID has higher specificity than class */
#special-button {
    background-color: red; /* Sẽ override class styles / Will override class styles */
}
```

```html
<header id="header">
    <h1>Website Title</h1>
</header>

<main id="main-content">
    <p>Main content here</p>
</main>

<footer id="footer">
    <p>&copy; 2025</p>
</footer>
```

> [!WARNING]
> **Lưu ý**: IDs có specificity rất cao và khó override. Nên ưu tiên dùng classes.
> 
> **Note**: IDs have very high specificity and are hard to override. Prefer using classes.

### Attribute Selectors / Bộ chọn thuộc tính

Attribute selectors chọn elements dựa trên sự hiện diện hoặc giá trị của thuộc tính HTML.

Attribute selectors select elements based on the presence or value of HTML attributes.

```css
/* Chọn elements có attribute / Select elements with attribute */
[type] {
    /* Tất cả elements có attribute type */
    /* All elements with type attribute */
}

/* Chọn theo giá trị chính xác / Select by exact value */
[type="text"] {
    border: 1px solid #ccc;
    padding: 8px;
}

[type="submit"] {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
}

/* Chọn theo giá trị bắt đầu bằng / Select by value starting with */
[href^="https"] {
    /* Links bắt đầu bằng https */
    /* Links starting with https */
    color: green;
}

/* Chọn theo giá trị kết thúc bằng / Select by value ending with */
[href$=".pdf"] {
    /* Links đến PDF files */
    /* Links to PDF files */
    background: url('pdf-icon.png') no-repeat left;
    padding-left: 20px;
}

/* Chọn theo giá trị chứa / Select by value containing */
[class*="btn"] {
    /* Classes chứa "btn" / Classes containing "btn" */
    cursor: pointer;
}

/* Chọn theo giá trị trong danh sách / Select by value in space-separated list */
[class~="active"] {
    font-weight: bold;
}
```

```html
<input type="text" placeholder="Name">
<input type="email" placeholder="Email">
<input type="submit" value="Submit">

<a href="https://example.com">Secure Link</a>
<a href="document.pdf">Download PDF</a>

<button class="btn-primary">Button</button>
<button class="btn-secondary active">Active Button</button>
```

### Combinator Selectors / Bộ chọn kết hợp

Combinators cho phép bạn chọn elements based on relationships giữa chúng trong HTML structure.

Combinators allow you to select elements based on relationships between them in the HTML structure.

```css
/* Descendant Combinator (khoảng trắng) - Con cháu */
/* Descendant Combinator (space) - Descendants */
.container p {
    /* Tất cả <p> bên trong .container, bất kỳ cấp độ nào */
    /* All <p> inside .container, at any level */
    color: #555;
}

/* Child Combinator (>) - Con trực tiếp */
/* Child Combinator (>) - Direct children */
.menu > li {
    /* Chỉ <li> là con TRỰC TIẾP của .menu */
    /* Only <li> that are DIRECT children of .menu */
    display: inline-block;
}

/* Adjacent Sibling Combinator (+) - Anh em liền kề */
/* Adjacent Sibling Combinator (+) - Adjacent siblings */
h2 + p {
    /* <p> ngay SAU <h2> (cùng cấp) */
    /* <p> immediately AFTER <h2> (same level) */
    font-weight: bold;
    margin-top: 0;
}

/* General Sibling Combinator (~) - Anh em chung */
/* General Sibling Combinator (~) - General siblings */
h2 ~ p {
    /* Tất cả <p> sau <h2> (cùng cấp) */
    /* All <p> after <h2> (same level) */
    color: #666;
}
```

```html
<div class="container">
    <p>This paragraph is styled (descendant)</p>
    <div>
        <p>This paragraph is also styled (any level)</p>
    </div>
</div>

<ul class="menu">
    <li>Direct child - styled</li>
    <li>
        Direct child - styled
        <ul>
            <li>Not direct child - not styled</li>
        </ul>
    </li>
</ul>

<article>
    <h2>Heading</h2>
    <p>First paragraph after h2 - bold (adjacent sibling)</p>
    <p>Second paragraph after h2 - colored (general sibling)</p>
</article>
```

### Universal Selector / Bộ chọn toàn cục

Universal selector (`*`) chọn tất cả các elements trong document.

Universal selector (`*`) selects all elements in the document.

```css
/* Chọn tất cả elements / Select all elements */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Kết hợp với descendant combinator / Combined with descendant combinator */
.container * {
    /* Tất cả elements bên trong .container */
    /* All elements inside .container */
    border: none;
}

/* Pseudo-elements */
*::before,
*::after {
    box-sizing: border-box;
}
```

### Grouping Selectors / Nhóm bộ chọn

Grouping cho phép áp dụng cùng styles cho nhiều selectors khác nhau.

Grouping allows applying the same styles to multiple different selectors.

```css
/* Nhóm nhiều selectors với dấu phẩy / Group multiple selectors with comma */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    font-weight: bold;
    color: #2c3e50;
}

.button,
.btn,
input[type="submit"] {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

/* Dễ đọc khi mỗi selector trên một dòng */
/* More readable when each selector on its own line */
header,
footer,
aside {
    background-color: #f8f9fa;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Precise targeting**: Chọn chính xác elements cần style / Precisely target elements that need styling
- **Code organization**: Tổ chức CSS logic và có cấu trúc / Organize CSS logically and structurally
- **Reusability**: Tái sử dụng classes cho nhiều elements / Reuse classes for multiple elements
- **Maintainability**: Dễ bảo trì và update styles / Easy to maintain and update styles
- **Performance**: Hiệu quả khi chọn elements / Efficient when selecting elements
- **Flexibility**: Linh hoạt trong việc target elements / Flexible in targeting elements

### Ứng dụng thực tế / Real-world Applications
- **Component styling**: Style components như buttons, cards, forms / Style components like buttons, cards, forms
- **Layout sections**: Target specific sections của page / Target specific sections of page
- **State management**: Style các states khác nhau (active, disabled) / Style different states (active, disabled)
- **Responsive design**: Áp dụng styles cho breakpoints / Apply styles for breakpoints
- **Theme systems**: Tạo theme systems với classes / Create theme systems with classes
- **Navigation menus**: Style complex navigation structures / Style complex navigation structures

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Ưu tiên sử dụng classes cho styling / Prefer using classes for styling
- ✅ **DO**: Đặt tên classes theo chức năng, không theo giao diện / Name classes by function, not appearance
- ✅ **DO**: Giữ selectors đơn giản và dễ hiểu / Keep selectors simple and understandable
- ✅ **DO**: Sử dụng naming conventions như BEM / Use naming conventions like BEM
- ✅ **DO**: Group related selectors together / Group related selectors together
- ❌ **DON'T**: Không lạm dụng IDs cho styling / Don't overuse IDs for styling
- ❌ **DON'T**: Không tạo selectors quá cụ thể (overly specific) / Don't create overly specific selectors
- ❌ **DON'T**: Không dùng quá nhiều descendant selectors / Don't use too many descendant selectors

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Demo</title>
    <link rel="stylesheet" href="selectors.css">
</head>
<body>
    <!-- Header với ID / Header with ID -->
    <header id="main-header" class="header">
        <div class="container">
            <h1>CSS Selectors Guide</h1>
            <nav class="main-nav">
                <ul class="menu">
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="contact.pdf">Contact (PDF)</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main content / Nội dung chính -->
    <main class="container">
        <article class="content">
            <h2>Understanding Selectors</h2>
            <p>First paragraph right after heading.</p>
            <p>Second paragraph with more content.</p>
            
            <div class="card card-primary">
                <h3>Element Selectors</h3>
                <p>Content about element selectors.</p>
            </div>
            
            <div class="card card-secondary">
                <h3>Class Selectors</h3>
                <p>Content about class selectors.</p>
            </div>
        </article>
        
        <!-- Form example / Ví dụ form -->
        <aside class="sidebar">
            <form class="contact-form">
                <h3>Contact Form</h3>
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Send Message">
            </form>
        </aside>
    </main>

    <!-- Footer -->
    <footer id="main-footer" class="footer">
        <p>&copy; 2025 CSS Selectors Demo</p>
    </footer>
</body>
</html>
```

```css
/* File: selectors.css */

/* Universal selector - Reset / Bộ chọn toàn cục - Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Element selectors / Bộ chọn phần tử */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

h1, h2, h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #2980b9;
}

/* ID selectors / Bộ chọn ID */
#main-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px 0;
}

#main-footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

/* Class selectors / Bộ chọn class */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header h1 {
    margin: 0;
}

/* Descendant combinator - Navigation / Kết hợp con cháu */
.main-nav ul {
    list-style: none;
}

/* Child combinator - Direct children only / Kết hợp con trực tiếp */
.menu > li {
    display: inline-block;
    margin-right: 20px;
}

.menu > li > a {
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    display: block;
}

/* Class combination / Kết hợp classes */
.menu > li > a.active {
    background: rgba(255, 255, 255, 0.2);
    font-weight: bold;
}

/* Attribute selectors / Bộ chọn thuộc tính */
[type="text"],
[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

[type="submit"] {
    background: #3498db;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

[type="submit"]:hover {
    background: #2980b9;
}

/* Attribute selector - Links ending with .pdf */
[href$=".pdf"]::after {
    content: " 📄";
}

/* Adjacent sibling combinator / Kết hợp anh em liền kề */
h2 + p {
    font-weight: 600;
    color: #555;
}

/* General sibling combinator / Kết hợp anh em chung */
h2 ~ p {
    margin-bottom: 15px;
}

/* Cards */
.card {
    background: white;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-primary {
    border-left: 4px solid #3498db;
}

.card-secondary {
    border-left: 4px solid #9b59b6;
}

/* Sidebar form */
.sidebar {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin-top: 30px;
}

.contact-form h3 {
    margin-bottom: 20px;
    color: #2c3e50;
}

/* Responsive */
@media (max-width: 768px) {
    .menu > li {
        display: block;
        margin: 10px 0;
    }
}
```

## Tài liệu tham khảo / References

- [MDN - CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS-Tricks - CSS Selectors Reference](https://css-tricks.com/almanac/selectors/)
- [W3C - Selectors Level 4](https://www.w3.org/TR/selectors-4/)
- [CSS Diner - Interactive Selector Game](https://flukeout.github.io/)
