const StarsRating = (prop) => {
  return (
    <div className="flex items-center  gap-2">
      <p className="small text-Small">{prop.Rating}.0</p>
      <div className="flex items-center">
        {[...Array(5)].map((star, index) => {
          return (
            <span
              className={`bg-clip-text text-transparent p ${
                prop.Rating - index + 1 > 1 ? "bg-Yellow" : "bg-Small"
              }`}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default StarsRating;
