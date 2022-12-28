import StarsRating from "../atoms/StarsRating";
const Comment = ({ review_date, rate, review_desc, first_name, last_name, img_url }) => {
  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="flex gap-4">
        <img
          src={img_url || "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}
          alt=""
          className="rounded-full w-16 h-16"
        />
        <div className="flex flex-col gap-1">
          <h3 className="h3">{first_name} {last_name}</h3>
          <p className="small text-Small">{review_date}</p>
          <StarsRating Rating={rate} />
        </div>
      </div>
      <p className="p text-Body">{review_desc}</p>
    </div>
  );
};
export default Comment;
