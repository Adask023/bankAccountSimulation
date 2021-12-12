import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { useState } from "react";
import { ActionType } from "./state/action-types";
import { createGlobalStyle } from "styled-components";
import { StyledSectionWrapper, StyledWrapper } from "./components/App.styles";
import { StyledInput } from "./components/Input/Input.styles";
import { ActionSection } from "./components/ActionSection/ActionSection";
import { HistoryList } from "./components/History/HistoryList";

const GlobalStyle = createGlobalStyle`
padding: 0;
margin: 0;
box-sizing: border-box;
background-color: #8A7356;
`;

function App() {
  const dispatch = useDispatch();
  const [bankInput, setBankInput] = useState<number>(0);
  const [personName, setPersonName] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const { depositMoney, withdrawMoney, bankruptMoney, addToHistory } =
    bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);

  const addError = (err: string) => {
    console.log(err);
    if (errors.length > 0 && !errors.includes(err)) {
      setErrors([...errors, err]);
    } else {
      setErrors([err]);
    }
  };

  const checkForm = (action: string) => {
    let errCount = 0;
    if (action === ActionType.DEPOSIT && bankInput > 10000) {
      addError("No joking, you can't have that much money!");
      errCount++;
    }
    if (action === ActionType.WITHDRAW && amount - bankInput < 0) {
      addError("You can't withdraw money that you don't have!");
      errCount++;
    }
    if (personName.length === 0) {
      addError("Enter a name");
      errCount++;
    }
    if (personName.length === 0) {
      addError("Name is to short, at least 2 characters");
      errCount++;
    }
    if (bankInput === 0) {
      addError("Value cant be 0");
      errCount++;
    }

    if (errCount) {
      return false;
    } else {
      setErrors([]);
      return true;
    }
  };

  const getDate = () => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  };

  const handleAddHistory = (
    historyAction: ActionType.DEPOSIT | ActionType.WITHDRAW
  ) => {
    const isDeposit = historyAction === ActionType.DEPOSIT ? true : false;
    addToHistory({
      id: "123",
      type: isDeposit ? "Deposit" : "Withdraw",
      name: personName,
      amouth: isDeposit ? bankInput : -bankInput,
      accountBalance: amount + (isDeposit ? bankInput : -bankInput),
      date: getDate(),
    });
  };

  const handleDeposit = () => {
    if (checkForm(ActionType.DEPOSIT)) {
      depositMoney(bankInput);
      setBankInput(0);
      handleAddHistory(ActionType.DEPOSIT);
    }
  };

  const handleWithdraw = () => {
    if (checkForm(ActionType.WITHDRAW)) {
      withdrawMoney(bankInput);
      setBankInput(0);
      handleAddHistory(ActionType.WITHDRAW);
    }
  };

  return (
    <div className="App">
      <StyledWrapper>
        <GlobalStyle />

        <StyledSectionWrapper>
          <h1>{amount} $</h1>
          {errors && (
            <div>
              {errors.map((err) => (
                <p key={Math.floor(Math.random() * 1000)}>{err}</p>
              ))}
            </div>
          )}
          <ActionSection
            handleDeposit={handleDeposit}
            handleWithdraw={handleWithdraw}
            bankInput={bankInput}
            bankruptMoney={bankruptMoney}
            setErrors={setErrors}
          />

          <StyledInput>
            <input
              type="number"
              value={bankInput}
              onChange={(e) => setBankInput(Number(e.target.value))}
              min="0"
            />
            <span></span>
          </StyledInput>
          <StyledInput>
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="name..."
            />
            <span></span>
          </StyledInput>
        </StyledSectionWrapper>
        <StyledSectionWrapper>
          <HistoryList />
        </StyledSectionWrapper>
      </StyledWrapper>
    </div>
  );
}

export default App;
