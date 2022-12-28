import React, { useState, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

import { ReserveContext } from "./ReservationPage";

const How = () => {
  const { reservation, setReservation } = useContext(ReserveContext);

  const [isActive, setIsActive] = useState(false);
  const [hasChose, setHasChose] = useState(false);
  const [number, setNumber] = useState();
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (event, key) => {
    setHasChose(true);
    setIsActive(false);
    setNumber(key);

    setReservation({ ...reservation, How: key });
    console.log(reservation);
  };

  return (
    <div className="max-w-fit min-w-[360px]">
      <div
        className="flex cursor-pointer justify-between items-center px-4 py-2 border border-Body w-full rounded-lg"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="flex gap-4 items-center">
          <BsPeopleFill fill="#333333" size={16} />
          <p className={`${!hasChose ? "text-Small" : "text-Body"}`}>
            {!hasChose ? "How many are coming?" : number}
          </p>
        </div>
        <BiChevronDown size={16} />
      </div>
      <ul
        className={`overflow-y-auto max-h-[120px] absolute w-full cursor-pointer z-50 ${isActive ? "block" : "hidden"
          }`}
        onMouseLeave={(e) => setIsActive(false)}
      >
        {options?.map((key) => (
          <li
            key={key}
            className="flex items-center gap-4 px-4 py-2 bg-White hover:bg-Small hover:text-White w-full  fill-Body hover:fill-White text-Body"
            onClick={(event) => handleClick(event, key)}
          >
            <BsPeopleFill className="" size={16} />
            <p>{key}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default How;
