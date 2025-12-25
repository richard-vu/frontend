<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 9: Generics Basics / Cơ bản về Generics

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này giới thiệu về Generics trong TypeScript, một tính năng mạnh mẽ cho phép bạn tạo ra các thành phần (component) có thể tái sử dụng, hoạt động linh hoạt với nhiều kiểu dữ liệu khác nhau thay vì chỉ một kiểu duy nhất, đồng thời vẫn giữ được tính an toàn kiểu (type safety).

**EN**: This lesson introduces Generics in TypeScript, a powerful feature that allows you to create reusable components capable of working flexibly with various data types instead of a single one, while still maintaining type safety.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Generics**: Là cơ chế cho phép định nghĩa hàm, lớp hoặc interface với các kiểu dữ liệu "tham số" (type parameters). Giống như hàm nhận tham số giá trị, Generics nhận tham số là kiểu dữ liệu.
*   **Biến kiểu (Type Variable)**: Thường được ký hiệu là `<T>` (viết tắt của Type), `<U>`, `<V>`,... Đây là một loại biến đặc biệt hoạt động trên các kiểu thay vì các giá trị. Nó cho phép chúng ta nắm bắt kiểu mà người dùng cung cấp (ví dụ: `number` hoặc `string`).
*   **Suy diễn kiểu (Type Inference)**: Trong nhiều trường hợp, TypeScript có thể tự động suy ra kiểu của `T` dựa trên giá trị đối số truyền vào mà không cần khai báo rõ ràng.

**EN**:
*   **Generics**: A mechanism for defining functions, classes, or interfaces with "type parameters". Just as functions accept value parameters, Generics accept type parameters.
*   **Type Variable**: Often denoted as `<T>` (short for Type), `<U>`, `<V>`, etc. This is a special kind of variable that works on types rather than values. It allows us to capture the type the user provides (e.g., `number` or `string`).
*   **Type Inference**: In many cases, TypeScript can automatically infer the type of `T` based on the passed argument value without explicit declaration.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Tái sử dụng mã (Reusability)**: Bạn có thể viết một hàm hoặc lớp duy nhất xử lý logic chung cho nhiều kiểu dữ liệu khác nhau, tránh việc phải viết lặp lại code cho từng kiểu `number`, `string`, `boolean`, v.v.
*   **An toàn kiểu (Type Safety)**: Khác với việc sử dụng `any` (chấp nhận mọi kiểu nhưng mất đi sự kiểm tra), Generics đảm bảo rằng kiểu dữ liệu vào và ra là nhất quán. Trình biên dịch sẽ báo lỗi nếu bạn sử dụng sai kiểu.
*   **Linh hoạt (Flexibility)**: Giúp xây dựng các thư viện hoặc API dùng chung mà không cần biết trước chính xác kiểu dữ liệu của người dùng.

**EN**:
*   **Reusability**: You can write a single function or class that handles common logic for various data types, avoiding code duplication for `number`, `string`, `boolean`, etc.
*   **Type Safety**: Unlike using `any` (which accepts types but loses checking), Generics ensure that input and output types are consistent. The compiler will catch errors if types are misused.
*   **Flexibility**: Helps build shared libraries or APIs without needing to know the user's exact data types in advance.

## 4. Ví dụ / Example

```typescript
// 1. Không sử dụng Generics (Phải định nghĩa riêng hoặc dùng any - không an toàn)
// Without Generics (Must define separately or use 'any' - unsafe)
function returnNumber(arg: number): number {
    return arg;
}
function returnString(arg: string): string {
    return arg;
}

// 2. Sử dụng Generics
// Using Generics
function identity<T>(arg: T): T {
    return arg;
}

// Cách gọi 1: Tường minh (Explicit)
// Call style 1: Explicit
let output1 = identity<string>("Hello Generic"); 
// T ở đây là string, kiểu trả về là string
// T here is string, return type is string

// Cách gọi 2: Suy diễn kiểu (Type Inference) - Phổ biến hơn
// Call style 2: Type Inference - More common
let output2 = identity(100); 
// TypeScript tự hiểu T là number
// TypeScript automatically infers T is number

console.log(output1); // "Hello Generic"
console.log(output2); // 100

// Ví dụ với Arrow Function
const identityArrow = <T>(arg: T): T => {
    return arg;
};
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Inheritance & Abstract Classes](./lesson-08-inheritance-abstract-classes.md) | [Bài sau / Next: Generic Constraints](./lesson-10-generic-constraints.md) >
