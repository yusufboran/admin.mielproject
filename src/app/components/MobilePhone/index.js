import React from "react";
import PhoneInput from "react-phone-input-2";
import "./styles.css";

const MobilePhone = (props) => {
  return (
    <PhoneInput
      specialLabel={props.label}
      country={"tr"}
      inputStyle={{
        borderColor: props.touched && props.error && "red",
      }}
    />
  );
};
export default MobilePhone;
