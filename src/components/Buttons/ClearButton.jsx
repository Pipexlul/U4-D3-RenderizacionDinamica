const ClearButton = ({ text, clearAction }) => {
  return (
    <button
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
      onClick={(e) => {
        clearAction();
      }}
      type="button"
    >
      {text}
    </button>
  );
};

export default ClearButton;
