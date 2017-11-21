import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";

const marketInitState = {
  orders: []
};

const market = (state = marketInitState, action) => {
  let returnResult = [];
  switch (action.type) {
    case CREATE_ORDER:
      returnResult = { orders: [...state.orders, action.payload] };
      break;
    case MOVE_ORDER_TO_FARM:
      returnResult = {
        orders: state.orders.filter(
          order => order.id !== action.payload.id && order
        )
      };
      break;
    default:
      returnResult = state;
  }
  return returnResult;
};

export default market;
