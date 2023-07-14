import styled from "styled-components";
import Title from "../../Styles/Fonts/Title";
import Subtitle from "../../Styles/Fonts/Subtitle";
import PageMap from "../PageMap/PageMap";

type CardType = {
  className?: string;
  title: string;
  distance: number;
  image: string;
  pageMapInfos?: any;
  isMapPageOpen?: boolean;
};

const StyledCard = styled.div<{ image: string }>`
  height: 80svh;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  position: relative;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${({ image }) => image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardsInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const Card = ({
  className,
  title,
  distance,
  image,
  pageMapInfos,
  isMapPageOpen = true,
}: CardType) => {
  return (
    <>
      <StyledCard className={className} image={image}>
        <CardsInfos>
          <Title isCardTitle>{title}</Title>
          <Subtitle isCardSubtitle>{distance} km</Subtitle>
        </CardsInfos>
      </StyledCard>
      {isMapPageOpen && <PageMap pageMapInfos={pageMapInfos}  />}
    </>
  );
};

export default Card;
