import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="h2">Are you a</h2>
      <div className="min-w-[350px] flex flex-col flex-grow gap-2">
        <Link to="/signup">
          <button className="btn">Customer?</button>
        </Link>
        <Link to="/admin">
          <button className="btn">Admin?</button>
        </Link>
        <Link to="/provider">
          <button className="btn">Provider?</button>
        </Link>
        <Link to="/employee">
          <button className="btn">Employee?</button>
        </Link>
      </div>
    </div>
  );
};
export default WelcomePage;
