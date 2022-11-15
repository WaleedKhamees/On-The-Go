import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import HomePageCard1 from "../components/HomePageCard1";
import HomePageCard2 from "../components/HomePageCard2";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";
function App() {
  return (
    <>
      <NavBar />
      <HomePageCard1
        Img="https://s3-alpha-sig.figma.com/img/3ace/154c/4d9e8937101671c15ad48799914bbc71?Expires=1669593600&Signature=QFD~Cu3bza2I-Nmix6e0sT~4M9mpCTqoF1Rn3vUJcoajbV38UNKJynfuF-yhqIJfqnBij1M9rHXQVj6Cq-kazi78T6CpJ0yqmlM5bzTJ8k57DfYFLQmGqSwuRexDAiAaog6nzeGwx~7RGrSTYDHsglP7GAKPOIIvV9HaaO7jyJ2Rmd1Nf4qLPuBaxlml-G--AeC60srjtdQ3ajtK3r7Lg9DNoEGT~NX-vRdU-dqDP2IXOh9ayMqzsURMn~5Umf6YawRlPJygZ09qcBVJje-v7lxxpQK74ek910gsKsXM3pFBJcRTZOX8M7uaTJTQQ1gvWKVigRzPMT7wYzjiatpBUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        Header="Eastern Dishes"
        Description="Rich in flavors and history "
        pragrah
      />
      <HomePageCard2 />
      <HomePageCard1
        Img="https://s3-alpha-sig.figma.com/img/5967/a42b/951aca107210377cc974420266922a5f?Expires=1669593600&Signature=QIFj2sd7nvSweq31UeKEFYiFCLRYODTe4hCOZG5o4C~LhAVuyYRJtS7vL32xrH9TzqIRC1OlUs50l0kZSnK6-Qo72QCqQ1-~M9MGxAyx~4PNPERUKX6eyhOU3UB5eZCrtPCgXdftJX2xH9O0Eq-DKa3TbS2mptjFJ1pE5fYPKcDoMC01WKqMMNWrZEqoFkAY0vgGmnM3fYbBWAEsvNfS8r7~8bE-sOm3JLWrcJUO5E9LY1vm3o-GbJs1wA0cmKvCdntjPZN1O1cDPmSpoyXArKVwyp5YZs3i2vcZQ2hlkfKRTpoxMUAHJrlmdDWqm69tWEAOOWoG2tEscMFVhCH9Lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        Header="Drinks"
        Description="Wash down your meal with a cold drink"
      />
      <Footer />
      <ProductInfo
        Img="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1669593600&Signature=DN6F1wOD61YoalzOEV6UXwuhlwk8MiWiRuNhtpDirhzCeAARI6M25MTUcIX~RBq6Svh1ej-7wr2Pt2Xgu7a1t~~v3eP6dzYpVz-AqpJOsPgzGm7YXcXtZ-gQXz1ni3KOkVTJ1eyTvmKdPFX3rvVhl9sM4Ko5vhTEtbJ1lmivYGavUo~38MyFWZwkA96W8C3j5WiqPbeKtCen-LfwX8XecigYBVEyyPqPCtoMU9cIHEWXhpu~jwsIIMp0VY-slnQmwk3~PFc4AmAB7xTQHkRGxWlTudzRD73aLWrA7OcOKyK~xABiqTCfMzjbf~PvDmMP6TxHym0BwnkpHW4zNJE4ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        Price="30 EGP"
        Header="Shawarma"
        Description="Large Shwarma Sandwich with fries and mayonese"
      />
    </>
  );
}

export default App;

/*
<ProductCard
        ProductName="Shawrma"
        ProductImage="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1668988800&Signature=aN40adIjp8wtwItz21FqurRtGnKqs-RpXuRz4tu2MKXu69JHHTp8HdPQ-HPslTGP0t56AeiYzhCCrHSAT2LJJA-ZbaO~Jp3t9GGfgVF4DW0xFyDTkNBayxIs7AGzym8lRHo9-27avXLNpA590GM8U7VGW5viSmz2dmeo9jlmOcD-0gNSE11Omj9k01yi0YyoiPcEGB8oARtf1ZuHZe-pkMm9tUH5bvuwmYF8NRrBkJHA1gknshvqbvyiI9Zv2L9Nl6RWKzgGW4ItsFqxlESEX4mnqqYlD4U~TqTbPI9VLxD1kAU~udWobGg1BxRa8lYPrC8bcdNUqRnc1UVYI-AY7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        ProductDescription="Large Shwarma Sandwich With Fries and Moyonese"
        ProductPrice="30$"
/>*/
