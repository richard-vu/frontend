# The "this" Keyword / Từ khóa "this"

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [The "return" Keyword](./js-return-keyword.md)  
**➡️ Bài sau / Next:** [Introduction to Objects](./js-objects.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng từ khóa "this" để làm việc với ngữ cảnh mà hàm thực thi. `this` tham chiếu đến object đang thực thi function. Hiểu rõ `this` rất quan trọng vì giá trị của nó thay đổi tùy theo context.

This lesson introduces how to use the "this" keyword to work with the context in which a function executes. `this` refers to the object executing the function. Understanding `this` is crucial as its value changes depending on context.

## Khái niệm chính / Main Concepts

### Global Context / Ngữ cảnh Toàn cục

```javascript
// Trong global scope, this là window (browser) hoặc global (Node.js)
// In global scope, this is window (browser) or global (Node.js)
console.log(this); // window object trong browser / window object in browser

function showThis() {
    console.log(this); // window (non-strict) hoặc undefined (strict mode)
}
```

### Method Context / Ngữ cảnh Method

```javascript
// this trong object method / this in object method
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, I'm ${this.name}`); // this = person object
    }
};

person.greet(); // "Hello, I'm John"

// Mất context khi assign / Lose context when assigning
const greetFunc = person.greet;
greetFunc(); // Error hoặc undefined / Error or undefined
```

### Constructor Context / Ngữ cảnh Constructor

```javascript
// this trong constructor function / this in constructor function
function Person(name, age) {
    this.name = name;  // this = instance đang tạo / this = instance being created
    this.age = age;
}

const john = new Person('John', 30);
console.log(john.name); // "John"
```

### Arrow Functions and this / Arrow Functions và this

```javascript
// Arrow function KHÔNG có this riêng / Arrow function has NO own this
const obj = {
    name: 'Object',
    regularFunc: function() {
        console.log(this.name); // 'Object'
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (this từ outer scope / this from outer scope)
    }
};

// Lợi ích của arrow function / Benefit of arrow function
const person = {
    name: 'Alice',
    hobbies: ['reading', 'coding'],
    showHobbies: function() {
        this.hobbies.forEach(hobby => {
            // Arrow function giữ this từ showHobbies
            // Arrow function preserves this from showHobbies
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};
```

### Explicit Binding / Ràng buộc Tường minh

```javascript
// call() - gọi function với this cụ thể / call() - invoke function with specific this
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: 'John' };
greet.call(person, 'Hello'); // "Hello, John"

// apply() - giống call nhưng arguments là array / apply() - like call but arguments as array
greet.apply(person, ['Hi']); // "Hi, John"

// bind() - tạo function mới với this cố định / bind() - create new function with fixed this
const boundGreet = greet.bind(person);
boundGreet('Hey'); // "Hey, John"
```

### Event Handlers / Xử lý Sự kiện

```javascript
// this trong event handlers / this in event handlers
const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(this); // this = button element
});

// Arrow function trong event handler / Arrow function in event handler
button.addEventListener('click', () => {
    console.log(this); // this = window (không phải button / not button)
});
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Object methods**: Truy cập properties của object / Access object properties
- **Code reusability**: Sử dụng lại functions với objects khác nhau / Reuse functions with different objects
- **OOP**: Nền tảng cho lập trình hướng đối tượng / Foundation for object-oriented programming
- **Event handling**: Truy cập element trong event handlers / Access elements in event handlers

### Ứng dụng thực tế / Real-world Applications

- **DOM manipulation**: Xử lý events và manipulate elements / Handle events and manipulate elements
- **Class methods**: Methods trong classes / Methods in classes
- **API calls**: Context trong callback functions / Context in callback functions
- **Object patterns**: Module pattern, revealing module pattern / Module patterns

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng arrow functions để preserve `this` / Use arrow functions to preserve `this`
- ✅ **DO**: Sử dụng `bind()` khi cần fix `this` / Use `bind()` when you need to fix `this`
- ✅ **DO**: Hiểu context trước khi dùng `this` / Understand context before using `this`
- ❌ **DON'T**: Không dùng arrow functions cho object methods / Don't use arrow functions for object methods
- ❌ **DON'T**: Không giả định giá trị của `this` / Don't assume the value of `this`

## Tài liệu tham khảo / References

- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [JavaScript.info - Object methods, "this"](https://javascript.info/object-methods)
