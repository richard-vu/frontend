<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 8: Inheritance & Abstract Classes / Kế thừa và Lớp trừu tượng

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này đi sâu vào tính kế thừa (Inheritance) trong OOP với từ khóa `extends` và `super`. Ngoài ra, chúng ta sẽ tìm hiểu về Abstract Classes (Lớp trừu tượng) - những lớp chỉ dùng làm khuôn mẫu và không thể khởi tạo trực tiếp.

**EN**: This lesson dives into Inheritance in OOP using `extends` and `super` keywords. Additionally, we will explore Abstract Classes - classes intended only as blueprints and cannot be instantiated directly.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Inheritance (`extends`)**: Cho phép một Class con (Subclass) kế thừa các thuộc tính và phương thức của Class cha (Base class).
*   **Overriding**: Ghi đè phương thức của lớp cha để thay đổi hành vi trong lớp con.
*   **`super` Keyword**: Dùng để gọi constructor hoặc phương thức của lớp cha.
*   **Abstract Class (`abstract`)**: Lớp không thể tạo đối tượng (`new AbstractClass()` sẽ lỗi). Thường chứa các phương thức trừu tượng.
*   **Abstract Method**: Phương thức chỉ có khai báo tên và kiểu, không có phần thân (implementation). Lớp con BẮT BUỘC phải hiện thực phương thức này.

**EN**:
*   **Inheritance (`extends`)**: Allows a Subclass to inherit properties and methods from a Base class.
*   **Overriding**: Redefining a base class method to change behavior in the subclass.
*   **`super` Keyword**: Used to call the constructor or methods of the parent class.
*   **Abstract Class (`abstract`)**: A class that cannot be instantiated (`new AbstractClass()` will fail). Often contains abstract methods.
*   **Abstract Method**: A method with only name and type declaration, no implementation. Subclasses MUST implement this method.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Tái sử dụng mã (Code Reuse)**: Đưa các logic chung vào lớp cha, lớp con chỉ cần viết thêm logic riêng.
*   **Hợp đồng chặt chẽ (Strong Contract)**: Abstract method buộc các lớp con phải tuân thủ đúng hành vi đã định nghĩa.
*   **Đa hình (Polymorphism)**: Xử lý các đối tượng con thông qua kiểu của lớp cha hoặc lớp trừu tượng.

**EN**:
*   **Code Reuse**: Move common logic to the base class, subclasses only implement specific logic.
*   **Strong Contract**: Abstract methods force subclasses to strictly adhere to the defined behavior.
*   **Polymorphism**: Handle child objects via the base class or abstract class type.

## 4. Ví dụ / Example

```typescript
// 1. Abstract Class
abstract class Animal {
    constructor(public name: string) {}

    // Phương thức cụ thể (có thân hàm)
    // Concrete method
    move(): void {
        console.log(`${this.name} is moving.`);
    }

    // Phương thức trừu tượng (không có thân hàm)
    // Abstract method (no body)
    abstract makeSound(): void; 
}

// 2. Inheritance & Implementation
class Dog extends Animal {
    constructor(name: string) {
        super(name); // Gọi constructor của lớp cha
    }

    // Hiện thực abstract method
    // Implement abstract method
    makeSound(): void {
        console.log("Woof! Woof!");
    }

    // Override phương thức move
    move(): void {
        console.log("Dog runs...");
        super.move(); // Gọi method move của Animal
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow...");
    }
}

// const pet = new Animal("Pet"); // Error: Cannot create an instance of an abstract class.

const dog = new Dog("Buddy");
dog.makeSound(); // "Woof! Woof!"
dog.move();      // "Dog runs..." then "Buddy is moving."

const cat = new Cat("Whiskers");
cat.makeSound(); // "Meow..."
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Classes](./lesson-07-classes.md) | [Bài sau / Next: Generics Basics](./lesson-09-generics-basics.md) >
