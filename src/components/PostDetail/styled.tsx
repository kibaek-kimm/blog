import styled from "styled-components"

export const StyledHeadline = styled.section`
  padding-top: 30px;
  margin-bottom: 60px;

  h2 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 29px;
  }
`

export const StyledContents = styled.section`
  margin-bottom: 100px;
  font-family: "Noto Sans KR";

  h2 {
    margin-top: 60px;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      margin-top: 40px;
    }
  }

  h3 {
    margin-top: 30px;
  }

  h3 + p {
    margin-top: 10px;
  }

  p {
    font-size: 17px;
    margin-top: 20px;
    line-height: 1.7;
    letter-spacing: -0.2px;
  }

  iframe {
    margin-top: 20px;
  }

  hr {
    margin: 60px 0;
  }

  p > code[class*="language-"] ,
  div > code[class*="language-"] ,
  li > code[class*="language-"] ,
  h2 > code[class*="language-"] {
    background: #ddd;
    color: #000;
  li {
    position: relative;
  }

  ul {
    li {
      padding-left: 16px;
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 10px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #000;
      }
    }
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  /**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */
  .gatsby-highlight {
    display: flex;
    background-color: #333;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;

    &[data-language="bash"] {
      &::before {
        content: "$";
        margin-right: 10px;
        color: #fff;
      }
    }
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*="language-"] {
    width: 100%;
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    box-shadow: none;
    border-width: 0;

    > code {
      font-size: 12px;
      > * {
        font-family: "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono",
          monospace;
      }
    }
  }
`

export const StyledCategory = styled.div`
  margin-bottom: 10px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`

export const StyledDate = styled.div`
  color: #333;
  font-size: 12px;
  font-family: "Roboto";
`
