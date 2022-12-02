import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { useState } from "react";

function Products_Page(props) {
    const [isEastern, setEastern] = useState(true);
    const [isWestern, setWestern] = useState(false);
    const [isDrinks, setDrinks] = useState(false);

    return (
        <>
            <div className="flex justify-center gap-8 py-8">
                <button className="rounded-lg border w-[90px] h-[37px]"
                    style={{ backgroundColor: isEastern ? "#333333" : "white" }}
                    onClick={(e) => { setEastern(true); setWestern(false); setDrinks(false); }}>
                    <p style={{ color: isEastern ? "white" : "#333333" }}>Eastern</p>
                </button>
                <button className="rounded-lg border w-[90px] h-[37px] "
                    style={{ backgroundColor: isWestern ? "#333333" : "white" }}
                    onClick={(e) => { setEastern(false); setWestern(true); setDrinks(false); }}>
                    <p style={{ color: isWestern ? "white" : "#333333" }}>Western</p>
                </button>
                <button className="rounded-lg border w-[90px] h-[37px] "
                    style={{ backgroundColor: isDrinks ? "#333333" : "white" }}
                    onClick={(e) => { setEastern(false); setWestern(false); setDrinks(true); }}>
                    <p style={{ color: isDrinks ? "white" : "#333333" }}>Drinks</p>
                </button>
            </div>
            {isEastern && (
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard
                        ProductName={props.Eatern_ProductName}
                        ProductImage={props.Eatern_ProductImage}
                        ProductDescription={props.Eatern_ProductDescription}
                        ProductPrice={props.Eatern_ProductPrice} />


                </div>
            )}
            {isWestern && (
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard
                        ProductName={props.Western_ProductName}
                        ProductImage={props.Western_ProductImage}
                        ProductDescription={props.Western_ProductDescription}
                        ProductPrice={props.Western_ProductPrice} />
                </div>
            )}
            {isDrinks && (
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard
                        ProductName={props.Drinks_ProductName}
                        ProductImage={props.Drinks_ProductImage}
                        ProductDescription={props.Drinks_ProductDescription}
                        ProductPrice={props.Drinks_ProductPrice} />
                </div>
            )}
        </>
    );
}

export default Products_Page;