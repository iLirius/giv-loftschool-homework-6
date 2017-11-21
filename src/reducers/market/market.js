import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";

const marketInitState = {
  orders: [],
};

const market = (state = marketInitState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { orders: [...state.orders, action.payload] };
      break;
    case MOVE_ORDER_TO_FARM:
      return {
        orders: state.orders.filter(
          order => order.id !== action.payload.id && order,
        ),
      };
      break;
    default:
      return state;
  }
};

export default market;
