# Numbers / Số trong JavaScript

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Data Types and Structures](./js-data-types.md)  
**➡️ Bài sau / Next:** [Strings](./js-strings.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng kiểu dữ liệu số của JavaScript. JavaScript chỉ có một kiểu number cho cả số nguyên và số thập phân. Bạn sẽ học về các phép toán số học, Math object, và các phương thức xử lý số.

This lesson explores how to use JavaScript's number data type. JavaScript has only one number type for both integers and floating-point numbers. You will learn about arithmetic operations, the Math object, and number manipulation methods.

## Khái niệm chính / Main Concepts

### Number Type / Kiểu Number

JavaScript sử dụng chuẩn IEEE 754 để biểu diễn số, hỗ trợ cả số nguyên và số thập phân.

JavaScript uses the IEEE 754 standard to represent numbers, supporting both integers and floating-point numbers.

```javascript
// Số nguyên / Integers
let count = 42;
let negative = -10;

// Số thập phân / Floating-point
let price = 19.99;
let pi = 3.14159;

// Số khoa học / Scientific notation
let billion = 1e9;        // 1000000000
let micro = 1e-6;         // 0.000001

// Giá trị đặc biệt / Special values
console.log(Infinity);    // Vô cực dương / Positive infinity
console.log(-Infinity);   // Vô cực âm / Negative infinity
console.log(NaN);         // Not a Number
```

### Arithmetic Operators / Toán tử số học

```javascript
// Các phép toán cơ bản / Basic operations
let a = 10, b = 3;

console.log(a + b);  // 13 - Cộng / Addition
console.log(a - b);  // 7 - Trừ / Subtraction
console.log(a * b);  // 30 - Nhân / Multiplication
console.log(a / b);  // 3.333... - Chia / Division
console.log(a % b);  // 1 - Chia lấy dư / Modulo
console.log(a ** b); // 1000 - Lũy thừa / Exponentiation

// Increment và Decrement / Increment and Decrement
let x = 5;
x++;  // x = 6
x--;  // x = 5
```

### Math Object / Đối tượng Math

```javascript
// Làm tròn / Rounding
console.log(Math.round(4.7));   // 5
console.log(Math.ceil(4.1));    // 5 - Làm tròn lên / Round up
console.log(Math.floor(4.9));   // 4 - Làm tròn xuống / Round down

// Min/Max
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1

// Căn bậc và lũy thừa / Roots and powers
console.log(Math.sqrt(16));     // 4 - Căn bậc 2 / Square root
console.log(Math.pow(2, 3));    // 8 - 2^3

// Random number / Số ngẫu nhiên
console.log(Math.random());     // 0 <= x < 1
```

### Number Methods / Phương thức Number

```javascript
// Chuyển đổi sang string / Convert to string
let num = 123.456;
console.log(num.toString());     // "123.456"
console.log(num.toFixed(2));     // "123.46"
console.log(num.toPrecision(4)); // "123.5"

// Parsing / Phân tích cú pháp
console.log(parseInt("123"));    // 123
console.log(parseFloat("3.14")); // 3.14
console.log(Number("42"));       // 42

// Kiểm tra / Checking
console.log(isNaN("hello"));     // true
console.log(isFinite(100));      // true
console.log(Number.isInteger(42)); // true
```

## Lợi  ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Precision**: Độ chính xác cao trong tính toán / High precision in calculations
- **Flexibility**: Xử lý cả số nguyên và thập phân / Handles both integers and decimals
- **Math operations**: Nhiều phương thức tính toán built-in / Many built-in math methods

### Ứng dụng thực tế / Real-world Applications

- **E-commerce**: Tính toán giá, thuế, shipping / Calculate prices, taxes, shipping
- **Games**: Tính điểm, vị trí, physics / Calculate scores, positions, physics
- **Data visualization**: Vẽ charts và graphs / Draw charts and graphs
- **Financial apps**: Tính lãi suất, đầu tư / Calculate interest, investments

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `toFixed()` cho tiền tệ / Use `toFixed()` for currency
- ✅ **DO**: Kiểm tra NaN với `isNaN()` / Check for NaN with `isNaN()`
- ❌ **DON'T**: Không so sánh decimals trực tiếp / Don't compare decimals directly

## Tài liệu tham khảo / References

- [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
