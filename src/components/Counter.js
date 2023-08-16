import { useState } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

var notyf = new Notyf()
function Counter() {
  const [product, setProduct] = useState({
    name: "Juice",
    count: 0,
  });


  function increaseValue() {
    setProduct({ ...product, count: product.count + 1 });
  }

  function decreaseValue() {
    if (product.count > 0) {
      setProduct({ ...product, count: product.count - 1 });
    } else {
        notyf.error("Cannot decrease number!");
    }
  }

  function resetValue() {
    setProduct({ ...product, count: 0 });
  }

  return (
    <>
      <h2>{product.name}</h2>
      <button className="btn" onClick={decreaseValue}>
        -
      </button>
      <span className="count">{product.count}</span>
      <button className="btn" onClick={increaseValue}>
        +
      </button>{" "}
      <button className="btn-reset" onClick={resetValue}>
        Reset
      </button>
    </>
  );
}

export default Counter;
