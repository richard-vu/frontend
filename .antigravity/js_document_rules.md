# JavaScript Document Rules / Quy tắc tài liệu JavaScript

## Mục đích / Purpose
Tài liệu này định nghĩa cấu trúc và quy tắc cho các bài học JavaScript. Mỗi bài học phải tuân theo format chuẩn để đảm bảo tính nhất quán và dễ theo dõi.

This document defines the structure and rules for JavaScript lesson documents. Each lesson must follow the standard format to ensure consistency and readability.

---

## Cấu trúc File / File Structure

### Quy tắc đặt tên / Naming Convention
- Mỗi bài học là một file riêng biệt / Each lesson is a separate file
- Format: `js-[topic-name].md`
- Ví dụ / Examples:
  - `js-variables.md`
  - `js-functions.md`
  - `js-async-await.md`

### Vị trí / Location
- Tất cả các file bài học nằm trong thư mục `javascript/`
- All lesson files are located in the `javascript/` directory

---

## Template Bài học / Lesson Template

Mỗi file bài học **BẮT BUỘC** phải bao gồm các phần sau theo thứ tự:

Each lesson file **MUST** include the following sections in order:

### 0. Metadata (Phần đầu file) / Metadata (Top of file)

**BẮT BUỘC** - Mỗi file phải bắt đầu với metadata section ngay sau tiêu đề chính:

**REQUIRED** - Each file must start with a metadata section right after the main title:

```markdown
# [Tên bài học]

---

**📅 Ngày tạo / Created:** YYYY-MM-DD  
**📅 Ngày cập nhật / Last Updated:** YYYY-MM-DD

**⬅️ Bài trước / Previous:** [Tên bài trước](./js-previous-topic.md)  
**➡️ Bài sau / Next:** [Tên bài sau](./js-next-topic.md)

---
```

**Quy tắc / Rules:**
- **Ngày tạo (Created)**: Ngày tạo file lần đầu, format `YYYY-MM-DD` / Date when file was first created, format `YYYY-MM-DD`
- **Ngày cập nhật (Last Updated)**: Ngày sửa đổi gần nhất, format `YYYY-MM-DD` / Date of most recent modification, format `YYYY-MM-DD`
- **Bài trước (Previous)**: Link tới bài học trước đó trong chuỗi / Link to previous lesson in the sequence
  - Nếu là bài đầu tiên, ghi: `Không có / None` / If first lesson, write: `Không có / None`
- **Bài sau (Next)**: Link tới bài học tiếp theo trong chuỗi / Link to next lesson in the sequence
  - Nếu là bài cuối cùng, ghi: `Không có / None` / If last lesson, write: `Không có / None`
- Sử dụng emoji để dễ nhận diện: 📅 cho ngày, ⬅️ cho bài trước, ➡️ cho bài sau / Use emoji for easy recognition: 📅 for dates, ⬅️ for previous, ➡️ for next
- Phân cách metadata với phần Mô tả bằng dòng `---` / Separate metadata from Description with `---` line

**Ví dụ / Example:**
```markdown
# Variables and Data Types / Biến và Kiểu dữ liệu

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [JavaScript Basics](./js-basics.md)  
**➡️ Bài sau / Next:** [Operators](./js-operators.md)

---
```

**Ví dụ cho bài đầu tiên / Example for first lesson:**
```markdown
# Introduction to JavaScript / Giới thiệu JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-20  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** Không có / None  
**➡️ Bài sau / Next:** [Variables and Data Types](./js-variables.md)

---
```

**Ví dụ cho bài cuối cùng / Example for last lesson:**
```markdown
# Advanced JavaScript Topics / Chủ đề nâng cao JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-22  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Design Patterns](./js-design-patterns.md)  
**➡️ Bài sau / Next:** Không có / None

---
```

---

### 1. Tên bài học / Lesson Title
```markdown
# [Tên bài học]
```

**Quy tắc / Rules:**
- Sử dụng heading level 1 (`#`) / Use heading level 1 (`#`)
- Tên rõ ràng, súc tích / Clear and concise title
- **BẮT BUỘC** song ngữ Anh-Việt / **MANDATORY** bilingual English-Vietnamese

**Ví dụ / Example:**
```markdown
# Variables and Data Types / Biến và Kiểu dữ liệu
```

---

### 2. Mô tả nội dung / Content Description
```markdown
## Mô tả / Description

[Mô tả chi tiết về nội dung bài học bằng tiếng Việt]

[Detailed description of the lesson content in English]
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) / Use heading level 2 (`##`)
- Mô tả ngắn gọn (2-4 câu) về nội dung bài học / Brief description (2-4 sentences) about the lesson content
- Giải thích tại sao bài học này quan trọng / Explain why this lesson is important
- **BẮT BUỘC** hai đoạn riêng biệt: tiếng Việt trước, tiếng Anh sau / **MANDATORY** two separate paragraphs: Vietnamese first, English second

**Ví dụ / Example:**
```markdown
## Mô tả / Description

Bài học này giới thiệu về biến và các kiểu dữ liệu trong JavaScript. Bạn sẽ học cách khai báo biến với var, let, và const, cũng như hiểu về các kiểu dữ liệu nguyên thủy và tham chiếu. Hiểu rõ về biến và kiểu dữ liệu là nền tảng quan trọng để viết code JavaScript hiệu quả.

This lesson introduces variables and data types in JavaScript. You will learn how to declare variables with var, let, and const, as well as understand primitive and reference data types. Understanding variables and data types is an important foundation for writing effective JavaScript code.
```

---

### 3. Khái niệm chính / Main Concepts
```markdown
## Khái niệm chính / Main Concepts

### [Khái niệm 1]
[Giải thích bằng tiếng Việt]

[Explanation in English]

​```javascript
// Code example với comments song ngữ / Code example with bilingual comments
const example = 'value';
​```

### [Khái niệm 2]
[Giải thích bằng tiếng Việt]

[Explanation in English]

​```javascript
// Code example
​```
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) cho phần chính / Use heading level 2 (`##`) for main section
- Sử dụng heading level 3 (`###`) cho mỗi khái niệm / Use heading level 3 (`###`) for each concept
- Liệt kê 3-7 khái niệm quan trọng nhất / List 3-7 most important concepts
- Mỗi khái niệm phải có:
  - Định nghĩa rõ ràng bằng **hai đoạn riêng biệt** (Việt, Anh) / Clear definition in **two separate paragraphs** (Vietnamese, English)
  - Ví dụ code JavaScript / JavaScript code example
  - Comments trong code phải song ngữ / Comments in code must be bilingual
  - Giải thích cách sử dụng / Usage explanation

**Ví dụ / Example:**
```markdown
## Khái niệm chính / Main Concepts

### Variable Declaration with let / Khai báo biến với let

`let` cho phép khai báo biến có block scope. Biến được khai báo với `let` có thể được gán lại giá trị nhưng không thể khai báo lại trong cùng scope.

`let` allows declaring variables with block scope. Variables declared with `let` can be reassigned but cannot be redeclared in the same scope.

​```javascript
// Khai báo biến / Variable declaration
let count = 0;

// Gán lại giá trị / Reassignment
count = 10; // OK

// Block scope
if (true) {
    let message = 'Hello'; // Chỉ tồn tại trong block / Only exists in block
    console.log(message);
}
// console.log(message); // Error: message is not defined
​```

### Primitive Data Types / Kiểu dữ liệu nguyên thủy

JavaScript có 7 kiểu dữ liệu nguyên thủy: string, number, bigint, boolean, undefined, null, và symbol.

JavaScript has 7 primitive data types: string, number, bigint, boolean, undefined, null, and symbol.

​```javascript
// String / Chuỗi
let name = 'John';

// Number / Số
let age = 25;
let price = 19.99;

// Boolean
let isActive = true;

// Undefined / Chưa định nghĩa
let data;

// Null / Rỗng
let result = null;

// Symbol (ES6+)
let id = Symbol('unique');

// BigInt (ES2020+) - Số nguyên lớn
let bigNumber = 9007199254740991n;
​```
```

---

### 4. Lợi ích/Ứng dụng / Benefits/Applications
```markdown
## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **[Lợi ích 1]**: Giải thích tiếng Việt / English explanation
- **[Lợi ích 2]**: Giải thích tiếng Việt / English explanation
- **[Lợi ích 3]**: Giải thích tiếng Việt / English explanation

### Ứng dụng thực tế / Real-world Applications
- **[Ứng dụng 1]**: Mô tả tiếng Việt / English description
- **[Ứng dụng 2]**: Mô tả tiếng Việt / English description
- **[Ứng dụng 3]**: Mô tả tiếng Việt / English description
```

**Quy tắc / Rules:**
- Sử dụng heading level 2 (`##`) cho phần chính / Use heading level 2 (`##`) for main section
- Chia thành 2 phần con: Lợi ích và Ứng dụng / Divide into 2 subsections: Benefits and Applications
- Sử dụng bullet points / Use bullet points
- Liệt kê ít nhất 3 lợi ích / List at least 3 benefits
- Liệt kê ít nhất 3 ứng dụng thực tế / List at least 3 real-world applications
- **BẮT BUỘC** mỗi bullet point có cả hai ngôn ngữ / **MANDATORY** each bullet point has both languages

**Ví dụ / Example:**
```markdown
## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Block scope**: Tránh pollution của global scope và xung đột tên biến / Avoids global scope pollution and variable name conflicts
- **Hoisting tốt hơn**: let và const không hoisted như var, tránh lỗi / let and const are not hoisted like var, avoiding errors
- **Immutability với const**: Bảo vệ dữ liệu không bị thay đổi vô tình / Protects data from accidental changes with const
- **Type safety**: Hiểu kiểu dữ liệu giúp tránh bugs / Understanding data types helps avoid bugs
- **Memory efficiency**: Sử dụng đúng kiểu dữ liệu tối ưu bộ nhớ / Using correct data types optimizes memory

### Ứng dụng thực tế / Real-world Applications
- **Form validation**: Kiểm tra và lưu trữ dữ liệu người dùng / Validate and store user data
- **State management**: Quản lý trạng thái ứng dụng trong React, Vue / Manage application state in React, Vue
- **API responses**: Xử lý dữ liệu từ server / Process data from server
- **Calculations**: Tính toán số học, tài chính / Mathematical and financial calculations
- **Configuration**: Lưu trữ cấu hình ứng dụng / Store application configuration
```

---

## Các phần bổ sung (Tùy chọn) / Additional Sections (Optional)

### Ví dụ hoàn chỉnh / Complete Example
```markdown
## Ví dụ hoàn chỉnh / Complete Example

​```javascript
// Code example hoàn chỉnh với comments song ngữ
// Complete code example with bilingual comments
​```
```

### Best Practices / Thực hành tốt nhất
```markdown
## Best Practices / Thực hành tốt nhất

- ✅ **DO**: [Nên làm] / [Should do]
- ✅ **DO**: [Nên làm] / [Should do]
- ❌ **DON'T**: [Không nên làm] / [Should not do]
- ❌ **DON'T**: [Không nên làm] / [Should not do]
```

### Common Mistakes / Lỗi thường gặp
```markdown
## Common Mistakes / Lỗi thường gặp

### Lỗi 1: [Tên lỗi]
**Mô tả**: [Mô tả lỗi bằng tiếng Việt] / [Error description in English]
**Giải pháp**: [Cách sửa bằng tiếng Việt] / [Solution in English]

​```javascript
// Code example showing the mistake and fix
​```
```

### Tài liệu tham khảo / References
```markdown
## Tài liệu tham khảo / References

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)
```

---

## Quy tắc Format / Formatting Rules

### Code Blocks
- Sử dụng syntax highlighting với `javascript` / Use syntax highlighting with `javascript`
- JavaScript code: ` ```javascript `
- Console output: ` ```console `
- JSON: ` ```json `

### Code Comments / Chú thích Code
**BẮT BUỘC** - Tất cả comments trong code phải song ngữ:

**MANDATORY** - All code comments must be bilingual:

```javascript
// Tốt / Good
// Khai báo hàm / Function declaration
function greet(name) {
    return `Hello, ${name}`;
}

// Không tốt / Bad
// This is a greeting function
function greet(name) {
    return `Hello, ${name}`;
}
```

### Alerts / Thông báo
Sử dụng GitHub-style alerts khi cần nhấn mạnh:

Use GitHub-style alerts when emphasis is needed:

```markdown
> [!NOTE]
> Thông tin bổ sung bằng tiếng Việt.
> 
> Additional information in English.

> [!TIP]
> Mẹo hữu ích bằng tiếng Việt.
> 
> Helpful tips in English.

> [!IMPORTANT]
> Thông tin quan trọng bằng tiếng Việt.
> 
> Important information in English.

> [!WARNING]
> Cảnh báo bằng tiếng Việt.
> 
> Warning in English.

> [!CAUTION]
> Cẩn trọng bằng tiếng Việt.
> 
> Caution in English.
```

### Tables / Bảng
```markdown
| Toán tử / Operator | Mô tả / Description | Ví dụ / Example |
|-------------------|---------------------|-----------------|
| +                 | Cộng / Addition     | `5 + 3` → 8     |
| -                 | Trừ / Subtraction   | `5 - 3` → 2     |
```

### Links
- Link nội bộ: `[Tên bài học](./js-topic.md)`
- Link ngoại: `[Tên nguồn](https://example.com)`
- Link MDN: Luôn link đến tài liệu chính thức / Always link to official documentation

---

## Quy tắc Song ngữ / Bilingual Content Rules

> [!IMPORTANT]
> **BẮT BUỘC** - Tất cả nội dung bài học phải được viết bằng song ngữ Việt-Anh.
> 
> **MANDATORY** - All lesson content must be written in bilingual Vietnamese-English format.

### Nguyên tắc chung / General Principles

- **Mọi phần nội dung** phải có cả tiếng Việt và tiếng Anh / **Every content section** must have both Vietnamese and English
- Tiếng Việt luôn đi trước, tiếng Anh theo sau / Vietnamese always comes first, followed by English
- Sử dụng dấu gạch `/` để phân tách hoặc dòng riêng biệt / Use slash `/` separator or separate lines
- Đảm bảo nội dung hai ngôn ngữ tương đương về ý nghĩa / Ensure both language versions are equivalent in meaning

### Áp dụng cho JavaScript / Apply to JavaScript

#### Tiêu đề / Headings
```markdown
# Variables and Data Types / Biến và Kiểu dữ liệu
## Khái niệm chính / Main Concepts
### Arrow Functions / Hàm mũi tên
```

#### Đoạn văn / Paragraphs
**Hai đoạn riêng biệt (KHUYẾN KHÍCH)** / **Two separate paragraphs (RECOMMENDED)**
```markdown
JavaScript là ngôn ngữ lập trình động, được sử dụng chủ yếu để tạo trang web tương tác. Nó chạy trên trình duyệt và cả server (Node.js).

JavaScript is a dynamic programming language primarily used to create interactive web pages. It runs in browsers and also on servers (Node.js).
```

#### Code Comments / Chú thích Code
**BẮT BUỘC song ngữ** / **MANDATORY bilingual**
```javascript
// Khai báo mảng / Array declaration
const numbers = [1, 2, 3, 4, 5];

// Lọc số chẵn / Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// In kết quả / Print result
console.log(evenNumbers); // [2, 4]
```

#### Danh sách / Lists
```markdown
### Lợi ích / Benefits
- **Flexibility**: Linh hoạt trong xử lý dữ liệu / Flexible data handling
- **Performance**: Hiệu suất tốt với modern engines / Good performance with modern engines
```

---

## Quy tắc Điều hướng / Navigation Rules

### Chuỗi bài học / Lesson Sequence
- Các bài học phải được tổ chức theo chuỗi logic từ cơ bản đến nâng cao / Lessons must be organized in a logical sequence from basic to advanced
- Mỗi bài học phải link đến bài trước và bài sau / Each lesson must link to previous and next lessons
- Tạo navigation flow nhất quán cho người học / Create consistent navigation flow for learners

### Cập nhật Links / Updating Links
- Khi thêm bài học mới vào giữa chuỗi, phải cập nhật links của bài trước và bài sau / When adding a new lesson in the middle of the sequence, must update links of previous and next lessons
- Khi xóa bài học, phải cập nhật links của bài trước và bài sau để liên kết trực tiếp / When removing a lesson, must update links of previous and next lessons to connect directly
- Luôn kiểm tra tất cả links để đảm bảo không có broken links / Always check all links to ensure no broken links

---

## Quy tắc Metadata / Metadata Rules

### Ngày tạo / Created Date
- **Không thay đổi** sau khi tạo file lần đầu / **Do not change** after initial file creation
- Format: `YYYY-MM-DD` (ISO 8601)
- Ví dụ: `2025-12-23`

### Ngày cập nhật / Last Updated Date
- **Phải cập nhật** mỗi khi sửa đổi nội dung / **Must update** whenever content is modified
- Format: `YYYY-MM-DD` (ISO 8601)
- Cập nhật ngay cả với thay đổi nhỏ (typo, formatting, code examples) / Update even for minor changes (typo, formatting, code examples)
- Ví dụ: `2025-12-23`

---

## Checklist Tạo bài học mới / New Lesson Checklist

Khi tạo một bài học mới, đảm bảo:

When creating a new lesson, ensure:

- [ ] File được đặt tên đúng format `js-[topic].md`
- [ ] Có metadata đầy đủ:
  - [ ] Ngày tạo / Created date
  - [ ] Ngày cập nhật / Last updated date
  - [ ] Link bài trước / Previous lesson link
  - [ ] Link bài sau / Next lesson link
- [ ] Có đầy đủ 4 phần bắt buộc:
  - [ ] Tên bài học (song ngữ) / Lesson Title (bilingual)
  - [ ] Mô tả nội dung (song ngữ) / Content Description (bilingual)
  - [ ] Khái niệm chính (song ngữ) / Main Concepts (bilingual)
  - [ ] Lợi ích/Ứng dụng (song ngữ) / Benefits/Applications (bilingual)
- [ ] Code examples được format đúng với syntax highlighting
- [ ] **Nội dung song ngữ Anh-Việt (BẮT BUỘC)** / **Bilingual English-Vietnamese content (MANDATORY)**
- [ ] Có ít nhất một ví dụ code cho mỗi khái niệm
- [ ] **Tất cả code comments đều song ngữ** / **All code comments are bilingual**
- [ ] Kiểm tra chính tả và ngữ pháp
- [ ] Link tham khảo (nếu có) hoạt động đúng
- [ ] Đã cập nhật links trong bài trước và bài sau (nếu insert vào giữa chuỗi)

---

## Ví dụ File hoàn chỉnh / Complete File Example

```markdown
# Functions / Hàm trong JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Control Flow](./js-control-flow.md)  
**➡️ Bài sau / Next:** [Arrays](./js-arrays.md)

---

## Mô tả / Description

Bài học này giới thiệu về hàm (functions) trong JavaScript. Bạn sẽ học cách khai báo hàm, sử dụng parameters và return values, cũng như hiểu về function expressions và arrow functions. Functions là building blocks quan trọng trong JavaScript programming.

This lesson introduces functions in JavaScript. You will learn how to declare functions, use parameters and return values, and understand function expressions and arrow functions. Functions are important building blocks in JavaScript programming.

## Khái niệm chính / Main Concepts

### Function Declaration / Khai báo hàm

Function declaration là cách khai báo hàm truyền thống với từ khóa `function`.

Function declaration is the traditional way to declare functions using the `function` keyword.

​```javascript
// Khai báo hàm cơ bản / Basic function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Gọi hàm / Call function
console.log(greet('John')); // Output: Hello, John!

// Function hoisting - có thể gọi trước khi khai báo
// Function hoisting - can be called before declaration
sayHi(); // Works!

function sayHi() {
    console.log('Hi there!');
}
​```

### Arrow Functions / Hàm mũi tên

Arrow functions (ES6+) là cú pháp ngắn gọn hơn để viết functions.

Arrow functions (ES6+) are a more concise syntax for writing functions.

​```javascript
// Arrow function cơ bản / Basic arrow function
const add = (a, b) => a + b;

// Với một parameter, không cần dấu ngoặc
// With one parameter, no parentheses needed
const square = x => x * x;

// Với nhiều dòng code / With multiple lines
const calculateTotal = (items) => {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
};

// Sử dụng / Usage
console.log(add(5, 3));        // 8
console.log(square(4));        // 16
​```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Code reusability**: Tái sử dụng code, tránh lặp lại / Reuse code, avoid repetition
- **Modularity**: Chia nhỏ chương trình thành các phần dễ quản lý / Break program into manageable parts
- **Abstraction**: Ẩn chi tiết implementation / Hide implementation details
- **Testing**: Dễ dàng test từng function riêng lẻ / Easy to test individual functions

### Ứng dụng thực tế / Real-world Applications
- **Event handlers**: Xử lý sự kiện click, submit / Handle click, submit events
- **Data processing**: Xử lý và transform dữ liệu / Process and transform data
- **API calls**: Gọi API và xử lý responses / Make API calls and handle responses
- **Utilities**: Tạo helper functions / Create helper functions
- **Callbacks**: Sử dụng trong asynchronous operations / Use in asynchronous operations

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Đặt tên hàm rõ ràng, mô tả chức năng / Use clear, descriptive function names
- ✅ **DO**: Giới hạn mỗi hàm làm một việc / Limit each function to one task
- ✅ **DO**: Sử dụng arrow functions cho callbacks / Use arrow functions for callbacks
- ❌ **DON'T**: Không tạo hàm quá dài / Don't create overly long functions
- ❌ **DON'T**: Không sử dụng quá nhiều parameters / Don't use too many parameters

## Tài liệu tham khảo / References

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Functions](https://javascript.info/function-basics)
```

---

## Lưu ý quan trọng / Important Notes

> [!IMPORTANT]
> - Luôn cập nhật **Ngày cập nhật** khi sửa đổi nội dung / Always update **Last Updated** date when modifying content
> - Kiểm tra và cập nhật navigation links khi thêm/xóa bài học / Check and update navigation links when adding/removing lessons
> - Đảm bảo chuỗi bài học có logic progression / Ensure lesson sequence has logical progression
> - **Tất cả code comments phải song ngữ** / **All code comments must be bilingual**

> [!TIP]
> - Sử dụng code examples thực tế, dễ hiểu / Use practical, easy-to-understand code examples
> - Test tất cả code examples trước khi publish / Test all code examples before publishing
> - Tạo index file liệt kê tất cả bài học theo thứ tự / Create an index file listing all lessons in order
> - Review toàn bộ chuỗi bài học định kỳ để đảm bảo tính nhất quán / Review entire lesson sequence periodically for consistency
> - Link tới MDN và JavaScript.info cho chi tiết / Link to MDN and JavaScript.info for details
