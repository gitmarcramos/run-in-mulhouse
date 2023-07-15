import styled from "styled-components";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { useMemo } from "react";
import { DataType } from "../../data/runningDataType";
import waterData from "../../data/waterData.json";
import drop from "../../assets/icons/water.svg"

const token = import.meta.env.VITE_MAP;

type MapBoxProps = {
  className?: string;
  pageMapInfos: DataType;
  isWater: boolean;
  isLight: boolean;
};

const MapContainer = styled.div`
  height: 90svh;
  border-radius: 8px;
  overflow: hidden;
`;

const MarkerNumber = styled.div`
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
`;

const WaterMarkers = styled.img`
  width: 20px;
  height: 20px;
`;


const Mapbox = ({ className, pageMapInfos, isWater }: MapBoxProps) => {
  const lng = pageMapInfos.fields.geo_point_2d[0];
  const lat = pageMapInfos.fields.geo_point_2d[1];
  const zoom = 15;

  const markers = useMemo(
    () =>
      pageMapInfos.fields.geo_shape.coordinates.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (coordinates: any, index: number) => (
          <Marker
            key={index}
            longitude={coordinates[0]}
            latitude={coordinates[1]}
          >
            <MarkerNumber>{index}</MarkerNumber>
          </Marker>
        )
      ),
    [pageMapInfos.fields.geo_shape.coordinates]
  );

  const waterMarkers = useMemo(() => {
    return waterData.map((water, index) => {
      {
        return (
          <Marker
            key={`${water.geo_point_2d.lat}${index}`}
            longitude={water.geo_point_2d.lon}
            latitude={water.geo_point_2d.lat}
          >
            <WaterMarkers src={drop} alt="" />
          </Marker>
        );
      }
    });
  }, []);


  return (
    <MapContainer className={className}>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        scrollZoom={false}
        pitch={0}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {markers}
        {isWater && waterMarkers}
        <NavigationControl />
      </Map>
    </MapContainer>
  );
};

export default Mapbox;
