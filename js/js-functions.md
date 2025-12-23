# Introduction to Functions / Giới thiệu về Hàm

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Control Flow](./js-control-flow.md)  
**➡️ Bài sau / Next:** [Function Expressions](./js-function-expressions.md)

---

## Mô tả / Description

Bài học này giới thiệu về các hàm JavaScript. Functions là building blocks cơ bản của JavaScript, cho phép gói gọn code có thể tái sử dụng. Bạn sẽ học cách khai báo, gọi functions, làm việc với parameters và return values.

This lesson introduces JavaScript functions. Functions are fundamental building blocks of JavaScript, allowing you to encapsulate reusable code. You will learn how to declare, call functions, work with parameters and return values.

## Khái niệm chính / Main Concepts

### Function Declaration / Khai báo Hàm

```javascript
// Khai báo hàm cơ bản / Basic function declaration
function greet() {
    console.log('Hello!');
}

// Gọi hàm / Call function
greet(); // Output: Hello!

// Function với tên rõ ràng / Function with descriptive name
function calculateSum(a, b) {
    return a + b;
}
```

### Parameters and Arguments / Tham số và Đối số

```javascript
// Parameters / Tham số
function sayHello(name) {  // 'name' là parameter
    console.log(`Hello, ${name}!`);
}

// Arguments / Đối số
sayHello('John');  // 'John' là argument truyền vào / 'John' is the argument passed

// Multiple parameters / Nhiều tham số
function add(x, y) {
    return x + y;
}
console.log(add(5, 3)); // 8

// Default parameters / Tham số mặc định
function greetUser(name = 'Guest') {
    console.log(`Welcome, ${name}!`);
}
greetUser();        // "Welcome, Guest!"
greetUser('Alice'); // "Welcome, Alice!"
```

### Return Statement / Câu lệnh Return

```javascript
// Return giá trị / Return value
function multiply(a, b) {
    return a * b;  // Trả về kết quả / Return result
}
let result = multiply(4, 5); // 20

// Function không return / Function without return
function logMessage(msg) {
    console.log(msg);
    // Không có return, tự động return undefined
    // No return, automatically returns undefined
}

// Early return / Return sớm
function checkAge(age) {
    if (age < 18) {
        return 'Too young'; // Thoát sớm / Exit early
    }
    return 'Access granted';
}
```

### Function Scope / Phạm vi Hàm

```javascript
// Biến local trong function / Local variables in function
function myFunction() {
    let localVar = 'I am local';
    console.log(localVar); // OK
}
// console.log(localVar); // Error! localVar không tồn tại ở đây

// Biến global / Global variables
let globalVar = 'I am global';
function accessGlobal() {
    console.log(globalVar); // OK - có thể access / can access
}
```

### Function Hoisting / Hoisting của Hàm

```javascript
// Function declarations được hoisted / Function declarations are hoisted
sayHi(); // Hoạt động! / Works!

function sayHi() {
    console.log('Hi!');
}

// Function expressions không được hoisted hoàn toàn
// Function expressions are not fully hoisted
// sayBye(); // Error!
const sayBye = function() {
    console.log('Bye!');
};
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Code reusability**: Tái sử dụng code, tránh lặp lại / Reuse code, avoid repetition
- **Modularity**: Chia code thành các phần nhỏ dễ quản lý / Break code into manageable pieces
- **Abstraction**: Ẩn chi tiết implementation / Hide implementation details
- **Maintainability**: Dễ bảo trì và debug / Easy to maintain and debug

### Ứng dụng thực tế / Real-world Applications

- **Event handlers**: Xử lý click, submit events / Handle click, submit events
- **Data processing**: Transform và validate dữ liệu / Transform and validate data
- **Calculations**: Thực hiện tính toán phức tạp / Perform complex calculations
- **API calls**: Gọi và xử lý API responses / Call and handle API responses

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Đặt tên hàm rõ ràng, mô tả chức năng / Use clear, descriptive function names
- ✅ **DO**: Mỗi hàm chỉ làm một việc / Each function should do one thing
- ✅ **DO**: Sử dụng default parameters / Use default parameters
- ❌ **DON'T**: Không tạo hàm quá dài / Don't create overly long functions
- ❌ **DON'T**: Không dùng quá nhiều parameters / Don't use too many parameters

## Tài liệu tham khảo / References

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Functions](https://javascript.info/function-basics)
