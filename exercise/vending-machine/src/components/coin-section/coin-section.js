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
            <div class={styles.moneyDisp}>
              <p id="money">
                <strong>{this.props.money}</strong>
              </p>
            </div>
            <div className={styles.coinInput}>
              <span class={styles.coinWrap}>
                <TenCoin onClick={() => this.props.addMoney(10)} id="coin_ten_btn" />
              </span>
              <span class={styles.coinWrap}>
                <OtherCoin onClick={() => this.props.addMoney(5)} id="coin_five_btn" value={5} />
              </span>
              <span class={styles.coinWrap}>
                <OtherCoin onClick={() => this.props.addMoney(2)} id="coin_two_btn" value={2} />
              </span>
              <span class={styles.coinWrap}>
                <OtherCoin onClick={() => this.props.addMoney(1)} id="coin_one_btn" value={1} />
              </span>
            </div>
            <div className={styles.trayPart}>
              <div class={styles.leftPart}>
                <div class={styles.coinInsert}></div>
                <div class={styles.coinReturn}></div>
              </div>
              <div class={styles.rightPart}>
                <Button
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
