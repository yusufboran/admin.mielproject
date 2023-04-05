import React from "react";
import NestedModal from "../Modal";
import About from "./Component";
import StepperForm from "./StepperForm";


const Context = ({ image, context_tr, context_en,   disable }) => {
  return (
    <About image={image} context_tr={context_tr} context_en={context_en}>
      <NestedModal title={"Context Component Edit"}>
        <StepperForm />
      </NestedModal>
    </About>
  );
};

export default Context;
