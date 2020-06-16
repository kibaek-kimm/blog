import React from "react"
import { createGlobalStyle, css } from "styled-components"
import SEO from "../SEO"
import Header from "./Header/index.tsx"
import Footer from "./Footer/index.tsx"
import { StyledLayout, StyledInnerLayout, StyledContentLayout } from "./styled"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR";
  }

  li{
    list-style: none;
  }

  a {
    color: #252525;
    text-decoration: underline;
  }
`
const StyledContentInnerLayout = css`
  display: block;
`

const Layout = ({ children, infinite = false }) => {
  return (
    <StyledLayout>
      <SEO />
      <GlobalStyle />
      <Header />
      <StyledContentLayout>
        {infinite ? (
          children
        ) : (
          <StyledInnerLayout styles={StyledContentInnerLayout}>
            {children}
          </StyledInnerLayout>
        )}
      </StyledContentLayout>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
