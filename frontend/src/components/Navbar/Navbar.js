import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../Assets/images/logo/logo.svg";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link className={styles.link} to="/dashboard">
            My APIs
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/account">
            My Account
          </Link>
        </li>
        <li>
          <Link className={styles.btnlink} to="/Login">
            Login/Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
