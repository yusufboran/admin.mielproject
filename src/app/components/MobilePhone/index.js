import React from "react";
import PhoneInput from "react-phone-input-2";
import "./styles.css";

const MobilePhone = ({value, onChange}) => {
  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      country={"tr"}
     
    />
  );
};
export default MobilePhone;
