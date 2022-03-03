import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.scss";
import BGRemover from "../../Assets/images/bgremover.svg";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={BGRemover} alt="BG Remover" className={styles.bannerimg} />
      <div className={styles.bannerstyle}>
        <span className={styles.violetBox}></span>
        <div className={styles.bannertext}>
          <h3>Background Image Remove</h3>
          <p className={styles.BGRemoverTag}>100% automatic and free</p>
        </div>
        <button
          type="button"
          className={styles.appButton}
          onClick={() => {
            navigate("/api/bgremover");
          }}
        >
          View App
        </button>
      </div>
    </div>
  );
}
export default Banner;
