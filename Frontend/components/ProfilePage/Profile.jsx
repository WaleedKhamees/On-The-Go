import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../src/App";
import History from "./History";

const Profile = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user)
      navigate("/login");
  }, [user])
  return (
    <div className="flex justify-between px-8 py-8">
      {user &&
        <div className="flex flex-col max-w-[350px] flex-grow items-center gap-4">
          <img
            src={user.img_url}
            className="rounded-full  max-w-[150px]   max-h-[150px]"
          />

          <h2 className="h2">{user.first_name + " " + user.last_name}</h2>

          <div className="flex flex-col w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 small text-Small dark:text-white"
            >
              Email
            </label>
            <input
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
              type="Password"
              id="Password"
              className="placeholder:text-Small text-body px-4 py-2 border border-Body rounded-lg outline-none"
              placeholder="Enter your old Password"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 small text-Small dark:text-white"
            >
              New Password
            </label>
            <input
              type="Password"
              id="Password"
              className="placeholder:text-Small text-body px-4 py-2 border border-Body rounded-lg outline-none"
              placeholder="Enter your New Password"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="first_name"
              className="block mb-2 small text-Small dark:text-white"
            >
              Confirm New Password
            </label>
            <input
              type="Password"
              id="Password"
              className="placeholder:text-Small text-body px-4 py-2 border border-Body rounded-lg outline-none"
              placeholder="Enter you new password"
            />
          </div>

          <button className="rounded-lg pr-2 pl-2 bg-RedPrimary w-full ">
            <p className="text-White text-center p-2  ">CONFIRM</p>
          </button>
        </div>
      }
      <History />

    </div>
  );
}

export default Profile;
