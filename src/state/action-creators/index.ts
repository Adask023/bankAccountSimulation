import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { historyItemType } from "../reducers/historyReducer";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};

// history
export const addToHistory = (newHistory: historyItemType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REGISTER_TRANSACTION,
      payload: newHistory,
    });
  };
};

