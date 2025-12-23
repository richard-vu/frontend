# Comparison Operators / Toán tử So sánh

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Variables](./js-variables.md)  
**➡️ Bài sau / Next:** [Control Flow](./js-control-flow.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng các toán tử so sánh trong JavaScript. Các toán tử này so sánh hai giá trị và trả về boolean. Hiểu rõ sự khác biệt giữa == và === rất quan trọng để tránh bugs.

This lesson explores how to use comparison operators in JavaScript. These operators compare two values and return a boolean. Understanding the difference between == and === is crucial to avoid bugs.

## Khái niệm chính / Main Concepts

### Equality Operators / Toán tử Bằng

```javascript
// Strict equality (===) - Khuyến nghị / Strict equality (===) - Recommended
console.log(5 === 5); // true
console.log(5 === '5'); // false (khác kiểu / different type)
console.log(null === undefined); //  false

// Loose equality (==) - Tránh dùng / Loose equality (==) - Avoid
console.log(5 == '5'); // true (type coercion)
console.log(null == undefined); // true
console.log(0 == false); // true

// Inequality / Không bằng
console.log(5 !== '5'); // true
console.log(5 != '5'); // false
```

### Relational Operators / Toán tử Quan hệ

```javascript
// Greater than / Lớn hơn
console.log(10 > 5); // true
console.log(5 > 10); // false

// Less than / Nhỏ hơn
console.log(5 < 10); // true
console.log(10 < 5); // false

// Greater than or equal / Lớn hơn hoặc bằng
console.log(10 >= 10); // true
console.log(9 >= 10); // false

// Less than or equal / Nhỏ hơn hoặc bằng
console.log(10 <= 10); // true
console.log(11 <= 10); // false
```

### String Comparison / So sánh Chuỗi

```javascript
// So sánh lexicographically / Lexicographic comparison
console.log('a' < 'b'); // true
console.log('apple' < 'banana'); // true
console.log('Z' < 'a'); // true (uppercase < lowercase)
console.log('2' < '12'); // false (string comparison, not numeric)
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Logic control**: Kiểm soát luồng chương trình / Control program flow
- **Validation**: Kiểm tra điều kiện / Check conditions
- **Sorting**: Sắp xếp dữ liệu / Sort data

### Ứng dụng thực tế / Real-world Applications

- **Form validation**: Kiểm tra input / Validate input
- **Access control**: Kiểm tra quyền / Check permissions
- **Data filtering**: Lọc dữ liệu / Filter data

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn dùng === và !== / Always use === and !==
- ✅ **DO**: So sánh cùng kiểu dữ liệu / Compare same data types
- ❌ **DON'T**: Tránh == và != / Avoid == and !=

## Tài liệu tham khảo / References

- [MDN - Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators)
