import React from "react"
import { Link } from "gatsby"
import {
  StyledPostUl,
  StyledPostItem,
  StyledDate,
  StyledCategory,
  StyledHeading,
} from "./styled"

const PostList = ({ data, heading }) => (
  <>
    {heading && <StyledHeading>{heading}</StyledHeading>}
    <StyledPostUl>
      {data.map(({ node }) => (
        <StyledPostItem key={node.id} id={node.id}>
          {node.frontmatter.category && (
            <StyledCategory>{node.frontmatter.category}</StyledCategory>
          )}
          <h3>{node.frontmatter.title}</h3>
          <div>{node.excerpt}</div>
          <StyledDate>{node.frontmatter.date}</StyledDate>
          <Link to={node.fields.slug} />
        </StyledPostItem>
      ))}
    </StyledPostUl>
  </>
)

export default PostList
