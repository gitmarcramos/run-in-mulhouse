import styled, { css } from "styled-components";

type TextBodyProps = {
  className?: string;
  children: string;
  grey?: boolean;
  bold?: boolean;
};

const StyledTextBody = styled.p<{ grey?: boolean; bold?: boolean }>`
  font-family: "inter-semi";
  line-height: 160%;
  letter-spacing: -0.8px;
  font-size: 1em;

  ${({ grey }) =>
    grey &&
    css`
      color: #555;
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-family: "inter-bold";
    `}
`;

const TextBody = ({ className, children, grey, bold }: TextBodyProps) => {
  return (
    <StyledTextBody className={className} grey={grey} bold={bold}>
      {children}
    </StyledTextBody>
  );
};

export default TextBody;
