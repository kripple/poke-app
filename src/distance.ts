// TBD: add namespace

import { getDistance } from 'geolib';

const CenterCoords = {latitude: 38.954327, longitude: -77.404367};

export function getDistanceFromMe(coordinates: string): number {
  let coords = coordinates.split(',');
  let meters = getDistance(
    CenterCoords,
    {latitude: +coords[0], longitude: +coords[1]}
  );
  return meters / 1609.34;
}