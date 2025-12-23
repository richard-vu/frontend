# Control Flow / Luồng Điều khiển

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Comparison Operators](./js-comparison-operators.md)  
**➡️ Bài sau / Next:** [Introduction to Functions](./js-functions.md)

---

## Mô tả / Description

Bài học này tìm hiểu về luồng điều khiển của JavaScript với if/else, switch, và các câu lệnh điều kiện khác. Control flow quyết định thứ tự thực thi code dựa trên điều kiện. Hiểu rõ control flow giúp viết logic phức tạp và xử lý các trường hợp khác nhau.

This lesson explores JavaScript's control flow with if/else, switch, and other conditional statements. Control flow determines code execution order based on conditions. Understanding control flow helps write complex logic and handle different cases.

## Khái niệm chính / Main Concepts

### if...else Statement / Câu lệnh if...else

```javascript
// if cơ bản / Basic if
let age = 18;
if (age >= 18) {
    console.log('Người lớn / Adult');
}

// if...else
if (age >= 18) {
    console.log('Người lớn / Adult');
} else {
    console.log('Trẻ em / Child');
}

// if...else if...else
let score = 85;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else {
    console.log('F');
}
```

### Ternary Operator / Toán tử Ba ngôi

```javascript
// Cú pháp: condition ? trueValue : falseValue
let age = 20;
let status = (age >= 18) ? 'adult' : 'minor';

// Lồng nhau / Nested ternary
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
```

### switch Statement / Câu lệnh switch

```javascript
// switch cơ bản / Basic switch
let day = 3;
switch (day) {
    case 1:
        console.log('Thứ hai / Monday');
        break;
    case 2:
        console.log('Thứ ba / Tuesday');
        break;
    case 3:
        console.log('Thứ tư / Wednesday');
        break;
    default:
        console.log('Ngày khác / Other day');
}

// Multiple cases / Nhiều cases
let fruit = 'apple';
switch (fruit) {
    case 'apple':
    case 'orange':
        console.log('Trái cây có múi / Citrus fruit');
        break;
    case 'banana':
        console.log('Chuối / Banana');
        break;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Logic branching**: Phân nhánh logic linh hoạt / Flexible logic branching
- **Code organization**: Tổ chức code rõ ràng / Clear code organization
- **Decision making**: Ra quyết định dựa trên điều kiện / Make decisions based on conditions

### Ứng dụng thực tế / Real-world Applications

- **User authentication**: Kiểm tra đăng nhập / Check login status
- **Form validation**: Validate input / Validate input
- **Game logic**: Xử lý game states / Handle game states

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Dùng switch cho nhiều điều kiện giống nhau / Use switch for many similar conditions
- ✅ **DO**: Dùng ternary cho điều kiện đơn giản / Use ternary for simple conditions
- ❌ **DON'T**: Không lồng if/else quá sâu /  Don't nest if/else too deeply

## Tài liệu tham khảo / References

- [MDN - Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
