import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SliderImage = ({ item }) => {
  return (
    <div>
      <AwesomeSlider>
        {item.map((imgUrl, index) => (
          <div>
            {console.log(imgUrl)}
            <img
              src={`http://localhost:3000/uploads/${imgUrl}`}
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
