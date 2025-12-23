# Extend Classes / Mở rộng Lớp

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Introduction to Classes](./js-classes.md)  
**➡️ Bài sau / Next:** [Class Fields and Methods](./js-class-fields-methods.md)

---

## Mô tả / Description

Bài học này giới thiệu từ khóa "extends" cho phép bạn tạo các lớp con từ các lớp hiện có. Class inheritance cho phép tái sử dụng code và xây dựng hierarchies of classes. Đây là tính năng quan trọng của object-oriented programming.

This lesson introduces the "extends" keyword that allows you to create subclasses from existing classes. Class inheritance enables code reuse and building hierarchies of classes. This is an important feature of object-oriented programming.

## Khái niệm chính / Main Concepts

### Basic Inheritance / Kế thừa Cơ bản

```javascript
// Parent class / Lớp cha
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
    
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// Child class extends parent / Lớp con extends lớp cha
class Dog extends Animal {
    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

const dog = new Dog('Rex');
dog.eat();   // "Rex is eating" (inherited / kế thừa)
dog.bark();  // "Rex says Woof!" (own method / method riêng)
```

### super Keyword / Từ khóa super

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    describe() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        // Gọi parent constructor / Call parent constructor
        super(name, age);
        this.breed = breed;
    }
    
    describe() {
        // Gọi parent method / Call parent method
        super.describe();
        console.log(`Breed: ${this.breed}`);
    }
}

const dog = new Dog('Rex', 3, 'Labrador');
dog.describe();
// "Rex is 3 years old"
// "Breed: Labrador"
```

### Method Overriding / Ghi đè Phương thức

```javascript
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    draw() {
        console.log(`Drawing a ${this.color} shape`);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    // Override parent method / Ghi đè method cha
    draw() {
        console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle('red', 5);
circle.draw(); // "Drawing a red circle with radius 5"
```

### Multiple Levels of Inheritance / Nhiều cấp Kế thừa

```javascript
// Grandparent / Ông bà
class LivingBeing {
    constructor(name) {
        this.name = name;
    }
    
    breathe() {
        console.log(`${this.name} is breathing`);
    }
}

// Parent / Cha mẹ
class Animal extends LivingBeing {
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Child / Con
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog('Rex');
dog.breathe(); // Từ LivingBeing / From LivingBeing
dog.eat();     // Từ Animal / From Animal
dog.bark();    // Từ Dog / From Dog
```

### Static Methods Inheritance / Kế thừa Phương thức Tĩnh

```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

class AdvancedMath extends MathUtils {
    static power(base, exponent) {
        return base ** exponent;
    }
}

// Child kế thừa static methods / Child inherits static methods
console.log(AdvancedMath.add(5, 3));      // 8
console.log(AdvancedMath.power(2, 3));    // 8
```

### Extending Built-in Classes / Mở rộng Lớp có sẵn

```javascript
// Extend Array / Mở rộng Array
class MyArray extends Array {
    // Thêm custom method / Add custom method
    first() {
        return this[0];
    }
    
    last() {
        return this[this.length - 1];
    }
    
    // Override method / Ghi đè method
    toString() {
        return `MyArray: [${super.toString()}]`;
    }
}

const arr = new MyArray(1, 2, 3, 4, 5);
console.log(arr.first());     // 1
console.log(arr.last());      // 5
console.log(arr.toString());  // "MyArray: [1,2,3,4,5]"

// Vẫn có tất cả Array methods / Still has all Array methods
console.log(arr.map(x => x * 2)); // [2, 4, 6, 8, 10]
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Code reuse**: Tái sử dụng code từ parent class / Reuse code from parent class
- **Hierarchy**: Xây dựng class hierarchies logic / Build logical class hierarchies
- **Polymorphism**: Ghi đè methods cho behavior khác / Override methods for different behavior
- **Maintainability**: Thay đổi parent ảnh hưởng tất cả children / Changes to parent affect all children

### Ứng dụng thực tế / Real-world Applications

- **UI components**: Base component và specialized components / Base component and specialized components
- **Game entities**: Base Entity, Player extends Entity / Base Entity, Player extends Entity
- **Error types**: CustomError extends Error / CustomError extends Error
- **Data models**: BaseModel, UserModel extends BaseModel / BaseModel, UserModel extends BaseModel

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Gọi `super()` đầu tiên trong constructor / Call `super()` first in constructor
- ✅ **DO**: Sử dụng inheritance cho "is-a" relationships / Use inheritance for "is-a" relationships
- ✅ **DO**: Gọi `super.method()` khi override / Call `super.method()` when overriding
- ❌ **DON'T**: Không extend quá nhiều levels / Don't extend too many levels
- ❌ **DON'T**: Không dùng inheritance khi composition tốt hơn / Don't use inheritance when composition is better

## Tài liệu tham khảo / References

- [MDN - extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [MDN - super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [JavaScript.info - Class Inheritance](https://javascript.info/class-inheritance)
