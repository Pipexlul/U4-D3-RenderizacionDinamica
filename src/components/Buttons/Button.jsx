import React from "react";

const Button = ({ text, isSubmit = false }) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
    >
      {text}
    </button>
  );
};

export default Button;
