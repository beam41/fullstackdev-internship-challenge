import React, { Component } from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

/**
 * Different button for different state
 *
 * @typedef {object}    props
 * @prop    {Product}   product
 * @prop    {number}    money
 * @prop    {Function}  handleBuy
 *
 * @extends {Component<Props>}
 */
export default class BuyBtn extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    money: PropTypes.number.isRequired,
    handleBuy: PropTypes.func.isRequired,
  };

  render() {
    if (!this.props.product.in_stock) {
      return <OutOfStockBtn id={this.props.product.id} />;
    } else if (this.props.money < this.props.product.price) {
      return <NotEnMoneyBtn id={this.props.product.id} />;
    }
    return (
      <Button onClick={() => this.props.handleBuy(this.props.product)} id={"prod_" + this.props.product.id + "_btn"}>
        Buy
      </Button>
    );
  }
}

function OutOfStockBtn({ id }) {
  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>Out of stock!</Tooltip>}>
      <Button disabled id={"prod_" + id + "_btn"}>
        Buy
      </Button>
    </OverlayTrigger>
  );
}

function NotEnMoneyBtn({ id }) {
  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>Not Enought Money!</Tooltip>}>
      <Button disabled id={"prod_" + id + "_btn"}>
        Buy
      </Button>
    </OverlayTrigger>
  );
}
