import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SliderImage = ({ item }) => {
  return (
    <div>
      <AwesomeSlider>
        {item &&
          item.map((image) => (
            <div>
              <img
                src={`https://mielproje.com.tr/api/upload/${image.path}`}
                alt={image.id || "Project Images"}
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
