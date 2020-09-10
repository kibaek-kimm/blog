import styled from "styled-components"

export const StyledLayout = styled.section`
  width: 100%;
  position: relative;
`

export const StyledInnerLayout = styled.section`
  width: 800px;
  position: relative;
  margin: 0 auto;
  display: flex;

  ${p => p.styles && p.styles}

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
  }
`

export const StyledContentLayout = styled.section`
  width: 100%;
  position: relative;
  padding: 20px 0;

  ${p => p.styles && p.styles}
`
