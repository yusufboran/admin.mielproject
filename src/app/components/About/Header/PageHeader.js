import React from "react";
import "../style.scss";
import NestedModal from "./Modal";
import StepperForm from "./StepperForm.js";
import Header from "./Header";

const PageHeader = ({ bgImg, content }) => {
  return (
    <Header bgImg={bgImg} content={content}>
      <NestedModal title={"Header Component Edit"}>
        <StepperForm />
      </NestedModal>
    </Header>
  );
};

export default PageHeader;
