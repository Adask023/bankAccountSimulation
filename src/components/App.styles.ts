import styled from "styled-components";

export const StyledWrapper = styled.div`
  box-sizing: border-box;
  /* min-height: 100vh; */
  display: grid;
  max-width: 1200px;
  margin: auto;
  grid-template-columns: 60% 40%;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const StyledSectionWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2em 1.4em;

  .errors {
    color: red;
  }
  @media (max-width: 800px) {
    padding: 1em;
  }
`;
