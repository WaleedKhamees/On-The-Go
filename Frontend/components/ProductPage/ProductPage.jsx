import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductsPage = (props) => {
  const [Categories, setCategories] = useState({
    Eastern: true,
    Western: false,
    Drinks: false,
  });
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
      {Categories.Eastern && (
        <div className="grid grid-cols-4 px-4 gap-4">
          {[...Array(20)].map(() => (
            <ProductCard
              ProductName="Shawrma"
              ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1670803200&Signature=RQy8JpbRnarvqKUzQ7Mx15-CgYRWSZrsWhFJVMZ25oxL0EF9RvRvc-KwIxUBakEX16AW1PHq1OyQMOT2dSeVzf42EvWiCf01PTN~LRhPtVJH8H6oIB33ajQ~2uEbK65M7mY~2z4RqKWWDoz~XrPzuCQCZ-ISC7VnnJtQcEMKK3LT8lWJqMU6K3NF1o3P4zGAg8hFAwmv6TtcSANp94O51SLhSRVuN6p~3wtynaGv5o5SthLz8dQyQhmd8L9Go6LHFvfJ8wB5yx2YbjxDNUC2ReXaKy0RxqJCX5m2Rhuz8EZJv7ixx4z0yJV28sRsgrv4fqDKR9BPXNC7oDpGXKW0WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              ProductDescription="Large Shwarma Sandwich with fries and mayonese"
              ProductPrice="30 EGP"
            />
          ))}
        </div>
      )}
      {Categories.Western && (
        <div className="grid md:grid-cols-1 grid-cols-4 gap-4">
          {[...Array(20)].map(() => (
            <ProductCard
              ProductName="beef stroganoff"
              ProductImage="https://s3-alpha-sig.figma.com/img/91bc/e2df/824271886bdfdb939ea923c96e2c1888?Expires=1670803200&Signature=Q2k4lL0jMBVExO2bnR7r1~65RY1mMUs5F~zxBihqviZ3no0VeAIcjFdCxe0uRmQVokMc1w609jrqRgqiy3zWZVLzbgqqw6QKeJ3AUcvr-R0U7z6uHHa~vjMsCQ1ps2UrJeIuzQKT1YTDGoBb597EDcN99lYUc8AOJWVemffpVfs1DXdwEIRr5zFe-SXtUWaZTA859K7Vs8nYaC89pvHOJ3~2gLDYQ~VrvFe5az-eEVrl9pFLh~xUWoYIUz-SfU1ie9t0VOcO9wHWey5Bkt1-XRmaPvB~IwP4iAxcrbAEg8HXoWuxZEO8ZPJVTdvRwnVsI9MhOTS7uLV9CbfGhBW6nQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              ProductDescription="Best dish on the god damn planet"
              ProductPrice="100 EGP"
            />
          ))}
        </div>
      )}
      {Categories.Drinks && (
        <div className="grid grid-cols-4 gap-4">
          <ProductCard
            ProductName={props.Drinks_ProductName}
            ProductImage={props.Drinks_ProductImage}
            ProductDescription={props.Drinks_ProductDescription}
            ProductPrice={props.Drinks_ProductPrice}
          />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
