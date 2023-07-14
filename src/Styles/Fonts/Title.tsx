import { ReactNode } from "react";
import styled, { css } from "styled-components";

type TitleProps = {
  className?: string;
  children: ReactNode;
  isCardTitle?: boolean;
  uppercase?: boolean;
};

const StyledTitle = styled.h1<{ isCardTitle?: boolean; uppercase?: boolean }>`
  color: black;
  font-family: "impact";
  font-size: 2em;
  line-height: 100%;

  ${({ isCardTitle }) =>
    isCardTitle &&
    css`
      color: white;
      text-align: center;
      text-transform: uppercase;
    `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

const Title = ({ className, children, isCardTitle, uppercase }: TitleProps) => {
  return (
    <StyledTitle
      className={className}
      isCardTitle={isCardTitle}
      uppercase={uppercase}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
