import styled from "styled-components"
import { StyledInnerLayout } from "../styled"

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  padding: 24px 0;
  // box-shadow: 0 0 10px rgba(160, 160, 160, 0.1);
`

export const StyledHeaderInnerLayout = styled(StyledInnerLayout)`
  justify-content: space-between;
  align-items: center;
`

export const StyledHeading1 = styled.h1`
  a {
    font: 700 20px "Roboto";
    color: #252525;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`
