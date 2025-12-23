# Null and Undefined / Null và Undefined

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Booleans](./js-booleans.md)  
**➡️ Bài sau / Next:** [BigInt](./js-bigint.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng kiểu dữ liệu null và undefined. Cả hai đều đại diện cho "không có giá trị" nhưng với ý nghĩa khác nhau. Hiểu rõ sự khác biệt giữa null và undefined giúp tránh bugs và viết code chính xác hơn.

This lesson explores how to use null and undefined data types. Both represent "no value" but with different meanings. Understanding the difference between null and undefined helps avoid bugs and write more accurate code.

## Khái niệm chính / Main Concepts

### Undefined

```javascript
// Biến được khai báo nhưng chưa gán giá trị / Variable declared but not assigned
let x;
console.log(x); // undefined

// Function không return / Function without return
function noReturn() {
    // Không có return statement / No return statement
}
console.log(noReturn()); // undefined

// Thuộc tính không tồn tại / Non-existent property
let obj = { name: 'John' };
console.log(obj.age); // undefined

// Parameter không được truyền / Parameter not passed
function greet(name) {
    console.log(name); // undefined nếu không truyền / undefined if not passed
}
greet();
```

### Null

```javascript
// Gán giá trị null có chủ ý / Intentionally assigned null
let user = null; // Không có user / No user

// Reset giá trị / Reset value
let data = { value: 42 };
data = null; // Xóa dữ liệu / Clear data

// API response có thể null / API response might be null
let response = fetchData(); // Có thể trả về null / Might return null
if (response !== null) {
    processData(response);
}
```

### Differences / Sự khác biệt

```javascript
// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (legacy bug / lỗi cũ)

// So sánh / Comparison
console.log(null == undefined);  // true (loose equality / so sánh lỏng lẻo)
console.log(null === undefined); // false (strict equality / so sánh nghiêm ngặt)

// Trong tính toán / In calculations
console.log(undefined + 5);  // NaN
console.log(null + 5);       // 5 (null -> 0)
```

### Checking for Null/Undefined / Kiểm tra Null/Undefined

```javascript
let value;

// Kiểm tra undefined / Check for undefined
if (value === undefined) {
    console.log('Value is undefined');
}

if (typeof value === 'undefined') {
    console.log('Type is undefined');
}

// Kiểm tra null / Check for null
let data = null;
if (data === null) {
    console.log('Data is null');
}

// Kiểm tra cả hai / Check both
if (value == null) { // null hoặc undefined / null or undefined
    console.log('Value is null or undefined');
}

// Nullish coalescing operator (??) / Toán tử gộp null
let result = value ?? 'default'; // Nếu null/undefined thì dùng 'default'
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Clarity**: Phân biệt rõ "chưa gán" vs "cố ý rỗng" / Distinguish "not assigned" vs "intentionally empty"
- **Error handling**: Xử lý trường hợp không có dữ liệu / Handle no-data cases
- **Type safety**: Kiểm tra và validate dữ liệu / Check and validate data

### Ứng dụng thực tế / Real-world Applications

- **API responses**: Xử lý data có thể null / Handle potentially null data
- **Optional parameters**: Function parameters tùy chọn / Optional function parameters
- **Database queries**: Xử lý kết quả không tìm thấy / Handle not-found results
- **Form data**: Kiểm tra input rỗng / Check empty inputs

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `===` để so sánh / Use `===` for comparison
- ✅ **DO**: Sử dụng null cho giá trị "cố ý rỗng" / Use null for "intentionally empty"
- ✅ **DO**: Sử dụng nullish coalescing (`??`) / Use nullish coalescing (`??`)
- ❌ **DON'T**: Không gán undefined cho biến / Don't assign undefined to variables

## Tài liệu tham khảo / References

- [MDN - null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)
- [MDN - undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
