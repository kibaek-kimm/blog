import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation"
import {
  StyledHeaderWrapper,
  StyledHeaderInnerLayout,
  StyledHeading1,
} from "./styled"

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderInnerLayout>
        <StyledHeading1>
          <Link to="/">Baek-Log</Link>
        </StyledHeading1>
        <Navigation />
      </StyledHeaderInnerLayout>
    </StyledHeaderWrapper>
  )
}

export default Header
