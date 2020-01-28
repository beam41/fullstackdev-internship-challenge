import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductBox from "./product-box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./sel-sec.module.scss";

export default class SelectionSection extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <Container className={styles.container}>
        <Row>
          {this.props.products.map(val => {
            return <ProductBox product={val} key={val.id} />;
          })}
        </Row>
      </Container>
    );
  }
}
