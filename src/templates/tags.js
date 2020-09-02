import React from "react"
import { graphql } from "gatsby"
import { StyledHeading } from "./styled"
import Layout from "../components/layout"
import PostList from "../components/PostList"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <StyledHeading>
        {totalCount} 개의 &ldquo;#{tag}&ldquo; 포스트가 있습니다.
      </StyledHeading>
      <PostList data={edges} />
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
