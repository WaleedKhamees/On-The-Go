import CheckinDate from "./CheckinDate";
import How from "./Howmanyarecoming";
import When from "./When";
const Reservation = () => {
  return (
    <div>
      <h2 className="h2 text-center">Reserve Your Seat</h2>
      <CheckinDate />
      <How />
      <When />
    </div>
  );
};
export default Reservation;
