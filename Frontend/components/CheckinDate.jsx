import { useState } from "react";

function CheckinDate({ selected, setselected }) {
  const [isActive1, setIsActive1] = useState(false);

  return (
    <div className=" flex justify-center">
      <div className="flex-col flex max-w-[364px] items-center flex-grow gap-4 ">
        <h2 className="h2 text-center">Reserve Your Seat</h2>

        <div
          className="flex rounded-lg pr-2 pl-2 border w-full justify-between "
          onClick={(e) => setIsActive1(!isActive1)}
        >
          <p className="text-center p-2">Check-in Date </p>
          <p className="text-center p-2  ">^</p>
        </div>

        {isActive1 && (
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
          ></input>
        )}
      </div>
    </div>
  );
}

export default CheckinDate;
