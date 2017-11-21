import { MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";

const farmInitState = {
  orders: [],
  profit: 0,
  productionPrice: 0,
};

const farm = (state = farmInitState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        orders: state.orders.filter(
          order => order.id !== action.payload.id && order,
        ),
      };
      break;
    case MOVE_ORDER_TO_FARM:
      state.orders = state.orders || [];
      return { orders: [...state.orders, action.payload] };
      break;
    default:
      return state;
  }
};
export default farm;
