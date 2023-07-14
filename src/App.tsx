import styled from "styled-components";
import Card from "./Components/Card/Card";
import Subtitle from "./Styles/Fonts/Subtitle";
import Container from "./Styles/Layout/Container";
import GlobalStyles from "./Styles/globalStyles";
import data from "./data/runningData.json";

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin-top: 16px;
`;

const App = () => {
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
                pageMapInfos={data[4]}
              />
            );
          })}
        </Cards>
      </Container>
    </>
  );
};

export default App;
