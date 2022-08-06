import React, { useContext } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shelf from "./components/Shelf/Shelf";
import ProductProvider, { productContext } from "./contextos/productContext";

function App() {
  const { products } = useContext(productContext);
  console.log(products);

  return (
    <div className="App d-flex justify-content-around">
      {products.map((product) => (
        <Shelf key={product.name} product={product} />
      ))}
    </div>
  );
}

export default App;
