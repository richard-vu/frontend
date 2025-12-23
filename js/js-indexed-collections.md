# Indexed Collections / Bộ sưu tập có Chỉ mục

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Property Descriptors](./js-property-descriptors.md)  
**➡️ Bài sau / Next:** [Keyed Collections](./js-keyed-collections.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng các bộ sưu tập được lập chỉ mục như mảng (arrays) và typed arrays. Arrays là cấu trúc dữ liệu quan trọng nhất trong JavaScript để lưu trữ danh sách các items. Bạn sẽ học về array methods và cách xử lý dữ liệu hiệu quả.

This lesson explores how to use indexed collections like arrays and typed arrays. Arrays are the most important data structure in JavaScript for storing lists of items. You will learn about array methods and how to process data efficiently.

## Khái niệm chính / Main Concepts

### Creating Arrays / Tạo Mảng

```javascript
// Array literal / Array literal
const fruits = ['apple', 'banana', 'orange'];

// Array constructor / Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Tạo array rỗng với length / Create empty array with length
const empty = new Array(5); // [empty × 5]

// Array.from() - tạo từ iterable / Array.from() - create from iterable
const str = 'hello';
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

// Array.of()
const nums = Array.of(1, 2, 3); // [1, 2, 3]
```

### Array Methods - Iteration / Phương thức Mảng - Lặp

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - lặp qua mỗi element / forEach - iterate through each element
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map - transform mỗi element / map - transform each element
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter - lọc elements / filter - filter elements
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce - gộp thành một giá trị / reduce - reduce to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
// 15

// find - tìm element đầu tiên / find - find first element
const found = numbers.find(num => num > 3);
// 4

// findIndex - tìm index / findIndex - find index
const index = numbers.findIndex(num => num > 3);
// 3
```

### Array Methods - Modification / Phương thức Mảng - Sửa đổi

```javascript
const arr = [1, 2, 3];

// push - thêm vào cuối / push - add to end
arr.push(4, 5); // [1, 2, 3, 4, 5]

// pop - xóa từ cuối / pop - remove from end
const last = arr.pop(); // 5, arr = [1, 2, 3, 4]

// unshift - thêm vào đầu / unshift - add to beginning
arr.unshift(0); // [0, 1, 2, 3, 4]

// shift - xóa từ đầu / shift - remove from beginning
const first = arr.shift(); // 0, arr = [1, 2, 3, 4]

// splice - thêm/xóa ở vị trí bất kỳ / splice - add/remove at any position
arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4]
```

### Array Methods - Searching / Phương thức Mảng - Tìm kiếm

```javascript
const fruits = ['apple', 'banana', 'orange', 'banana'];

// indexOf - tìm index đầu tiên / indexOf - find first index
console.log(fruits.indexOf('banana')); // 1

// lastIndexOf - tìm index cuối cùng / lastIndexOf - find last index
console.log(fruits.lastIndexOf('banana')); // 3

// includes - kiểm tra tồn tại / includes - check existence
console.log(fruits.includes('apple')); // true

// some - kiểm tra ít nhất một / some - check if at least one
const hasLongName = fruits.some(fruit => fruit.length > 6);
// false

// every - kiểm tra tất cả / every - check if all
const allStrings = fruits.every(item => typeof item === 'string');
// true
```

### Array Methods - Combining / Phương thức Mảng - Kết hợp

```javascript
// concat - nối arrays / concat - join arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]

// Spread operator / Toán tử spread
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// join - chuyển thành string / join - convert to string
const fruits = ['apple', 'banana'];
const str = fruits.join(', '); // "apple, banana"

// slice - copy phần của array / slice - copy part of array
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4); // [2, 3, 4]
```

### Array Sorting / Sắp xếp Mảng

```javascript
// sort - sắp xếp / sort - sort array
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// Số (cần compare function) / Numbers (need compare function)
numbers.sort((a, b) => a - b); // Ascending / Tăng dần
// [1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort((a, b) => b - a); // Descending / Giảm dần
// [9, 6, 5, 4, 3, 2, 1, 1]

// Strings
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort(); // ['apple', 'banana', 'cherry']

// reverse - đảo ngược / reverse - reverse array
fruits.reverse(); // ['cherry', 'banana', 'apple']
```

### Multidimensional Arrays / Mảng Nhiều chiều

```javascript
// 2D array / Mảng 2 chiều
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Truy cập element / Access element
console.log(matrix[1][2]); // 6

// Lặp qua 2D array / Iterate through 2D array
matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`[${i}][${j}] = ${cell}`);
    });
});
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Versatile**: Linh hoạt lưu trữ many types / Flexible storage for many types
- **Rich methods**: Nhiều built-in methods / Many built-in methods
- **Iteration**: Dễ dàng iterate / Easy to iterate
- **Performance**: Tối ưu cho sequential access / Optimized for sequential access

### Ứng dụng thực tế / Real-world Applications

- **Data lists**: Danh sách users, products / Lists of users, products
- **API responses**: Xử lý array data từ server / Handle array data from server
- **Algorithms**: Sorting, searching, filtering / Sorting, searching, filtering
- **UI rendering**: Render lists trong React/Vue / Render lists in React/Vue

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng array methods thay vì loops / Use array methods instead of loops
- ✅ **DO**: Sử dụng immutable methods (map, filter) / Use immutable methods (map, filter)
- ✅ **DO**: Sử dụng spread operator cho copying / Use spread operator for copying
- ❌ **DON'T**: Không mutate arrays khi không cần / Don't mutate arrays unnecessarily
- ❌ **DON'T**: Không dùng `delete` để xóa array elements / Don't use `delete` to remove array elements

## Tài liệu tham khảo / References

- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Arrays](https://javascript.info/array)
