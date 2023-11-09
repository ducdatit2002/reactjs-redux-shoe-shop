import { message } from "antd";
import { shoeArr } from "../../data";
import {
  BUY_SHOE,
  CHANGE_QUANTITY,
  REMOVE_SHOE,
  VIEW_DETAIL,
} from "../constant/shoe";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[1],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHOE: {
      let cloneCart = [...state.cart];
      var index = cloneCart.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index == -1) {
        let newShoe = { ...action.payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }
      state.cart = cloneCart;
      return { ...state };
    }
    case VIEW_DETAIL: {
      state.detail = action.payload;
      return { ...state };
    }
    case REMOVE_SHOE: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == action.payload);
      cloneCart.splice(index, 1);
      message.success("Xoá thành công");
      return { ...state, cart: cloneCart };
      // this.setState({ cart: cloneCart });

      // thông báo xoá thành công
    }
    case CHANGE_QUANTITY: {
      let { id, option } = action.payload;
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id === id);
      cloneCart[index].soLuong = cloneCart[index].soLuong + option;
      cloneCart[index].soLuong == 0 && cloneCart.splice(index, 1);
      return { ...state, cart: cloneCart };
    }
    default: {
      return state;
    }
  }
};
