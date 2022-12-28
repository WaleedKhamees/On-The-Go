import React, { useState, useContext, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineBranches } from "react-icons/ai";

import { ReserveContext } from "./ReservationPage";
import axios from "axios";

const BranchNum = () => {
  const { reservation, setReservation } = useContext(ReserveContext);

  const [isActive, setIsActive] = useState(false);
  const [hasChose, setHasChose] = useState(false);
  const [BranchNum, setBranchNum] = useState("Duration?");
  const [branches, setBranches] = useState([]);


  const getBranches = async () => {
    try {
      const res = (await axios.get("http://localhost:3000/branch")).data;
      console.log(res);
      setBranches(res);
    }
    catch (error) {
      console.log(error);
    }
  }
  const handleClick = (event, id, loaction) => {
    setHasChose(true);
    setIsActive(false);
    setBranchNum(loaction);
    setReservation({ ...reservation, BranchNumber: id });
    console.log(reservation);
  };
  useEffect(() => {
    getBranches();
  }, [])

  return (
    <div className="relative w-[350px]">
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
        {branches.map((branch) => (
          <li
            key={branch.branch_id}
            className="flex items-center gap-4 px-4 py-2 bg-White hover:bg-Small hover:text-White w-full fill-Body hover:fill-White text-Body z-50"
            onClick={(event) => handleClick(event, branch.branch_id, branch.loaction)}
          >
            <div className="flex gap-4 items-center">
              <AiOutlineBranches size={16} />
              {branch.loaction}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchNum;
