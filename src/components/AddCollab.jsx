import React from "react";

const AddCollab = () => {
  return (
    <div className="max-w-sm p-6">
      <h2 className="text-xl font-medium mb-4">Añadir nuevo colaborador</h2>
      <form className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nombre:
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="text"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Rol:</label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="text"
            name="role"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="email"
            name="email"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Añadir
        </button>
      </form>
    </div>
  );
};

export default AddCollab;
