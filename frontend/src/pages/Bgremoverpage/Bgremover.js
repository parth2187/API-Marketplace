import React from "react";
import styles from "./Bgremover.module.css";
import img from "../../Assets/images/bgremover.svg";
import imglogo from "../../Assets/images/svg/imagelogo.svg";

const Bgremover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Remove Image Background </h2>
        <p>100% automatic and free</p>
        <img src={img}></img>
      </div>
      <div className={styles.formSection}>
        <img src={imglogo} className={styles.imglogo}></img>
        <p> File should be png, jpg and less than 5 MB</p>
        <button type="submit" className={styles.uploadbtn}>
          Upload Image
        </button>
        <input type="file" name="myImage" accept="image/*" />
        <p>Or drop files here</p>
      </div>
    </div>
  );
};

export default Bgremover;
