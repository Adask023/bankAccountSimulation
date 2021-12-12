import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import { useState } from "react";
import { ActionType } from "./state/action-types";
import StyledButtonBig, { StyledButtonSmall } from "./components/Button/Button";
import { createGlobalStyle } from "styled-components";
import { StyledSectionWrapper, StyledWrapper } from "./components/App.styles";

const GlobalStyle = createGlobalStyle`
padding: 0;
margin: 0;
box-sizing: border-box;
`;

function App() {
  const dispatch = useDispatch();
  const [bankInput, setBankInput] = useState<number>(0);
  const [personName, setPersonName] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const { depositMoney, withdrawMoney, bankruptMoney, addToHistory } =
    bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  const history = useSelector((state: State) => state.history);

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
          <h1>{amount}</h1>
          {errors && (
            <div>
              {errors.map((err) => (
                <p key={Math.floor(Math.random() * 1000)}>{err}</p>
              ))}
            </div>
          )}
          <button
            disabled={!bankInput}
            onClick={() => {
              handleDeposit();
            }}
          >
            Deposit
          </button>
          <button
            disabled={!bankInput}
            onClick={() => {
              handleWithdraw();
            }}
          >
            Withdraw
          </button>
          <button
            onClick={() => {
              bankruptMoney();
              setErrors([]);
            }}
          >
            Bankrupt
          </button>
          <br />
          How much:
          <input
            type="number"
            value={bankInput}
            onChange={(e) => setBankInput(Number(e.target.value))}
          />
          <br />
          Name:
          <input
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
          {/* <StyledButtonBig
            onClick={() => {
              console.log(history);
            }}
          >
            check
          </StyledButtonBig>
          <StyledButtonSmall
            variant="outline"
            onClick={() => {
              console.log(history);
            }}
          >
            check
          </StyledButtonSmall> */}
        </StyledSectionWrapper>
        <StyledSectionWrapper>
          <div>
            {history && (
              <div>
                {history.map((item) => {
                  return (
                    <div key={item.id}>
                      <h2>
                        {item.name}: {item.type}
                      </h2>
                      {item.amouth}
                      <p>{item.date}</p>
                      <p>balance after transaction: {item.accountBalance}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </StyledSectionWrapper>
      </StyledWrapper>
    </div>
  );
}

export default App;
