interface ProductListProps {
    products: {
        id: number;
        name: string;
        price: string;
    }[];
}

const ProductList = ({ products }: ProductListProps) => {

    return (
        <div>
            {products.map((p, index) => (
                <div key={index}>
                    <h1>Name: {p.name}</h1>
                    <h1>Price: {p.price}</h1>
                </div>
            ))}
        </div>
    );
};

export default ProductList;