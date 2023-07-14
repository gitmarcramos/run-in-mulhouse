import React, { ReactNode } from "react";
import styled from "styled-components";

type ContainerCard = {
  className?: string;
  children: ReactNode;
};

const StyledContainer = styled.div`
  padding: 24px 8px;
`;

const Container = ({ className, children }: ContainerCard) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
