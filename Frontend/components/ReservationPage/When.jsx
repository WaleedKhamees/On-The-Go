import React, { useState, useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { ReserveContext } from "./ReservationPage";

const When = () => {
  const { reservation, setReservation } = useContext(ReserveContext);
  const [isActive, setIsActive] = useState(false);
  const [hasChose, setHasChose] = useState(false);
  const [clock, setclock] = useState("When?");
  const options = [
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  const handleClick = (event, key) => {
    setHasChose(true);
    setIsActive(false);
    setclock(key);
    setReservation({ ...reservation, When: key });
    console.log(reservation);
  };

  return (
    <div className="max-w-fit min-w-[360px] ">
      <div
        className="flex justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="flex gap-4 items-center w-full text-Small">
          <BsClockFill fill="#333333" size={16} />
          <p className={`p ${!hasChose ? "text-Small" : "text-Body"}`}>
            {!hasChose ? "When" : clock}
          </p>
        </div>
        <BiChevronDown size={16} />
      </div>

      <ul
        className={`overflow-y-auto max-h-[120px] absolute w-full cursor-pointer z-50 transition-all ease-linear duration-1000 ${isActive ? "block" : "hidden"
          }`}
        onMouseLeave={(e) => setIsActive(false)}
      >
        {options.map((option) => (
          <li
            key={option}
            className="flex items-center gap-4 px-4 py-2 bg-White hover:bg-Small hover:text-White w-full fill-Body hover:fill-White text-Body z-50"
            onClick={(event) => handleClick(event, option)}
          >
            <div className="flex gap-4 items-center">
              <BsClockFill size={16} />
              {option}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
/* 
      {isActive && (
        <ul
          className=" bg-White overflow-y-auto max-h-[120px] absolute w-full cursor-pointer"
          onMouseLeave={() => setIsActive(false)}
        >
          {options?.map((key) => (
            <li
              key={key}
              className="flex items-center gap-4 px-4 py-2 hover:bg-Small hover:text-White w-full  fill-Body hover:fill-White text-Body"
              onClick={(event) => handleClick(event, key)}
            >
              <BsPeopleFill className="" size={24} />
              <p>{key}</p>
            </li>
          ))}
        </ul>
      )}
    </div> */
export default When;
