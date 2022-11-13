import Revact from "react";

import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
function App() {
  return (
    <>
      <NavBar />

      <ProductCard
        ProductName="Shawrma"
        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
        ProductPrice="30$"
      />
    </>
  );
}

export default App;
