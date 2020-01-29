import React, { Component } from "react";
import styles from "./app.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchService from "../services/fetch-service";
import SelectionSection from "./selection-section/selection-section";
import CoinSection from "./coin-section/coin-section";
import { hot } from "react-hot-loader";

class App extends Component {
  constructor() {
    super();
    this.state = {
      /**
       * Total number of products
       * @type {number} */
      productsTotal: null,
      /**
       * Array of products data
       * @type {Product[]} */
      products: [],
      /**
       * Id of the selecting product
       * @type {number}
       */
      selecting: null,
      /**
       * Current inserted money
       * @type {number}
       */
      money: 0,
    };
    this.changeSelecting = this.changeSelecting.bind(this);
  }

  componentDidMount() {
    fetchService.getProductList().then(value => {
      this.setState({ productsTotal: value.total, products: value.data });
    });
  }

  /**
   * Change currently selecting product
   * @param {number} id
   */
  changeSelecting(id) {
    this.setState({ selecting: id });
  }

  /**
   * get currently selecting product
   * @type {Product}
   */
  get SelectingObj() {
    return this.state.products.find(prod => this.state.selecting === prod.id);
  }

  render() {
    return (
      <Container fluid className={styles.app}>
        <Row>
          <Col xs="12" lg="8">
            {this.state.products && (
              <SelectionSection products={this.state.products} changeSelecting={this.changeSelecting} />
            )}
          </Col>
          <Col xs="12" lg="4">
            <CoinSection selecting={this.SelectingObj} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default hot(module)(App);
