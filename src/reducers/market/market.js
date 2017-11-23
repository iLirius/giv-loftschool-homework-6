import { combineReducers } from "redux";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
const orders = (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return state.filter(order => order.id !== action.payload.id && order);
    case CREATE_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const market = combineReducers({ orders });

export const getOrderMarket = state => state.market.orders;

export default market;
