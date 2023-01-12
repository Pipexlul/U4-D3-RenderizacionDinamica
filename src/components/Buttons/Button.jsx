const Button = ({ text, isSubmit = false, clickAction, actionArgs }) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
      onClick={(e) => {
        if (isSubmit) {
          e.preventDefault();
        }

        if (actionArgs) {
          clickAction(...actionArgs);
        } else {
          clickAction();
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
