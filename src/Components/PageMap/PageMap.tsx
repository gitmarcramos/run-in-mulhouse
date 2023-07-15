import styled from "styled-components";
import Title from "../../Styles/Fonts/Title";
import Container from "../../Styles/Layout/Container";
import TextBody from "../../Styles/Fonts/TextBody";
import Mapbox from "../Mapbox/Mapbox";
import Toggle from "../Toggle/Toggle";
import { useState } from "react";

type PageMapProps = {
  className?: string;
  pageMapInfos: number;
  closePageCard: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

const StyledPageMap = styled.div`
  position: fixed;
  inset: 0;
  background-color: white;
  overflow-y: scroll;
  z-index: 10;
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

const PageMap = ({
  className,
  pageMapInfos,
  data,
  closePageCard,
}: PageMapProps) => {
  const [isWaterMap, setIsWaterMap] = useState(false);
  const [isLightMap, setIsLightMap] = useState(false);

  const handleToggle = (toggleId: "water" | "light") => {
    if (toggleId === "water") {
      setIsWaterMap(!isWaterMap);
    }

    if (toggleId === "light") {
      setIsLightMap(!isLightMap);
    }
  };

  return (
    <StyledPageMap className={className}>
      <Container>
        <BackToMaps onClick={closePageCard}>
          <TextBody>{"<-"}</TextBody>
          <TextBody>Retour aux parcours</TextBody>
        </BackToMaps>
        <MapInfos>
          <Description>
            <Title uppercase>{data[pageMapInfos].fields.nom_circui}</Title>
            <TextBody grey>{data[pageMapInfos].fields.commentair}</TextBody>
          </Description>
          <SpaceBetweenContainer>
            <NumeralInformation>
              <TextBody bold>Distance</TextBody>
              <Title>{data[pageMapInfos].fields.longueur} km</Title>
            </NumeralInformation>
            <NumeralInformation>
              <TextBody bold>Temps moyen</TextBody>
              <Title>XXXX minutes</Title>
            </NumeralInformation>
          </SpaceBetweenContainer>
        </MapInfos>
        <Mapbox
          pageMapInfos={data[pageMapInfos]}
          isWater={isWaterMap}
          isLight={true}
        />
        <CardFooter>
          <SpaceBetweenContainer>
            <TextBody>Afficher les points d'eau</TextBody>
            <Toggle
              id={"water"}
              onChange={() => handleToggle("water")}
              checked={isWaterMap}
            />
          </SpaceBetweenContainer>
          {/* <SpaceBetweenContainer>
            <TextBody>Afficher les lampadaires</TextBody>
            <Toggle
              id={"light"}
              onChange={() => handleToggle("light")}
              checked={isLightMap}
            />
          </SpaceBetweenContainer> */}
        </CardFooter>
      </Container>
    </StyledPageMap>
  );
};

export default PageMap;
