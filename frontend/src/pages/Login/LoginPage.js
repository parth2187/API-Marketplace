import React from "react";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.scss";
import loginSvg from "../../Assets/images/svg/login.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function userLogin(event) {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(response);
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");
      navigate("/dashboard", { replace: true });
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <img className={styles.dashboardimg} src={loginSvg}></img>
          <h2>Welcome to your Dashboard</h2>
          <p>
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>
      </div>
      <div className={styles.formSection}>
        <form onSubmit={userLogin} className={styles.forms}>
          <p>Login to your account </p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <Button
            onClick={userLogin}
            type="submit"
            value="Login"
            text="Login"
          />
          <span className={styles.link}></span>
          <Link to="/register">Not registered? Click here to sign up!</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
