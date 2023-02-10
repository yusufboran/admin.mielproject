import React from "react";
import NestedModal from "../../Modal";
import About from "./Component";
import StepperForm from "./StepperForm";


const Context = ({ context, image, disable }) => {
  return (
    <About image={image} context={context}>
      <NestedModal title={"Context Component Edit"}>
        <StepperForm />
      </NestedModal>
    </About>
  );
};

export default Context;
