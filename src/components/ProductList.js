import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetching() {
      const res = await axios.get("http://localhost:4000/products/");
      console.log("datas : ", res);
      setProducts(res.data);
    }
    fetching();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          mainImage={product.mainImage}
          description={product.description}
        />
      ))}
    </div>
  );
}
