# Welcome to Learn CSS! / Chào mừng đến với CSS!

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** Không có / None  
**➡️ Bài sau / Next:** [Box Model](./css-box-model.md)

---

## Mô tả / Description

Bài học này giới thiệu về CSS (Cascading Style Sheets) - ngôn ngữ được sử dụng để tạo kiểu và định dạng cho các trang web. Bạn sẽ tìm hiểu CSS là gì, tại sao nó quan trọng, cách CSS hoạt động với HTML, và các phương pháp khác nhau để thêm CSS vào trang web. Đây là nền tảng cần thiết để bắt đầu hành trình học CSS.

This lesson introduces CSS (Cascading Style Sheets) - the language used to style and format web pages. You will learn what CSS is, why it's important, how CSS works with HTML, and different methods to add CSS to web pages. This is the essential foundation to start your CSS learning journey.

## Khái niệm chính / Main Concepts

### What is CSS? / CSS là gì?

CSS (Cascading Style Sheets) là ngôn ngữ stylesheet được sử dụng để mô tả cách hiển thị của các phần tử HTML trên trang web. CSS kiểm soát màu sắc, font chữ, khoảng cách, layout và tất cả các khía cạnh trực quan của trang web.

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML elements on a web page. CSS controls colors, fonts, spacing, layout, and all visual aspects of the website.

```css
/* Ví dụ CSS cơ bản / Basic CSS example */
/* Thay đổi màu và font của đoạn văn / Change color and font of paragraph */
p {
    color: blue;
    font-size: 16px;
    font-family: Arial, sans-serif;
}
```

```html
<!-- HTML tương ứng / Corresponding HTML -->
<p>This paragraph will be styled with the CSS above.</p>
```

### CSS Syntax / Cú pháp CSS

Cú pháp CSS bao gồm selector (bộ chọn) và declaration block (khối khai báo). Selector chọn phần tử HTML cần style, còn declaration block chứa các thuộc tính và giá trị.

CSS syntax consists of a selector and a declaration block. The selector selects the HTML element to style, while the declaration block contains properties and values.

```css
/* Cấu trúc cơ bản / Basic structure */
selector {
    property: value;
    another-property: another-value;
}

/* Ví dụ thực tế / Practical example */
h1 {
    /* Màu văn bản / Text color */
    color: #333333;
    
    /* Kích thước font / Font size */
    font-size: 32px;
    
    /* Căn giữa văn bản / Center text */
    text-align: center;
}
```

### Ways to Add CSS / Cách thêm CSS

Có ba phương pháp chính để thêm CSS vào trang HTML: inline CSS, internal CSS, và external CSS. Mỗi phương pháp có ưu và nhược điểm riêng.

There are three main methods to add CSS to an HTML page: inline CSS, internal CSS, and external CSS. Each method has its own advantages and disadvantages.

```html
<!-- 1. Inline CSS - CSS nội tuyến -->
<!-- Thêm trực tiếp vào thuộc tính style / Added directly to style attribute -->
<p style="color: red; font-size: 18px;">Inline styled paragraph</p>

<!-- 2. Internal CSS - CSS nội bộ -->
<!-- Sử dụng thẻ <style> trong <head> / Using <style> tag in <head> -->
<!DOCTYPE html>
<html>
<head>
    <style>
        /* CSS được viết ở đây / CSS written here */
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>Internal styled paragraph</p>
</body>
</html>

<!-- 3. External CSS - CSS ngoại vi (KHUYẾN KHÍCH / RECOMMENDED) -->
<!-- Link đến file CSS riêng / Link to separate CSS file -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>External styled paragraph</p>
</body>
</html>
```

```css
/* File: styles.css */
/* CSS viết trong file riêng / CSS written in separate file */
p {
    color: purple;
    font-size: 18px;
}
```

### Separation of Concerns / Tách biệt mối quan tâm

Một trong những nguyên tắc quan trọng nhất của web development là tách biệt nội dung (HTML) khỏi giao diện (CSS). Điều này giúp code dễ bảo trì, tái sử dụng và mở rộng.

One of the most important principles of web development is separating content (HTML) from presentation (CSS). This makes code easier to maintain, reuse, and scale.

```html
<!-- Không tốt / Bad - Mixing HTML and CSS -->
<div style="background: blue; padding: 20px; margin: 10px;">
    <h2 style="color: white; font-size: 24px;">Title</h2>
    <p style="color: #eee; line-height: 1.6;">Content here</p>
</div>

<!-- Tốt / Good - Separated concerns -->
<div class="card">
    <h2 class="card-title">Title</h2>
    <p class="card-content">Content here</p>
</div>
```

```css
/* CSS trong file riêng / CSS in separate file */
.card {
    background: blue;
    padding: 20px;
    margin: 10px;
}

.card-title {
    color: white;
    font-size: 24px;
}

.card-content {
    color: #eee;
    line-height: 1.6;
}
```

### CSS Comments / Chú thích CSS

Comments trong CSS giúp giải thích code và làm cho nó dễ hiểu hơn. Comments không được trình duyệt hiển thị.

Comments in CSS help explain code and make it more understandable. Comments are not displayed by browsers.

```css
/* Đây là comment một dòng / This is a single-line comment */

/*
Đây là comment
nhiều dòng
trong CSS

This is a
multi-line comment
in CSS
*/

/* Header Styles - Styles cho phần header */
header {
    background: #333;
    color: white;
}

/* Navigation Menu - Menu điều hướng */
nav {
    display: flex;
    gap: 20px; /* Khoảng cách giữa items / Gap between items */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Separation of concerns**: Tách biệt nội dung và giao diện, làm cho code dễ bảo trì / Separates content from presentation, making code easier to maintain
- **Reusability**: Một file CSS có thể được sử dụng cho nhiều trang web / One CSS file can be used for multiple web pages
- **Consistency**: Đảm bảo giao diện nhất quán trên toàn bộ website / Ensures consistent appearance across the entire website
- **Efficiency**: Giảm thời gian tải trang nhờ caching CSS files / Reduces page load time through CSS file caching
- **Responsive design**: Cho phép tạo layouts thích ứng với mọi thiết bị / Allows creating layouts that adapt to any device
- **Accessibility**: Cải thiện khả năng tiếp cận cho người dùng khuyết tật / Improves accessibility for users with disabilities

### Ứng dụng thực tế / Real-world Applications
- **Website styling**: Tạo kiểu cho mọi loại website từ blog đến e-commerce / Style all types of websites from blogs to e-commerce
- **Responsive layouts**: Xây dựng layouts thích ứng với mobile, tablet, desktop / Build layouts that adapt to mobile, tablet, desktop
- **Brand identity**: Thiết lập màu sắc, font chữ theo thương hiệu / Establish brand colors and fonts
- **User interface**: Tạo buttons, forms, navigation menus đẹp mắt / Create beautiful buttons, forms, navigation menus
- **Animations**: Thêm hiệu ứng chuyển động và tương tác / Add motion effects and interactions
- **Print styles**: Tối ưu hóa trang web cho việc in ấn / Optimize web pages for printing

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng external CSS files cho dự án / Use external CSS files for projects
- ✅ **DO**: Đặt tên class rõ ràng và có ý nghĩa / Use clear and meaningful class names
- ✅ **DO**: Tổ chức CSS thành các sections logic / Organize CSS into logical sections
- ✅ **DO**: Sử dụng comments để giải thích code / Use comments to explain code
- ✅ **DO**: Validate CSS code với W3C Validator / Validate CSS code with W3C Validator
- ❌ **DON'T**: Không lạm dụng inline CSS / Don't overuse inline CSS
- ❌ **DON'T**: Không sử dụng quá nhiều !important / Don't use too many !important declarations
- ❌ **DON'T**: Không viết CSS quá phức tạp và khó đọc / Don't write overly complex and unreadable CSS

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header section / Phần header -->
    <header class="site-header">
        <h1>My First CSS Website</h1>
        <nav class="main-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <!-- Main content / Nội dung chính -->
    <main class="container">
        <article class="card">
            <h2>Welcome to CSS!</h2>
            <p>This is a simple example of HTML styled with CSS.</p>
        </article>
    </main>
    
    <!-- Footer / Chân trang -->
    <footer class="site-footer">
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>
```

```css
/* File: styles.css */

/* Reset mặc định / Default reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styles / Styles cho body */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header / Phần đầu trang */
.site-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    text-align: center;
}

.site-header h1 {
    margin-bottom: 15px;
    font-size: 2.5rem;
}

/* Navigation / Điều hướng */
.main-nav {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.main-nav a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.main-nav a:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* Container / Khung chứa */
.container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
}

/* Card / Thẻ nội dung */
.card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
    color: #667eea;
    margin-bottom: 15px;
}

.card p {
    font-size: 1.1rem;
    line-height: 1.8;
}

/* Footer / Chân trang */
.site-footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}
```

## Tài liệu tham khảo / References

- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Specifications](https://www.w3.org/Style/CSS/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use - Browser Support Tables](https://caniuse.com/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
