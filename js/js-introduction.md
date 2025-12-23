# Introduction to JavaScript / Giới thiệu về JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** Không có / None  
**➡️ Bài sau / Next:** [Data Types and Structures](./js-data-types.md)

---

## Mô tả / Description

Bài học này cung cấp lịch sử sơ lược về JavaScript và tổng quan về các quy tắc cơ bản của nó. Bạn sẽ hiểu JavaScript là gì, tại sao nó quan trọng trong phát triển web hiện đại, và các nguyên tắc cơ bản để bắt đầu lập trình. Đây là điểm khởi đầu quan trọng cho hành trình học JavaScript của bạn.

This lesson provides a brief history of JavaScript and an overview of its basic rules. You will understand what JavaScript is, why it's important in modern web development, and the fundamental principles to start programming. This is an important starting point for your JavaScript learning journey.

## Khái niệm chính / Main Concepts

### What is JavaScript? / JavaScript là gì?

JavaScript là ngôn ngữ lập trình động, được sử dụng chủ yếu để tạo trang web tương tác. Nó chạy trên trình duyệt (client-side) và cả server (Node.js), là một trong ba công nghệ cốt lõi của web cùng với HTML và CSS.

JavaScript is a dynamic programming language primarily used to create interactive web pages. It runs in browsers (client-side) and also on servers (Node.js), and is one of the three core web technologies along with HTML and CSS.

```javascript
// Ví dụ JavaScript đơn giản / Simple JavaScript example
console.log('Hello, World!'); // In ra console / Print to console

// Thay đổi nội dung HTML / Change HTML content
document.getElementById('demo').innerHTML = 'Hello JavaScript!';
```

### Brief History / Lịch sử ngắn gọn

JavaScript được tạo ra bởi Brendan Eich năm 1995 tại Netscape chỉ trong 10 ngày. Ban đầu có tên Mocha, sau đó LiveScript, cuối cùng là JavaScript. Ngày nay, JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất thế giới.

JavaScript was created by Brendan Eich in 1995 at Netscape in just 10 days. Initially named Mocha, then LiveScript, and finally JavaScript. Today, JavaScript is one of the most popular programming languages in the world.

```javascript
// ECMAScript là tiêu chuẩn của JavaScript
// ECMAScript is the standard for JavaScript

// ES5 (2009)
var oldWay = 'old syntax';

// ES6+ (2015+) - Modern JavaScript
const modernWay = 'modern syntax';
let variableWay = 'can change';
```

### JavaScript Execution Environment / Môi trường thực thi

JavaScript có thể chạy trong nhiều môi trường khác nhau: trình duyệt web, Node.js server, mobile apps, và thậm chí desktop applications.

JavaScript can run in various environments: web browsers, Node.js servers, mobile apps, and even desktop applications.

```javascript
// Trong trình duyệt / In browser
window.alert('Browser JavaScript');

// Trong Node.js / In Node.js
// console.log('Server JavaScript');

// Kiểm tra môi trường / Check environment
if (typeof window !== 'undefined') {
    console.log('Running in browser / Đang chạy trong trình duyệt');
} else {
    console.log('Running in Node.js / Đang chạy trong Node.js');
}
```

### Basic Syntax Rules / Quy tắc cú pháp cơ bản

JavaScript có một số quy tắc cú pháp cơ bản mà bạn cần biết: case-sensitive, semicolons, comments, và code blocks.

JavaScript has some basic syntax rules you need to know: case-sensitive, semicolons, comments, and code blocks.

```javascript
// JavaScript phân biệt chữ hoa/thường / JavaScript is case-sensitive
let myVariable = 'Hello';
let MyVariable = 'World'; // Biến khác / Different variable

// Semicolons (tùy chọn nhưng khuyến nghị) / Semicolons (optional but recommended)
let name = 'John';
let age = 25;

// Comments / Chú thích
// Đây là comment một dòng / This is a single-line comment

/* 
   Đây là comment nhiều dòng
   This is a multi-line comment
*/

// Code blocks với dấu ngoặc nhọn / Code blocks with curly braces
if (age >= 18) {
    console.log('Adult / Người lớn');
}
```

### Variables and Constants / Biến và Hằng số

JavaScript sử dụng `var`, `let`, và `const` để khai báo biến. Modern JavaScript khuyên dùng `let` và `const` thay vì `var`.

JavaScript uses `var`, `let`, and `const` to declare variables. Modern JavaScript recommends using `let` and `const` instead of `var`.

```javascript
// const - Không thể gán lại / Cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error!

// let - Có thể gán lại / Can be reassigned  
let count = 0;
count = 1; // OK

// var - Cách cũ, tránh sử dụng / Old way, avoid using
var oldStyle = 'avoid this';
```

### First JavaScript Program / Chương trình JavaScript đầu tiên

Cách đơn giản nhất để chạy JavaScript là sử dụng console của trình duyệt hoặc tạo file HTML với thẻ `<script>`.

The simplest way to run JavaScript is using the browser console or creating an HTML file with a `<script>` tag.

```javascript
// File: index.html
/*
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1 id="heading">Hello</h1>
    
    <script>
        // Thay đổi nội dung / Change content
        document.getElementById('heading').textContent = 'Hello JavaScript!';
        
        // In ra console / Print to console
        console.log('JavaScript is running! / JavaScript đang chạy!');
        
        // Tạo biến / Create variable
        let greeting = 'Welcome to JavaScript!';
        alert(greeting);
    </script>
</body>
</html>
*/
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Versatile**: Chạy được cả client và server-side / Runs both client and server-side
- **Easy to learn**: Cú pháp đơn giản, dễ tiếp cận cho beginners / Simple syntax, accessible for beginners
- **Large ecosystem**: Hàng triệu thư viện và frameworks / Millions of libraries and frameworks
- **High demand**: Kỹ năng được săn đón trong thị trường việc làm / Highly sought-after skill in job market
- **Interactive**: Tạo trang web động và tương tác / Create dynamic and interactive web pages
- **Cross-platform**: Viết một lần, chạy nhiều nơi / Write once, run anywhere

### Ứng dụng thực tế / Real-world Applications

- **Web Development**: Frontend (React, Vue, Angular) và Backend (Node.js) / Frontend (React, Vue, Angular) and Backend (Node.js)
- **Mobile Apps**: React Native, Ionic để tạo mobile apps / React Native, Ionic for mobile apps
- **Desktop Apps**: Electron cho ứng dụng desktop (VS Code, Slack) / Electron for desktop apps (VS Code, Slack)
- **Game Development**: Phaser, Three.js cho game trình duyệt / Phaser, Three.js for browser games
- **IoT**: Lập trình thiết bị IoT với Johnny-Five / IoT device programming with Johnny-Five
- **Machine Learning**: TensorFlow.js cho ML trong trình duyệt / TensorFlow.js for ML in browser

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `const` và `let` thay vì `var` / Use `const` and `let` instead of `var`
- ✅ **DO**: Viết code rõ ràng, dễ đọc / Write clear, readable code
- ✅ **DO**: Sử dụng semicolons / Use semicolons
- ✅ **DO**: Follow naming conventions (camelCase cho biến) / Follow naming conventions (camelCase for variables)
- ✅ **DO**: Comment code khi cần thiết / Comment code when necessary
- ❌ **DON'T**: Không dùng biến global không cần thiết / Don't use unnecessary global variables
- ❌ **DON'T**: Không bỏ qua error handling / Don't skip error handling
- ❌ **DON'T**: Không viết code quá phức tạp / Don't write overly complex code

## Tài liệu tham khảo / References

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [Eloquent JavaScript (Free book)](https://eloquentjavascript.net/)
