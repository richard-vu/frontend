# BigInt / Số nguyên lớn

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Null and Undefined](./js-null-undefined.md)  
**➡️ Bài sau / Next:** [Symbols](./js-symbols.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng kiểu dữ liệu BigInt của JavaScript. BigInt cho phép làm việc với số nguyên lớn hơn giới hạn của Number (2^53 - 1). Đây là tính năng ES2020 cho các ứng dụng cần độ chính xác cao như tài chính, cryptography.

This lesson explores how to use JavaScript's BigInt data type. BigInt allows working with integers larger than the Number limit (2^53 - 1). This is an ES2020 feature for applications requiring high precision like finance and cryptography.

## Khái niệm chính / Main Concepts

### Creating BigInt / Tạo BigInt

```javascript
// Thêm 'n' vào cuối số / Add 'n' suffix to number
const big1 = 1234567890123456789012345678901234567890n;

// Sử dụng BigInt() constructor
const big2 = BigInt("1234567890123456789012345678901234567890");
const big3 = BigInt(123);

// Không thể dùng với Number / Cannot mix with Number
// const wrong = 1n + 1; // Error!
const correct = 1n + BigInt(1); // OK
```

### BigInt Operations / Phép toán BigInt

```javascript
// Các phép toán số học / Arithmetic operations
const a = 100n;
const b = 50n;

console.log(a + b);  // 150n - Cộng / Addition
console.log(a - b);  // 50n - Trừ / Subtraction
console.log(a * b);  // 5000n - Nhân / Multiplication
console.log(a / b);  // 2n - Chia (luôn là integer) / Division (always integer)
console.log(a % b);  // 0n - Chia lấy dư / Modulo
console.log(a ** 2n); // 10000n - Lũy thừa / Exponentiation
```

### BigInt vs Number / BigInt so với Number

```javascript
// Number limit / Giới hạn của Number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt vượt qua giới hạn / BigInt exceeds limit
const bigNum = 9007199254740991n + 1n; // Works! / Hoạt động!

// Kiểm tra kiểu / Type checking
console.log(typeof 123n);    // "bigint"
console.log(typeof 123);     // "number"

// Chuyển đổi / Conversion
const num = Number(123n);    // 123
const big = BigInt(123);     // 123n
```

### BigInt Limitations / Hạn chế của BigInt

```javascript
// Không thể mix với Number trực tiếp / Cannot mix with Number directly
// const bad = 1n + 1; // TypeError!
const good = 1n + BigInt(1); // OK

// Không dùng với Math object / Cannot use with Math object
// Math.sqrt(4n); // TypeError!
const sqrt = Math.sqrt(Number(4n)); // OK

// Chia luôn là integer / Division always integer
console.log(5n / 2n);  // 2n (not 2.5)
console.log(5 / 2);    // 2.5
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Precision**: Độ chính xác tuyệt đối với số nguyên lớn / Absolute precision with large integers
- **No limit**: Không giới hạn kích thước (chỉ giới hạn bởi bộ nhớ) / No size limit (only memory)
- **Cryptography**: An toàn cho cryptographic operations

### Ứng dụng thực tế / Real-world Applications

- **Financial calculations**: Tính toán tài chính chính xác / Precise financial calculations
- **Cryptography**: Mã hóa và security / Encryption and security
- **Large IDs**: Database IDs lớn / Large database IDs
- **Timestamps**: Timestamps với độ chính xác cao / High-precision timestamps

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng BigInt cho số nguyên lớn / Use BigInt for large integers
- ✅ **DO**: Chuyển đổi tường minh khi mix với Number / Explicitly convert when mixing with Number
- ❌ **DON'T**: Không dùng BigInt với Math methods / Don't use BigInt with Math methods

## Tài liệu tham khảo / References

- [MDN - BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
