# Static Initialization Blocks / Khối Khởi tạo Tĩnh

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Class Fields and Methods](./js-class-fields-methods.md)  
**➡️ Bài sau / Next:** [Appendix](./js-appendix.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng các khối khởi tạo tĩnh (static initialization blocks) để thiết lập hoặc thay đổi các trường tĩnh. Static blocks cho phép thực hiện complex initialization logic cho static properties một cách an toàn và có cấu trúc.

This lesson introduces how to use static initialization blocks to set up or modify static fields. Static blocks allow performing complex initialization logic for static properties in a safe and structured way.

## Khái niệm chính / Main Concepts

### Basic Static Block / Khối Tĩnh Cơ bản

```javascript
class Config {
    static API_URL;
    static DEBUG_MODE;
    
    // Static initialization block / Khối khởi tạo tĩnh
    static {
        // Chạy một lần when class được định nghĩa / Runs once when class is defined
        this.API_URL = 'https://api.example.com';
        this.DEBUG_MODE = true;
        console.log('Config initialized / Config đã khởi tạo');
    }
}

console.log(Config.API_URL); // "https://api.example.com"
```

### Multiple Static Blocks / Nhiều Khối Tĩnh

```javascript
class Database {
    static connection;
    static isConnected = false;
    
    // Block 1: Khởi tạo connection / Initialize connection
    static {
        console.log('Initializing connection / Khởi  tạo kết nối');
        this.connection = {
            host: 'localhost',
            port: 5432
        };
    }
    
    // Block 2: Thiết lập connection / Set up connection
    static {
        console.log('Setting up connection / Thiết lập kết nối');
        this.isConnected = true;
    }
}

// Cả hai blocks chạy theo thứ tự / Both blocks run in order
```

### Private Static Fields Initialization / Khởi tạo Trường Tĩnh Riêng tư

```javascript
class SecureConfig {
    static #apiKey;
    static #initialized = false;
    
    static {
        // Khởi tạo private static field / Initialize private static field
        this.#apiKey = this.#generateApiKey();
        this.#initialized = true;
    }
    
    static #generateApiKey() {
        // Complex initialization logic / Logic khởi tạo phức tạp
        return 'key_' + Math.random().toString(36).substr(2, 9);
    }
    
    static getApiKey() {
        if (!this.#initialized) {
            throw new Error('Not initialized / Chưa khởi tạo');
        }
        return this.#apiKey;
    }
}

console.log(SecureConfig.getApiKey()); // "key_abc123..."
```

### Complex Initialization / Khởi tạo Phức tạp

```javascript
class UserManager {
    static #users = [];
    static #userIndex = new Map();
    static #config;
    
    static {
        // Load configuration / Tải cấu hình
        this.#config = {
            maxUsers: 100,
            defaultRole: 'user'
        };
        
        // Initialize data structures / Khởi tạo cấu trúc dữ liệu
        this.#users = [];
        this.#userIndex = new Map();
        
        // Perform setup / Thực hiện thiết lập
        console.log('UserManager initialized / UserManager đã khởi tạo');
    }
    
    static addUser(user) {
        if (this.#users.length >= this.#config.maxUsers) {
            throw new Error('Max users reached / Đạt giới hạn users');
        }
        this.#users.push(user);
        this.#userIndex.set(user.id, user);
    }
}
```

### Try-Catch in Static Blocks / Try-Catch trong Khối Tĩnh

```javascript
class APIClient {
    static #baseURL;
    static #timeout;
    
    static {
        try {
            // Cố gắng load từ environment / Try to load from environment
            this.#baseURL = process.env.API_URL || 'https://api.default.com';
            this.#timeout = parseInt(process.env.TIMEOUT) || 5000;
            
            // Validate / Kiểm tra
            if (!this.#baseURL.startsWith('https://')) {
                throw new Error('API URL phải HTTPS / API URL must be HTTPS');
            }
            
            console.log('API Client configured / API Client đã cấu hình');
        } catch (error) {
            console.error('Configuration error / Lỗi cấu hình:', error);
            // Fallback values / Giá trị dự phòng
            this.#baseURL = 'https://api.default.com';
            this.#timeout = 5000;
        }
    }
}
```

### Accessing Outer Scope / Truy cập Scope Ngoài

```javascript
// Biến bên ngoài class / Variable outside class
const externalConfig = {
    apiKey: 'external-key-123',
    environment: 'production'
};

class Application {
    static #config;
    
    static {
        // Có thể access outer scope / Can access outer scope
        this.#config = {
            ...externalConfig,
            initialized: new Date()
        };
        
        console.log(`App initialized in ${this.#config.environment} mode`);
    }
    
    static getConfig() {
        return { ...this.#config };
    }
}
```

### Practical Example / Ví dụ Thực tế

```javascript
class Logger {
    static #instance;
    static #logLevel;
    static #logFile;
    
    // Static initialization / Khởi tạo tĩnh
    static {
        // Singleton pattern / Mẫu Singleton
        this.#instance = null;
        
        // Cấu hình / Configuration
        this.#logLevel = 'info';
        this.#logFile = 'app.log';
        
        // Thiết lập / Setup
        console.log('Logger system initialized / Hệ thống Logger đã khởi tạo');
    }
    
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Logger();
        }
        return this.#instance;
    }
    
    static setLogLevel(level) {
        this.#logLevel = level;
    }
    
    log(message) {
        console.log(`[${Logger.#logLevel}] ${message}`);
    }
}

const logger = Logger.getInstance();
logger.log('Application started / Ứng dụng đã khởi động');
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Complex initialization**: Thực hiện logic phức tạp / Perform complex logic
- **Private access**: Khởi tạo private static fields / Initialize private static fields
- **Error handling**: Try-catch cho initialization / Try-catch for initialization
- **Encapsulation**: Logic initialization được đóng gói / Initialization logic is encapsulated

### Ứng dụng thực tế / Real-world Applications

- **Configuration**: Load và validate config / Load and validate config
- **Singleton pattern**: Khởi tạo singleton instances / Initialize singleton instances
- **Database setup**: Thiết lập database connections / Set up database connections
- **Caching**: Khởi tạo caches và indexes / Initialize caches and indexes

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng static blocks cho complex initialization / Use static blocks for complex initialization
- ✅ **DO**: Sử dụng try-catch cho error-prone initialization / Use try-catch for error-prone initialization
- ✅ **DO**: Keep static blocks ngắn gọn / Keep static blocks concise
- ❌ **DON'T**: Không thực hiện async operations trong static blocks / Don't perform async operations in static blocks
- ❌ **DON'T**: Không phụ thuộc vào execution order giữa classes / Don't depend on execution order between classes

## Tài liệu tham khảo / References

- [MDN - Static Initialization Blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- [TC39 Proposal - Class Static Block](https://github.com/tc39/proposal-class-static-block)
