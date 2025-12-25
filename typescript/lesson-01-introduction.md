<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 1: Introduction to TypeScript / Giới thiệu về TypeScript

## 1. Mô tả tóm tắt / Short Description
**VN**: Tổng quan về TypeScript, ngôn ngữ lập trình được xây dựng trên nền tảng JavaScript, giúp phát triển ứng dụng quy mô lớn dễ dàng hơn nhờ hệ thống kiểu tĩnh (static typing).

**EN**: An overview of TypeScript, a programming language built on top of JavaScript, making it easier to develop large-scale applications thanks to its static typing system.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Superset của JavaScript**: Mọi code JavaScript hợp lệ đều là code TypeScript hợp lệ. TypeScript chỉ thêm các tính năng mới (chủ yếu là kiểu dữ liệu) vào JS.
*   **Static Typing (Kiểu tĩnh)**: Khai báo kiểu dữ liệu cho biến, tham số hàm ngay từ khi viết code. Lỗi sai kiểu sẽ được báo ngay lúc biên dịch (compile time) thay vì lúc chạy (runtime).
*   **Biên dịch (Transpilation)**: Trình duyệt không hiểu TypeScript, nên nó cần được "biên dịch" sang JavaScript thường để chạy.

**EN**:
*   **Superset of JavaScript**: All valid JavaScript code is valid TypeScript code. TypeScript only adds new features (mostly types) to JS.
*   **Static Typing**: Declaring data types for variables and function parameters right when writing code. Type errors are reported at compile time rather than runtime.
*   **Transpilation**: Browsers don't understand TypeScript, so it must be "transpiled" into regular JavaScript to run.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Giảm thiểu lỗi (Fewer Bugs)**: Phát hiện các lỗi ngớ ngẩn (như sai tên biến, sai kiểu dữ liệu) ngay khi gõ code.
*   **Hỗ trợ code tốt hơn (Better Tooling)**: Các IDE như VS Code hỗ trợ gợi ý code (IntelliSense), document nhanh và refactor cực kỳ mạnh mẽ.
*   **Dễ bảo trì (Maintainability)**: Code dễ đọc, dễ hiểu hơn nhờ các định nghĩa kiểu rõ ràng, đặc biệt quan trọng trong team đông người.

**EN**:
*   **Fewer Bugs**: Catch silly mistakes (like typo variable names, wrong data types) right as you type.
*   **Better Tooling**: IDEs like VS Code provide excellent code suggestions (IntelliSense), quick documentation, and powerful refactoring.
*   **Maintainability**: Code is easier to read and understand thanks to clear type definitions, which is especially important in large teams.

## 4. Ví dụ / Example

```typescript
// JavaScript: Không báo lỗi cho đến khi chạy
// JavaScript: No error until runtime
function addJS(a, b) {
    return a + b;
}
// console.log(addJS("5", 10)); // "510" (Kết quả không mong muốn / Unexpected result)


// TypeScript: Báo lỗi ngay lập tức
// TypeScript: Reports error immediately
function addTS(a: number, b: number): number {
    return a + b;
}

// addTS("5", 10); 
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let result = addTS(5, 10); // OK
console.log(result); // 15
```

## 5. Điều hướng / Navigation
< [Không có / None] | [Bài sau / Next: Setting up Development Environment](./lesson-02-setup-environment.md) >
