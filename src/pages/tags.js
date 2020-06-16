import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostItemList from "../components/PostItemList"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <PostItemList
      title={`${group.length}개의 태그가 있습니다.`}
      path="/tags/"
      items={group}
    />
  </Layout>
)

export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
