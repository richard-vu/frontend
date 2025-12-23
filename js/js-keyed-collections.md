# Keyed Collections / Bộ sưu tập có Khóa

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Indexed Collections](./js-indexed-collections.md)  
**➡️ Bài sau / Next:** [Introduction to Classes](./js-classes.md)

---

## Mô tả / Description

Bài học này tìm hiểu cách sử dụng các bộ sưu tập có khóa như Map và Set. Đây là các cấu trúc dữ liệu được thêm trong ES6, cung cấp cách lưu trữ và truy xuất dữ liệu hiệu quả hơn objects thông thường trong một số trường hợp.

This lesson explores how to use keyed collections like Map and Set. These are data structures added in ES6, providing more efficient ways to store and retrieve data than regular objects in some cases.

## Khái niệm chính / Main Concepts

### Map / Map

```javascript
// Tạo Map / Create Map
const map = new Map();

// set - thêm key-value / set - add key-value
map.set('name', 'John');
map.set('age', 30);
map.set(1, 'one'); // Key có thể là any type / Key can be any type

// get - lấy value / get - retrieve value
console.log(map.get('name')); // "John"

// has - kiểm tra key tồn tại / has - check key exists
console.log(map.has('age')); // true

// delete - xóa entry / delete - remove entry
map.delete('age');

// size - số lượng entries / size - number of entries
console.log(map.size); // 2

// clear - xóa tất cả / clear - remove all
map.clear();
```

### Map with Object Keys / Map với Khóa là Object

```javascript
// Map cho phép objects làm keys / Map allows objects as keys
const obj1 = { id: 1 };
const obj2 = { id: 2 };

const objMap = new Map();
objMap.set(obj1, 'First object');
objMap.set(obj2, 'Second object');

console.log(objMap.get(obj1)); // "First object"

// Object thông thường không thể / Regular objects cannot
const plainObj = {};
plainObj[obj1] = 'value'; // Chuyển thành string "[object Object]"
```

### Map Iteration / Lặp Map

```javascript
const map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'NY']
]);

// forEach
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// for...of với entries / for...of with entries
for (let [key, value] of map.entries()) {
    console.log(`${key} = ${value}`);
}

// keys()
for (let key of map.keys()) {
    console.log(key);
}

// values()
for (let value of map.values()) {
    console.log(value);
}

// Chuyển thành array / Convert to array
const entries = Array.from(map); // [[key, value], ...]
const keysArray = [...map.keys()];
```

### Set / Set

```javascript
// Tạo Set / Create Set
const set = new Set();

// add - thêm value (chỉ unique) / add - add value (only unique)
set.add(1);
set.add(2);
set.add(2); // Bị bỏ qua / Ignored
set.add(3);

console.log(set.size); // 3

// has - kiểm tra value / has - check value
console.log(set.has(2)); // true

// delete - xóa value / delete - remove value
set.delete(2);

// clear - xóa tất cả / clear - remove all
set.clear();
```

### Set Operations / Các phép toán Set

```javascript
// Tạo Set từ array / Create Set from array
const numbers = new Set([1, 2, 3, 4, 5]);

// Loại bỏ duplicates / Remove duplicates
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)]; // [1, 2, 3, 4]

// Union (hợp) / Union
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5}

// Intersection (giao) / Intersection
const intersection = new Set(
    [...setA].filter(x => setB.has(x))
); // {3}

// Difference (hiệu) / Difference
const difference = new Set(
    [...setA].filter(x => !setB.has(x))
); // {1, 2}
```

### Set Iteration / Lặp Set

```javascript
const fruits = new Set(['apple', 'banana', 'orange']);

// forEach
fruits.forEach(fruit => {
    console.log(fruit);
});

// for...of
for (let fruit of fruits) {
    console.log(fruit);
}

// Chuyển thành array / Convert to array
const fruitsArray = Array.from(fruits);
const fruitsArray2 = [...fruits];
```

### WeakMap and WeakSet / WeakMap và WeakSet

```javascript
// WeakMap - keys phải là objects, không prevent garbage collection
// WeakMap - keys must be objects, doesn't prevent garbage collection
let obj = { name: 'John' };
const weakMap = new WeakMap();
weakMap.set(obj, 'some data');

// Khi obj = null, entry tự động bị xóa (garbage collected)
// When obj = null, entry is automatically removed (garbage collected)

// WeakSet - tương tự cho values / WeakSet - similar for values
const weakSet = new WeakSet();
weakSet.add(obj);

// Use cases: private data, caching
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Any key type**: Map cho phép any type làm key / Map allows any type as key
- **Better performance**: Map/Set nhanh hơn cho add/delete / Map/Set faster for add/delete
- **Unique values**: Set tự động loại duplicates / Set automatically removes duplicates
- **Iteration order**: Map/Set giữ insertion order / Map/Set preserve insertion order

### Ứng dụng thực tế / Real-world Applications

- **Caching**: WeakMap cho cache với automatic cleanup / WeakMap for cache with automatic cleanup
- **Unique lists**: Set cho tags, categories / Set for tags, categories
- **Data indexing**: Map cho fast lookups / Map for fast lookups
- **Graph algorithms**: Set/Map cho nodes và edges / Set/Map for nodes and edges

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng Map khi cần non-string keys / Use Map when you need non-string keys
- ✅ **DO**: Sử dụng Set cho unique values / Use Set for unique values
- ✅ **DO**: Sử dụng WeakMap/WeakSet cho memory-sensitive data / Use WeakMap/WeakSet for memory-sensitive data
- ❌ **DON'T**: Không dùng Map/Set cho serialization (JSON) / Don't use Map/Set for serialization (JSON)
- ❌ **DON'T**: Không iterate WeakMap/WeakSet / Don't iterate WeakMap/WeakSet

## Tài liệu tham khảo / References

- [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [JavaScript.info - Map and Set](https://javascript.info/map-set)
