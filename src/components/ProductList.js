import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"

// pagination

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);

  const getProducts = async () => {
      const res = await axios.get(`http://localhost:4000/products/?limit=${limit}&offset=${offset}`);
      console.log("datas : ", res.data);
      setProducts(res.data.products);
      setTotal(res.data.total);
      setPages(Math.ceil(total/products.length));
  }

  const previousProduct = async () => {
    setOffset(offset - limit);
    await getProducts();
  }

  const nextProduct = async () => {
    setOffset(offset + limit);
    await getProducts();
  }

  useEffect(() => {
    async function fetching() {
      await getProducts();
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
          id={product.id}
        />
      ))}
      {/* pagination */}
      <div className="paging">
        <button onClick={previousProduct}>Previous</button>
        <p>Page {(offset/limit) + 1} of {pages}</p>
        <button onClick={nextProduct}>Next</button>
      </div>
    </div>
  );
}
