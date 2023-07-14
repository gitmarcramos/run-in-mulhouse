import styled from "styled-components";
import Title from "../../Styles/Fonts/Title";
import Container from "../../Styles/Layout/Container";
import TextBody from "../../Styles/Fonts/TextBody";
import { DataType } from "../../data/dataType";
import Mapbox from "../Mapbox/Mapbox";

type PageMapProps = {
  className?: string;
  pageMapInfos: DataType;
  closePageCard: () => void;
};

const StyledPageMap = styled.div`
  position: fixed;
  inset: 0;
  background-color: white;
  overflow-y: scroll;
`;

const BackToMaps = styled.button`
  color: black;
  display: flex;
  gap: 4px;
  padding: 8px 8px 8px 0;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 8px;
  p {
    display: inline-block;
  }
`;

const MapInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const NumeralInformationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumeralInformation = styled.div``;

const PageMap = ({ className, pageMapInfos, closePageCard }: PageMapProps) => {
  return (
    <StyledPageMap className={className}>
      <Container>
        <BackToMaps onClick={closePageCard}>
          <TextBody>{"<-"}</TextBody>
          <TextBody>Retour aux parcours</TextBody>
        </BackToMaps>
        <MapInfos>
          <Description>
            <Title uppercase>{pageMapInfos.fields.nom_circui}</Title>
            <TextBody grey>{pageMapInfos.fields.commentair}</TextBody>
          </Description>
          <NumeralInformationsContainer>
            <NumeralInformation>
              <TextBody bold>Distance</TextBody>
              <Title>{pageMapInfos.fields.longueur} km</Title>
            </NumeralInformation>
            <NumeralInformation>
              <TextBody bold>Temps moyen</TextBody>
              <Title>XXXX minutes</Title>
            </NumeralInformation>
          </NumeralInformationsContainer>
        </MapInfos>
        <Mapbox pageMapInfos={pageMapInfos} />
      </Container>
    </StyledPageMap>
  );
};

export default PageMap;
