import React from "react";

const FilterCollab = () => {
  return (
    <div className="max-w-sm p-6">
      <h2 className="text-xl font-medium mb-4">
        Filtrar lista de colaboradores
      </h2>
      <form className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nombre:
          </label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="text"
            name="name"
            placeholder="Escribe el nombre del colaborador"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
};

export default FilterCollab;
