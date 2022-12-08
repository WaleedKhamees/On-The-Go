import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
const ProductsPage = (props) => {
  const [Categories, setCategories] = useState({
    Eastern: true,
    Western: false,
    Drinks: false,
  });
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/item");
      const jsonData = await res.json();
      return jsonData;
    };
    getData().then((res) => setItems(res));
  }, []);
  const FilterBtn = ({ Category }) => (
    <button
      className={`rounded-lg border px-4 py-2 ${
        Categories[Category] ? "bg-Body text-White" : ""
      }`}
      onClick={(e) => {
        setCategories({
          Eastern: Category === "Eastern",
          Western: Category === "Western",
          Drinks: Category === "Drinks",
        });
      }}
    >
      <p className="p">{Category}</p>
    </button>
  );
  return (
    <>
      <div className="flex justify-center gap-8 py-8">
        <FilterBtn Category="Eastern" />
        <FilterBtn Category="Western" />
        <FilterBtn Category="Drinks" />
      </div>
      {items && Categories.Eastern && (
        <div className="grid grid-cols-4 px-4 gap-4">
          {items
            .filter((item) => item.category === "Eastern")
            .map((item) => (
              <ProductCard
                ProductName={item.item_name}
                ProductImage={item.img_url}
                ProductDescription={item.item_desc}
                ProductPrice={item.item_price}
              />
            ))}
        </div>
      )}
      {Categories.Western && (
        <div className="grid md:grid-cols-1 grid-cols-4 gap-4">
          {items
            .filter((item) => item.category === "Western")
            .map((item) => (
              <ProductCard
                ProductName={item.item_name}
                ProductImage={item.img_url}
                ProductDescription={item.item_desc}
                ProductPrice={item.item_price}
              />
            ))}
        </div>
      )}
      {Categories.Drinks && (
        <div className="grid grid-cols-4 gap-4">
          {items
            .filter((item) => item.category === "Drinks")
            .map((item) => (
              <ProductCard
                ProductName={item.item_name}
                ProductImage={item.img_url}
                ProductDescription={item.item_desc}
                ProductPrice={item.item_price}
              />
            ))}
        </div>
      )}
    </>
  );
};
export default ProductsPage;
