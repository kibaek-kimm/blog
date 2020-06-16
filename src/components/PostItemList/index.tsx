import React, { ReactChild } from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import {
  StyledWrapper,
  anchor,
  StyledHeading,
  StyledCount,
  StyledHeadingNoData,
} from "./styled"

interface ItemInfo {
  fieldValue: string
  totalCount: number
}

interface Props {
  items: Array<ItemInfo>
  path: string
  title: ReactChild | Function | string
}

const PostItemList = ({ items = [], path, title }: Props) => {
  return items.length <= 0 ? (
    <StyledHeadingNoData>데이터가 없습니다.</StyledHeadingNoData>
  ) : (
    <>
      {title && <StyledHeading>{title}</StyledHeading>}
      <StyledWrapper>
        {items.map((itemInfo, index) => (
          <Link
            key={index}
            css={anchor}
            to={`${path}/${kebabCase(itemInfo.fieldValue)}`}
          >
            {itemInfo.fieldValue}
            <StyledCount>({itemInfo.totalCount})</StyledCount>
          </Link>
        ))}
      </StyledWrapper>
    </>
  )
}

export default PostItemList
