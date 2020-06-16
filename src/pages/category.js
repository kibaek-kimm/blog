import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostItemList from "../components/PostItemList"

const PostsCategories = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  return (
    <Layout>
      <PostItemList
        title={`${group.length}개의 카테고리가 있습니다.`}
        path="/category/"
        items={group}
      />
    </Layout>
  )
}

export default PostsCategories
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
