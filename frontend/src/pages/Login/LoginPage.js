import React from "react";
import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.scss";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Welcome to your Dashboard</h2>
        <p>
          Your uploaded APIs will be displayed here once you login to your
          account
        </p>
      </div>
      <div className={styles.formSection}>
        <form className={styles.forms}>
          <p>Login to your account </p>
          <label htmlFor="email">Email</label>
          <input className={styles.input} type="email" placeholder="Username" />
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <Button text="Login/Signup" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
