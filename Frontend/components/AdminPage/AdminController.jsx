import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

const AdminController = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasChose, setHasChose] = useState(false);
  const [func, setfunc] = useState("What do you want to do?");
  const options = ["Access Employees", "Access Menu", "Access Customer"];

  const handleClick = (event, key) => {
    setHasChose(true);
    setIsActive(false);
    setfunc(key);
  };

  return (
    <div className="max-w-fit min-w-[350px] relative">
      <div
        className="flex justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="flex items-center gap-4 w-full ">
          <MdManageAccounts fill="#333333" size={16} />
          <p className={`p ${!hasChose ? "text-Small" : "text-Body"}`}>
            {func}
          </p>
        </div>
        <BiChevronDown size={16} />
      </div>
      <ul
        className={`overflow-y-auto max-h-[120px] absolute w-full cursor-pointer z-50 transition-all ease-linear duration-1000 ${
          isActive ? "block" : "hidden"
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
              <MdManageAccounts size={16} />
              {option}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminController;
/* 
      <ul
        className={`overflow-y-auto max-h-[120px] absolute w-full cursor-pointer z-50 transition-all ease-linear duration-1000 ${
          isActive ? "block" : "hidden"
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
 */
