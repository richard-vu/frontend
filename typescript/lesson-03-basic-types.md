<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 3: Basic Types / Các kiểu dữ liệu cơ bản

## 1. Mô tả tóm tắt / Short Description
**VN**: Giới thiệu các kiểu dữ liệu cơ bản nhất trong TypeScript như `string`, `number`, `boolean`, mảng (`Array`), `Tuple`, `Enum`, và các kiểu đặc biệt như `any`, `void`, `null`/`undefined`.

**EN**: Introduction to the most basic data types in TypeScript such as `string`, `number`, `boolean`, `Array`, `Tuple`, `Enum`, and special types like `any`, `void`, `null`/`undefined`.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Primitives**: `string` (chuỗi), `number` (số), `boolean` (true/false).
*   **Array**: Mảng chứa các phần tử cùng kiểu, ví dụ `number[]` hoặc `Array<string>`.
*   **Tuple**: Mảng có độ dài cố định và kiểu dữ liệu biết trước cho từng vị trí, ví dụ `[string, number]`.
*   **Enum**: Tập hợp các hằng số có tên, giúp code dễ đọc hơn.
*   **Special Types**:
    *   `any`: Chấp nhận mọi kiểu (tắt tính năng kiểm tra kiểu - nên hạn chế dùng).
    *   `void`: Không trả về giá trị (thường dùng cho hàm).
    *   `null` / `undefined`: Các giá trị rỗng hoặc chưa xác định.

**EN**:
*   **Primitives**: `string`, `number`, `boolean`.
*   **Array**: A list of elements of the same type, e.g., `number[]` or `Array<string>`.
*   **Tuple**: An array with a fixed length and known types for each position, e.g., `[string, number]`.
*   **Enum**: A set of named constants, making code more readable.
*   **Special Types**:
    *   `any`: Accepts any type (disables type checking - use sparingly).
    *   `void`: returns no value (usually for functions).
    *   `null` / `undefined`: Empty or undefined values.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Nền tảng (Foundation)**: Hiểu rõ các kiểu cơ bản là bước đầu tiên để xây dựng ứng dụng an toàn.
*   **Ngăn chặn lỗi (Error Prevention)**: Tránh việc gán nhầm kiểu dữ liệu (ví dụ: gán chuỗi vào biến số).
*   **Rõ ràng (Clarity)**: Code tự mô tả ý nghĩa của dữ liệu thông qua kiểu (ví dụ: `Status.Active` dễ hiểu hơn số `1`).

**EN**:
*   **Foundation**: Understanding basic types is the first step to building safe applications.
*   **Error Prevention**: Avoids assigning wrong data types (e.g., assigning a string to a number variable).
*   **Clarity**: Code self-describes data meaning through types (e.g., `Status.Active` is clearer than number `1`).

## 4. Ví dụ / Example

```typescript
// 1. Primitives
let username: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;

// 2. Arrays
let scores: number[] = [10, 20, 30];
let fruits: Array<string> = ["Apple", "Banana"];

// 3. Tuple
// Mảng cố định: phần tử đầu là string, thứ hai là number
// Fixed array: first element is string, second is number
let userTuple: [string, number];
userTuple = ["Alice", 30]; 
// userTuple = [30, "Alice"]; // Error

// 4. Enum
enum Status {
    New,
    Active,
    Inactive
}
let currentStatus: Status = Status.Active;

// 5. Any vs Void
let randomValue: any = 10;
randomValue = "Hello"; // OK (nhưng không an toàn / but unsafe)

function logMessage(msg: string): void {
    console.log(msg);
    // return true; // Error
}

// 6. Union Type (Kết hợp nhiều kiểu - xem thêm bài sau)
let id: string | number;
id = 101;
id = "User-101";
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Setting up Development Environment](./lesson-02-setup-environment.md) | [Bài sau / Next: Functions](./lesson-04-functions.md) >
