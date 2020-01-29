import React from "react";
import PropTypes from "prop-types";
import styles from "./coin.module.scss";

/**
 * Component for drawing other coin
 *
 * @param { number }  props.value    value of coin
 * @param { Function } props.onClick onClick handler
 */
function OtherCoin({ value, onClick }) {
  return (
    <div className={styles.coin} onClick={onClick}>
      <p className={styles.coinN}>{value}</p>
    </div>
  );
}

OtherCoin.propTypes = { value: PropTypes.number, onClick: PropTypes.func };

export default OtherCoin;
