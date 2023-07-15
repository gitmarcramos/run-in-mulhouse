export type DataType = {
  fields: {
    nom_circui: string;
    geo_point_2d: number[];
    commentair: string;
    longueur: number;
    plan: string;
    gpx: string;
    geo_shape: {
      type: string;
      coordinates: number[];
    };
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
};
