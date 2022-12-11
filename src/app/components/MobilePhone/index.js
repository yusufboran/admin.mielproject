import React from "react";
import PhoneInput from "react-phone-input-2";
import "./styles.css";

const MobilePhone = ({ value, onChange }) => {
  return (
    <PhoneInput
      name="mobile"
      label="Mobile Number"
      validators={["required"]}
      errorMessages={["this field is required"]}
      country={"tr"}
    />
  );
};
export default MobilePhone;
