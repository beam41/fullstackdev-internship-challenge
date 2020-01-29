import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import styles from "./sel-sec.module.scss";
import Col from "react-bootstrap/Col";

/**
 * Component for each box of product
 * @typedef {object}  Props
 * @prop    {Product} product
 *
 * @extends {Component<Props>}
 */
export default class ProductBox extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  imgWarpper = React.createRef();

  constructor() {
    super();
    /*
     * this state, eventListener, and componentDidMount
     * exist to achived the same thing
     * to set height of warpper box to == its width
     * that cannot directly set in css.
     * Pretty not efficient but it does the job.
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
    const { product } = this.props;
    return (
      // 3 and 2 and 1 box in order
      <Col xl="4" md="6" xs="12">
        <div className={styles.prodBox}>
          <div ref={this.imgWarpper} className={styles.imgWarpper} style={{ height: this.state.imgWidth }}>
            <img src={product.image} alt={product.name}></img>
          </div>
          <h3>{product.name}</h3>
          <p>{product.price.toFixed(2) + " baht"}</p>
          <Button disabled={!product.in_stock}>Buy</Button>
        </div>
      </Col>
    );
  }
}
