import styled from "styled-components";


export const StyledWrapper = styled.div`
min-height: 100vh;
display: grid;
grid-template-columns: 60% 40%;

@media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`

export const StyledSectionWrapper = styled.div`
box-sizing: border-box;
width: 100%;
padding: 3em;
`