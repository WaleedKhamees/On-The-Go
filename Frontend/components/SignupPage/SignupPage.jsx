import { useEffect, useRef, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateSignup } from "../../util/validations";
import { userContext } from "../../src/App";

const SignupPage = () => {
  const { user, logUser } = useContext(userContext)
  const [isProvider, setIsProvider] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const walletRef = useRef();



  const navigate = useNavigate();
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    walletError: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      wallet: Number.parseFloat(walletRef.current.value),
      kind: isProvider ? "p" : 'c',
      img_url: null,
    };
    const validation = validateSignup(user, isProvider);
    if (validation.error === true) {
      setError(validation.res);
      return;
    }
    else {
      try {
        const res = await axios.post("https://dbproject-zbiu.onrender.com/signup", user);
        logUser(user);
        if (isProvider)
          navigate("/provider");
        else
          navigate("/")
      } catch (err) {
        setError({ ...error, emailError: "email already exists!" });
      }
    }
  };

  return (
    <div className="flex justify-center pt-4 m-auto">
      <form
        className="flex-col flex items-center gap-4 max-w-[350px] flex-grow"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="h2 text-Headings">Sign Up</h2>

        <div className="flex flex-col gap-1" id="name-group">
          <div className="flex gap-4">
            <input
              type="text"
              id="Name"
              className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
              placeholder="First Name"
              ref={firstNameRef}
            />
            <input
              type="text"
              id="Name"
              className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
              placeholder="Last Name"
              ref={lastNameRef}
            />
          </div>
          <label htmlFor="name-group" className={`${error.nameError !== "" ? "visible" : "invisible"} small text-RedPrimary`}>{error.nameError}</label>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <input
            type="email"
            id="Email"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
            placeholder="Enter your Email Address"
            ref={emailRef}
          />
          <label htmlFor="Email" className={`${error.emailError !== "" ? "visible" : "invisible"} small text-RedPrimary`}>{error.emailError}</label>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <input
            type="password"
            id="Password"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
            placeholder="Enter your Password"
            ref={passwordRef}
          />
          <label htmlFor="Password" className={`${error.passwordError !== "" ? "visible" : "invisible"} small text-RedPrimary`}>{error.passwordError}</label>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <input
            type="text"
            id="Wallet"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none"
            placeholder="How much money do you want?"
            ref={walletRef}
            disabled={isProvider}
          />
          <label htmlFor="Wallet" className={`${error.walletError !== "" ? "visible" : "invisible"} small text-RedPrimary`}>{error.walletError}</label>
        </div>

        <div className="flex items-center w-full justify-items-start gap-2" >
          <input onClick={() => setIsProvider(!isProvider)} type="checkbox" id="isProvider" className="accent-RedPrimary" />
          <label className="small text-RedPrimary" htmlFor="isProvider">Are you a Provider?</label>
        </div>

        <input
          type="submit"
          className="rounded-lg bg-RedPrimary w-full p-4 outlinebody text-White cursor-pointer"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignupPage;