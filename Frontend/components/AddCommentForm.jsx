import StarsRating from "./atoms/StarsRating";
import axios from "axios";
const AddCommetForm = ({ id }) => {
    return (
        <>
            <form className="flex flex-col space-y-2"
                onSubmit={async (e) => {
                    e.preventDefault();
                    let date = new Date();
                    const form = e.currentTarget;
                    const review =
                    {
                        email: JSON.parse(localStorage.getItem("user")).email,
                        item_id: parseInt(id),
                        review_date: date.toDateString(),
                        rate: 5,
                        review_desc: form.comm.value,
                    };
                    try {
                        console.log(review);
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
                    location.reload();
                }}>
                <h2 className="h2 mx-8">Your Opinion Matters</h2>
                <textarea
                    id="comm"
                    rows="4"
                    type="text"
                    required
                    className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
                    placeholder="Type Your Review"
                ></textarea>
                <StarsRating />
                <button className="rounded-lg bg-RedPrimary w-full p-4"
                    type="submit">
                    <p className="outlinebody text-White">Send Review</p>
                </button>
            </form>
        </>
    );
};
export default AddCommetForm;