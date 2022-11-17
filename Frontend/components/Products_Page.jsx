import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { useState } from "react";

function Products_Page() {
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
                <button className="rounded-lg border w-[90px] h-[37px]"
                    style={{ backgroundColor: isDrinks ? "#333333" : "white" }}
                    onClick={(e) => { setEastern(false); setWestern(false); setDrinks(true); }}>
                    <p style={{ color: isDrinks ? "white" : "#333333" }}>Drinks</p>
                </button>
            </div>
            {isEastern && (
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard
                        ProductName="Shawrma"
                        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
                        ProductPrice="30$" />
                    <ProductCard
                        ProductName="Shawrma"
                        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
                        ProductPrice="30$" />
                    <ProductCard
                        ProductName="Shawrma"
                        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
                        ProductPrice="30$" />
                    <ProductCard
                        ProductName="Shawrma"
                        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
                        ProductPrice="30$" />
                    <ProductCard
                        ProductName="Shawrma"
                        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
                        ProductPrice="30$" />
                    <ProductCard
                        ProductName="Shawrma"
                        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
                        ProductPrice="30$" />

                </div>
            )}
            {isWestern && (
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard
                        ProductName="Burger"
                        ProductImage="https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg?w=1380"
                        ProductDescription="Large Burger Sandwich With Cheese, Tomato, Lettuce and Moyonese"
                        ProductPrice="35$" />
                    <ProductCard
                        ProductName="Burger"
                        ProductImage="https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg?w=1380"
                        ProductDescription="Large Burger Sandwich With Cheese, Tomato, Lettuce and Moyonese"
                        ProductPrice="35$" />
                    <ProductCard
                        ProductName="Burger"
                        ProductImage="https://img.freepik.com/premium-photo/cheese-burger-with-onion-tomato-lettuce-bacon-white-background_499484-1161.jpg?w=1380"
                        ProductDescription="Large Burger Sandwich With Cheese, Tomato, Lettuce and Moyonese"
                        ProductPrice="35$" />


                </div>
            )}
            {isDrinks && (
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard
                        ProductName="Orange Juice"
                        ProductImage="https://img.freepik.com/premium-photo/glass-orange-juice-100-isolate-white-background_48237-606.jpg?w=2000"
                        ProductDescription="Fresh Orange Juice"
                        ProductPrice="10$" />
                    <ProductCard
                        ProductName="Orange Juice"
                        ProductImage="https://img.freepik.com/premium-photo/glass-orange-juice-100-isolate-white-background_48237-606.jpg?w=2000"
                        ProductDescription="Fresh Orange Juice"
                        ProductPrice="10$" />
                    <ProductCard
                        ProductName="Orange Juice"
                        ProductImage="https://img.freepik.com/premium-photo/glass-orange-juice-100-isolate-white-background_48237-606.jpg?w=2000"
                        ProductDescription="Fresh Orange Juice"
                        ProductPrice="10$" />



                </div>
            )}
        </>
    );
}

export default Products_Page;