import { MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";

// const farmInitState = ;

const farm = (
  state = {
    orders: [],
    profit: 0,
    productionPrice: 0
  },
  action
) => {
  let returnResult = [];
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      returnResult = {
        orders: state.orders.filter(
          order => order.id !== action.payload.id && order
        )
      };
      break;
    case MOVE_ORDER_TO_FARM:
      state.orders = state.orders || [];
      returnResult = { orders: [...state.orders, action.payload] };
      break;
    default:
      returnResult = state;
  }
  return returnResult;
};
export default farm;
