import React from "react";
import { StyledButton, StyledButtonRed } from "../Button/Button.styles";
import { StyledButtonSection } from "./ActionSection.styles";

interface Props {
  handleDeposit: () => void;
  handleWithdraw: () => void;
  bankruptMoney: () => void;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  bankInput: number;
}

export const ActionSection = (props: Props) => {
  return (
    <StyledButtonSection>
      <StyledButton
        disabled={!props.bankInput}
        onClick={() => {
          props.handleDeposit();
        }}
      >
        Deposit
      </StyledButton>
      <StyledButton
        disabled={!props.bankInput}
        onClick={() => {
          props.handleWithdraw();
        }}
      >
        Withdraw
      </StyledButton>

      <StyledButtonRed
        onClick={() => {
          props.bankruptMoney();
          props.setErrors([]);
        }}
      >
        Bankrupt
      </StyledButtonRed>
    </StyledButtonSection>
  );
};
