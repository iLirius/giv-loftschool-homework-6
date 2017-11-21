import { MOVE_ORDER_TO_CUSTOMER } from "../../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../../actions/marketTypes";

const budgetInitState = {
  profit: 0,
  marketExpanse: 0,
  farmExpanse: 0,
  deliveryExpanse: 0,
};

const budget = (state = budgetInitState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return { deliveryExpanse: state.deliveryExpanse + 20 };
      break;
    case CREATE_ORDER:
      return { profit: state.profit + action.payload.price };
      break;
    case MOVE_ORDER_TO_FARM:
      return { farmExpanse: state.farmExpanse + 100 };
      break;
    default:
      return state;
  }
};

export default budget;
