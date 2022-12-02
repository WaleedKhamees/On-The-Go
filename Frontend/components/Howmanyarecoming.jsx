import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

const How = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasChose, setHasChose] = useState(false);
  const [number, setNumber] = useState();
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (event, key) => {
    setHasChose(true);
    setNumber(key);
  };

  return (
    <div className="max-w-fit min-w-[300px] relative">
      <div
        className="flex cursor-pointer justify-between items-center px-4 py-2 border border-Body max-w-fit min-w-[300px] rounded-lg"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="flex gap-4 items-center">
          <BsPeopleFill fill="#333333" size={24} />
          <p className={`${!hasChose ? "text-Small" : "text-Body"}`}>
            {!hasChose ? "How many are coming?" : number}
          </p>
        </div>
        <BiChevronDown size={24} />
      </div>

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
    </div>
  );
};

export default How;
