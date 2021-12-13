import styled from "styled-components";

export const StyledHistoryList = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1;
  grid-row-gap: 10px;
  width: 100%;
  .history_list {
    &__item {
      /* border: 1px solid; */
      margin: 0 1em;
      border-radius: 5px;
      box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
      padding: 0.6rem;
      margin: 1rem 0;
      background-color: white;

      .history_item__header {
        display: flex;
        justify-content: space-between;
      }
      .history_name span{
        font-weight: 500;
      }
      .history_date {
        font-style: italic;
      }
    }
  }

  h2 {
    text-align: left;
    margin-bottom: 0;
  }

  .amount {
    font-size: 3rem;
    padding:1.2rem;
  }
  .balance {
    text-align: left;
    font-style: italic;
  }
`;
