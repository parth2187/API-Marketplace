import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.scss";
import loginSvg from "../../Assets/images/svg/login.svg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function userLogin(event) {
    event.preventDefault();

    const response = await fetch("link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login Successful");
      window.location.href = "/dashboard";
    } else {
      alert("Pleae check your username and password");
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.dashboardimg} src={loginSvg}></img>
        <h2>Welcome to your Dashboard</h2>
        <p>
          Your uploaded APIs will be displayed here once you login to your
          account
        </p>
      </div>
      <div className={styles.formSection}>
        <form onSubmit={userLogin} className={styles.forms}>
          <p>Login to your account </p>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" value="Login" text="Login/Signup" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
