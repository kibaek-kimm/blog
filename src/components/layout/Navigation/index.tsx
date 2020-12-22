import React from "react"
import { Link } from "gatsby"
import { StyledNavigation, StyledNavigationItem } from "./styled"

const navigationData = [
  {
    text: "Category",
    attrs: {
      to: "/category/",
    },
  },
  {
    text: "Tags",
    attrs: {
      to: "/tags/",
    },
  },
]

const Navigation = () => {
  return (
    <StyledNavigation>
      {navigationData.map((item, index) => (
        <StyledNavigationItem key={index}>
          <Link {...item.attrs}>{item.text}</Link>
        </StyledNavigationItem>
      ))}
    </StyledNavigation>
  )
}

export default Navigation
