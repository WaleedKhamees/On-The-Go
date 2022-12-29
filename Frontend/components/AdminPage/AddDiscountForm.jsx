import axios from "axios";
import { useState, useEffect } from "react";
import { validateDiscountForm } from "../../util/validations";
import dayjs from "dayjs";
import { DayPicker } from "react-day-picker";
import "../../src/styles/react-date-picker.css";
import { BACKEND } from "../../src/App";

const AddDiscountForm = ({ setInitFunc }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(new Date())
    const [selectedEndDate, setSelectedEndDate] = useState(new Date())


    const [error, setError] = useState({
        endDate: "",
        discountPercent: ""
    })

    return (
        <form className="w-full bg-White flex flex-col items-center gap-4 relative"
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                if (selectedStartDate.getTime() < selectedEndDate.getTime()) {
                    const Discount = {
                        start_date: dayjs(selectedStartDate).format("YYYY/MM/DD"),
                        end_date: dayjs(selectedEndDate).format("YYYY/MM/DD"),
                        discount_percent: Number.parseInt(form.Pecentage.value)
                    }
                    const validate = validateDiscountForm(Discount);
                    console.log(validate.res);
                    if (validate.error)
                        setError(validate.res);
                    else {
                        setError({ description: "", imgUrl: "", itemPrice: "", name: "" })
                        const req = await axios.post(`${BACKEND}/discount/insert`, Discount);
                        console.log(req);
                        location.reload();
                    }
                }
                else {
                    setError({ ...error, endDate: "End Date must be greater than Start Date" });
                }

            }}
        >
            <span className="material-symbols-outlined ml-auto mr-4 cursor-pointer"
                onClick={() => { setInitFunc("Access Discount") }}>
                close
            </span>
            <h1 className="h1">Add Discount</h1>
            <div className="flex flex-row gap-16 mt-6">
                <div className="flex flex-col gap-2">
                    <h2 className="h2 text-center">Pick Start Date</h2>
                    <DayPicker
                        mode="single"
                        selected={selectedStartDate}
                        onSelect={setSelectedStartDate}
                        defaultMonth={(new Date())}
                        fromDate={(new Date())}
                    />
                </div>
                <div className="h-[340px] w-[2px] bg-Headings"></div>
                <div className="flex flex-col gap-2">
                    <h2 className="h2 text-center">Pick End Date</h2>
                    <DayPicker
                        mode="single"
                        selected={selectedEndDate}
                        onSelect={setSelectedEndDate}
                        defaultMonth={(new Date())}
                        fromDate={(new Date())}
                    />
                    <label
                        className={`${error.endDate ? "block" : "hidden"} text-RedPrimary small`}
                        htmlFor="Pecentage">
                        {error.endDate}
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <input
                    id="Pecentage"
                    className="py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none w-[350px]"
                    placeholder="Enter Discount's Pecentage"
                />
                <label
                    className={`${error.discountPercent ? "block" : "hidden"} text-RedPrimary small`}
                    htmlFor="Pecentage">
                    {error.discountPercent}
                </label>
            </div>
            <input type="submit" value="Add Discount" className="cursor-pointer btn max-w-[350px]" />
        </form>
    )


}

export default AddDiscountForm