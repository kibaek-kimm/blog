import React from "react"
import { graphql } from "gatsby"
import { PostList } from "../components"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <PostList data={data.allMarkdownRemark.edges} />
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            sub_category
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
