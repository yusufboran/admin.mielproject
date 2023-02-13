import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Thumbnail from "../../Thumbnail";
import Content from "../../Content";

const About = ({ context, image, disable, children, edit }) => {
  var url = process.env.REACT_APP_DATABASE_URL;
  return (
    <div className="about-context sm-top">
      {children}
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-6 col-lg-5">
            <Thumbnail
              classes="about-thumb"
              imgSrc={
                !edit
                  ? `${url}/uploads/${image}`
                  : URL.createObjectURL(image[0])
              }
            />
          </div>

          <div className="col-md-6 col-lg-7">
            <Content classes="about-content">
              <h6>{"about"}</h6>
              <p>{parse(context)}</p>
              {disable ? (
                <Link
                  to={`${process.env.PUBLIC_URL + "/about"}`}
                  className="btn-about"
                >
                  {"More Details"} <i className="fa fa-angle-double-right" />
                </Link>
              ) : null}
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
