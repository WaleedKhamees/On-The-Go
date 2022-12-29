import axios from "axios";
import { useState, useRef } from "react";
import { BACKEND } from "../../src/App";
import { validateProductForm } from "../../util/validations";

const AddProductForm = ({ setInitFunc }) => {
    const categoryRef = useRef();
    const [error, setError] = useState({
        name: "",
        description: "",
        itemPrice: "",
        imgUrl: ""
    })
    return (
        <form className="w-full bg-White flex flex-col items-center gap-4 relative"
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const product = {
                    item_name: form.ItemName.value,
                    item_desc: form.ItemDescription.value,
                    item_price: Number.parseFloat(form.ItemPrice.value),
                    img_url: form.ImgUrl.value,
                    discount_id: 1,
                    category: categoryRef.current.value
                }
                const validate = validateProductForm(product);
                console.log(validate);
                if (validate.error)
                    setError(validate.res);
                else {
                    setError({ description: "", imgUrl: "", itemPrice: "", name: "" })
                    const req = await axios.post(`${BACKEND}/item/insert`, product);
                    console.log(req);
                    location.reload();
                }

            }}
        >
            <span className="material-symbols-outlined ml-auto mr-4 cursor-pointer"
                onClick={() => { setInitFunc("Access Products") }}>
                close
            </span>
            <h1 className="h1">Add Product</h1>
            <div className="flex flex-col gap-1">
                <input
                    id="ItemName"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Item's Name"
                />
                <label
                    className={`${error.name ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="ItemName">
                    {error.name}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    id="ItemDescription"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Item's Description"
                />
                <label
                    htmlFor="ItemDescription"
                    className={`${error.description ? "block" : "hidden"} small text-RedPrimary`}>
                    {error.description}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    id="ItemPrice"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Item's Price"
                />
                <label
                    htmlFor="ItemPrice"
                    className={`${error.price ? "block" : "hidden"} small text-RedPrimary`}>
                    {error.price}
                </label>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    id="ImgUrl"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Item's Img Url"
                />
                <label
                    htmlFor="ImgUrl"
                    className={`${error.imgUrl ? "block" : "hidden"} small text-RedPrimary`}>
                    {error.imgUrl}
                </label>
            </div>
            <select
                ref={categoryRef}
                className="flex max-w-[350px] justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg appearance-none select"
            >
                <option value="Eastern">Eastern</option>
                <option value="Western">Western</option>
                <option value="Drinks">Drinks</option>
            </select>
            <input type="submit" value="Add Product" className="cursor-pointer btn max-w-[350px]" />
        </form>
    )
}
export default AddProductForm; 