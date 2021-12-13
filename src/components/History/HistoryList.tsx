import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { HistoryItem } from "./HistoryItem";
import { StyledHistoryList } from "./HistoryList.styles";

export const HistoryList = () => {
  const history = useSelector((state: State) => state.history);
  return (
    <StyledHistoryList>
      <h1>History</h1>
      {history.length > 0 ? (
        <div className="history_list">
          {history.map((item) => {
            return <HistoryItem item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <h5>No history yet</h5>
      )}
    </StyledHistoryList>
  );
};
