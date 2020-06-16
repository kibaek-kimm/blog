import React from "react"
import { Link } from "gatsby"
import { css } from "styled-components"
import { StyledFooterWrapper, StyledLinkWrapper } from "./styled"
import { StyledInnerLayout } from '../styled';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledInnerLayout styles={css`display: flex;`}>
        <StyledLinkWrapper>
          <a className="github" href="https://github.com/kibaek-kimm" target="_blank">Github</a>
          <a className="email" href="mailto:kibaek.kimm@gmail.com" target="_blank">Email</a>
        </StyledLinkWrapper>
      </StyledInnerLayout>
    </StyledFooterWrapper>
  )
}

export default Footer