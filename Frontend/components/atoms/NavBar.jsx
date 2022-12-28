import { useContext } from "react";
import { BsGearWide, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { userContext } from "../../src/App";
const NavBar = () => {
  const { user, clearUser } = useContext(userContext);
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-8">
        <Link to="/">
          <h3 className="h3">خلصنا معلم</h3>
        </Link>
        <ul className="flex items-center gap-4">
          <li className="outlinebody">
            <Link to="/menu/eastern">Menu</Link>
          </li>
          <li className="outlinebody">
            <Link to="/reservations">Reservation</Link>
          </li>
          <li className="outlinebody">
            <Link to="/discounts">Discounts</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        {!user && (
          <div className="flex items-center gap-4">
            <p className="p">
              <Link to="/login">Login</Link>
            </p>
            <p className="p">|</p>
            <p className="p">
              <Link to="/signup">Sign up</Link>
            </p>
          </div>
        )}
        {user && (
          <div className="flex items-center gap-4">
            <img src="" alt="" />
            <p className="p cursor-pointer" onClick={() => clearUser()}>
              Logout
            </p>
          </div>
        )}
        <Link to="/cart">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 10.1399C20.0046 11.711 18.7964 13.0195 17.23 13.1399L6.05 13.9999C6.16 14.9999 6.47 14.9999 7 14.9999H18C18.3011 14.9885 18.5913 15.1134 18.79 15.3399C19.8459 15.9431 20.3146 17.2186 19.9006 18.3619C19.4865 19.5053 18.3098 20.1849 17.1125 19.9722C15.9153 19.7594 15.0448 18.716 15.05 17.4999C15.0513 17.3321 15.068 17.1647 15.1 16.9999H11C11.0153 17.1662 11.0153 17.3336 11 17.4999C11 18.8806 9.88071 19.9999 8.5 19.9999C7.11929 19.9999 6 18.8806 6 17.4999C6.00069 17.2973 6.02758 17.0956 6.08 16.8999C4 16.4099 4 14.2499 4 13.0799L2.15 1.99993H1C0.447715 1.99993 0 1.55222 0 0.999931C0 0.447647 0.447715 -6.85963e-05 1 -6.85963e-05H3C3.49539 -0.00644461 3.92077 0.350874 4 0.839931L4.18 1.99993L19.07 2.99993C19.5948 3.03675 20.0013 3.47387 20 3.99993V10.1399ZM18 17.4999C18 17.2238 17.7761 16.9999 17.5 16.9999C17.2239 16.9999 17 17.2238 17 17.4999C17 17.7761 17.2239 17.9999 17.5 17.9999C17.7761 17.9999 18 17.7761 18 17.4999ZM8.5 16.9999C8.77614 16.9999 9 17.2238 9 17.4999C9 17.7761 8.77614 17.9999 8.5 17.9999C8.22386 17.9999 8 17.7761 8 17.4999C8 17.2238 8.22386 16.9999 8.5 16.9999ZM5.85 11.9999H5.92L17.08 11.1499C17.6008 11.1081 18.0017 10.6724 18 10.1499V4.93993L4.52 3.99993L5.85 11.9999Z"
              fill="#333333"
            />
          </svg>
        </Link>
        {user && user.kind === 'a' && <Link to="/admin"><BsGearWide size={21} /></Link>}
        {user && user.kind === 'c' && <Link to="/profile"><BsPersonCircle size={21} /></Link>}
      </div>
    </nav>
  );
};
export default NavBar;
