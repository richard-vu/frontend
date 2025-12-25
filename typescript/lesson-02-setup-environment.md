<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 2: Setting up Development Environment / Cài đặt môi trường phát triển

## 1. Mô tả tóm tắt / Short Description
**VN**: Hướng dẫn cài đặt các công cụ cần thiết để lập trình TypeScript, bao gồm Node.js, trình biên dịch TypeScript (`tsc`) và cách cấu hình dự án với file `tsconfig.json`.

**EN**: A guide to installing the necessary tools for TypeScript programming, including Node.js, the TypeScript compiler (`tsc`), and how to configure the project with `tsconfig.json`.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Node.js & npm**: TypeScript cần Node.js để chạy trình biên dịch. npm (Node Package Manager) dùng để cài đặt TypeScript.
*   **TypeScript Compiler (`tsc`)**: Công cụ dòng lệnh chuyển đổi code `.ts` sang `.js`.
*   **`tsconfig.json`**: File cấu hình gốc của dự án TypeScript, quy định cách trình biên dịch hoạt động (phiên bản JS đích, thư mục đầu ra, quy tắc kiểm tra lỗi, v.v.).

**EN**:
*   **Node.js & npm**: TypeScript requires Node.js to run the compiler. npm (Node Package Manager) is used to install TypeScript.
*   **TypeScript Compiler (`tsc`)**: The command-line tool that converts `.ts` code to `.js`.
*   **`tsconfig.json`**: The root configuration file for a TypeScript project, specifying how the compiler behaves (target JS version, output directory, strictness rules, etc.).

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Môi trường chuẩn (Standard Environment)**: Đảm bảo code chạy giống nhau trên mọi máy của thành viên trong team.
*   **Tùy biến cao (Customization)**: `tsconfig.json` cho phép tinh chỉnh dự án theo nhu cầu cụ thể (ví dụ: React, Backend, Library).
*   **Tự động hóa (Automation)**: Có thể kết hợp `tsc` với các công cụ build khác để tự động biên dịch khi file thay đổi (`--watch`).

**EN**:
*   **Standard Environment**: Ensures code runs identically on every team member's machine.
*   **Customization**: `tsconfig.json` allows fine-tuning the project to specific needs (e.g., React, Backend, Library).
*   **Automation**: `tsc` can be combined with other build tools to automatically compile when files change (`--watch`).

## 4. Ví dụ / Example

### Cài đặt / Installation

```bash
# 1. Cài đặt TypeScript toàn cục (Global)
# 1. Install TypeScript globally
npm install -g typescript

# Kiểm tra phiên bản
# Check version
tsc -v
```

### Tạo dự án đầu tiên / Create first project

```bash
# 2. Khởi tạo file tsconfig.json
# 2. Initialize tsconfig.json
tsc --init
```

### Viết code và biên dịch / Write code and compile

Tạo file `hello.ts`:
Create file `hello.ts`:

```typescript
// hello.ts
const greeting: string = "Hello World!";
console.log(greeting);
```

Chạy lệnh biên dịch:
Run compile command:

```bash
tsc hello.ts
# Sẽ tạo ra file hello.js
# Will generate hello.js
```

Chạy file JS vừa tạo:
Run the generated JS file:

```bash
node hello.js
# Output: Hello World!
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Introduction to TypeScript](./lesson-01-introduction.md) | [Bài sau / Next: Basic Types](./lesson-03-basic-types.md) >
