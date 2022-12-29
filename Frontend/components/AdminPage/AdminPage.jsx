import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND, userContext } from "../../src/App";
import AdminController from "./AdminController";
const Stat = ({ category, earning, percentage }) => (
  <div className="flex flex-col gap-2">
    <h3 className="h3 text-Small">{category}</h3>
    <div className="flex items-center gap-2 justify-between">
      <h2 className="h2">{earning}EGP</h2>
      <div
        className={`flex items-center gap-2 px-1 py-0.5 rounded-[0.25rem]
      ${percentage > 0
            ? "fill-GreenPrimary text-GreenPrimary bg-GreenSecondary "
            : "fill-RedPrimary text-RedPrimary bg-RedSecondary"
          }`}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          className={`${percentage < 0 ? "rotate-180 -scale-x-[1]" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.69063 15.6835L1.75 14.731L8.1375 8.28481L11.7906 11.9842L17.0625 6.64557H14.2844V5.31645H19.25V10.3449H17.9594V7.62025L11.7687 13.8892L8.11562 10.1899L2.69063 15.6835Z" />
        </svg>
        <p className="small">
          {percentage.toString() +
            (percentage - Math.floor(percentage) == 0 ? ".0" : "")}
          %
        </p>
      </div>
    </div>
  </div>
);
const AdminPage = () => {
  const { user } = useContext(userContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [easternStat, setEasternStat] = useState({});
  const [westernStat, setWesternStat] = useState({});
  const [drinksStat, setDrinksStat] = useState({});

  useEffect(() => {
    if (!user)
      navigate("/login");
    else if (user.kind === 'e')
      navigate("/employee");
    else if (user.kind === 'c')
      navigate("/");
  }, [user])
  const getStats = async () => {
    const es = (await axios.get(`${BACKEND}/stats/eastern`)).data;
    const ws = (await axios.get(`${BACKEND}/stats/western`)).data;
    const ds = (await axios.get(`${BACKEND}/stats/drinks`)).data;
    const esPercentage = Math.floor(((Number.parseInt(es.thisMonth ?? 0) - Number.parseInt(es.lastMonth ?? 0)) / (Number.parseInt(es.thisMonth ?? 0) + Number.parseInt(es.lastMonth ?? 0))) * 100);
    const wsPercentage = Math.floor(((Number.parseInt(ws.thisMonth ?? 0) - Number.parseInt(ws.lastMonth ?? 0)) / (Number.parseInt(ws.thisMonth ?? 0) + Number.parseInt(ws.lastMonth ?? 0))) * 100);
    const dsPercentage = Math.floor(((Number.parseInt(ds.thisMonth ?? 0) - Number.parseInt(ds.lastMonth ?? 0)) / (Number.parseInt(ds.thisMonth ?? 0) + Number.parseInt(ds.lastMonth ?? 0))) * 100);
    const esProfits = (Number.parseInt(es.thisMonth ?? 0) - Number.parseInt(es.lastMonth ?? 0));
    const wsProfits = (Number.parseInt(ws.thisMonth ?? 0) - Number.parseInt(ws.lastMonth ?? 0));
    const dsProfits = (Number.parseInt(ds.thisMonth ?? 0) - Number.parseInt(ds.lastMonth ?? 0));
    setEasternStat({ esPercentage, esProfits });
    setWesternStat({ wsPercentage, wsProfits });
    setDrinksStat({ dsPercentage, dsProfits });
  }
  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className="flex flex-col gap-16 py-16">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="h1 ">Welcome</h1>
        <AdminController />
      </div>
      <div className="flex-col flex items-center gap-4">
        <h1 className="h1 ">Statistics</h1>
        <div className="flex gap-8 p-4">
          <Stat category="Eastern"
            percentage={easternStat.esPercentage ?? 0}
            earning={easternStat.esProfits ?? 0} />
          <Stat category="Western"
            percentage={westernStat.wsPercentage ?? 0}
            earning={westernStat.wsProfits ?? 0} />
          <Stat category="Drinks"
            percentage={drinksStat.dsPercentage ?? 0}
            earning={drinksStat.dsProfits ?? 0} />
        </div>
      </div>
      <form
        className="flex flex-col max-w-[350px] flex-grow items-center gap-4 m-auto"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const newUser = {
            email: form.Email.value,
            old_password: form.OldPassword.value,
            new_password: form.NewPassword.value
          };
          try {
            debugger
            const res = await axios.patch(`${BACKEND}/user/update`, newUser);
            console.log(res);
            setMessage(res.data.message);
            logUser({ ...user, password: newUser.new_password });
          }
          catch (err) {
            console.log(err);
          }
        }}>
        <h2 className="h2">Change your Password</h2>
        <div className="flex flex-col w-full">
          <label
            htmlFor="first_name"
            className="block mb-2 small text-Small dark:text-white"
          >
            Email
          </label>
          <input
            required
            type="email"
            id="Email"
            className="placeholder:text-Small text-body px-4 py-2 border border-Body rounded-lg outline-none"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="first_name"
            className="block mb-2 small text-Small dark:text-white"
          >
            Old Password
          </label>
          <input
            required
            type="Password"
            id="OldPassword"
            className="placeholder:text-Small text-body px-4 py-2 border border-Body rounded-lg outline-none"
            placeholder="Enter your old Password"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="NewPassword"
            className="block mb-2 small text-Small dark:text-white"
          >
            New Password
          </label>
          <input
            required
            type="Password"
            id="NewPassword"
            className="placeholder:text-Small text-body px-4 py-2 border border-Body rounded-lg outline-none"
            placeholder="Enter your New Password"
          />
        </div>
        <label className="small text-RedPrimary" hidden={message === ""}>{message}</label>
        <input
          required type="submit" value="Confirm" className="rounded-lg py-4 cursor-pointer bg-RedPrimary w-full outlinebody text-White" />
      </form>
    </div>
  );
};

export default AdminPage;
