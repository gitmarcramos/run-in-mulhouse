import styled from "styled-components";
import Title from "../../Styles/Fonts/Title";
import Container from "../../Styles/Layout/Container";
import TextBody from "../../Styles/Fonts/TextBody";
import { DataType } from "../../data/runningDataType";
import Mapbox from "../Mapbox/Mapbox";
import Toggle from "../Toggle/Toggle";
import { useState } from "react";

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

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumeralInformation = styled.div``;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 8px;
`;

const PageMap = ({ className, pageMapInfos, closePageCard }: PageMapProps) => {
  const [isWaterMap, setIsWaterMap] = useState(false);
  const [isLightMap, setIsLightMap] = useState(false);

  const handleToggle = (toggleId: "water" | "light") => {
    if (toggleId === "water") {
      setIsWaterMap(!isWaterMap);
      console.log("water", isWaterMap);
      
    }

    if (toggleId === "light") {
      setIsLightMap(!isLightMap);
      console.log("light", isLightMap);
      
    }
  };

  const handleWater = () => {
    setIsWaterMap(!isWaterMap);
  }

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
          <SpaceBetweenContainer>
            <NumeralInformation>
              <TextBody bold>Distance</TextBody>
              <Title>{pageMapInfos.fields.longueur} km</Title>
            </NumeralInformation>
            <NumeralInformation>
              <TextBody bold>Temps moyen</TextBody>
              <Title>XXXX minutes</Title>
            </NumeralInformation>
          </SpaceBetweenContainer>
        </MapInfos>
        <Mapbox pageMapInfos={pageMapInfos} isWater={isWaterMap} isLight={true}/>
        <CardFooter>
          <SpaceBetweenContainer>
            <TextBody>Afficher les points d'eau</TextBody>
            <Toggle
              id={"water"}
              onChange={handleWater}
              checked={isWaterMap}
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <TextBody>Afficher les lampadaires</TextBody>
            <Toggle
              id={"light"}
              onChange={() => handleToggle("light")}
              checked={isLightMap}
            />
          </SpaceBetweenContainer>
        </CardFooter>
      </Container>
    </StyledPageMap>
  );
};

export default PageMap;
