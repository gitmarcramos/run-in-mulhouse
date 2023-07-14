import styled, { css } from "styled-components";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { useMemo, useState } from "react";
import data from "../../data/runningData.json";
import { DataType } from "../../data/dataType";

const token = import.meta.env.VITE_MAP;

type MapBoxProps = {
  className?: string;
  pageMapInfos: DataType;
};

const MapContainer = styled.div`
  height: 100vh;
`;

const MarkerNumber = styled.div<{ isStart?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff5f1f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;

  ${({ isStart }) =>
    isStart &&
    css`
      border-radius: 0;
      width: auto;
      padding: 0 8px;
      z-index: 9;
      border-radius: 4px;
    `}
`;

const Mapbox = ({ className, pageMapInfos }: MapBoxProps) => {
  console.log(pageMapInfos);

  const [lng, setLng] = useState(pageMapInfos.fields.geo_point_2d[0]);
  const [lat, setLat] = useState(pageMapInfos.fields.geo_point_2d[1]);
  const [zoom, setZoom] = useState(15);

  const markers = useMemo(
    () =>
      pageMapInfos.fields.geo_shape.coordinates.map(
        (coordinates: any, index: number) => (
          <Marker
            key={index}
            longitude={coordinates[0]}
            latitude={coordinates[1]}
          >
            {index === data[0].fields.geo_shape.coordinates.length - 1 ? (
              <MarkerNumber isStart>Départ</MarkerNumber>
            ) : (
              <MarkerNumber>{index + 1}</MarkerNumber>
            )}
          </Marker>
        )
      ),
    [pageMapInfos.fields.geo_shape.coordinates]
  );

  return (
    <MapContainer className={className}>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        pitch={0}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {markers}
        <NavigationControl />
      </Map>
    </MapContainer>
  );
};

export default Mapbox;
