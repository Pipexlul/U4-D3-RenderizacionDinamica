import React from "react";

const Input = ({
  name,
  type = "text",
  placeholder = "",
  value,
  onChangeHandler,
  isChangeHandlerDispatch,
}) => {
  return (
    <input
      className="w-full border border-gray-400 p-2 rounded-lg text-black"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        if (isChangeHandlerDispatch) {
          onChangeHandler({
            type: name.toUpperCase(),
            payload: e.target.value,
          });
        } else {
          onChangeHandler(e.target.value);
        }
      }}
    />
  );
};

export default Input;
