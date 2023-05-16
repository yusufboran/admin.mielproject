import React, { useState } from "react";
import parse from "html-react-parser";

const Header = ({ children, image, context_tr, context_en, edit }) => {
  const [state, setState] = useState(true);

  const changeText = () => {
    setState(!state);
  };

  var url = "https://mielproje.com.tr/api/upload/";
 
  return (
    <div
      className="page-header-area bg-img"
      style={{
        backgroundImage: edit
          ? `url(${URL.createObjectURL(image[0])})`
          : `url(${url}${image})`,
      }}
    >
      {children}

      <div className="container">
        <div className="col-lg-10 col-xl-8 m-auto">
          <div className="page-header-content-inner">
            <div onClick={changeText} className="bg-b-opacity  p-4 poem">
              <span className="about-since">
                {state ? parse(context_tr) : parse(context_en)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
