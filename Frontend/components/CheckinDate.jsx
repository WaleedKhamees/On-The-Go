import React, { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";

const CheckinDate = () => {
  const [selected, setSelected] = useState(new Date());
  dayjs.extend(advancedFormat);
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {dayjs(selected).format("MMM Do, YYYY")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      
      
    />
  );
};
export default CheckinDate;
/* <div className="flex gap-4 items-center px-4 py-2 outline-none border border-Body max-w-[300px] h-[40px] rounded-lg">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 5.93823H18V3.93823C18 3.38595 17.5523 2.93823 17 2.93823C16.4477 2.93823 16 3.38595 16 3.93823V5.93823H8V3.93823C8 3.38595 7.55228 2.93823 7 2.93823C6.44772 2.93823 6 3.38595 6 3.93823V5.93823H5C3.34315 5.93823 2 7.28138 2 8.93823V19.9382C2 21.5951 3.34315 22.9382 5 22.9382H19C20.6569 22.9382 22 21.5951 22 19.9382V8.93823C22 7.28138 20.6569 5.93823 19 5.93823ZM4 8.93823C4 8.38595 4.44772 7.93823 5 7.93823H19C19.5523 7.93823 20 8.38595 20 8.93823V9.93823H4V8.93823ZM19 20.9382C19.5523 20.9382 20 20.4905 20 19.9382V11.9382H4V19.9382C4 20.4905 4.44772 20.9382 5 20.9382H19Z"
          fill="#333333"
        />
      </svg>
      <div className="w-fit"></div>
    </div> */
