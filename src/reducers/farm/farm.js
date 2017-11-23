import { combineReducers } from "redux";
import { MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";

const profit = (state = 0, action) => state;
const productionPrice = (state = 0, action) => state;

const orders = (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return state.filter(order => order.id !== action.payload.id && order);
    case MOVE_ORDER_TO_FARM:
      return [...state, action.payload];
    default:
      return state;
  }
};

const farm = combineReducers({
  orders,
  productionPrice,
  profit
});

export const getOrderFarm = state => state.farm.orders;

export default farm;
