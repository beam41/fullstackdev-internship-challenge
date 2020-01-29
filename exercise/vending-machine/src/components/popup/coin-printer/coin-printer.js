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

  canvas = React.createRef();

  constructor() {
    super();
    /*
     * this state, eventListener, and componentDidMount
     * exist to achived the same thing
     * to set height of warpper box to == its width
     * that cannot directly set in css.
     * Pretty inefficient but it does the job.
     */
    this.state = {
      clientWidth: 0,
      clientHeight: 0,
    };
    window.addEventListener("resize", () => {
      this.setState({ clientWidth: this.canvas.current.clientWidth, clientHeight: this.canvas.current.clientHeight });
    });
  }

  componentDidMount() {
    this.setState({ clientWidth: this.canvas.current.clientWidth, clientHeight: this.canvas.current.clientHeight });
  }

  componentDidUpdate() {
    if (
      this.state.clientWidth !== this.canvas.current.clientWidth ||
      this.state.clientHeight !== this.canvas.current.clientHeight
    )
      this.setState({ clientWidth: this.canvas.current.clientWidth, clientHeight: this.canvas.current.clientHeight });
  }

  render() {
    return (
      <div ref={this.canvas} className={styles.canvas}>
        {this.canvas.current &&
          coinPrintloop(this.props.coins, this.state.clientWidth, this.state.clientHeight).map((ele, index) => {
            return (
              // Randomize position and rotation of coins
              <span
                style={{
                  transform: `translate(${Math.random() * this.state.clientWidth * 0.85 - 5}px, ${Math.random() *
                    this.state.clientHeight *
                    0.75 -
                    10}px)
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

function coinPrintloop(coins, width, height) {
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

  return jsxArr;
}
