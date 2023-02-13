import React from "react";
import parse from "html-react-parser";

const Header = ({ children, image, context, edit }) => {
  //"https://wallpaperaccess.com/full/3155150.jpg"
  var url = process.env.REACT_APP_DATABASE_URL;
  return (
    <div
      className="page-header-area bg-img"
      style={{
        backgroundImage: edit
          ? `url(${URL.createObjectURL(image[0])})`
          : `url(${url}/uploads/${image})`,
      }}
    >
      {children}

      <div className="container">
        <div className="col-lg-10 col-xl-8 m-auto">
          <div className="page-header-content-inner">
            <div className="bg-b-opacity  p-4 poem">
              <span className="about-since">{parse(context)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
