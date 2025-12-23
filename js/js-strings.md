# Strings / Chuỗi trong JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Numbers](./js-numbers.md)  
**➡️ Bài sau / Next:** [Booleans](./js-booleans.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng kiểu dữ liệu chuỗi của JavaScript. String là kiểu dữ liệu để lưu trữ văn bản. Bạn sẽ học về cách tạo string, các phương thức string phổ biến, template literals, và string manipulation.

This lesson explores how to use JavaScript's string data type. Strings are the data type for storing text. You will learn about creating strings, common string methods, template literals, and string manipulation.

## Khái niệm chính / Main Concepts

### Creating Strings / Tạo chuỗi

```javascript
// Single quotes / Dấu nháy đơn
let name = 'John';

// Double quotes / Dấu nháy kép
let greeting = "Hello";

// Template literals (backticks) / Template literals (dấu backtick)
let message = `Welcome, ${name}!`;

// Multi-line string / Chuỗi nhiều dòng
let poem = `Roses are red
Violets are blue
JavaScript is awesome
And so are you`;
```

### String Properties and Methods / Thuộc tính và Phương thức

```javascript
let text = "Hello World";

// Độ dài / Length
console.log(text.length); // 11

// Chuyển đổi case / Case conversion
console.log(text.toUpperCase());  // "HELLO WORLD"
console.log(text.toLowerCase());  // "hello world"

// Tìm kiếm / Searching
console.log(text.indexOf('World'));    // 6
console.log(text.includes('Hello'));   // true
console.log(text.startsWith('Hello')); // true
console.log(text.endsWith('World'));   // true
```

### String Manipulation / Xử lý chuỗi

```javascript
let str = "JavaScript Programming";

// Cắt chuỗi / Slicing
console.log(str.slice(0, 10));     // "JavaScript"
console.log(str.substring(0, 10)); // "JavaScript"

// Thay thế / Replace
console.log(str.replace('JavaScript', 'JS')); // "JS Programming"
console.log(str.replaceAll('a', 'A'));        // "JAvAScript Programming"

// Tách chuỗi / Split
let words = str.split(' ');  // ["JavaScript", "Programming"]

// Trim spaces / Loại bỏ khoảng trắng
let messy = "  hello  ";
console.log(messy.trim());   // "hello"
```

### Template Literals / Template Literals

```javascript
let firstName = 'John';
let lastName = 'Doe';
let age = 30;

// String interpolation / Nội suy chuỗi
let intro = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

// Expressions / Biểu thức
let price = 100;
let tax = 0.1;
console.log(`Total: $${price * (1 + tax)}`); // "Total: $110"

// Multi-line / Nhiều dòng
let html = `
  <div>
    <h1>${firstName}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Text manipulation**: Xử lý và format văn bản dễ dàng / Easy text processing and formatting
- **Template literals**: Syntax hiện đại, dễ đọc / Modern, readable syntax
- **Immutable**: String không thay đổi, an toàn / Strings are immutable, safe

### Ứng dụng thực tế / Real-world Applications

- **User interfaces**: Hiển thị text, messages / Display text, messages
- **Data validation**: Kiểm tra email, phone / Validate email, phone
- **Text processing**: Parse và manipulate data / Parse and manipulate data
- **Templates**: Tạo HTML, email templates / Create HTML, email templates

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng template literals cho string interpolation / Use template literals for string interpolation
- ✅ **DO**: Use const cho strings không thay đổi / Use const for unchanging strings
- ❌ **DON'T**: Không dùng `==` để so sánh strings / Don't use `==` to compare strings

## Tài liệu tham khảo / References

- [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
