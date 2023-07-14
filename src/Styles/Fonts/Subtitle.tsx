import { ReactNode } from "react";
import styled, { css } from "styled-components";

type SubtitleProps = {
  className?: string;
  children: ReactNode;
  isCardSubtitle?: boolean;
};

const StyledSubtitle = styled.h2<{ isCardSubtitle?: boolean }>`
  color: #000000;
  font-family: "inter-bold";
  font-size: 1.3em;
  letter-spacing: -1px;

  ${({ isCardSubtitle }) =>
    isCardSubtitle &&
    css`
      color: white;
      font-family: "impact";
      text-transform: uppercase;
    `}
`;

const Subtitle = ({ className, children, isCardSubtitle }: SubtitleProps) => {
  return (
    <StyledSubtitle className={className} isCardSubtitle={isCardSubtitle}>
      {children}
    </StyledSubtitle>
  );
};

export default Subtitle;
