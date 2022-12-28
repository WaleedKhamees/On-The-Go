import axios from "axios";
import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { userContext } from "../../src/App";
import { validateLogin } from "../../util/validations";

const LoginPage = () => {
  const { logUser, user } = useContext(userContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });
  useEffect(() => {
    if (user)
      switch (user.kind) {
        case 'a':
          navigate("/admin");
          break;
        case 'c':
          navigate("/");
          break;
        case 'e':
          navigate("/employee");
          break;
        case 'p':
          navigate("/provider");
          break;
      };
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    const validations = validateLogin(loginInfo);
    if (validations.error === true) {
      setError(validations.res);
      return;
    }

    let res, customer;
    try {
      res = (await axios.post("http://localhost:3000/login", loginInfo)).data;
      if (res.kind === 'a') {
        const user = { ...loginInfo, kind: res.kind };
        logUser(user);
        navigate("/admin")
      }
      else if (res.kind === 'e') {
        // TODO : Get Employee's info
        const user = { ...loginInfo, kind: res.kind };
        logUser(user);
        navigate("/employee")
      }
      else if (res.kind === 'p') {
        const user = { ...loginInfo, kind: res.kind };
        logUser(user);
        navigate("/provider")
      }
      else {
        customer = (await axios.get(`http://localhost:3000/customer/getcustomerfromemail/${res.email}`)).data;
        const user = { ...loginInfo, ...customer, kind: res.kind };
        logUser(user);
        navigate("/")
      }
      return;
    }
    catch (err) {
      console.log(err);
      switch (err.response.status) {
        case 404:
          setError({ ...error, emailError: err.response.data.message })
          break;
        case 400:
          setError({ ...error, passwordError: err.response.data.message });
      }
      return;
    }
  }
  return (
    <div className="flex justify-center pt-4 my-auto">
      <form className="flex-col flex items-center gap-4 min-w-[350px]" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="h2 text-Headings">Login</h2>
        <div className="flex flex-col gap-1 w-full">
          <input
            id="Email"
            autoComplete="off"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
            placeholder="Enter your Email Address"
            ref={emailRef}
          />
          <label htmlFor="Email" className={`${error.emailError !== "" ? "visible" : "invisible"} small text-RedPrimary`}>{error.emailError}</label>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <input
            type="password"
            id="password"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
            placeholder="Enter your Password"
            ref={passwordRef}
          />
          <label htmlFor="Email" className={`${error.passwordError !== "" ? "visible" : "invisible"} small text-RedPrimary`}>{error.passwordError}</label>
        </div>

        <button className="rounded-lg bg-RedPrimary w-full p-4">
          <p className="outlinebody text-White">CONTINUE</p>
        </button>
      </form>
    </div >
  );
};

export default LoginPage;
