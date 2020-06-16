import React from "react"
import {
  StyledWrapper,
  StyledItem,
  StyledItemPrev,
  StyledItemNext
} from "./styled";

const Pagination = (props) => {
  return (
    <StyledWrapper>
      <StyledItemPrev href="javascript:void(0)" />
      <StyledItem href="javascript:void(0)" active={true}>
        1
      </StyledItem>
      <StyledItem href="javascript:void(0)">2</StyledItem>
      <StyledItem href="javascript:void(0)">3</StyledItem>
      <StyledItemNext href="javascript:void(0)" />
    </StyledWrapper>
  )
}

export default Pagination
