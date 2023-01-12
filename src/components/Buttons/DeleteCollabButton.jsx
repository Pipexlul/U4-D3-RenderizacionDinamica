const DeleteCollabButton = ({ clickAction, idToDelete }) => {
  return (
    <button
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
      type="button"
      onClick={(e) => {
        clickAction(idToDelete);
      }}
    >
      Eliminar
    </button>
  );
};

export default DeleteCollabButton;
