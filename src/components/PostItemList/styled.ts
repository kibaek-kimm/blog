import styled, { css } from "styled-components"

export const StyledWrapper = styled.div``

export const StyledHeading = styled.h2`
  margin-bottom: 25px;

  font-size: 16px;
  font-weight: bold;
`

export const anchor = css`
  position: relative;

  display: inline-block;
  margin: 0 20px 5px 0;
  padding-left: 10px;

  font-size: 14px;

  &::before {
    position: absolute;
    top: 7px;
    left: 0;

    display: block;
    width: 2px;
    height: 2px;
    border-radius: 50%;

    background: #252525;

    content: "";
  }
`

export const StyledCount = styled.span`
  position: relative;

  font-size: 12px;
`

export const StyledHeadingNoData = styled.h2`
  padding: 30px 0;

  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
