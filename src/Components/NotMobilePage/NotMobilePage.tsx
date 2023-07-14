import styled from "styled-components";
import Subtitle from "../../Styles/Fonts/Subtitle";
import Container from "../../Styles/Layout/Container";

const ErrorContainer = styled(Container)`
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotMobilePage = () => {
  return (
    <ErrorContainer>
      <Subtitle>The site est développé pour mobile uniquement.</Subtitle>
    </ErrorContainer>
  );
};

export default NotMobilePage;
