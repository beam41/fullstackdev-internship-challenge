import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./coin-print.module.scss";
import OtherCoin from "../../coin-btn/other-coin";
import TenCoin from "../../coin-btn/ten-coin";

/**
 * For displaying coin on blank space
 *
 * @typedef {object}    Props
 * @prop    {{ "10": number, "5": number, "2": number, "1": number }} coins
 *
 * @extends {Component<Props>}
 */
export default class CoinPrinter extends Component {
  static propTypes = {
    coins: PropTypes.object,
  };

  render() {
    return (
      <div className={styles.canvas}>
        {coinPrintloop(this.props.coins).map((ele, index) => {
          return (
            // Randomize position and rotation of coins
            <span
              style={{
                transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)
                              scale(0.5)
                              rotate(${Math.random() * 90 - 45}deg) `,
              }}
              className={styles.coin}
              key={index}
            >
              {ele}
            </span>
          );
        })}
      </div>
    );
  }
}

function coinPrintloop(coins) {
  let jsxArr = [];
  let key = 0;
  // individual
  for (let i = coins["10"]; i > 0; i--) {
    jsxArr.push(
      <span key={key}>
        <TenCoin />
      </span>,
    );
    key++;
  }

  // same as ten
  for (let i = coins["5"]; i > 0; i--) {
    jsxArr.push(
      <span key={key}>
        <OtherCoin value={5} />
      </span>,
    );
    key++;
  }
  for (let i = coins["2"]; i > 0; i--) {
    jsxArr.push(
      <span key={key}>
        <OtherCoin value={2} />
      </span>,
    );
    key++;
  }
  for (let i = coins["1"]; i > 0; i--) {
    jsxArr.push(
      <span key={key}>
        <OtherCoin value={1} />
      </span>,
    );
    key++;
  }

  scrambleArr(jsxArr);

  return jsxArr;
}

function scrambleArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
