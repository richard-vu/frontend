# Prototypal Inheritance / Kế thừa Nguyên mẫu

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Property Accessors](./js-property-accessors.md)  
**➡️ Bài sau / Next:** [Property Descriptors](./js-property-descriptors.md)

---

## Mô tả / Description

Bài học này giới thiệu về đối tượng JavaScript và kế thừa nguyên mẫu (prototypal inheritance). Prototype chain là cơ chế JavaScript sử dụng để kế thừa properties và methods. Hiểu prototype giúp tận dụng được sức mạnh của JavaScript OOP.

This lesson introduces JavaScript objects and prototypal inheritance. The prototype chain is the mechanism JavaScript uses to inherit properties and methods. Understanding prototypes helps leverage the power of JavaScript OOP.

## Khái niệm chính / Main Concepts

### Prototype Chain / Chuỗi Nguyên mẫu

```javascript
// Mọi object đều có prototype / Every object has a prototype
const obj = {};
console.log(obj.__proto__); // Object.prototype

// Prototype chain / Chuỗi nguyên mẫu
const arr = [];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null (end of chain / cuối chuỗi)
```

### Constructor Prototype / Prototype của Constructor

```javascript
// Constructor function / Hàm khởi tạo
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Thêm methods vào prototype / Add methods to prototype
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

Person.prototype.getAge = function() {
    return this.age;
};

// Tạo instances / Create instances
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

// Cả hai share cùng prototype methods / Both share same prototype methods
john.greet(); // "Hello, I'm John"
jane.greet(); // "Hello, I'm Jane"

console.log(john.greet === jane.greet); // true (cùng function / same function)
```

### Prototype Inheritance / Kế thừa  Prototype

```javascript
// Parent constructor / Constructor cha
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

// Child constructor / Constructor con
function Dog(name, breed) {
    Animal.call(this, name); // Gọi parent constructor / Call parent constructor
    this.breed = breed;
}

// Thiết lập inheritance / Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Thêm methods riêng / Add own methods
Dog.prototype.bark = function() {
    console.log(`${this.name} says Woof!`);
};

// Sử dụng / Usage
const dog = new Dog('Rex', 'Labrador');
dog.eat();  // "Rex is eating" (từ Animal / from Animal)
dog.bark(); // "Rex says Woof!" (từ Dog / from Dog)
```

### Object.create() / Object.create()

```javascript
// Tạo object với prototype cụ thể / Create object with specific prototype
const personPrototype = {
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

const john = Object.create(personPrototype);
john.name = 'John';
john.greet(); // "Hello, I'm John"

// Inheritance chain / Chuỗi kế thừa
const employee = Object.create(personPrototype);
employee.name = 'Jane';
employee.position = 'Developer';
employee.work = function() {
    console.log(`${this.name} is working as ${this.position}`);
};
```

### Checking Prototype / Kiểm tra Prototype

```javascript
function Person(name) {
    this.name = name;
}

const john = new Person('John');

// instanceof - kiểm tra prototype chain / instanceof - check prototype chain
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// isPrototypeOf()
console.log(Person.prototype.isPrototypeOf(john)); // true

// getPrototypeOf()
console.log(Object.getPrototypeOf(john) === Person.prototype); // true

// hasOwnProperty() - kiểm tra own property / check own property
console.log(john.hasOwnProperty('name')); // true
console.log(john.hasOwnProperty('toString')); // false (inherited / kế thừa)
```

### Modern Inheritance with Classes / Kế thừa hiện đại với Classes

```javascript
// ES6 classes (syntactic sugar over prototypes)
// ES6 classes (cú pháp đường cho prototypes)
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Gọi parent constructor / Call parent constructor
        this.breed = breed;
    }
    
    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

const dog = new Dog('Rex', 'Labrador');
dog.eat();  // Inherited method / Method kế thừa
dog.bark(); // Own method / Method riêng
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Memory efficiency**: Methods được share qua prototype / Methods shared via prototype
- **Code reusability**: Kế thừa và extend functionality / Inherit and extend functionality
- **Inheritance**: Tạo hierarchies of objects / Create hierarchies of objects
- **Flexibility**: Dynamic và flexible inheritance / Dynamic and flexible inheritance

### Ứng dụng thực tế / Real-world Applications

- **OOP patterns**: Implement design patterns / Triển khai design patterns
- **Frameworks**: React, Vue sử dụng prototypes / React, Vue use prototypes
- **Libraries**: Mở rộng built-in objects / Extend built-in objects
- **Custom types**: Tạo custom data types / Create custom data types

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Thêm methods vào prototype, không phải constructor / Add methods to prototype, not constructor
- ✅ **DO**: Sử dụng ES6 classes cho readability / Use ES6 classes for readability
- ✅ **DO**: Sử dụng Object.create() cho prototype chains / Use Object.create() for prototype chains
- ❌ **DON'T**: Không modify built-in prototypes / Don't modify built-in prototypes
- ❌ **DON'T**: Không assign trực tiếp prototype (dùng Object.create) / Don't assign prototype directly (use Object.create)

## Tài liệu tham khảo / References

- [MDN - Inheritance and Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript.info - Prototypal Inheritance](https://javascript.info/prototype-inheritance)
