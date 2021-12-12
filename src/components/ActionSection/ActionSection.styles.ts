import styled from "styled-components";

export const StyledButtonSection = styled.div`
  box-sizing: border-box;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  margin: auto;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
