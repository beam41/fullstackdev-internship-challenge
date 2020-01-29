import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/**
 * Popup box shows bought item and coin change
 *
 * @typedef {object}    Props
 * @prop    {bool}      show
 * @prop    {Product}   product
 * @prop    {Function}  sumBoxClose
 * @prop    {number}    money
 *
 * @extends {Component<Props>}
 */
export default class BuySummary extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    product: PropTypes.object,
    sumBoxClose: PropTypes.func.isRequired,
    money: PropTypes.number.isRequired,
  };

  /**
   * Calculate amont of return coin
   * @returns {{ tens: number, fives: number, twos: number, ones: number }} Amount of returned coin of each types
   */
  calcChange() {
    let { money } = this.props;
    const { product } = this.props;
    money -= product.price;
    const tens = Math.trunc(money / 10);
    money = money - tens * 10;
    const fives = Math.trunc(money / 5);
    money = money - fives * 5;
    const twos = Math.trunc(money / 2);
    money = money - twos * 2;
    const ones = Math.trunc(money / 1);
    return {
      tens,
      fives,
      twos,
      ones,
    };
  }

  render() {
    const { product } = this.props;
    let change;
    if (product) change = this.calcChange();

    return (
      <Modal show={this.props.show} onHide={this.props.sumBoxClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Bought!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {product && (
            <>
              <p>
                <strong>
                  You bought {product.name} for {product.price} baht
                </strong>
              </p>
              <p>
                <strong>You inserted {this.props.money} baht</strong>
              </p>
              {this.props.money > product.price && (
                <>
                  <p>Here is your Change: {this.props.money - product.price} baht</p>
                  <p>10: {change.tens}</p>
                  <p>5: {change.fives}</p>
                  <p>2: {change.twos}</p>
                  <p>1: {change.ones}</p>
                </>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.sumBoxClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
