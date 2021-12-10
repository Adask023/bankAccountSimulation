import { ActionType } from "../action-types";
import { Action } from "../actions";

export type historyItemType = {
  id: string;
  title: string;
  amouth: number;
  date: string;
};

const historyReducer = (state: historyItemType[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.REGISTER_TRANSACTION:
      const newState = [...state, action.payload];
      return newState;
    case ActionType.DELETE_TRANSACTION:
      return state.filter(
        (historyItem: historyItemType) => historyItem.id !== action.payload
      );
    default:
      return state;
  }
};

export default historyReducer;
