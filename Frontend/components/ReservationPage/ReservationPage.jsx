import CheckinDate from "./CheckinDate";
import How from "./How";
import When from "./When";

import BranchNum from "./BranchNumber";
const Reservation = () => {
  return (
    <form>
      <div className="flex flex-col items-center gap-4 py-8">
        <h2 className="h2 text-center">Reserve Your Seat</h2>
        <CheckinDate />
        <How />
        <When />
        <BranchNum />

        <button className="rounded-lg bg-RedPrimary flex-grow p-4 max-w-fit min-w-[360px]">
          <p className="outlinebody text-White">Reserve</p>
        </button>
      </div>
    </form>
  );
};
export default Reservation;
