import styled from "styled-components";


type Props = {
  variant?: string;
}

export const StyledButtonBig = styled.button<Props>`
  padding: 5px;
  background-color: ${(props) => props.variant === 'outline' ? '#FFF' : '#4caf50'}; 
  text-decoration: none;
  border: 2px solid black;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: gray;
  }
`;

export const StyledButtonSmall = styled(StyledButtonBig)`
padding: 2px;
`