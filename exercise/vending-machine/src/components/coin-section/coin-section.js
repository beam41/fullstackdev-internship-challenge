import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./coin-sec.module.scss";
import Button from "react-bootstrap/Button";
import OtherCoin from "../coin-btn/other-coin";
import TenCoin from "../coin-btn/ten-coin";

/**
 * For inserting and refund coins
 *
 * @typedef {object}    Props
 * @prop    {Function}  addMoney
 * @prop    {Function}  handleReturn
 * @prop    {number}    money
 *
 * @extends {Component<Props>}
 */
export default class CoinSection extends Component {
  static propTypes = {
    addMoney: PropTypes.func.isRequired,
    handleReturn: PropTypes.func.isRequired,
    money: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className={styles.flexbox}>
        <div className={styles.containbox}>
          <div className={styles.stylizedbox}>
            <div className={styles.moneyDisp}>
              <p id="money">
                <strong>{this.props.money}</strong>
              </p>
            </div>
            <div className={styles.coinInput + " " + styles.first}>
              <TenCoin onClick={() => this.props.addMoney(10)} id="coin_ten_btn" />
              <span className={styles.marginBreak}></span>
              <OtherCoin onClick={() => this.props.addMoney(5)} id="coin_five_btn" value={5} />
            </div>
            <div className={styles.coinInput}>
              <OtherCoin onClick={() => this.props.addMoney(2)} id="coin_two_btn" value={2} />
              <span className={styles.marginBreak}></span>
              <OtherCoin onClick={() => this.props.addMoney(1)} id="coin_one_btn" value={1} />
            </div>
            <div className={styles.trayPart}>
              <div className={styles.leftPart}>
                <div className={styles.coinInsert}></div>
                <div className={styles.coinReturn}></div>
              </div>
              <div className={styles.rightPart}>
                <Button
                  variant="warning"
                  onClick={() => this.props.handleReturn()}
                  disabled={this.props.money === 0}
                  id={styles.return_btn}
                >
                  Return
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
