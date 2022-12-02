import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

const Admin_controller = () => {
  const [isActive, setIsActive] = useState(false);
  const [func, setfunc] = useState("Admin_controller");
  const options = ["Access Employees", "Access Menu", "Access Customer"];

  const handleClick = (event, key) => {
    setfunc(key);
  };

  return (
    <div className=" flex justify-center pt-4 ">
      <div className="flex-col flex max-w-[364px] items-center flex-grow gap-4">
        <div className="w-full bg-White p-2 flex items-center justify-between rounded-lg border border-[#333333] ">
          <div className="flex gap-2 text-[#333333]">
            <MdManageAccounts size={20} /> {func}
          </div>
          <BiChevronDown size={20} onClick={(e) => setIsActive(!isActive)} />
        </div>
        {isActive && (
          <ul className=" bg-White mt-2 overflow-y-auto max-h-60  w-full">
            {options?.map((key) => (
              <li
                key={key}
                className="p-2 hover:bg-Small hover:text-White w-full  text-[#333333]"
                onClick={(event) => handleClick(event, key)}
              >
                <div className="flex gap-2">
                  <MdManageAccounts size={20} />
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

export default Admin_controller;
