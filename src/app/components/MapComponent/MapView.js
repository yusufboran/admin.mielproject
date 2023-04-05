import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/ozanyerli/istanbul-districts-geojson/main/istanbul-districts.json";

const MapChart = ({ items }) => {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-28.98148360009804, -41.15, 0],
        scale: 35000,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo, index) => (
            <Geography
              key={index}
              style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
              }}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>

      {items.map((item) => (
        <Marker
          key={item.id}
          coordinates={[
            Number(item["location"].slice(1, -1).split(",")[1]),
            Number(item["location"].slice(1, -1).split(",")[0]),
          ]}
        >
          {console.log(item.location[0])}
          {item.location[1]}
          {/* coordinates={[
            item.location.split(",")[1],
            item.location.split(",")[0],
          ]} */}

          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="scale(1.5) translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>

          <text
            textAnchor="middle"
            y={20}
            style={{
              fontFamily: "system-ui",
              fill: "#5D5A6D",
              fontSize: 24,
            }}
          >
            {item.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
