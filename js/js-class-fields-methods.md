# Class Fields and Methods / Trường và Phương thức của Lớp

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Extend Classes](./js-extend-classes.md)  
**➡️ Bài sau / Next:** [Static Initialization Blocks](./js-static-initialization.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng các trường (fields) và phương thức của lớp để thêm thuộc tính vào các lớp của bạn. Class fields cho phép khai báo properties trực tiếp trong class body. Bạn sẽ học về public, private fields và static fields.

This lesson introduces how to use class fields and methods to add properties to your classes. Class fields allow declaring properties directly in the class body. You will learn about public, private fields and static fields.

## Khái niệm chính / Main Concepts

### Public Instance Fields / Trường Instance Công khai

```javascript
class User {
    // Public field - khai báo ở class level / Public field - declared at class level
    name = 'Anonymous';
    age = 0;
    isActive = true;
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getInfo() {
        return `${this.name}, ${this.age} years old`;
    }
}

const user = new User('John', 30);
console.log(user.name); // "John"
console.log(user.isActive); // true
```

### Private Fields / Trường Riêng tư

```javascript
class BankAccount {
    // Private field với # / Private field with #
    #balance = 0;
    #accountNumber;
    
    constructor(initialBalance, accountNumber) {
        this.#balance = initialBalance;
        this.#accountNumber = accountNumber;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return true;
        }
        return false;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return amount;
        }
        return 0;
    }
    
    // Public method để access private field / Public method to access private field
    getBalance() {
        return this.#balance;
    }
    
    // Private method / Phương thức riêng tư
    #validateTransaction(amount) {
        return amount > 0 && amount <= this.#balance;
    }
}

const account = new BankAccount(1000, '123456');
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // Error! Private field
```

### Static Fields / Trường Tĩnh

```javascript
class Config {
    // Static public field / Trường tĩnh công khai
    static API_URL = 'https://api.example.com';
    static MAX_RETRIES = 3;
    static TIMEOUT = 5000;
    
    // Static private field / Trường tĩnh riêng tư
    static #secretKey = 'abc123';
    
    static getSecretKey() {
        return this.#secretKey;
    }
}

// Truy cập static fields / Access static fields
console.log(Config.API_URL); // "https://api.example.com"
console.log(Config.MAX_RETRIES); // 3

// Không thể access từ instance / Cannot access from instance
const config = new Config();
// console.log(config.API_URL); // undefined
```

### Computed Field Names / Tên Trường được Tính toán

```javascript
const fieldName = 'dynamicField';

class MyClass {
    // Computed field name / Tên trường được tính toán
    [fieldName] = 'value';
    [`${fieldName}2`] = 'value2';
    
    constructor() {
        console.log(this.dynamicField);  // "value"
        console.log(this.dynamicField2); // "value2"
    }
}
```

### Getters and Setters as Fields / Getters và Setters như Fields

```javascript
class Temperature {
    #celsius = 0;
    
    // Getter
    get celsius() {
        return this.#celsius;
    }
    
    // Setter với validation / Setter with validation
    set celsius(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Temperature phải là số / Temperature must be a number');
        }
        this.#celsius = value;
    }
    
    // Computed getter / Getter được tính toán
    get fahrenheit() {
        return this.#celsius * 9/5 + 32;
    }
    
    set fahrenheit(value) {
        this.#celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77
```

### Instance Methods vs Static Methods / Phương thức Instance vs Tĩnh

```javascript
class Counter {
    // Instance field / Trường instance
    count = 0;
    
    // Static field / Trường tĩnh
    static totalInstances = 0;
    
    constructor() {
        Counter.totalInstances++;
    }
    
    // Instance method / Phương thức instance
    increment() {
        this.count++;
    }
    
    getCount() {
        return this.count;
    }
    
    // Static method / Phương thức tĩnh
    static getTotalInstances() {
        return Counter.totalInstances;
    }
    
    static reset() {
        Counter.totalInstances = 0;
    }
}

const c1 = new Counter();
const c2 = new Counter();
c1.increment();

console.log(c1.getCount()); // 1
console.log(Counter.getTotalInstances()); // 2
```

### Practical Example / Ví dụ Thực tế

```javascript
class User {
    // Public fields / Trường công khai
    name;
    email;
    
    // Private fields / Trường riêng tư
    #password;
    #lastLogin = null;
    
    // Static fields / Trường tĩnh
    static #users = [];
    static MAX_USERS = 100;
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = this.#hashPassword(password);
        User.#users.push(this);
    }
    
    // Private method / Phương thức riêng tư
    #hashPassword(password) {
        // Simplified hashing / Hash đơn giản hóa
        return `hashed_${password}`;
    }
    
    // Public method / Phương thức công khai
    login(password) {
        if (this.#hashPassword(password) === this.#password) {
            this.#lastLogin = new Date();
            return true;
        }
        return false;
    }
    
    getLastLogin() {
        return this.#lastLogin;
    }
    
    // Static method / Phương thức tĩnh
    static getUserCount() {
        return User.#users.length;
    }
}

const user = new User('Alice', 'alice@example.com', 'secret123');
user.login('secret123');
console.log(User.getUserCount()); // 1
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Encapsulation**: Private fields thực sự private / Private fields are truly private
- **Clear structure**: Fields khai báo rõ ràng / Clearly declared fields
- **Type safety**: Dễ thấy structure của class / Easy to see class structure
- **Default values**: Có thể set giá trị mặc định / Can set default values

### Ứng dụng thực tế / Real-world Applications

- **Data models**: User, Product với validation / User, Product with validation
- **State management**: Component state với private fields / Component state with private fields
- **Configuration**: Config classes với static fields / Config classes with static fields
- **Counters/Trackers**: Static fields để track instances / Static fields to track instances

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng private fields (#) cho internal state / Use private fields (#) for internal state
- ✅ **DO**: Khai báo fields ở đầu class / Declare fields at top of class
- ✅ **DO**: Sử dụng static fields cho constants / Use static fields for constants
- ❌ **DON'T**: Không  expose private fields / Don't expose private fields
- ❌ **DON'T**: Không overuse static fields / Don't overuse static fields

## Tài liệu tham khảo / References

- [MDN - Class Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [MDN - Private Class Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
