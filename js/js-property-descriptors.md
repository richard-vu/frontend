# Property Descriptors / Bộ mô tả Thuộc tính

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Prototypal Inheritance](./js-prototypal-inheritance.md)  
**➡️ Bài sau / Next:** [Indexed Collections](./js-indexed-collections.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng bộ mô tả thuộc tính (property descriptors) để cấu hình các đối tượng JavaScript của bạn. Property descriptors kiểm soát chi tiết về cách properties hoạt động: có thể được liệt kê không, có thể ghi không, có thể cấu hình lại không.

This lesson introduces how to use property descriptors to configure your JavaScript objects. Property descriptors control details about how properties behave: whether they can be enumerated, written to, or reconfigured.

## Khái niệm chính / Main Concepts

### Property Descriptor Attributes / Thuộc tính của Property Descriptor

```javascript
// Lấy descriptor của property / Get property descriptor
const obj = { name: 'John' };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');

console.log(descriptor);
// {
//   value: 'John',
//   writable: true,        // Có thể ghi / Can be written
//   enumerable: true,      // Hiện trong iteration / Shows in iteration
//   configurable: true     // Có thể delete/modify / Can be deleted/modified
// }
```

### Object.defineProperty() / Object.defineProperty()

```javascript
// Định nghĩa property với custom descriptors
// Define property with custom descriptors
const person = {};

Object.defineProperty(person, 'name', {
    value: 'John',
    writable: false,      // Không thể thay đổi / Cannot be changed
    enumerable: true,     // Hiện trong for...in / Shows in for...in
    configurable: false   // Không thể delete / Cannot be deleted
});

console.log(person.name); // "John"
// person.name = 'Jane';  // Không hoạt động (strict mode: error)
// delete person.name;     // Không hoạt động / Doesn't work
```

### Writable Attribute / Thuộc tính Writable

```javascript
// writable: false - property chỉ đọc / writable: false - read-only property
const config = {};

Object.defineProperty(config, 'API_KEY', {
    value: 'secret-key-12345',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(config.API_KEY); // "secret-key-12345"
// config.API_KEY = 'new-key'; // Không thay đổi được / Cannot change
```

### Enumerable Attribute / Thuộc tính Enumerable

```javascript
// enumerable: false - ẩn khỏi iteration / enumerable: false - hidden from iteration
const user = {
    name: 'John',
    age: 30
};

Object.defineProperty(user, 'password', {
    value: 'secret123',
    enumerable: false  // Ẩn / Hidden
});

console.log(Object.keys(user)); // ['name', 'age'] (không có password / no password)

for (let key in user) {
    console.log(key); // 'name', 'age' (không có password / no password)
}

console.log(user.password); // 'secret123' (vẫn access được / still accessible)
```

### Configurable Attribute / Thuộc tính Configurable

```javascript
// configurable: false - không thể delete hoặc modify descriptor
// configurable: false - cannot delete or modify descriptor
const obj = {};

Object.defineProperty(obj, 'id', {
    value: 123,
    writable: true,
    enumerable: true,
    configurable: false
});

// delete obj.id;  // Không hoạt động / Doesn't work

// Không thể thay đổi descriptor / Cannot change descriptor
// Object.defineProperty(obj, 'id', { enumerable: false }); // Error!
```

### Getters and Setters in Descriptors / Getters và Setters trong Descriptors

```javascript
// Accessor descriptors (get/set) / Bộ mô tả accessor (get/set)
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split(' ');
    },
    enumerable: true,
    configurable: true
});

console.log(person.fullName); // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName); // "Jane"
```

### Object.defineProperties() / Object.defineProperties()

```javascript
// Định nghĩa nhiều properties cùng lúc / Define multiple properties at once
const user = {};

Object.defineProperties(user, {
    name: {
        value: 'John',
        writable: true,
        enumerable: true
    },
    age: {
        value: 30,
        writable: true,
        enumerable: true
    },
    id: {
        value: 123,
        writable: false,
        enumerable: false
    }
});

console.log(Object.keys(user)); // ['name', 'age']
```

### Practical Example / Ví dụ Thực tế

```javascript
// Tạo immutable object / Create immutable object
function createImmutable(obj) {
    const result = {};
    
    for (let key in obj) {
        Object.defineProperty(result, key, {
            value: obj[key],
            writable: false,
            enumerable: true,
            configurable: false
        });
    }
    
    return result;
}

const config = createImmutable({
    API_URL: 'https://api.example.com',
    MAX_RETRIES: 3
});

// config.API_URL = 'https://hack.com'; // Không thay đổi được / Cannot change
console.log(config.API_URL); // "https://api.example.com"
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Fine-grained control**: Kiểm soát chi tiết properties / Fine-grained property control
- **Immutability**: Tạo read-only properties / Create read-only properties
- **Data hiding**: Ẩn properties khỏi iteration / Hide properties from iteration
- **Security**: Bảo vệ sensitive data / Protect sensitive data

### Ứng dụng thực tế / Real-world Applications

- **Configuration objects**: Constants không thể thay đổi / Immutable constants
- **Private properties**: Ẩn internal implementation / Hide internal implementation
- **Framework internals**: React, Vue sử dụng descriptors / React, Vue use descriptors
- **Data validation**: Kiểm soát property access / Control property access

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng descriptors cho configuration objects / Use descriptors for configuration objects
- ✅ **DO**: Set writable: false cho constants / Set writable: false for constants
- ✅ **DO**: Set enumerable: false cho helper properties / Set enumerable: false for helper properties
- ❌ **DON'T**: Không overuse descriptors / Don't overuse descriptors
- ❌ **DON'T**: Không set configurable: false unless necessary / Don't set configurable: false unless necessary

## Tài liệu tham khảo / References

- [MDN - Property Descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [JavaScript.info - Property Flags and Descriptors](https://javascript.info/property-descriptors)
