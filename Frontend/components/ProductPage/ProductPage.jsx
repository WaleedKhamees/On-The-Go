import ProductCart from "../atoms/ProductCart";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddCommetForm from "./AddCommentForm";
import { BACKEND } from "../../src/App";



const ProductPage = () => {
    const id = useParams().id;
    const [product, setProduct] = useState();
    const [reviews, setReviews] = useState();
    const getData = async () => {
        const data = await axios.get(`${BACKEND}/item/${id}`);
        console.log(data.data[0]);
        setProduct(data.data[0]);
    };
    const getReviews = async () => {
        const data = await axios.get(`${BACKEND}/review/${id}`);
        setReviews(data.data);
    };
    useEffect(() => {
        getData();
        getReviews();
    }, []);
    return (
        <>
            <div className="py-2.5 px-4 ">
                {product && <ProductCart item={product} rating={5} />}
            </div>
            <div className="flex flex-row px-16 py-8 justify-between">
                <div className="flex-col space-y-8">
                    {reviews && reviews.map((review) =>
                        <Comment rate={review.rate} review_date={review.review_date} review_desc={review.review_desc} first_name={review.first_name} last_name={review.last_name} img_url={review.img_url} />
                    )}
                </div>
                <div className="flex-col ">
                    <AddCommetForm id={id} />
                </div>
            </div>

        </>
    );
}

export default ProductPage;