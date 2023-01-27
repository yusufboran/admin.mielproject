import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SliderImage = ({ item }) => {
  var url = process.env.REACT_APP_DATABASE_URL;
  console.log("url", url);
  return (
    <div>
      <AwesomeSlider>
        {item &&
          item.map((imgUrl, index) => (
            <div>
              <img
                src={`${url}/uploads/${imgUrl}`}
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
