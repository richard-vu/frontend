# Introduction to Classes / Giới thiệu về Lớp

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Keyed Collections](./js-keyed-collections.md)  
**➡️ Bài sau / Next:** [Extend Classes](./js-extend-classes.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng các lớp (classes) trong JavaScript. Classes được thêm trong ES6 như syntactic sugar cho constructor functions và prototypes. Chúng cung cấp cú pháp rõ ràng hơn cho object-oriented programming.

This lesson explores how to use classes in JavaScript. Classes were added in ES6 as syntactic sugar for constructor functions and prototypes. They provide clearer syntax for object-oriented programming.

## Khái niệm chính / Main Concepts

### Class Declaration / Khai báo Class

```javascript
// Khai báo class/ Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
    
    getAge() {
        return this.age;
    }
}

// Tạo instance / Create instance
const john = new Person('John', 30);
john.greet(); // "Hello, I'm John"
```

### Class Expression / Biểu thức Class

```javascript
// Named class expression / Biểu thức class có tên
const Person = class PersonClass {
    constructor(name) {
        this.name = name;
    }
};

// Anonymous class expression / Biểu thức class ẩn danh
const Animal = class {
    constructor(type) {
        this.type = type;
    }
};
```

### Constructor / Constructor

```javascript
class User {
    constructor(name, email) {
        // Khởi tạo properties / Initialize properties
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
}

const user = new User('Alice', 'alice@example.com');
console.log(user.name); // "Alice"
console.log(user.createdAt);
```

### Methods / Phương thức

```javascript
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    
    // Instance methods / Methods của instance
    add(num) {
        this.value += num;
        return this; // Method chaining / Nối methods
    }
    
    subtract(num) {
        this.value -= num;
        return this;
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    getValue() {
        return this.value;
    }
}

const calc = new Calculator(10);
calc.add(5).multiply(2).subtract(10);
console.log(calc.getValue()); // 20
```

### Getters and Setters / Getters và Setters

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Getter
    get area() {
        return this.width * this.height;
    }
    
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    // Setter với validation / Setter with validation
    set width(value) {
        if (value <= 0) {
            throw new Error('Width phải > 0 / Width must be > 0');
        }
        this._width = value;
    }
    
    get width() {
        return this._width;
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50 (không cần dấu ngoặc / no parentheses)
```

### Static Methods / Phương thức Tĩnh

```javascript
class MathUtils {
    // Static method - gọi trên class, không phải instance
    // Static method - called on class, not instance
    static add(a, b) {
        return a + b;
    }
    
    static max(...numbers) {
        return Math.max(...numbers);
    }
    
    static PI = 3.14159; // Static property
}

// Gọi static method / Call static method
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.max(1, 5, 3, 9, 2)); // 9
console.log(MathUtils.PI); // 3.14159

// Không thể gọi từ instance / Cannot call from instance
// const math = new MathUtils();
// math.add(1, 2); // Error!
```

### Private Fields / Trường Riêng tư

```javascript
// Private fields (ES2022+) với # / Private fields (ES2022+) with #
class BankAccount {
    #balance = 0; // Private field / Trường riêng tư
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return amount;
        }
        return 0;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new Bank Account(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // Error! Private field
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Clear syntax**: Cú pháp rõ ràng cho OOP / Clear syntax for OOP
- **Encapsulation**: Đóng gói data và behavior / Encapsulate data and behavior
- **Inheritance**: Dễ dàng extend classes / Easy to extend classes
- **Private fields**: Thực sự private với # / True privacy with #

### Ứng dụng thực tế / Real-world Applications

- **UI components**: React/Vue components / React/Vue components
- **Data models**: User, Product models / User, Product models
- **Game entities**: Players, enemies, items / Players, enemies, items
- **API clients**: HTTP clients, service classes / HTTP clients, service classes

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng PascalCase cho class names / Use PascalCase for class names
- ✅ **DO**: Khởi tạo properties trong constructor / Initialize properties in constructor
- ✅ **DO**: Sử dụng private fields (#) cho internal state / Use private fields (#) for internal state
- ❌ **DON'T**: Không dùng arrow functions cho methods / Don't use arrow functions for methods
- ❌ **DON'T**: Không quên `new` khi tạo instance / Don't forget `new` when creating instance

## Tài liệu tham khảo / References

- [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - Classes](https://javascript.info/classes)
