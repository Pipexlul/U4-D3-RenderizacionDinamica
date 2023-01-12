import React from "react";

const Input = ({ name, type = "text", placeholder = "" }) => {
  return (
    <input
      className="w-full border border-gray-400 p-2 rounded-lg text-black"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
