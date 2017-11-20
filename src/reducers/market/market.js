import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/marketTypes";
const marketInitState = {
  orders: []
};

export const market = (state = marketInitState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return { orders: [...state.orders, action.payload] };
      break;
    default:
      return state;
  }
};
