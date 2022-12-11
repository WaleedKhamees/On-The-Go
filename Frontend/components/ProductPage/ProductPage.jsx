import ProductCard from "./ProductCard";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
const ProductsPage = (props) => {
  const category = useParams().id;
  console.log(category);
  const [Categories, setCategories] = useState({
    Eastern: category === "eastern",
    Western: category === "western",
    Drinks: category === "drinks",
  });
  console.log(Categories);
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/item").then((res) => res.json())
  );
  const FilterBtn = ({ Category }) => (
    <Link to={`/menu/${Category}`}>
      <button
        className={`rounded-lg border px-4 py-2 ${
          Categories[Category] ? "bg-Body text-White" : ""
        }`}
        onClick={(e) => {
          setCategories({
            Eastern: Category.toLowerCase() === "Eastern".toLowerCase(),
            Western: Category.toLowerCase() === "Western".toLowerCase(),
            Drinks: Category.toLowerCase() === "Drinks".toLowerCase(),
          });
        }}
      >
        <p className="p">{Category}</p>
      </button>
    </Link>
  );

  return (
    <div className="py-4">
      <div className="flex justify-center gap-8 py-8">
        <FilterBtn Category="Eastern" />
        <FilterBtn Category="Western" />
        <FilterBtn Category="Drinks" />
      </div>

      {data && Categories.Eastern && (
        <div className="grid grid-cols-4 px-4 gap-4">
          {data
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

      {data && Categories.Western && (
        <div className="grid md:grid-cols-1 grid-cols-4 gap-4">
          {data
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

      {data && Categories.Drinks && (
        <div className="grid grid-cols-4 gap-4">
          {data
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
    </div>
  );
};
export default ProductsPage;
