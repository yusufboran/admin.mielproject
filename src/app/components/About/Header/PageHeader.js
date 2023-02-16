import React from "react";
import "../style.scss";
import NestedModal from "../Modal";
import StepperForm from "./StepperForm.js";
import Header from "./Header";

const PageHeader = ({ image, context }) => {
  return (
    <Header image={image} context={context}>
      <NestedModal title={"Header Component Edit"}>
        <StepperForm />
      </NestedModal>
    </Header>
  );
};

export default PageHeader;
