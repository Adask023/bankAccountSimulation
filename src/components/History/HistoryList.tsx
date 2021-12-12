import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { StyledHistoryList } from "./HistoryList.styles";

interface Props {}

export const HistoryList = (props: Props) => {
  const history = useSelector((state: State) => state.history);
  return (
    <StyledHistoryList>
      {history.length > 0 ? (
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
      ) : (
        <div>No history yet</div>
      )}
    </StyledHistoryList>
  );
};
