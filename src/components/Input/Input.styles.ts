import styled from "styled-components";

export const StyledInput = styled.span`
  /* padding: 1rem;
background-color: transparent;
border-radius: 1rem;
border: 2px solid black;
transform: 0.2s ease all;

&:hover {
  border: 2px solid gray;
} */

  margin: 1rem 0.2rem;
  position: relative;

  font-size: 1.5rem;

  background: linear-gradient(21deg, #10abff, #1beabd);

  padding: 3px;

  display: inline-block;

  border-radius: 9999em;


  *:not(span) {
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 0 0.625em;
    z-index: 1;
    font-size: 1.5rem;
    font-family: inherit;
    line-height: inherit;
    color: #2e3750;
    width: 14em;

    &:focus + span {
      opacity: 1;
      transform: scale(1);
    }
  }

  span {
    transform: scale(0.993, 0.94);
    transition: transform 0.5s, opacity 0.25s;
    opacity: 0;

    position: absolute;
    z-index: 0;
    margin: 4px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none;

    box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,
      -3px 3px 30px #10abff;
  }

  @media (max-width: 400px) {
    *:not(span) {
      width: 8em;
    }
  }
`;
