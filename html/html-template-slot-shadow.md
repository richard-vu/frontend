# Template, Slot, and Shadow DOM / Template, Slot và Shadow DOM

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Audio and Video](./html-audio-video.md)  
**➡️ Bài sau / Next:** [HTML APIs](./html-apis.md)

---

## Mô tả / Description

Bài học này giải thích về template, slot và shadow DOM - các công nghệ để tạo Web Components. Chúng cho phép tạo ra các thành phần web có thể tái sử dụng và đóng gói, giúp code modular và maintainable hơn.

This lesson explains template, slot, and shadow DOM - technologies for creating Web Components. They allow creating reusable and encapsulated web components, making code more modular and maintainable.

## Khái niệm chính / Main Concepts

### Template Element / Phần tử Template

```html
<!-- Template không render ngay / Template doesn't render immediately -->
<template id="my-template">
    <style>
        .card { border: 1px solid #ccc; padding: 20px; }
    </style>
    <div class="card">
        <h2>Tiêu đề / Title</h2>
        <p>Nội dung / Content</p>
    </div>
</template>

<script>
// Clone và sử dụng template / Clone and use template
const template = document.getElementById('my-template');
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);
</script>
```

### Slot Element / Phần tử Slot

```html
<template id="card-template">
    <div class="card">
        <slot name="header">Default Header</slot>
        <slot>Default Content</slot>
        <slot name="footer">Default Footer</slot>
    </div>
</template>

<!-- Sử dụng slot / Using slot -->
<my-card>
    <h2 slot="header">Custom Header</h2>
    <p>Custom Content</p>
    <footer slot="footer">Custom Footer</footer>
</my-card>
```

### Shadow DOM

```html
<div id="host"></div>

<script>
class MyElement extends HTMLElement {
    constructor() {
        super();
        
        // Attach shadow DOM
        const shadow = this.attachShadow({mode: 'open'});
        
        // Add content
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                }
                p { color: blue; }
            </style>
            <p>Shadow DOM content / Nội dung Shadow DOM</p>
        `;
    }
}

customElements.define('my-element', MyElement);
</script>

<my-element></my-element>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Encapsulation**: CSS và DOM đóng gói / CSS and DOM encapsulation
- **Reusability**: Tái sử dụng components / Reusable components
- **Modularity**: Code modular / Modular code
- **Maintainability**: Dễ bảo trì / Easy to maintain

### Ứng dụng thực tế / Real-world Applications

- **UI libraries**: Thư viện component / Component libraries
- **Design systems**: Hệ thống thiết kế / Design systems
- **Widgets**: Widgets tái sử dụng / Reusable widgets
- **Web components**: Custom elements / Custom elements

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng shadow DOM cho encapsulation / Use shadow DOM for encapsulation
- ✅ **DO**: Provide fallback content / Provide fallback content
- ✅ **DO**: Use slots for flexibility / Use slots for flexibility

## Tài liệu tham khảo / References

- [MDN - Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [MDN - Template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
