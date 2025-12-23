# Property Accessors / Truy cập Thuộc tính

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Introduction to Objects](./js-objects.md)  
**➡️ Bài sau / Next:** [Prototypal Inheritance](./js-prototypal-inheritance.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách thiết lập, thay đổi và truy cập các thuộc tính của một đối tượng. Property accessors (getters và setters) cho phép kiểm soát cách properties được đọc và ghi. Đây là tính năng mạnh mẽ cho validation và computed properties.

This lesson explores how to set, modify, and access properties of an object. Property accessors (getters and setters) allow controlling how properties are read and written. This is a powerful feature for validation and computed properties.

## Khái niệm chính / Main Concepts

### Dot vs Bracket Notation / Dot vs Bracket

```javascript
const person = {
    name: 'John',
    age: 30,
    'favorite color': 'blue'
};

// Dot notation / Ký hiệu chấm
console.log(person.name); // 'John'
person.age = 31;

// Bracket notation / Ký hiệu ngoặc vuông
console.log(person['name']); // 'John'
console.log(person['favorite color']); // Cần cho multi-word / Required for multi-word

// Dynamic access / Truy cập động
const key = 'age';
console.log(person[key]); // 30
```

### Getters / Getters

```javascript
// Getter - computed property / Getter - thuộc tính được tính toán
const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    get age() {
        return this._age || 0;
    }
};

console.log(person.fullName); // "John Doe" (không cần dấu ngoặc / no parentheses)
```

### Setters / Setters

```javascript
// Setter - validation và side effects / Setter - validation and side effects
const user = {
    _age: 0,  // Underscore convention cho internal property
    
    get age() {
        return this._age;
    },
    
    set age(value) {
        // Validation / Kiểm tra
        if (value < 0) {
            console.log('Age không thể âm / Age cannot be negative');
            return;
        }
        this._age = value;
    }
};

user.age = 25;  // Sử dụng setter / Use setter
console.log(user.age);  // 25, sử dụng getter / use getter
user.age = -5;  // Validation fails / Validation thất bại
```

### Getters & Setters Together / Getters & Setters cùng nhau

```javascript
const temperature = {
    _celsius: 0,
    
    // Getter cho Celsius
    get celsius() {
        return this._celsius;
    },
    
    // Setter cho Celsius
    set celsius(value) {
        this._celsius = value;
    },
    
    // Getter cho Fahrenheit (computed) / Getter cho Fahrenheit (được tính)
    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    },
    
    // Setter cho Fahrenheit
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
};

temperature.celsius = 0;
console.log(temperature.fahrenheit); // 32

temperature.fahrenheit = 100;
console.log(temperature.celsius); // 37.777...
```

### Object.defineProperty() / Object.defineProperty()

```javascript
// Định nghĩa property với descriptors / Define property with descriptors
const obj = {};

Object.defineProperty(obj, 'name', {
    get() {
        return this._name || 'Unknown';
    },
    set(value) {
        this._name = value.toUpperCase(); // Tự động uppercase
    },
    enumerable: true,
    configurable: true
});

obj.name = 'john';
console.log(obj.name); // "JOHN"
```

### Practical Example / Ví dụ Thực tế

```javascript
// User object với validation / User object with validation
const user = {
    _email: '',
    _password: '',
    
    get email() {
        return this._email;
    },
    
    set email(value) {
        // Email validation / Kiểm tra email
        if (!value.includes('@')) {
            throw new Error('Email không hợp lệ / Invalid email');
        }
        this._email = value.toLowerCase();
    },
    
    get password() {
        return '******'; // Không bao giờ return password thật / Never return actual password
    },
    
    set password(value) {
        // Password validation / Kiểm tra password
        if (value.length < 8) {
            throw new Error('Password phải >= 8 ký tự / Password must be >= 8 characters');
        }
        this._password = value;
    }
};

user.email = 'John@Example.com'; // Chuyển thành lowercase / Converted to lowercase
console.log(user.email); // "john@example.com"
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Validation**: Kiểm tra giá trị trước khi gán / Validate values before assignment
- **Computed properties**: Tính toán giá trị động / Calculate values dynamically
- **Encapsulation**: Ẩn internal implementation / Hide internal implementation
- **Side effects**: Thực hiện actions khi set/get / Perform actions on set/get

### Ứng dụng thực tế / Real-world Applications

- **Form validation**: Validate user input / Kiểm tra input người dùng
- **Data transformation**: Transform data tự động / Automatically transform data
- **Derived values**: Tính toán từ other properties / Calculate from other properties
- **Logging**: Log khi properties thay đổi / Log when properties change

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng getters/setters cho validation / Use getters/setters for validation
- ✅ **DO**: Sử dụng underscore convention cho internal properties / Use underscore convention for internal properties
- ✅ **DO**: Giữ getters/setters đơn giản / Keep getters/setters simple
- ❌ **DON'T**: Không có side effects phức tạp trong getters / Don't have complex side effects in getters
- ❌ **DON'T**: Không throw errors trong getters / Don't throw errors in getters

## Tài liệu tham khảo / References

- [MDN - Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [MDN - Getters and Setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
