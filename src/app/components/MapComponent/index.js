import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const MapChart = () => {
  const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037],
    },
    {
      markerOffset: -15,
      name: "La Paz",
      coordinates: [28.98515070117598, 41.1025790977422],
    },
  ];
  // https://raw.githubusercontent.com/ozanyerli/istanbul-districts-geojson/main/istanbul-districts.json istanbul ilçeleri
  return (
    <ComposableMap>
      <ZoomableGroup center={[28.95949703456525, 40.98575102103216]} zoom={170}>
        <Geographies
          onClick={(e) => null}
          geography={
            "https://raw.githubusercontent.com/ozanyerli/istanbul-districts-geojson/main/istanbul-districts.json"
          }
        >
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                  strokeWidth={0.01}
                />
              ))}
            </>
          )}
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={0.03} fill="#F00" />
            <text
              textAnchor="middle"
              y={0.13}
              style={{ fontSize: "0.1px", letterSpacing: 0.005 }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
