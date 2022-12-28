const HistoryProductCard = (props) => {
  return (
    <div className="flex h-max-[250px] items-center justify-center gap-4 px-4">
      <img src={props.Img} className="max-h-[100px] rounded-lg"></img>

      <div className="flex w-full items-center justify-between max-h-[200px]">
        <div className="flex flex-col justify-center">
          <h1 className="h1 text-Headings">{props.nameitem}</h1>
          <p className="p   text-Small">{props.descitem} </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <h3 className="h3 text-Headings text-center">{props.Price} EGP</h3>
          <p className="p text-Small text-center  ">Qty: {props.Qty}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryProductCard;
