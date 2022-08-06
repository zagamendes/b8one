import React, { useRef, useState } from "react";
import "./shelf.css";
// import { Container } from './styles';
interface ShelfProps {
  product: Product;
}
const Shelf: React.FC<ShelfProps> = ({ product }) => {
  const [added, setAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="d-flex align-items-center flex-column ctn-shelf px-2 text-align-start">
      <div className="ctn-image ">
        <img className="img-fluid" src={product.image} alt={product.name} />
        <div
          className={`ctn-wishlist ${favorite ? "favorite" : ""}`}
          onClick={() => setFavorite(!favorite)}
        >
          {!favorite ? (
            <i className="fa fa-heart-o" />
          ) : (
            <i className="fa fa-heart" />
          )}
        </div>
      </div>
      <div className="ctn-name">
        <p>{product.name}</p>
      </div>
      <div
        className={`ctn-price ${
          product.price != product.promotionalPrice ? "" : "d-none"
        }`}
      >
        <p className="m-0">R$ {product.price.toFixed(2)}</p>
      </div>
      <div
        className={`ctn-promotional-price ${
          product.price == product.promotionalPrice ? "d-none" : ""
        }`}
      >
        <p className="m-0">
          R$ {product.promotionalPrice.toFixed(2).replace(".", ",")}
        </p>
      </div>
      <div className="qtd-parcelamento">
        <p>
          <span>Em até </span> R$ 10x de{" "}
          {(product.promotionalPrice / 10).toFixed(2).replace(".", ",")}{" "}
          <span>sem juros</span>
        </p>
      </div>
      <div className=" align-self-baseline w-100">
        <button
          className={`btn btn-success w-75 ${added ? "added" : "not-added"}`}
          onClick={() => setAdded(!added)}
        >
          {added ? (
            <span>
              <i className="fa fa-check"></i> Adicionado
            </span>
          ) : (
            "Adicionar"
          )}
        </button>
      </div>
    </div>
  );
};

export default Shelf;
