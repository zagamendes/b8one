import React, {
  createContext,
  ReactChild,
  ReactChildren,
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";

interface ProductContextProps {
  products: Product[];
}

export const productContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

const ProductProvider: React.FC<any> = ({ children }) => {
  const Products: Product[] = [
    {
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2813.99,
      promotionalPrice: 2599.0,
      image: "/monitor.png",
    },
    {
      name: "Bicicleta infantil Nathor Flower aro 12 freio tambor cor rosa com rodas de treinamento",
      price: 199.99,
      promotionalPrice: 179.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_989573-MLA42952677803_072020-F.webp.png",
    },
  ];
  const [products] = useState<Product[]>(Products);
  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
