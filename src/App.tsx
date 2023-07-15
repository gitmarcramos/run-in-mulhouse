import styled from "styled-components";
import Card from "./Components/Card/Card";
import Subtitle from "./Styles/Fonts/Subtitle";
import Container from "./Styles/Layout/Container";
import GlobalStyles from "./Styles/globalStyles";
import runningData from "./data/runningData.json";
import { useLayoutEffect, useRef, useState } from "react";
import { useWindowWidth } from "./hooks/useWindowWidth";
import NotMobilePage from "./Components/NotMobilePage/NotMobilePage";
import IntroPage from "./Components/IntroPage/IntroPage";
import gsap from "gsap";
import PageMap from "./Components/PageMap/PageMap";

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin-top: 16px;
`;

const App = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const handleCardOpen = () => {
    setIsCardOpen(!isCardOpen);
  };

  const [choosenCardIndex, setChoosenCardIndex] = useState(0);
  const handleCardIndex = (index: number) => {
    setChoosenCardIndex(index);
  };

  const handleOpen = (index: number) => {
    handleCardIndex(index);
    handleCardOpen();
  };

  const closePageCard = () => {
    setIsCardOpen(false);
    setChoosenCardIndex(0);
  };

  const isMobile = useWindowWidth();

  const introRef = useRef(null);
  useLayoutEffect(() => {
    introRef &&
      gsap.to(introRef.current, {
        delay: 1.5,
        duration: 1,
        autoAlpha: 0,
        ease: "Power4.easeOut",
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      {isMobile ? (
        <>
          <IntroPage ref={introRef} />
          <Container>
            <Subtitle>Où souhaitez-vous courir ?</Subtitle>
            <Cards>
              {runningData.map((item, index) => {
                return (
                  <Card
                    key={item.fields.nom_circui}
                    title={item.fields.nom_circui}
                    distance={item.fields.longueur}
                    image={`../../images/rim-${index + 1}.jpg`}
                    isMapPageOpen={isCardOpen}
                    onClick={() => handleOpen(index)}
                  />
                );
              })}
            </Cards>
            {isCardOpen && (
              <PageMap
                pageMapInfos={choosenCardIndex}
                closePageCard={closePageCard}
                data={runningData}
              />
            )}
          </Container>
        </>
      ) : (
        <NotMobilePage />
      )}
    </>
  );
};

export default App;
