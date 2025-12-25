<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 4: Functions / Hàm trong TypeScript

## 1. Mô tả tóm tắt / Short Description
**VN**: Hướng dẫn cách định nghĩa kiểu dữ liệu cho hàm trong TypeScript, bao gồm kiểu tham số (parameters), kiểu trả về (return type), tham số tùy chọn/mặc định, và khái niệm Function Overloading.

**EN**: A guide on defining data types for functions in TypeScript, including parameter types, return types, optional/default parameters, and Function Overloading.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Parameter & Return Types**: Khai báo kiểu dữ liệu cho tham số đầu vào và giá trị trả về của hàm.
*   **Optional Parameters (`?`)**: Đánh dấu tham số là không bắt buộc bằng dấu hỏi chấm `?`.
*   **Default Parameters**: Gán giá trị mặc định cho tham số nếu người dùng không truyền vào.
*   **Rest Parameters (`...args`)**: Thu thập nhiều tham số vào một mảng.
*   **Function Overloads**: Định nghĩa nhiều chữ ký (signature) khác nhau cho cùng một tên hàm để xử lý các loại input khác nhau.

**EN**:
*   **Parameter & Return Types**: Declaring specific types for input parameters and the return value of a function.
*   **Optional Parameters (`?`)**: Marking a parameter as not required using a question mark `?`.
*   **Default Parameters**: Assigning a default value to a parameter if none is provided.
*   **Rest Parameters (`...args`)**: Collecting multiple arguments into a single array array.
*   **Function Overloads**: Defining multiple signatures for the same function name to handle different types of input.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Hợp đồng rõ ràng (Clear Contract)**: Người dùng hàm biết chính xác cần truyền gì và nhận lại gì.
*   **Tránh lỗi runtime**: Ngăn chặn việc truyền thiếu tham số hoặc sai kiểu dữ liệu.
*   **Linh hoạt**: Xử lý nhiều trường hợp input khác nhau một cách an toàn với Overloading.

**EN**:
*   **Clear Contract**: Function users know exactly what to pass and what to expect in return.
*   **Avoid Runtime Errors**: Prevents passing missing parameters or incorrect data types.
*   **Flexibility**: Safely handle various input cases with Overloading.

## 4. Ví dụ / Example

```typescript
// 1. Basic Function (Tham số & Kiểu trả về)
function add(x: number, y: number): number {
    return x + y;
}

// 2. Optional Parameter (?)
// Tham số 'lastName' là tùy chọn
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

// 3. Default Parameter
// Nếu không truyền 'level', mặc định là "User"
function createUser(name: string, level: string = "User"): string {
    return `Created ${name} with level ${level}`;
}

// 4. Rest Parameters
// Nhận vào số lượng tham số không giới hạn
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 5. Function Overloads
// Định nghĩa các trường hợp (signatures)
function double(x: number): number;
function double(x: string): string;
// Implementation (phải handle tất cả các case)
function double(x: any): any {
    if (typeof x === "number") {
        return x * 2;
    } else if (typeof x === "string") {
        return x + x;
    }
}

const num = double(5); // 10
const str = double("Hi"); // "HiHi"
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Basic Types](./lesson-03-basic-types.md) | [Bài sau / Next: Objects & Interfaces](./lesson-05-objects-interfaces.md) >
