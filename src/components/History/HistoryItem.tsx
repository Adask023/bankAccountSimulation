import { historyItemType } from "../../state/reducers/historyReducer";

interface Props {
  item: historyItemType;
}

export const HistoryItem = (props: Props) => {
  const { item } = props;
  console.log(item.type);
  const style = {
    color: item.type === "Withdraw" ? "red" : "green",
  };
  return (
    <div className="history_list__item">
      <div className="history_item__header">
        <div className="history_name">
          Name: <span>{item.name}</span>
        </div>
        <div className="history_date">{item.date}</div>
      </div>

      <h2 style={style}>{item.type}</h2>
      <div className="amount">{item.amount}$</div>

      <div className="balance">
        balance after transaction: {item.accountBalance}$
      </div>
    </div>
  );
};
