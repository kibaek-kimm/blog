import React from "react"
import { DiscussionEmbed } from "disqus-react"
import {
  StyledHeadline,
  StyledCategory,
  StyledDate,
  StyledContents,
} from "./styled.tsx"

const PostDetail = ({ postData, slug }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: slug,
      title: postData.frontmatter.title,
    },
  }

  return (
    <div>
      <StyledHeadline>
        {postData.frontmatter.category && (
          <StyledCategory>
            {postData.frontmatter.category}
            {postData.frontmatter.sub_category && <> &gt; {postData.frontmatter.sub_category}</>}
          </StyledCategory>
        )}
        <h2>{postData.frontmatter.title}</h2>
        <StyledDate>{postData.frontmatter.date}</StyledDate>
      </StyledHeadline>
      <StyledContents dangerouslySetInnerHTML={{ __html: postData.html }} />
      <DiscussionEmbed {...disqusConfig} />
    </div>
  )
}

export default PostDetail
