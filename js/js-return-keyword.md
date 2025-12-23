# The "return" Keyword / Từ khóa "return"

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [The "new" Keyword](./js-new-keyword.md)  
**➡️ Bài sau / Next:** [The "this" Keyword](./js-this-keyword.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng từ khóa "return" để nhận kết quả từ các hàm của bạn. Return statement cho phép functions trả về giá trị để sử dụng ở nơi khác trong code. Hiểu rõ return giúp viết functions hiệu quả và tránh bugs.

This lesson introduces how to use the "return" keyword to receive results from your functions. Return statements allow functions to return values for use elsewhere in code. Understanding return helps write effective functions and avoid bugs.

## Khái niệm chính / Main Concepts

### Basic Return / Return cơ bản

```javascript
// Return giá trị đơn giản / Return simple value
function add(a, b) {
    return a + b;  // Trả về tổng / Return sum
}

const result = add(5, 3);
console.log(result); // 8

// Return string / Trả về chuỗi
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // "Hello, Alice!"
```

### Return Stops Execution / Return dừng thực thi

```javascript
// Code sau return không chạy / Code after return doesn't execute
function checkAge(age) {
    if (age < 18) {
        return 'Too young';  // Dừng ngay / Stops here
    }
    return 'Access granted';
}

// Multiple returns / Nhiều returns
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'F';
}
```

### Return Objects and Arrays / Return Objects và Mảng

```javascript
// Return object / Trả về object
function createUser(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

const user = createUser('John', 25);
console.log(user.name); // "John"

// Return array / Trả về mảng
function getCoordinates() {
    return [10, 20]; // [x, y]
}

const [x, y] = getCoordinates();
console.log(x, y); // 10 20
```

### Return from Arrow Functions / Return từ Arrow Functions

```javascript
// Explicit return / Return tường minh
const multiply = (a, b) => {
    return a * b;
};

// Implicit return (không cần return keyword) / Implicit return (no return keyword needed)
const square = x => x * x;

// Return object cần dấu ngoặc / Return object needs parentheses  
const createPoint = (x, y) => ({ x, y });
```

### Function Without Return / Hàm không có Return

```javascript
// Không có return statement / No return statement
function logMessage(msg) {
    console.log(msg);
    // Tự động return undefined / Automatically returns undefined
}

const result = logMessage('Hello');
console.log(result); // undefined

// Empty return / Return rỗng
function doSomething() {
    console.log('Doing...');
    return; // Tương đương return undefined / Equivalent to return undefined
}
```

### Return in Callbacks / Return trong Callbacks

```javascript
// Return trong array methods / Return in array methods
const numbers = [1, 2, 3, 4, 5];

// map: return để transform / map: return to transform
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: return boolean / filter: return boolean
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce: return accumulated value / reduce: return giá trị tích lũy
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Value passing**: Truyền giá trị giữa các functions / Pass values between functions
- **Code flow control**: Kiểm soát luồng thực thi / Control execution flow
- **Functional programming**: Nền tảng cho FP patterns / Foundation for FP patterns
- **Reusability**: Functions có return value dễ tái sử dụng / Functions with return values are more reusable

### Ứng dụng thực tế / Real-world Applications

- **Calculations**: Tính toán và trả về kết quả / Calculate and return results
- **Data transformation**: Transform dữ liệu / Transform data
- **Validation**: Kiểm tra và trả về boolean / Validate and return boolean
- **API responses**: Xử lý và trả về data / Process and return data

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Return giá trị hữu ích / Return meaningful values
- ✅ **DO**: Consistent return types / Cùng kiểu return trong một function
- ✅ **DO**: Sử dụng early returns để tránh nested code / Use early returns to avoid nested code
- ❌ **DON'T**: Không return trong constructors (dùng với `new`) / Don't return in constructors (used with `new`)
- ❌ **DON'T**: Không có code unreachable sau return / Don't have unreachable code after return

## Tài liệu tham khảo / References

- [MDN - return Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [JavaScript.info - Function Returning](https://javascript.info/function-basics#returning-a-value)
