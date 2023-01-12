const ModifyCollabButton = ({ clickAction, idToModify }) => {
  return (
    <button
      className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600"
      type="button"
      onClick={(e) => {
        clickAction(idToModify);
      }}
    >
      Modificar
    </button>
  );
};

export default ModifyCollabButton;
