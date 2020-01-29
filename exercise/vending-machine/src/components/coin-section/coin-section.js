import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./coin-sec.module.scss";
import Button from "react-bootstrap/Button";

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
        <div className={styles.smallbox}>
          <div>
            <p id="money">
              <strong>Money: {this.props.money}</strong>
            </p>
            <div>
              <Button onClick={() => this.props.addMoney(10)} id="coin_ten_btn">
                10
              </Button>
              <Button onClick={() => this.props.addMoney(5)} id="coin_five_btn">
                5
              </Button>
              <Button onClick={() => this.props.addMoney(2)} id="coin_two_btn">
                2
              </Button>
              <Button onClick={() => this.props.addMoney(1)} id="coin_one_btn">
                1
              </Button>
              <Button onClick={() => this.props.handleReturn()} disabled={this.props.money === 0} id="return_btn">
                Return
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
