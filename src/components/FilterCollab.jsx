import React from "react";

import Button from "./Buttons/Button";
import Input from "./Input";

const FilterCollab = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">
        Filtrar lista de colaboradores
      </h2>
      <form className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nombre:
          </label>
          <Input name="filter" placeholder="Nombre de colaborador" />
        </div>
        <Button text="Filtrar" isSubmit={false} />
      </form>
    </div>
  );
};

export default FilterCollab;
