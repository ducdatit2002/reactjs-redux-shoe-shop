import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  renderList = () => {
    return this.props.shoeArr.map((item, index) => {
      return <ItemShoe item={item} key={index} />;
    });
  };
  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoe.shoeArr,
  };
};

export default connect(mapStateToProps)(ListShoe);
