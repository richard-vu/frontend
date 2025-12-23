# Introduction to Objects / Giới thiệu về Đối tượng

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [The "this" Keyword](./js-this-keyword.md)  
**➡️ Bài sau / Next:** [Property Accessors](./js-property-accessors.md)

---

## Mô tả / Description

Bài học này giới thiệu về các đối tượng JavaScript. Objects là kiểu dữ liệu phức tạp cho phép lưu trữ collections of data và functions. Bạn sẽ học cách tạo objects, thêm properties và methods, và làm việc với object literals.

This lesson introduces JavaScript objects. Objects are complex data types that allow storing collections of data and functions. You will learn how to create objects, add properties and methods, and work with object literals.

## Khái niệm chính / Main Concepts

### Creating Objects / Tạo Đối tượng

```javascript
// Object literal / Object literal
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Object constructor / Object constructor  
const car = new Object();
car.brand = 'Toyota';
car.model = 'Camry';

// Object.create()
const proto = { type: 'animal' };
const dog = Object.create(proto);
dog.name = 'Rex';
```

### Properties / Thuộc tính

```javascript
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    'favorite color': 'blue', // Multi-word property / Thuộc tính nhiều từ
    
    // Nested object / Object lồng nhau
    address: {
        street: '123 Main St',
        city: 'Boston'
    }
};

// Truy cập properties / Access properties
console.log(user.firstName); // Dot notation
console.log(user['favorite color']); // Bracket notation
console.log(user.address.city); // Nested access / Truy cập lồng nhau
```

### Methods / Phương thức

```javascript
// Object với methods / Object with methods
const calculator = {
    value: 0,
    
    // Method / Phương thức
    add: function(num) {
        this.value += num;
        return this;
    },
    
    // Shorthand method syntax / Cú pháp method ngắn gọn
    subtract(num) {
        this.value -= num;
        return this;
    },
    
    getValue() {
        return this.value;
    }
};

calculator.add(5).subtract(2); // Method chaining / Nối method
console.log(calculator.getValue()); // 3
```

### Dynamic Properties / Thuộc tính Động

```javascript
// Thêm properties động / Add properties dynamically
const obj = {};
obj.name = 'John';
obj['age'] = 30;

// Computed property names / Tên thuộc tính được tính toán
const key = 'color';
const car = {
    brand: 'Toyota',
    [key]: 'red',  // color: 'red'
    [`${key}Code`]: '#FF0000'  // colorCode: '#FF0000'
};

// Xóa property / Delete property
delete obj.age;
console.log(obj.age); // undefined
```

### Object Methods / Phương thức Object

```javascript
const user = {
    name: 'Alice',
    age: 25,
    city: 'Paris'
};

// Object.keys() - lấy array of keys / get array of keys
console.log(Object.keys(user)); // ['name', 'age', 'city']

// Object.values() - lấy array of values / get array of values
console.log(Object.values(user)); // ['Alice', 25, 'Paris']

// Object.entries() - lấy array of [key, value] pairs
console.log(Object.entries(user)); 
// [['name', 'Alice'], ['age', 25], ['city', 'Paris']]

// Object.assign() - copy properties / copy thuộc tính
const clone = Object.assign({}, user);

// Spread operator / Toán tử spread
const copy = { ...user };
```

### Checking Properties / Kiểm tra Thuộc tính

```javascript
const obj = {
    name: 'John',
    age: 30
};

// in operator
console.log('name' in obj); // true
console.log('height' in obj); // false

// hasOwnProperty()
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false (inherited / kế thừa)

// Optional chaining (?.) / Chuỗi tùy chọn
const user = {};
console.log(user.address?.street); // undefined (không error)
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Data organization**: Tổ chức dữ liệu có cấu trúc / Organize structured data
- **Code encapsulation**: Đóng gói data và functions / Encapsulate data and functions
- **Flexibility**: Linh hoạt trong modeling data / Flexible data modeling
- **OOP foundation**: Nền tảng cho OOP / Foundation for OOP

### Ứng dụng thực tế / Real-world Applications

- **User data**: Lưu trữ thông tin người dùng / Store user information
- **API responses**: Xử lý dữ liệu từ APIs / Handle data from APIs
- **Configuration**: Lưu cấu hình ứng dụng / Store application config
- **State management**: Quản lý state trong apps / Manage state in apps

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng object literals cho readability / Use object literals for readability
- ✅ **DO**: Sử dụng const cho objects (ngăn reassignment) / Use const for objects (prevent reassignment)
- ✅ **DO**: Sử dụng shorthand method syntax / Use shorthand method syntax
- ❌ **DON'T**: Không mutate objects không cần thiết / Don't mutate objects unnecessarily
- ❌ **DON'T**: Không dùng reserved words làm property names / Don't use reserved words as property names

## Tài liệu tham khảo / References

- [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info - Objects](https://javascript.info/object)
