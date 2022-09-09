import axios from "axios";
import React, { useState, useEffect } from "react";
import CategoriesBox from "./CategoriesBox";

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetching() {
      try {
        const res = await axios.get("http://localhost:4000/categories");
        console.log("data category:", res);
        setCategories(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetching();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <CategoriesBox key={category.id} title={category.title} />
      ))}
    </div>
  );
}
