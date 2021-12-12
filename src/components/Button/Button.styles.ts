import styled from "styled-components";

type Props = {
  variant?: string;
};

export const StyledButton = styled.button<Props>`
  box-sizing: border-box;
  background: #10abff;
  border: none;
  z-index: 1;
  margin: 1rem 0;

  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: white;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #10abff;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
`;

export const StyledButtonRed = styled(StyledButton)`
  background: red;
  &:after {
    background-color: white;
  }
  &:hover {
    color: red;
  }
`;
