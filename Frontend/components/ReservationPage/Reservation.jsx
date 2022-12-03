import CheckinDate from "./CheckinDate";
import How from "./Howmanyarecoming";
import When from "./When";
const Reservation = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <h2 className="h2 text-center">Reserve Your Seat</h2>
      <CheckinDate />
      <How />
      <When />
    </div>
  );
};
export default Reservation;
