import axios from "axios";
import dayjs from "dayjs";
import { useContext } from "react";
import { useState } from "react";
// import ReactStarRating from "react-star-ratings-component";
import { userContext } from "../../src/App";


const AddCommetForm = ({ id }) => {
    const [rating, setRating] = useState(5);
    const { user } = useContext(userContext);
    return (
        <>
            <form className="flex flex-col gap-2"
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
                <h2 className="h2 mx-8">Your Opinion Matters</h2>
                <textarea
                    id="comm"
                    rows="4"
                    type="text"
                    required
                    className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none resize-none "
                    placeholder="Type Your Review"
                ></textarea>
                <div className="flex ml-1">
                    {/* <ReactStarRating
                        numberOfStar={5}
                        numberOfSelectedStar={5}
                        colorFilledStar="#FFD800"
                        colorEmptyStar="#989898"
                        starSize="30px"
                        spaceBetweenStar="30px"
                        disableOnSelect={false}
                        onSelectStar={val => {
                            setRating(val);
                            console.log(val);
                        }}
                    /> */}
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