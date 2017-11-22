import { MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";

const farm = (
  state = { orders: [], profit: 0, productionPrice: 0 },
  action
) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(
          order => order.id !== action.payload.id && order
        )
      };
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};

export const getOrderFarm = state => state.farm.orders;

export default farm;
