import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"

const BlogList = ({ pageContext, data }) => {
  return (
    <Layout>
      <PostList data={data.allMarkdownRemark.edges} />
      <Pagination 
        baseUrl="/posts/" 
        currentPage={pageContext.currentPage} 
        numPages={pageContext.numPages} 
        style={{ marginTop: 30 }}
      />
    </Layout>
  )
}

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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