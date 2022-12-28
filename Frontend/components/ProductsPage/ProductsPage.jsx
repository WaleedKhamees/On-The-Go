import ProductCard from "./ProductCard";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
const ProductsPage = (props) => {
  const category = useParams().id;
  const [Categories, setCategories] = useState({
    Eastern: category === "eastern",
    Western: category === "western",
    Drinks: category === "drinks",
  });
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:3000/item").then((res) => res.json())
  );
  const FilterBtn = ({ Category }) => (
    <Link to={`/menu/${Category.toLowerCase()}`}>
      <button
        className={`rounded-lg border px-4 py-2 ${Categories[Category] ? "bg-Body text-White" : ""
          }`}
        onClick={(e) => {
          setCategories({
            Eastern: Category.toLowerCase() === "eastern",
            Western: Category.toLowerCase() === "western",
            Drinks: Category.toLowerCase() === "drinks",
          });
        }}
      >
        <p className="p">{Category}</p>
      </button>
    </Link>
  );

  return (
    <div className="my-8">
      <div className="flex justify-center gap-8 py-8">
        <FilterBtn Category="Eastern" />
        <FilterBtn Category="Western" />
        <FilterBtn Category="Drinks" />
      </div>

      {data && Categories.Eastern && (
        <div className="grid grid-cols-4 gap-y-8 px-4 justify-items-center">
          {data
            .filter((item) => item.category === "Eastern")
            .map((item) => (
              <Link key={item.item_id} to={`/product/${item.item_id}`}>
                <ProductCard item={item} />
              </Link>
            ))}
        </div>
      )}

      {data && Categories.Western && (
        <div className="grid md:grid-cols-1 grid-cols-4 gap-y-8 px-4 justify-items-center">
          {data
            .filter((item) => item.category === "Western")
            .map((item) => (
              <Link key={item.item_id} to={`/product/${item.item_id}`}>
                <ProductCard item={item} />
              </Link>
            ))}
        </div>
      )}

      {data && Categories.Drinks && (
        <div className="grid grid-cols-4 gap-y-8 px-4 justify-items-center">
          {data
            .filter((item) => item.category === "Drinks")
            .map((item) => (
              <Link key={item.item_id} to={`/product/${item.item_id}`}>
                <ProductCard item={item} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
export default ProductsPage;
