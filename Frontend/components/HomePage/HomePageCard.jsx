const HomePageCard = (props) => {
  return (
    <div
      className={`flex justify-between ${
        props.Reversed ? "flex-row-reverse" : ""
      } max-h-[400px]`}
    >
      <div className="flex w-1/2">
        <img src={props.Img} className="w-full"></img>
      </div>
      <div className="flex flex-col items-center  bg-RedPrimary text-center w-1/2 gap-4 py-28 ">
        <h1 className="h1 text-White text-center"> {props.Header} </h1>

        <h3 className="h3 text-White text-center"> {props.Description} </h3>

        <button className="border rounded-lg border-White  pr-2 pl-2    ">
          {" "}
          <p className="text-White text-center p-2 ">Order Now</p>
        </button>
      </div>
    </div>
  );
}

export default HomePageCard;
