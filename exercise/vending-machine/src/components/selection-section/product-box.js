import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./sel-sec.module.scss";
import Col from "react-bootstrap/Col";
import BuyBtn from "./buy-btn";

/**
 * Component for each box of product
 *
 * @typedef {object}  Props
 * @prop    {Product} product
 * @prop    {number}  money
 * @prop    {Function}  handleBuy
 *
 * @extends {Component<Props>}
 */
export default class ProductBox extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    money: PropTypes.number.isRequired,
    handleBuy: PropTypes.func.isRequired,
  };

  imgWarpper = React.createRef();

  constructor() {
    super();
    /*
     * this state, eventListener, and componentDidMount
     * exist to achived the same thing
     * to set height of warpper box to == its width
     * that cannot directly set in css.
     * Pretty inefficient but it does the job.
     */
    this.state = {
      imgWidth: 0,
    };
    window.addEventListener("resize", () => {
      this.setState({ imgWidth: this.imgWarpper.current.clientWidth });
    });
  }

  componentDidMount() {
    this.setState({ imgWidth: this.imgWarpper.current.clientWidth });
  }

  render() {
    const { product, money } = this.props;
    return (
      // 3 and 2 and 1 box in order
      <Col xl="4" md="6" xs="12" className={styles.prodCol} id={"prod_" + product.id}>
        <div className={styles.prodBox}>
          <div ref={this.imgWarpper} className={styles.imgWarpper} style={{ height: this.state.imgWidth }}>
            <img src={product.image} alt={product.name} id={"prod_" + product.id + "_img"}></img>
          </div>
          <h3 id={"prod_" + product.id + "_name"}>{product.name}</h3>
          <p id={"prod_" + product.id + "_price"}>{product.price + " baht"}</p>
          <BuyBtn product={product} money={money} handleBuy={this.props.handleBuy} />
        </div>
      </Col>
    );
  }
}
