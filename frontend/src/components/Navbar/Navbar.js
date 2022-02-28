import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../Assets/images/logo/logo.svg";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      {!isLoggedIn ? (
        <ul className={styles.navbarLinks}>
          <li>
            <Link className={styles.btnlink} to="/Login">
              Login/Signup
            </Link>
          </li>
        </ul>
      ) : (
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
          <button type="button" className={styles.btnlink}>
            Logout
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
