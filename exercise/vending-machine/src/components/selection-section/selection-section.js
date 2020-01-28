import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductBox from "./product-box";


export default class SelectionSection extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <div>
        {this.props.products.map(val => {
          return <ProductBox product={val} />;
        })}
      </div>
    );
  }
}
