const ForproductHitsory = (props) => {
  return (
    <div className="flex h-max-[250px] mt-4">
      <img src={props.Img} className="max-h-[200px] rounded-l-lg"></img>

      <div className="flex  flex-grow w-3/4  max-h-[200px] justify-between rounded-r-lg">
        <div className=" flex-col flex gap-2 pl-16 py-12">
          <h1 className="h1 text-Headings">{props.nameitem}</h1>
          <p className="p   text-Small">{props.descitem} </p>
        </div>

        <div className="flex flex-col items-center gap-2 pr-16 py-12">
          <p className="p text-Headings text-center">{props.Price} EGP</p>
          <div className="flex items-center justify-center"></div>
          <p className="p text-Small text-center  ">Qty: {props.Qty}</p>
        </div>
      </div>
    </div>
  );
};

export default ForproductHitsory;
