# Variables / Biến trong JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Symbols](./js-symbols.md)  
**➡️ Bài sau / Next:** [Comparison Operators](./js-comparison-operators.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng các biến JavaScript với var, let, và const. Biến là containers để lưu trữ giá trị dữ liệu. Hiểu rõ về scope, hoisting, và sự khác biệt giữa var/let/const là nền tảng quan trọng.

This lesson explores how to use JavaScript variables with var, let, and const. Variables are containers for storing data values. Understanding scope, hoisting, and differences between var/let/const is an important foundation.

## Khái niệm chính / Main Concepts

### Variable Declaration / Khai báo biến

```javascript
// const - Không thể gán lại / Cannot reassign
const PI = 3.14159;
// PI = 3.14; // Error!

// let - Có thể gán lại / Can reassign
let count = 0;
count = 1; // OK
count = count + 1; // OK

// var - Cách cũ (tránh dùng) / Old way (avoid)
var oldWay = 'deprecated';
```

### Block Scope / Phạm vi khối

```javascript
// let và const có block scope / let and const have block scope
if (true) {
    let blockScoped = 'inside';
    const alsoBlock = 'inside';
    console.log(blockScoped); // OK
}
// console.log(blockScoped); // Error!

// var có function scope / var has function scope
if (true) {
    var functionScoped = 'accessible';
}
console.log(functionScoped); // OK (nhưng không nên / but shouldn't)
```

### Hoisting / Hoisting

```javascript
// var được hoisted / var is hoisted
console.log(x); // undefined (hoisted but not initialized)
var x = 5;

// let và const cũng hoisted nhưng có temporal dead zone
// let and const are also hoisted but have temporal dead zone
// console.log(y); // ReferenceError!
let y = 10;
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Data storage**: Lưu trữ và quản lý dữ liệu / Store and manage data
- **Code clarity**: Code dễ đọc và maintain / Readable and maintainable code
- **Scoping**: Kiểm soát phạm vi biến / Control variable scope

### Ứng dụng thực tế / Real-world Applications

- **State management**: Quản lý trạng thái ứng dụng / Manage application state
- **Calculations**: Lưu kết quả tính toán / Store calculation results
- **User data**: Lưu thông tin người dùng / Store user information

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Ưu tiên const, sau đó let / Prefer const, then let
- ✅ **DO**: Đặt tên biến có ý nghĩa / Use meaningful variable names
- ❌ **DON'T**: Không dùng var / Don't use var

## Tài liệu tham khảo / References

- [MDN - Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
