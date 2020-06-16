import React from "react"
import { graphql } from "gatsby"
import { Layout, PostDetail, SEO } from "../components"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const keywordMeta = {
    name: "keywords",
    content: post.frontmatter.tags && post.frontmatter.tags.join(),
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        propsMeta={[keywordMeta]}
      />
      <PostDetail postData={post} slug={post.fields.slug} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
        category
      }
      fields {
        slug
      }
      excerpt
    }
  }
`
