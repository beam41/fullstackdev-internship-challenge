import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "./sel-sec.module.scss";

export default function ProductLoading() {
  return (
    <div className={styles.loading}>
      <Spinner animation="border" />
    </div>
  );
}
