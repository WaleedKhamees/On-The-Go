import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../src/App";
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
  const navigate = useNavigate();
  useEffect(() => {
    if (!user)
      navigate("/login");
    else if (user.kind === 'e')
      navigate("/employee");
    else if (user.kind === 'c')
      navigate("/home");
  }, [user])
  return (
    <div className="flex flex-col gap-16 py-16">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="h1 ">Welcome</h1>
        <AdminController />
      </div>
      <div className="flex-col flex items-center gap-4">
        <h1 className="h1 ">Statistics</h1>
        <div className="flex gap-8 p-4">
          <Stat category="Eastern" percentage={13} earning={1000} />
          <Stat category="Western" percentage={-12} earning={300} />
          <Stat category="Drinks" percentage={50.1} earning={9000} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
