import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineBranches } from "react-icons/ai";

const BranchNum = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasChose, setHasChose] = useState(false);
  const [BranchNum, setBranchNum] = useState("Duration?");
  const options = ["1", "2", "3", "4"];

  const handleClick = (event, key) => {
    setHasChose(true);
    setIsActive(false);
    setBranchNum(key);
  };

  return (
    <div className="max-w-fit min-w-[360px]">
      <div
        className="flex justify-between items-center cursor-pointer px-4 py-2 border border-Body w-full rounded-lg"
        onClick={(e) => setIsActive(!isActive)}
      >
        <div className="flex gap-4 items-center w-full text-Small">
          <AiOutlineBranches fill="#333333" size={16} />
          <p className={`p ${!hasChose ? "text-Small" : "text-Body"}`}>
            {!hasChose ? "BranchNum" : BranchNum}
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
              <AiOutlineBranches size={16} />
              {option}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchNum;
