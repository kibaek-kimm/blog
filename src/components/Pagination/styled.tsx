import styled, {css} from "styled-components";
import Link from "gatsby-link"

const stylesCommonArrow = css`
  position: relative;
  width: 35px;
  height: 35px;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
  }

  ${props => props.disabled && css`
    opacity: 0.2;
    pointer-events: none;

    &:hover {
      opacity: 0.2;
    }
  `}
`;

export const StyledWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;
  display: flex;
  justify-content: right;
`;

export const StyledItem = styled(Link)`
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  line-height: 35px;
  color: #333;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  ${p =>
    p.active &&
    `
    opacity: 1;
    font-weight: bold;
  `}
`;

export const StyledItemPrev = styled(Link)`
  ${stylesCommonArrow}

  &::after {
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }
`;

export const StyledItemNext = styled(Link)`
  ${stylesCommonArrow}

  &::after {
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
    transform: translate3d(-50%, -50%, 0) rotate(-135deg);
  }
`;
