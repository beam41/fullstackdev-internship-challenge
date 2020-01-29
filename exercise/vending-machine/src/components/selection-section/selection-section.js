import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductBox from "./product-box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./sel-sec.module.scss";

/**
 * For rendering individual product box
 * @typedef {object} Props
 * @prop    {Product[]} products
 * @prop    {Function} changeSelecting
 *
 * @extends {Component<Props>}
 */
export default class SelectionSection extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <Container className={styles.container}>
        <Row>
          {this.props.products.map(val => {
            return <ProductBox product={val} key={val.id} changeSelecting={this.props.changeSelecting} />;
          })}
        </Row>
      </Container>
    );
  }
}
