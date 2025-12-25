<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 7: Classes / Lớp

## 1. Mô tả tóm tắt / Short Description
**VN**: Giới thiệu về Classes trong TypeScript, hỗ trợ đầy đủ lập trình hướng đối tượng (OOP). Bài học này tập trung vào các tính năng như Access Modifiers (public, private, protected), Readonly properties và Accessors (Getters/Setters).

**EN**: Introduction to Classes in TypeScript, fully supporting Object-Oriented Programming (OOP). This lesson focuses on features like Access Modifiers (public, private, protected), Readonly properties, and Accessors (Getters/Setters).

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Class Members**: Bao gồm thuộc tính (Properties), phương thức (Methods) và hàm khởi tạo (Constructor).
*   **Access Modifiers**:
    *   `public` (mặc định): Truy cập được từ bất cứ đâu.
    *   `private`: Chỉ truy cập được từ bên trong class đó.
    *   `protected`: Truy cập được từ bên trong class đó và các class con kế thừa.
*   **Readonly**: Làm cho thuộc tính trở thành chỉ đọc (không thể gán lại giá trị ngoài constructor).
*   **Getters / Setters**: Kiểm soát việc truy cập và gán giá trị cho thuộc tính private.

**EN**:
*   **Class Members**: Includes Properties, Methods, and Constructor.
*   **Access Modifiers**:
    *   `public` (default): Accessible from anywhere.
    *   `private`: Accessible only within the class itself.
    *   `protected`: Accessible within the class itself and its subclasses.
*   **Readonly**: Makes a property read-only (cannot be reassigned outside the constructor).
*   **Getters / Setters**: Control access and assignment to private properties.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Đóng gói (Encapsulation)**: Che giấu dữ liệu nội bộ bằng `private`/`protected`, chỉ lộ ra những gì cần thiết qua phương thức `public`.
*   **Cấu trúc rõ ràng**: Giúp tổ chức code theo tư duy hướng đối tượng, dễ quản lý state phức tạp.
*   **An toàn**: Ngăn chặn việc sửa đổi dữ liệu quan trọng một cách vô ý từ bên ngoài.

**EN**:
*   **Encapsulation**: Hide internal data using `private`/`protected`, exposing only what is necessary via `public` methods.
*   **Clear Structure**: Helps organize code with OOP thinking, easier to manage complex state.
*   **Safety**: Prevents accidental modification of critical data from the outside.

## 4. Ví dụ / Example

```typescript
class Employee {
    // Properties
    public name: string;
    private _salary: number; // Private convention usually starts with _
    readonly id: number;

    // Constructor
    constructor(id: number, name: string, initialSalary: number) {
        this.id = id;
        this.name = name;
        this._salary = initialSalary;
    }

    // Method
    public work(): void {
        console.log(`${this.name} is working.`);
    }

    // Getter
    get salary(): number {
        return this._salary;
    }

    // Setter
    set salary(amount: number) {
        if (amount < 0) {
            console.log("Salary cannot be negative!");
            return;
        }
        this._salary = amount;
    }
}

const emp = new Employee(1, "Alice", 1000);
console.log(emp.name); // OK (public)
emp.work();            // OK
// emp._salary;        // Error: Property '_salary' is private
// emp.id = 2;         // Error: Property 'id' is readonly

// Using Setter & Getter
emp.salary = 2000;     // Calls setter
console.log(emp.salary); // Calls getter (2000)
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Union Types & Narrowing](./lesson-06-union-types.md) | [Bài sau / Next: Inheritance & Abstract Classes](./lesson-08-inheritance-abstract-classes.md) >
