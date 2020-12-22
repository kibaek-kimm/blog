import React, { useCallback } from "react"
import {
  StyledWrapper,
  StyledItem,
  StyledItemPrev,
  StyledItemNext
} from "./styled";

const Pagination = ({ baseUrl, currentPage, numPages }) => {
  const viewPageCountBothSide = 2;
  const getPageButton = useCallback(() => {
    const renderArr = [];
    let startNum = currentPage - viewPageCountBothSide;
    let endNum = currentPage + viewPageCountBothSide;

    if (startNum <= 0) {
      startNum = 1;
    }

    if (endNum > numPages) {
      endNum = numPages;
    }

    for (let i = startNum; i <= endNum; i++) {
      renderArr.push(<StyledItem active={i === currentPage} to={`${baseUrl}${i}`}>{i}</StyledItem>)
    }

    return renderArr
  }, [currentPage]);

  return (
    <StyledWrapper>
      <StyledItemPrev disabled={currentPage === 1} to={`${baseUrl}${currentPage - 1}`}/>
      {getPageButton()}
      <StyledItemNext disabled={currentPage === numPages} to={`${baseUrl}${currentPage + 1}`}/>
    </StyledWrapper>
  )
}

export default Pagination
