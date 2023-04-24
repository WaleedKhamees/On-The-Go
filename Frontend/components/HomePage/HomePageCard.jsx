import { Link } from "react-router-dom";
const HomePageCard = (props) => {
  return (
    <div
      className={`flex justify-between ${
        props.Reversed ? "flex-row-reverse" : ""
      } max-h-[400px]`}
    >
      <div className="flex flex-1">
        <img src={props.Img} className="w-full"></img>
      </div>
      <div className="flex flex-col flex-1 items-center  bg-RedPrimary text-center w-1/2 gap-4 py-28 ">
        <h1 className="h1 text-White text-center"> {props.Header} </h1>

        <h3 className="h3 text-White text-center"> {props.Description} </h3>
        <Link to={`/menu/${props.category}`}>
          <button className="border rounded-lg border-White  pr-2 pl-2">
            <p className="text-White text-center p-2 ">Order Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageCard;
