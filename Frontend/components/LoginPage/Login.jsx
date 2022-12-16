import axios from "axios";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { userContext } from "../../src/App";
import { validateLogin } from "../../util/validations";

const LoginPage = () => {
  const { logUser } = useContext(userContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  return (
    <div className="flex justify-center pt-4">
      <form className="flex-col flex items-center gap-4 min-w-[350px]" onSubmit={async (e) => {
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
          else {
            customer = (await axios.get(`http://localhost:3000/customer/getcustomerfromemail/${res.email}`)).data;
            const user = { ...loginInfo, ...customer, kind: res.kind };
            logUser(user);
            navigate("/home")
          }
          return;
        }
        catch (err) {
          console.log(err);
          return;
        }
      }}>
        <h2 className="h2 text-Headings">Login</h2>
        <div className="flex flex-col gap-1 w-full">
          <input
            type="email"
            id="Email"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
            placeholder="Enter your Email Address"
            ref={emailRef}
          ></input>
          <label htmlFor="Email" className=""></label>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <input
            type="password"
            id="password"
            className="w-full py-2 px-4 rounded-lg p text-Body border border-Body placeholder:text-Small outline-none "
            placeholder="Enter your Password"
            ref={passwordRef}
          ></input>
        </div>

        <button className="rounded-lg bg-RedPrimary w-full p-4">
          <p className="outlinebody text-White">CONTINUE</p>
        </button>
      </form>
    </div >
  );
};

export default LoginPage;
