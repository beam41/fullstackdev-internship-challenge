import React, { Component } from "react";
import styles from "./app.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchService from "../services/fetch-service";
import SelectionSection from "./selection-section/selection-section";
import CoinSection from "./coin-section/coin-section";
import BuySummary from "./popup/buy-summary";
import { hot } from "react-hot-loader";
import ReturnSummary from "./popup/return-summary";


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
       * Current inserted money
       * @type {number}
       */
      money: 0,
      /**
       * track coin inserted for return
       * @type {{ "10": number, "5": number, "2": number, "1": number }}
       */
      insCoin: { "10": 0, "5": 0, "2": 0, "1": 0 },
      /**
       * track number of coin inserted for pluralize some text
       * @type {number}
       */
      insCoinCount: 0,
      /**
       * temporary track bought item
       * @type {Product}
       */
      tempBProd: null,
      /**
       * Show summary box ?
       * @type {boolean}
       */
      sumShow: false,
      /**
       * Show return box ?
       * @type {boolean}
       */
      retShow: false,
    };
    this.addMoney = this.addMoney.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    fetchService.getProductList().then(value => {
      this.setState({ productsTotal: value.total, products: value.data });
    });
  }

  /**
   * Insert new coin and add money
   * @param {number} amount
   */
  addMoney(amount) {
    this.setState({
      money: this.state.money + amount,
      insCoin: { ...this.state.insCoin, [amount]: this.state.insCoin[amount] + 1 },
      insCoinCount: this.state.insCoinCount + 1,
    });
  }

  /**
   * Process item and show pop up
   * @param {Product} product
   */
  handleBuy(product) {
    this.setState({ tempBProd: product, sumShow: true });
  }

  /**
   * Show return pop up
   */
  handleReturn() {
    this.setState({ retShow: true });
  }

  /**
   * Reset the user interaction
   *
   * Clear everything except display
   */
  clearState() {
    this.setState({
      money: 0,
      tempBProd: null,
      sumShow: false,
      retShow: false,
      insCoin: { "10": 0, "5": 0, "2": 0, "1": 0 },
      insCoinCount: 0,
    });
  }

  render() {
    return (
      <>
        <h1 className={styles.header}>Vending Machine</h1>
        <Container fluid className={styles.app}>
          <Row>
            <Col xs="12" lg="8">
              {this.state.products && (
                <SelectionSection products={this.state.products} money={this.state.money} handleBuy={this.handleBuy} />
              )}
            </Col>
            <Col xs="12" lg="4">
              <CoinSection addMoney={this.addMoney} money={this.state.money} handleReturn={this.handleReturn} />
            </Col>
          </Row>
        </Container>
        <BuySummary
          show={this.state.sumShow}
          product={this.state.tempBProd}
          sumBoxClose={this.clearState}
          money={this.state.money}
        />
        <ReturnSummary
          show={this.state.retShow}
          sumBoxClose={this.clearState}
          money={this.state.money}
          coinCount={this.state.insCoinCount}
          coins={this.state.insCoin}
        />
      </>
    );
  }
}

export default hot(module)(App);
