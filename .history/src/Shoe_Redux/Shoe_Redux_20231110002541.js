import React, { Component } from "react";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
export default class Shoe_Redux extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <Cart />
          </div>
          <div className="col-5">
            <ListShoe />
          </div>
        </div>
        <DetailShoe />
      </div>
    );
  }
}