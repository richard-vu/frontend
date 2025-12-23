# Data Types and Structures / Kiểu dữ liệu và Cấu trúc

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Introduction to JavaScript](./js-introduction.md)  
**➡️ Bài sau / Next:** [Numbers](./js-numbers.md)

---

## Mô tả / Description

Bài học này giới thiệu các kiểu dữ liệu nguyên thủy cơ bản của JavaScript. Bạn sẽ học về 7 kiểu dữ liệu nguyên thủy (primitive types) và kiểu dữ liệu object. Hiểu rõ về kiểu dữ liệu là nền tảng quan trọng để viết code JavaScript chính xác và hiệu quả.

This lesson introduces JavaScript's basic primitive data types. You will learn about the 7 primitive types and the object data type. Understanding data types is an important foundation for writing accurate and efficient JavaScript code.

## Khái niệm chính / Main Concepts

### Primitive Data Types / Kiểu dữ liệu nguyên thủy

JavaScript có 7 kiểu dữ liệu nguyên thủy: String, Number, BigInt, Boolean, Undefined, Null, và Symbol.

JavaScript has 7 primitive data types: String, Number, BigInt, Boolean, Undefined, Null, and Symbol.

```javascript
// String - Chuỗi ký tự / String - Character sequence
let name = "John Doe";
let greeting = 'Hello';

// Number - Số (cả integer và float) / Number (both integer and float)
let age = 25;
let price = 19.99;

// BigInt - Số nguyên lớn / Large integers
let bigNumber = 1234567890123456789012345678901234567890n;

// Boolean - Giá trị logic / Logical value
let isActive = true;
let hasPermission = false;

// Undefined - Chưa được gán giá trị / Not assigned a value
let notAssigned;
console.log(notAssigned); // undefined

// Null - Giá trị rỗng có chủ ý / Intentional empty value
let emptyValue = null;

// Symbol - Giá trị duy nhất / Unique value
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false
```

### typeof Operator / Toán tử typeof

Toán tử `typeof` trả về kiểu dữ liệu của một giá trị dưới dạng string.

The `typeof` operator returns the data type of a value as a string.

```javascript
// Kiểm tra kiểu dữ liệu / Check data types
console.log(typeof "Hello");      // "string"
console.log(typeof 42);            // "number"
console.log(typeof 42n);           // "bigint"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (legacy bug / lỗi cũ)
console.log(typeof Symbol('id'));  // "symbol"
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function(){}); // "function"
```

### Object Data Type / Kiểu dữ liệu Object

Kiểu dữ liệu object là kiểu dữ liệu phức tạp, có thể chứa nhiều giá trị và function.

The object data type is a complex data type that can contain multiple values and functions.

```javascript
// Object literal / Object cơ bản
const person = {
    name: 'John',
    age: 30,
    isStudent: false
};

// Truy cập thuộc tính / Access properties
console.log(person.name);        // "John"
console.log(person['age']);      // 30

// Array là object đặc biệt / Array is a special object
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);     // "object"
console.log(Array.isArray(numbers)); // true

// Function cũng là object / Functions are also objects
function greet() {
    return 'Hello';
}
console.log(typeof greet);       // "function"
```

### Primitive vs Reference / Nguyên thủy vs Tham chiếu

Kiểu nguyên thủy được lưu trữ theo giá trị, còn object được lưu trữ theo tham chiếu.

Primitive types are stored by value, while objects are stored by reference.

```javascript
// Primitive - Copy by value / Nguyên thủy - Copy theo giá trị
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (không thay đổi / unchanged)
console.log(y); // 20

// Object - Copy by reference / Object - Copy theo tham chiếu
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 (đã thay đổi / changed)
console.log(obj2.value); // 20
```

### Type Coercion / Chuyển đổi kiểu tự động

JavaScript tự động chuyển đổi kiểu dữ liệu khi cần thiết (implicit coercion).

JavaScript automatically converts data types when necessary (implicit coercion).

```javascript
// String concatenation / Nối chuỗi
console.log('5' + 3);        // "53" (number -> string)
console.log('5' - 3);        // 2 (string -> number)

// Boolean coercion / Chuyển đổi sang boolean
console.log(Boolean(0));     // false
console.log(Boolean(''));    // false
console.log(Boolean(null));  // false
console.log(Boolean('text')); // true
console.log(Boolean(42));    // true

// Explicit conversion / Chuyển đổi tường minh
let num = Number('123');     // 123
let str = String(456);       // "456"
let bool = Boolean(1);       // true
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Type safety**: Hiểu kiểu dữ liệu giúp tránh bugs / Understanding types helps avoid bugs
- **Memory efficiency**: Chọn đúng kiểu dữ liệu tối ưu bộ nhớ / Choosing correct types optimizes memory
- **Code clarity**: Code dễ đọc và maintain hơn / Code is easier to read and maintain
- **Debug easier**: Dễ dàng tìm và sửa lỗi / Easier to find and fix errors

### Ứng dụng thực tế / Real-world Applications

- **Form validation**: Kiểm tra kiểu dữ liệu input / Validate input data types
- **API responses**: Xử lý dữ liệu từ server / Handle data from server
- **Data processing**: Transform và manipulate data / Transform and manipulate data
- **Type checking**: Validate data trước khi xử lý / Validate data before processing

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `typeof` để kiểm tra kiểu / Use `typeof` to check types
- ✅ **DO**: Sử dụng strict equality (`===`) / Use strict equality (`===`)
- ✅ **DO**: Validate input data types / Validate input data types
- ❌ **DON'T**: Không dựa vào type coercion / Don't rely on type coercion
- ❌ **DON'T**: Không dùng `==` (loose equality) / Don't use `==` (loose equality)

## Tài liệu tham khảo / References

- [MDN - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript.info - Data Types](https://javascript.info/types)
