import React, { Component } from "react";
import { connect } from "react-redux";
import { changeQuantityAction } from "./redux/action/shoe";

class Cart extends Component {
  renderTbody = () => {
    let { cart, handleRemove, handleChangeQuantity } = this.props;
    return cart.map((item) => {
      return (
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                handleChangeQuantity(item.id, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <strong>{item.soLuong}</strong>
            <button
              onClick={() => {
                handleChangeQuantity(item.id, +1);
              }}
              className="btn btn-dark"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderTbody()}</tbody>
      </table>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.shoe.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (id) => {
      let action = {
        type: "REMOVE_SHOE",
        payload: id,
      };
      dispatch(action);
    },
    handleChangeQuantity: (id, option) => {
      dispatch(changeQuantityAction(id, option));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
