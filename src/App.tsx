import styled from "styled-components";
import Card from "./Components/Card/Card";
import Subtitle from "./Styles/Fonts/Subtitle";
import Container from "./Styles/Layout/Container";
import GlobalStyles from "./Styles/globalStyles";
import data from "./data/runningData.json";
import { useState } from "react";

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

  return (
    <>
      <GlobalStyles />
      <Container>
        <Subtitle>Où souhaitez-vous courir ?</Subtitle>
        <Cards>
          {data.map((item, index) => {
            return (
              <Card
                key={item.fields.nom_circui}
                title={item.fields.nom_circui}
                distance={item.fields.longueur}
                image={`../../images/rim-${index + 1}.jpg`}
                pageMapInfos={data[choosenCardIndex]}
                isMapPageOpen={isCardOpen}
                onClick={() => handleOpen(index)}
                closePageCard={closePageCard}
              />
            );
          })}
        </Cards>
      </Container>
    </>
  );
};

export default App;
