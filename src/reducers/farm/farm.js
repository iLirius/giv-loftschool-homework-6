import { MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";

const farmInitState = {
  orders: [],
  profit: 0,
  productionPrice: 0
};

// TODO: разобратьс дальше слогикой
export const farm = (state = farmInitState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { orders: [...state.orders, action.payload] };
      break;
    case MOVE_ORDER_TO_CUSTOMER:
      return {};
      break;
    default:
      return state;
  }
};
