# Booleans / Giá trị Boolean

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Strings](./js-strings.md)  
**➡️ Bài sau / Next:** [Null and Undefined](./js-null-undefined.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng kiểu dữ liệu boolean của JavaScript. Boolean chỉ có hai giá trị: `true` hoặc `false`. Đây là kiểu dữ liệu cơ bản cho logic và điều kiện trong lập trình.

This lesson explores how to use JavaScript's boolean data type. Booleans have only two values: `true` or `false`. This is the fundamental data type for logic and conditions in programming.

## Khái niệm chính / Main Concepts

### Boolean Values / Giá trị Boolean

```javascript
// Giá trị boolean trực tiếp / Direct boolean values
let isTrue = true;
let isFalse = false;

// Từ so sánh / From comparisons
let isEqual = (5 === 5);        // true
let isGreater = (10 > 5);       // true
let isLess = (3 < 2);           // false

// Từ biểu thức logic / From logical expressions
let result = (5 > 3) && (2 < 4); // true
```

### Truthy and Falsy Values / Giá trị Truthy và Falsy

```javascript
// Falsy values - được coi là false / Falsy values - considered as false
Boolean(false);      // false
Boolean(0);          // false
Boolean('');         // false (empty string / chuỗi rỗng)
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false

// Truthy values - được coi là true / Truthy values - considered as true
Boolean(true);       // true
Boolean(1);          // true
Boolean('hello');    // true
Boolean([]);         // true (empty array / mảng rỗng)
Boolean({});         // true (empty object / object rỗng)
```

### Logical Operators / Toán tử Logic

```javascript
// AND (&&) - Cả hai phải true / Both must be true
console.log(true && true);    // true
console.log(true && false);   // false

// OR (||) - Một trong hai true / Either one true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - Đảo ngược / Negate
console.log(!true);           // false
console.log(!false);          // true

// Ứng dụng thực tế / Practical example
let age = 20;
let hasLicense = true;
let canDrive = (age >= 18) && hasLicense; // true
```

### Boolean Conversion / Chuyển đổi Boolean

```javascript
// Explicit conversion / Chuyển đổi tường minh
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean('text'));   // true

// Implicit conversion in conditions / Chuyển đổi ngầm trong điều kiện
if ('hello') {  // 'hello' -> true
    console.log('Truthy!');
}

// Double NOT trick / Thủ thuật NOT kép
console.log(!!'hello');  // true
console.log(!!0);        // false
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Logic control**: Kiểm soát luồng chương trình / Control program flow
- **Decision making**: Ra quyết định dựa trên điều kiện / Make decisions based on conditions
- **Simple and clear**: Rõ ràng, dễ hiểu / Clear and easy to understand

### Ứng dụng thực tế / Real-world Applications

- **Form validation**: Kiểm tra input hợp lệ / Validate input
- **User permissions**: Kiểm tra quyền truy cập / Check access rights
- **State management**: Quản lý trạng thái on/off / Manage on/off states
- **Conditional rendering**: Hiển thị UI có điều kiện / Conditional UI display

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `===` thay vì `==` / Use `===` instead of `==`
- ✅ **DO**: Đặt tên boolean rõ ràng (is, has, can) / Use clear boolean names (is, has, can)
- ❌ **DON'T**: Không so sánh `if (value === true)` / Don't compare `if (value === true)`

## Tài liệu tham khảo / References

- [MDN - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
