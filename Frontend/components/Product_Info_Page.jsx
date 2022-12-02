import NavBar from "./NavBar";
import ProductInfo from "./ProductInfo";
import Comment from "./Comment";
import Footer from "./Footer";

function Product_Info_Page(props) {
    return (
        <>
            <div className="py-2.5 px-4 ">
                <ProductInfo
                    Img={props.Img}
                    Price={props.Price}
                    Header={props.Header}
                    Description={props.Description}
                />
            </div>
            <div className="flex-col px-16 py-8 space-y-8">
                <Comment
                    UserName={props.UserName}
                    Date={props.Date}
                    Review={props.Review}
                    Rating={props.Rating} />
            </div>
        </>
    );
}

export default Product_Info_Page;