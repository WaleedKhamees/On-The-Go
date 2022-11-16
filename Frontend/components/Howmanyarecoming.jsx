import { useState } from "react";

function How({ selected, setselected }) {
  const [isActive1, setIsActive1] = useState(false);
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className=" flex justify-center">
      <div className="flex-col flex max-w-[364px] items-center flex-grow gap-4 ">
        <h2 className="h2 text-center">Reserve Your Seat</h2>

        <div
          className="flex rounded-lg pr-2 pl-2 border w-full justify-between "
          onClick={(e) => setIsActive1(!isActive1)}
        >
          <p className="text-center p-2">How many are coming </p>
          <p className="text-center p-2  ">^</p>
        </div>

        {isActive1 && (
          <div className="fsadfsd">
            {options.map((option) => (
              <div
                onclick={(e) => {
                  setselected(option);
                  setIsActive1(false);
                }}
              >
                {option}{" "}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default How;
/*
<div
className="flex rounded-lg pr-2 pl-2 border w-full justify-between "
onClick={(e) => setIsActive2(!isActive2)}
>
<p className="text-center p-2">How many are coming? </p>
<p className="text-center p-2  ">^</p>
</div>

{isActive2 && (
<div className="dropdown_option">
{Option.map((option)=>(
  <div onclick={(e)=>{
    setselected(option)
    setIsActive2(false)
  className="dropdown_option">
  {option}

  }
)
)
}
</div>
)}*/
