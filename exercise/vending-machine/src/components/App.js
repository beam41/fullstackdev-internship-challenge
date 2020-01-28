import React, { Component } from "react";
import styles from "./app.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchService from "../services/fetch-service";
import SelectionSection from "./selection-section/selection-section";
import CoinSection from "./coin-section/coin-section";

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
    };
  }

  componentDidMount() {
    fetchService.getProductList().then(value => {
      this.setState({ productsTotal: value.total, products: value.data });
    });
  }

  changeSelecting() {}

  render() {
    return (
      <Container fluid className={styles.app}>
        <Row>
          <Col xs="12" lg="8">
            {this.state.products && <SelectionSection products={this.state.products} />}
          </Col>
          <Col xs="12" lg="4">
            <CoinSection />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
