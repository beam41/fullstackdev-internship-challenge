import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

/**
 * Component for each box of product
 * @typedef {object} Props
 * @prop {Product} product
 *
 * @extends {Component<Props>}
 */
export default class ProductBox extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  render() {
    const { product } = this.props;
    return (
      <div key={product.id}>
        <img src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <p>{product.price.toFixed(2) + " baht"}</p>
        <Button disabled={product.in_stock}>Select</Button>
      </div>
    );
  }
}
