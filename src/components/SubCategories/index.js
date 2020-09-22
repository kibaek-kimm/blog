import React from "react"
import { Link } from "gatsby"
import _ from 'lodash'
import { StyledWrapper, StyledHeading, StyledCategoryList } from './styled'

const SubCategories = ({ edges }) => {
  const subCategoriesList = edges.reduce((accumulator, currentValue) => {
    const { category, sub_category: subCategory } = currentValue.node.frontmatter;
    const index = _.findIndex(accumulator, obj => obj.name === subCategory);

    if (index >= 0) {
      accumulator[index].count += 1;
      return accumulator;
    }

    return [{ name: subCategory, count: 1, path: ``, url: `/category/${category}/${subCategory}` }, ...accumulator];
  }, []);

  return (
    <StyledWrapper>
      <StyledHeading>Sub categories</StyledHeading>
      <StyledCategoryList>
        {subCategoriesList.map(obj => (<Link to={obj.url}>{obj.name} ({obj.count})</Link>))}
      </StyledCategoryList>
    </StyledWrapper>
  )
}


export default SubCategories
