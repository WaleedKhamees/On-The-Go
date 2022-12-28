import axios from "axios";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { userContext } from "../../src/App"
import StarRatings from 'react-star-ratings';

const AddCommetForm = ({ id }) => {
    const [rating, setRating] = useState(5);
    const { user } = useContext(userContext);
    const changeRating = (newRating, name) => {
        setRating(newRating)
    };
    return (
        <>
            <form className="flex flex-col gap-4"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const review =
                    {
                        email: user.email,
                        item_id: parseInt(id),
                        review_date: dayjs(new Date()).format("YYYY/MM/DD"),
                        rate: rating,
                        review_desc: form.comm.value,
                    };
                    console.log(review);
                    try {
                        const res = await axios.post(
                            "http://localhost:3000/review/insert", review
                        );

                        setError(res.data.message);
                        console.log(res.data.message);

                        if (res.data.message == "Inserterd successfully")
                            console.log(" Inserterd successfully");
                    } catch (err) {
                        console.log(err);
                        console.log("error");
                    }
                    comm.value = "";
                }}>
                <h2 className="h2 mx-auto">Your Opinion Matters</h2>
                <textarea
                    id="comm"
                    rows="4"
                    type="text"
                    required
                    className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none resize-none "
                    placeholder="Type Your Review"
                ></textarea>
                <div className="flex justify-center" >
                    <StarRatings
                        rating={rating}
                        starRatedColor="#FFD800"
                        numberOfStars={5}
                        starDimension="24px"
                        name='rating'
                        changeRating={changeRating}
                        starHoverColor="#FFD800"
                        starSpacing="4px"
                    />
                </div>
                <button className="rounded-lg bg-RedPrimary w-full p-4"
                    type="submit">
                    <p className="outlinebody text-White">Send Review</p>
                </button>
            </form>
        </>
    );
};
export default AddCommetForm;