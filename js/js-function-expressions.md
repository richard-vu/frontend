# Function Expressions / Biểu thức Hàm

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Introduction to Functions](./js-functions.md)  
**➡️ Bài sau / Next:** [The "new" Keyword](./js-new-keyword.md)

---

## Mô tả / Description

Bài học này giới thiệu về biểu thức hàm JavaScript (function expressions). Function expressions là cách khác để định nghĩa functions, bao gồm anonymous functions và arrow functions. Hiểu sự khác biệt giữa function declarations và expressions giúp viết code linh hoạt hơn.

This lesson introduces JavaScript function expressions. Function expressions are an alternative way to define functions, including anonymous functions and arrow functions. Understanding the difference between function declarations and expressions helps write more flexible code.

## Khái niệm chính / Main Concepts

### Function Expression / Biểu thức Hàm

```javascript
// Function expression / Biểu thức hàm
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Gọi function expression / Call function expression
console.log(greet('John')); // "Hello, John!"

// Named function expression / Biểu thức hàm có tên
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Đệ quy / Recursion
};
```

### Arrow Functions / Hàm Mũi tên

```javascript
// Arrow function cơ bản / Basic arrow function
const add = (a, b) => {
    return a + b;
};

// Shorthand (implicit return) / Viết tắt (return ngầm)
const multiply = (a, b) => a * b;

// Single parameter - không cần dấu ngoặc / Single parameter - no parentheses needed
const square = x => x * x;

// No parameters / Không có tham số
const sayHi = () => console.log('Hi!');

// Returning object / Trả về object
const createUser = (name, age) => ({ name, age });
```

### Differences: Declaration vs Expression / Khác biệt: Khai báo vs Biểu thức

```javascript
// Function declaration - hoisted / Khai báo hàm - được hoisted
sayHello(); // Works! / Hoạt động!
function sayHello() {
    console.log('Hello!');
}

// Function expression - not hoisted / Biểu thức hàm - không hoisted
// sayBye(); // Error: Cannot access before initialization
const sayBye = function() {
    console.log('Bye!');
};
```

### Arrow Functions and `this` / Arrow Functions và `this`

```javascript
// Arrow function không có `this` riêng / Arrow function has no own `this`
const obj = {
    name: 'Object',
    regularFunc: function() {
        console.log(this.name); // 'Object'
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (this từ outer scope)
    }
};

// Sử dụng trong callbacks / Use in callbacks
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
```

### IIFE (Immediately Invoked Function Expression) / IIFE

```javascript
// IIFE - thực thi ngay / IIFE - immediately invoked
(function() {
    console.log('Chạy ngay! / Runs immediately!');
})();

// IIFE với arrow function / IIFE with arrow function
(() => {
    let temp = 'Local variable';
    console.log(temp);
})();

// IIFE với parameters / IIFE with parameters
((name) => {
    console.log(`Hello, ${name}!`);
})('World');
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Flexibility**: Linh hoạt trong cách định nghĩa functions / Flexible function definition
- **Concise syntax**: Arrow functions ngắn gọn / Arrow functions are concise
- **Callbacks**: Lý tưởng cho callback functions / Ideal for callback functions
- **Scope control**: IIFE giúp tạo private scope / IIFE creates private scope

### Ứng dụng thực tế / Real-world Applications

- **Event handlers**: Arrow functions trong event listeners / Arrow functions in event listeners
- **Array methods**: map, filter, reduce với arrow functions / map, filter, reduce with arrow functions
- **Async operations**: Callbacks và promises / Callbacks and promises
- **Module pattern**: IIFE cho encapsulation / IIFE for encapsulation

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Dùng arrow functions cho callbacks đơn giản / Use arrow functions for simple callbacks
- ✅ **DO**: Dùng regular functions khi cần `this` / Use regular functions when you need `this`
- ✅ **DO**: Return implicit khi có thể / Use implicit return when possible
- ❌ **DON'T**: Không dùng arrow functions cho methods / Don't use arrow functions for methods
- ❌ **DON'T**: Không overuse IIFE trong code hiện đại / Don't overuse IIFE in modern code

## Tài liệu tham khảo / References

- [MDN - Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
