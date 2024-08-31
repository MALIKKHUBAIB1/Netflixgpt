import React from "react";
import { Field } from "formik";
function InputFeild({ type, name, placeholder, validate: validateFn }) {
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-4 my-4 w-full bg-gray-800 rounded-md"
      validate={validateFn}
    />
  );
}

export default InputFeild;
