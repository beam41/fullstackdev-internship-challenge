import PropTypes from "prop-types";
import React from "react";
import styles from "./coin.module.scss";

/**
 * Component for drawing ten coin
 *
 * @param { Function } props.onClick onClick handler
 */
function TenCoin({ onClick }) {
  return (
    <div className={styles.coin + " " + styles.tenCoin} onClick={onClick}>
      <div className={styles.coin + " " + styles.tenCoinInner}>
        <p className={styles.coinN + " " + styles.coinNTen}>10</p>
      </div>
    </div>
  );
}

TenCoin.propTypes = { value: PropTypes.number, onClick: PropTypes.func };

export default TenCoin;
