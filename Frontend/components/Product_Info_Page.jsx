import NavBar from "./NavBar";
import ProductInfo from "./ProductInfo";
import Comment from "./Comment";
import Footer from "./Footer";

function Product_Info_Page() {
    return (
        <>
            <div className="py-2.5 px-4 ">
                <ProductInfo
                    Img="https://s3-alpha-sig.figma.com/img/b99f/77ae/014d68dacd5d463de996eec8bfd086d9?Expires=1669593600&Signature=DN6F1wOD61YoalzOEV6UXwuhlwk8MiWiRuNhtpDirhzCeAARI6M25MTUcIX~RBq6Svh1ej-7wr2Pt2Xgu7a1t~~v3eP6dzYpVz-AqpJOsPgzGm7YXcXtZ-gQXz1ni3KOkVTJ1eyTvmKdPFX3rvVhl9sM4Ko5vhTEtbJ1lmivYGavUo~38MyFWZwkA96W8C3j5WiqPbeKtCen-LfwX8XecigYBVEyyPqPCtoMU9cIHEWXhpu~jwsIIMp0VY-slnQmwk3~PFc4AmAB7xTQHkRGxWlTudzRD73aLWrA7OcOKyK~xABiqTCfMzjbf~PvDmMP6TxHym0BwnkpHW4zNJE4ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    Price={30}
                    Header="Shawarma"
                    Description="Large Shwarma Sandwich with fries and mayonese"
                />
            </div>
            <div className="flex-col px-16 py-8 space-y-8">
                <Comment
                    UserName="Youssef Ousama"
                    Date="18th Aug 2021"
                    Review="Loved Every bite of it."
                    Rating={5} />
                <Comment
                    UserName="Youssef Ousama"
                    Date="18th Aug 2021"
                    Review="Loved Every bite of it."
                    Rating={5} />
                <Comment
                    UserName="Youssef Ousama"
                    Date="18th Aug 2021"
                    Review="Loved Every bite of it."
                    Rating={5} />
            </div>
        </>
    );
}

export default Product_Info_Page;