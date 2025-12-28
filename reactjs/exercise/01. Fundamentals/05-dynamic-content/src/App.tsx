import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  const myName = "Richard Vu";
  const multiply = (a: number, b: number) => a * b;
  const specialClass = "simple-class";

  return (
    <>
      <section>
        {/* Rendering Expression */}
        <p>2 + 2 = {2 + 2}</p>
        {/* Rendering Variable Value */}
        <h1>{myName}</h1>
        {/* Rendering Array */}
        <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
        {/* Rendering Function Value */}
        <p>2 * 2 = {multiply(2, 2)}</p>
        {/* Rendering Class */}
        <p className={specialClass}>This is special class</p>
      </section>
      <Greeting />
      <ProductInfo />
    </>
  );
};

export default App;