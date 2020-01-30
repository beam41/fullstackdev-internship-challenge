import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import ProductBox from "./product-box";
import ProductLoading from "./product-loading";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import styles from "./sel-sec.module.scss";

/**
 * For rendering individual product box
 *
 * @typedef {object}    Props
 * @prop    {Product[]} products
 * @prop    {number}    money
 * @prop    {Function}  handleBuy
 *
 * @extends {Component<Props>}
 */
export default class SelectionSection extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    money: PropTypes.number.isRequired,
    handleBuy: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={styles.containerWrapper}>
        <Container className={styles.container}>
          <Row>
            {this.props.products &&
              this.props.products.map(val => {
                return (
                  <ProductBox product={val} key={val.id} money={this.props.money} handleBuy={this.props.handleBuy} />
                );
              })}
            {!this.props.products && <ProductLoading />}
          </Row>
        </Container>
      </div>
    );
  }
}
