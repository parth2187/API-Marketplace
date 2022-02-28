import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./Register.module.scss";
import loginSvg from "../../Assets/images/svg/login.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function userSignup(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.user);
      alert("Register Successful");
      navigate("/login", { replace: true });
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
        <form onSubmit={userSignup} className={styles.forms}>
          <p>Register your account </p>
          <input
            value={username}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Name"
          />
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
            onClick={userSignup}
            type="submit"
            value="Signup"
            text="Signup"
          />
          <Link to="/login" className={styles.Link}>
            Already have an account? <br />
            Click here to login!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
