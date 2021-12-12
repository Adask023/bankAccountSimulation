import styled from "styled-components";


export const StyledWrapper = styled.div`
box-sizing: border-box;
min-height: 100vh;
display: grid;
max-width: 1200px;
margin: auto;
grid-template-columns: 60% 40%;


@media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`

export const StyledSectionWrapper = styled.div`
box-sizing: border-box;
width: 100%;
padding: 3em;
min-height: 45vh;
@media (max-width: 500px) {
    padding: 0;
  }
`