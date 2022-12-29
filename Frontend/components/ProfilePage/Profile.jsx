import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../src/App";
import History from "./History";

const Profile = () => {
  const { user, logUser } = useContext(userContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user)
      navigate("/login");
  }, [user])
  return (
    <div className="flex flex-col px-8 py-8">
      <div className="flex px-8 py-8">
        {user &&
          <form
            className="flex flex-col max-w-[350px] flex-grow items-center gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const newUser = {
                email: form.Email.value,
                old_password: form.OldPassword.value,
                new_password: form.NewPassword.value
              };
              try {
                const res = await axios.patch("https://dbproject-zbiu.onrender.com/user/update", newUser);
                setMessage(res.data.message);
                logUser({ ...user, password: newUser.new_password });
              }
              catch (err) {
                console.log(err);
              }
            }}>
            <img
              src={user.img_url}
              className="rounded-full  max-w-[150px]   max-h-[150px]"
            />

            <h2 className="h2">Hello, {user.first_name + " " + user.last_name}</h2>
            <p className="p">You have <span className="text-RedPrimary">{user.wallet}</span> EGP</p>
            <p className="p">Update your information </p>
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
        }
        <History />
      </div>

    </div>
  );
}

export default Profile;
