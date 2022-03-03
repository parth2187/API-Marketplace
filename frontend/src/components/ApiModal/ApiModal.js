import React from "react";
import styles from "./ApiModal.module.css";

const ApiModal = ({ setOpenModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.CloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          <h1>Add new API</h1>
        </div>
        <div className={styles.body}>
          <input type="text" placeholder="API Name"></input> <br />
          <input type="text" placeholder="API Endpoint"></input> <br />
          <input
            type="text"
            className={styles.description}
            placeholder="Description of API"
          ></input>
          <br />
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className={styles.addBtn}
          >
            Add API
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiModal;
