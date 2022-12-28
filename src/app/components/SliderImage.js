import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SliderImage = ({ item }) => {
  return (
    <div>
      <AwesomeSlider>
        {item.map((imgUrl, index) => (
          <div>
            <img
              src={item[index]}
              alt="Girl in a jacket"
              width="100%"
              height="56.25%"
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default SliderImage;