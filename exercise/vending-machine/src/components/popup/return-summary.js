import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/**
 * Popup box shows returned coin
 *
 * @typedef {object}    Props
 * @prop    {bool}      show
 * @prop    {Function}  sumBoxClose
 * @prop    {number}    coinCount
 * @prop    {number}    money
 * @prop    {{ "10": number, "5": number, "2": number, "1": number }} coins
 *
 * @extends {Component<Props>}
 */
export default class ReturnSummary extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    sumBoxClose: PropTypes.func.isRequired,
    coinCount: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired,
    coins: PropTypes.object.isRequired,
  };

  render() {
    /**
     * Use to pluralize coin
     * @param   {boolean} cap Capitaized word
     * @returns {string}  word coin(s)
     */
    const pluralizeCoin = cap => {
      return (cap ? "C" : "c") + "oin" + (this.props.coinCount > 1 ? "s" : "");
    };

    return (
      <Modal show={this.props.show} onHide={this.props.sumBoxClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pluralizeCoin(true)} Returned!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {`Here is your returned ${pluralizeCoin(false)}`}: {this.props.money} baht
          </p>
          <p>10: {this.props.coins["10"]}</p>
          <p>5: {this.props.coins["5"]}</p>
          <p>2: {this.props.coins["2"]}</p>
          <p>1: {this.props.coins["1"]}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.props.sumBoxClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
