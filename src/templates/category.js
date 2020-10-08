import React from "react"
import { graphql } from "gatsby"
import { StyledHeading } from "./styled"
import Layout from "../components/layout"
import PostList from "../components/PostList"
import SubCategories from '../components/SubCategories'

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  console.log(edges);
  const subCateogories = edges.node?.frontmatter?.sub_category;

  console.log('pageContext: ', pageContext);

  return (
    <Layout>
      <StyledHeading>
        {totalCount} 개의 &ldquo;{category}&ldquo; 포스트가 있습니다.
      </StyledHeading>
      {subCateogories && <SubCategories subCateogories={subCateogories}/>}
      <PostList data={edges} />
    </Layout>
  )
}

export default Category
export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          category: { 
            in: [$category] 
          } 
        } 
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            sub_category
            category
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
