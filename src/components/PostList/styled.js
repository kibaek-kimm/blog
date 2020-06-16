import styled from "styled-components"

export const StyledHeading = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
`

export const StyledPostUl = styled.ul`
  width: 100%;
`

export const StyledPostItem = styled.li`
  position: relative;
  padding: 40px 24px;
  margin-bottom: 20px;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 11px;
  background-color: #fff;
  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: rgba(46, 41, 51, 0.12) 0px 1px 11px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 27px;
  }

  a {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  div {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 22px;
  }
`
export const StyledDate = styled.p`
  font-size: 13px;
  color: #252525;
  opacity: 0.6;
`

export const StyledCategory = styled.div`
  margin-bottom: 10px;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`
