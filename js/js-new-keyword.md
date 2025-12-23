# The "new" Keyword / Từ khóa "new"

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Function Expressions](./js-function-expressions.md)  
**➡️ Bài sau / Next:** [The "return" Keyword](./js-return-keyword.md)

---

## Mô tả / Description

Bài học này giới thiệu cách gọi hàm bằng từ khóa "new" để tạo các đối tượng. Từ khóa `new` được sử dụng với constructor functions để tạo instances of objects. Đây là nền tảng quan trọng cho OOP (Object-Oriented Programming) trong JavaScript.

This lesson introduces calling functions with the "new" keyword to create objects. The `new` keyword is used with constructor functions to create instances of objects. This is an important foundation for OOP (Object-Oriented Programming) in JavaScript.

## Khái niệm chính / Main Concepts

### Constructor Functions / Hàm Khởi tạo

```javascript
// Constructor function (PascalCase naming) / Hàm khởi tạo (đặt tên PascalCase)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hi, I'm ${this.name}`);
    };
}

// Tạo instance với new / Create instance with new
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.name); // "John"
person2.greet(); // "Hi, I'm Jane"
```

### The `new` Keyword Process / Quá trình của `new`

```javascript
// Khi dùng new, JavaScript thực hiện 4 bước:
// When using new, JavaScript performs 4 steps:
// 1. Tạo empty object mới / Create new empty object
// 2. Set this = object mới đó / Set this = that new object
// 3. Execute constructor code / Thực thi code constructor
// 4. Return this (object mới) / Return this (new object)

function Car(brand, model) {
    // Step 1, 2: this = {} (được tạo tự động / created automatically)
    
    // Step 3: Thêm properties / Add properties
    this.brand = brand;
    this.model = model;
    
    // Step 4: return this (tự động / automatic)
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar); // Car { brand: 'Toyota', model: 'Camry' }
```

### Constructor vs Regular Function / Constructor vs Hàm thường

```javascript
function User(name) {
    this.name = name;
}

// Với new - trả về object / With new - returns object
const user1 = new User('Alice');
console.log(user1); // User { name: 'Alice' }

// Không có new - this là undefined (strict mode) / Without new - this is undefined (strict mode)
const user2 = User('Bob'); // Không nên làm / Don't do this
console.log(user2); // undefined
```

### Checking instanceof / Kiểm tra instanceof

```javascript
function Animal(type) {
    this.type = type;
}

const dog = new Animal('Dog');

// Kiểm tra instance / Check instance
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
```

### Built-in Constructors / Constructors có sẵn

```javascript
// Built-in constructors / Constructors có sẵn
const arr = new Array(1, 2, 3);    // [1, 2, 3]
const obj = new Object();           // {}
const date = new Date();            // Current date/time
const regex = new RegExp('\\d+');  // /\d+/

// Khuyến nghị dùng literals / Recommended to use literals
const arr2 = [1, 2, 3];            // Tốt hơn / Better
const obj2 = {};                    // Tốt hơn / Better
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Object creation**: Tạo nhiều objects với cùng structure / Create multiple objects with same structure
- **Code reusability**: Tái sử dụng constructor logic / Reuse constructor logic
- **Prototype chain**: Kế thừa methods qua prototype / Inherit methods via prototype
- **OOP foundation**: Nền tảng cho lập trình hướng đối tượng / Foundation for object-oriented programming

### Ứng dụng thực tế / Real-world Applications

- **User objects**: Tạo nhiều user instances / Create multiple user instances
- **Game entities**: Tạo characters, enemies / Create characters, enemies
- **UI components**: Tạo reusable components / Create reusable components
- **Data models**: Model hóa dữ liệu / Model data structures

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Đặt tên constructor với PascalCase / Name constructors with PascalCase
- ✅ **DO**: Luôn dùng `new` với constructors / Always use `new` with constructors
- ✅ **DO**: Thêm methods vào prototype thay vì trong constructor / Add methods to prototype instead of in constructor
- ❌ **DON'T**: Không quên từ khóa `new` / Don't forget the `new` keyword
- ❌ **DON'T**: Không dùng `new` với arrow functions / Don't use `new` with arrow functions

## Tài liệu tham khảo / References

- [MDN - new Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN - Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_a_constructor_function)
