import { ActionType } from "../action-types";
import { Action } from "../actions";

export type historyItemType = {
  id: string;
  type: string;
  name: string;
  amount: number;
  accountBalance: number;
  date: string;
};

const historyReducer = (state: historyItemType[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.REGISTER_TRANSACTION:
      const newState = [action.payload, ...state];
      return newState;
    case ActionType.DELETE_TRANSACTION:
      return state.filter(
        (historyItem: historyItemType) => historyItem.id !== action.payload
      );
    case ActionType.BANKRUPT:
      return [];
    default:
      return state;
  }
};

export default historyReducer;
