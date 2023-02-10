import React from "react";
import parse from "html-react-parser";

const Header = ({ children, bgImg, content, editComponet }) => {
  //"https://wallpaperaccess.com/full/3155150.jpg"

  return (
    <div
      className="page-header-area bg-img"
      style={{
        backgroundImage: editComponet
          ? `url(${URL.createObjectURL(bgImg[0])})`
          : `url(${bgImg})`,
      }}
    >
      {children}

      <div className="container">
        <div className="col-lg-10 col-xl-8 m-auto">
          <div className="page-header-content-inner">
            <div className="bg-b-opacity  p-4 poem">
              <span className="about-since">{parse(content)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
