import ProductCart from "./ProductCart";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductInfoPage = () => {
    const id = useParams().id;
    const [product, setProduct] = useState();
    const getData = async () => {
        const data = await axios.get(`http://localhost:3000/item/${id}`);
        console.log(data.data[0]);
        setProduct(data.data[0]);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="py-2.5 px-4 ">
                {product && <ProductCart item={product} rating={5} />}
            </div>
            <div className="flex-col px-16 py-8 space-y-8">
            </div>
        </>
    );
}

export default ProductInfoPage;