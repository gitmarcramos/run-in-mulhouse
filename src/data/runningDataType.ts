export type CircuitType = {
  fields: {
    nom_circui: string;
    geo_point_2d: number[];
    commentair: string;
    longueur: number;
    niveau: string;
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
  datasetid: string;
  recordid?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GeneralRunningDataType = any;

// export type GeneralRunningDataType = [CircuitType];
