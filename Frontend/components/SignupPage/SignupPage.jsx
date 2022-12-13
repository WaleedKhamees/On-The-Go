import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const walletRef = useRef();
  const [emailError, setEmailError] = useState("");
  const [walletError, setWalletError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      wallet: Number.parseFloat(walletRef.current.value),
    };
    if (Number.isNaN(user.wallet)) {
      setWalletError("please enter a valid number");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/signup", user);
      localStorage.setItem("user", JSON.stringify(user));
      return navigate("/home");
    } catch (err) {
      setEmailError("Email already exists!");
    }
  };
  return (
    <div className="flex justify-center pt-4">
      <form
        className="flex-col flex items-center gap-4 max-w-[350px] flex-grow"
        onSubmit={(e) => onSubmit(e)}
      >
        <h2 className="h2 text-Headings">Sign Up</h2>
        <div className="flex gap-4">
          <input
            type="text"
            id="Name"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
            placeholder="First Name"
            ref={firstNameRef}
            required
          ></input>
          <input
            type="text"
            id="Name"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
            placeholder="Last Name"
            ref={lastNameRef}
            required
          ></input>
        </div>

        <input
          type="email"
          id="Email"
          className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
          placeholder="Enter your Email Address"
          ref={emailRef}
          required
        ></input>
        <span
          className={`${
            emailError !== "" ? "visible" : "invisible"
          } small text-RedPrimary`}
        >
          {emailError}
        </span>
        <input
          type="password"
          id="Password"
          className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
          placeholder="Enter your Password"
          ref={passwordRef}
          required
        ></input>
        <input
          type="text"
          id="wallet"
          className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
          placeholder="How much money do you want?"
          ref={walletRef}
          required
        ></input>
        <span
          className={`${
            walletError !== "" ? "visible" : "invisible"
          } small text-RedPrimary`}
        >
          {walletError}
        </span>
        <input
          type="submit"
          className="rounded-lg bg-RedPrimary w-full p-4 outlinebody text-White cursor-pointer"
          value="Sign Up"
        ></input>
      </form>
    </div>
  );
};

export default SignupPage;
