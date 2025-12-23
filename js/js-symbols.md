# Symbols / Ký hiệu Symbol

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [BigInt](./js-big int.md)  
**➡️ Bài sau / Next:** [Variables](./js-variables.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng kiểu dữ liệu symbol của JavaScript. Symbol là kiểu dữ liệu nguyên thủy được thêm vào ES6, tạo ra giá trị duy nhất và không thể thay đổi. Symbols thường được dùng làm property keys cho objects.

This lesson explores how to use JavaScript's symbol data type. Symbol is a primitive data type added in ES6 that creates unique and immutable values. Symbols are commonly used as property keys for objects.

## Khái niệm chính / Main Concepts

### Creating Symbols / Tạo Symbol

```javascript
// Tạo symbol / Create symbol
const sym1 = Symbol();
const sym2 = Symbol('description');

// Mỗi symbol là duy nhất / Each symbol is unique
const a = Symbol('id');
const b = Symbol('id');
console.log(a === b); // false

// Symbol from registry / Symbol từ registry
const globalSym = Symbol.for('global');
const sameSym = Symbol.for('global');
console.log(globalSym === sameSym); // true
```

### Symbols as Object Keys / Symbol làm khóa Object

```javascript
// Symbol làm property key / Symbol as property key
const id = Symbol('id');
const user = {
    name: 'John',
    [id]: 123  // Sử dụng symbol làm key / Use symbol as key
};

console.log(user[id]); // 123
console.log(user.id);   // undefined

// Không hiện trong iteration / Not shown in iteration
for (let key in user) {
    console.log(key); // Chỉ in 'name' / Only prints 'name'
}
```

### Well-known Symbols / Symbol nổi tiếng

```javascript
// Symbol.iterator
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // {value: 1, done: false}

// Symbol.toStringTag
class MyClass {
    get [Symbol.toStringTag]() {
        return 'MyClass';
    }
}
const obj = new MyClass();
console.log(obj.toString()); // "[object MyClass]"
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Unique**: Mỗi symbol là duy nhất / Each symbol is unique
- **Hidden properties**: Thuộc tính không hiện trong iteration / Properties hidden from iteration
- **No conflicts**: Tránh xung đột property names / Avoid property name conflicts

### Ứng dụng thực tế / Real-world Applications

- **Private properties**: Tạo thuộc tính "riêng tư" / Create "private" properties
- **Meta-programming**: Symbol built-in cho behavior customization
- **Unique constants**: Tạo hằng số duy nhất / Create unique constants

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng symbols cho meta-programming
- ✅ **DO**: Thêm description cho symbols / Add description to symbols
- ❌ **DON'T**: Không dùng `new Symbol()` / Don't use `new Symbol()`

## Tài liệu tham khảo / References

- [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
