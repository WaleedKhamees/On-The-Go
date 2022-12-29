import CheckinDate from "./CheckinDate";
import How from "./How";
import When from "./When";
import axios from "axios";
import { BACKEND, userContext } from "../../src/App";
import BranchNum from "./BranchNumber";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect } from "react";
export const ReserveContext = createContext({});
const Reservation = () => {
  const [error, setError] = useState("");
  const { user } = useContext(userContext);
  const [reservation, setReservation] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    console.log(reservation);
  }, [reservation])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationObj = {
      Cardinality: reservation.How,
      Reservation_Date: dayjs(reservation.CheckinDate).format("YYYY/MM/DD"),
      Reservation_Time: reservation.When,
      email: JSON.parse(localStorage.getItem("user")).email,
      Branch_ID: reservation.BranchNumber,
    };

    try {
      console.log(reservationObj);
      const res = await axios.post(
        `${BACKEND}/reserve`,
        reservationObj
      );

      setError(res.data.message);
      console.log(res.data.message);

      if (res.data.message == "Reservation Has been reserved") {
        setError(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <form
        className="flex-col flex items-center gap-4 max-w-[350px] flex-grow"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="h2 text-center">Reserve Your Seat</h2>
        <ReserveContext.Provider value={{ reservation, setReservation }}>
          <CheckinDate />
          <How />
          <When />
          <BranchNum />
        </ReserveContext.Provider>
        <span
          className={`small text-RedPrimary p-1 ${error === "" ? "hidden" : "visible"
            }`}
        >
          {error}
        </span>
        <button
          type="submit"
          className="rounded-lg bg-RedPrimary flex-grow p-4 max-w-fit min-w-[350px]"
        >
          <p className="outlinebody text-White">Reserve</p>
        </button>
      </form>
    </div>
  );
};
export default Reservation;
