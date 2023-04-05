import React from "react";
import "../style.scss";
import NestedModal from "../Modal";
import StepperForm from "./StepperForm.js";
import Header from "./Header";

const PageHeader = ({ image, context_tr, context_en }) => {
  return (
    <Header image={image} context_tr={context_tr} context_en={context_en}>
      <NestedModal title={"Header Component Edit"}>
        <StepperForm />
      </NestedModal>
    </Header>
  );
};

export default PageHeader;
