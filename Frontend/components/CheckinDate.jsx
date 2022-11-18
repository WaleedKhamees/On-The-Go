import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import "flowbite";

function CheckinDate({ selected, setselected }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" flex justify-center">
      <div className="flex-col flex max-w-[364px] items-center flex-grow gap-4 ">
        <h2 className="h2 text-center">Reserve Your Seat</h2>

        <div className="w-full bg-White p-2 flex items-center justify-between rounded-lg border border-[#333333]">
          <div className="flex gap-2 text-[#333333]">
            <BsFillCalendarEventFill size={20} />
            <p className="text-center ">Check-in Date </p>
          </div>
          <BiChevronDown size={20} onClick={(e) => setIsActive(!isActive)} />
        </div>

        {isActive && (
          <div className="flex" inline-datepicker data-date="02/25/2022"></div>
        )}
      </div>
    </div>
  );
}

export default CheckinDate;
