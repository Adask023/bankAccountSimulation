import { ActionType } from "../action-types";
import { historyItemType } from "../reducers/historyReducer";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: ActionType.BANKRUPT;
}

interface RegisterTransactionAction {
  type: ActionType.REGISTER_TRANSACTION;
  payload: historyItemType;
}

interface DeleteTransactionAction {
  type: ActionType.DELETE_TRANSACTION;
  payload: string;
}

export type Action =
  | DepositAction
  | WithdrawAction
  | BankruptAction
  | RegisterTransactionAction
  | DeleteTransactionAction;
