import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";

const When = () => {
  const [isActive, setIsActive] = useState(false);
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
    setclock(key);
  };

  return (
    <div className=" flex justify-center pt-4 ">
      <div className="flex-col flex max-w-[364px] items-center flex-grow gap-4">
        <div className="w-full bg-White p-2 flex items-center justify-between rounded-lg border border-[#333333] ">
          <div className="flex gap-2 text-[#333333]">
            <BsClockFill size={20} />
            {clock}
          </div>
          <BiChevronDown size={20} onClick={(e) => setIsActive(!isActive)} />
        </div>
        {isActive && (
          <ul className=" bg-White mt-2 overflow-y-auto max-h-60  w-full">
            {options?.map((key) => (
              <li
                key={key}
                className="p-2 hover:bg-[#64748b] hover:text-White w-full text-[#333333] "
                onClick={(event) => handleClick(event, key)}
              >
                <div className="flex gap-2">
                  <BsClockFill size={20} />
                  {key}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default When;
