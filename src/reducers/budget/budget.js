import { combineReducers } from "redux";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";

const deliveryExpanse = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return (state += 20);
    default:
      return state;
  }
};

const farmExpanse = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return (state += 100);
    default:
      return state;
  }
};

const profit = (state = 0, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return (state += action.payload.price);
    default:
      return state;
  }
};

const marketExpanse = (state = 0, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return (state += 20);
    default:
      return state;
  }
};

const budget = combineReducers({
  deliveryExpanse,
  marketExpanse,
  farmExpanse,
  profit
});

export const getProfit = state => state.budget.profit;
export const getMarketExpanse = state => state.budget.marketExpanse;
export const getFarmExpanse = state => state.budget.farmExpanse;
export const getDeliveryExpanse = state => state.budget.deliveryExpanse;

export default budget;
