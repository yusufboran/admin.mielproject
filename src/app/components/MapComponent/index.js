import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import map from "./map.json";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/turkey/turkiye.json";

const MapChart = () => {
  return (
    <div>
      <ComposableMap projection="geoMercator">
        <ZoomableGroup center={[29, 41]} zoom={60}>
          <Geographies geography={map}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker coordinates={[0, 0]}>
            <circle r={3} fill="#FF5533" />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
