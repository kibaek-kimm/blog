import styled from "styled-components"

export const StyledFooterWrapper = styled.footer`
  width: 100%;
  padding: 30px 0;
`
export const StyledLinkWrapper = styled.div`
  width: 100%;
  text-align: center;

  a {
    width: 32px;
    height: 32px;
    margin: 0 10px;
    display: inline-block;
    color: #252525;
    text-indent: -9999px;

    &:hover {
      opacity: 0.8;
    }

    &.github {
      background: url("/icons/ico_github.png") center no-repeat;
    }

    &.email {
      background: url("/icons/ico_email.png") center no-repeat;
    }
  }
`
