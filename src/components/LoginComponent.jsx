import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import CC_Logo from "../assets/CC.png";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import { Button, DialogActions } from "@mui/material";
import PasswordField from "./common/inputs/PasswordField";
import SubmitButton from "./common/inputs/SubmitButton";
import EmailField from "./common/inputs/EmailField";
import ResetPassword from "./ResetPassword";
// import { modal,setM } from "../api/AuthContext";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  // const { modal, setModal } = useAuth();
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Community Connect!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <img src={CC_Logo} className="CC_Logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Community Connect</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
        {/* <DialogActions sx={{ justifyContent: "space-between", px: "19px" }}>
          <Button
            size="small"
            onClick={() =>
              setModal({
                ...modal,
                title: "Reset Password",
                content: <ResetPassword />,
              })
            }
          >
            Forgot Password?
          </Button>
          <SubmitButton />
        </DialogActions> */}
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New User?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
