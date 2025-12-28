interface ShoppingProps {
    items: string[];
}

export default function Shopping({ items }: ShoppingProps) {
    return (
        <section>
            <ol>
                {items.map((item) => (
                    // Note: See best practice tip below regarding this key
                    <li key={Math.random() * 5}>{item}</li>
                ))}
            </ol>
        </section>
    );
}
