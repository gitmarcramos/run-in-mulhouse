import styled from "styled-components";
import logo from "../../assets/logo/logo.png";
import { forwardRef } from "react";

const StyledIntroPage = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-image: url("../../images/intro.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

const Logo = styled.img`
  width: 66%;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IntroPage = forwardRef<HTMLDivElement, any>((_props, ref) => {
  return (
    <StyledIntroPage ref={ref}>
      <Logo src={logo} />
    </StyledIntroPage>
  );
});

export default IntroPage;
