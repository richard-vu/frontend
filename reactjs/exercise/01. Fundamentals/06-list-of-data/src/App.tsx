import Shopping from "./components/Shopping"
import "./Shopping.css"
import ProductList from "./components/ProductList"
import UserList from "./components/UserList"

function App() {
  return (
    <>
      <section>
        <Shopping
          items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}
        />
      </section>
      <section>
        <ProductList products={[
          { id: 1, name: "Phone", price: "$699" },
          { id: 2, name: "Laptop", price: "$1200" },
          { id: 3, name: "Headphones", price: "$199" },
        ]} />
      </section>
      <section>
        <UserList users={[
          { id: 1, name: "Alice", age: 25 },
          { id: 2, name: "Bob", age: 30 },
          { id: 3, name: "Charlie", age: 22 },
        ]} />
      </section>
    </>
  )
}

export default App
