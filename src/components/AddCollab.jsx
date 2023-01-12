import React from "react";

import Button from "./Buttons/Button";
import Input from "./Input";

const AddCollab = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">Añadir nuevo colaborador</h2>
      <form className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nombre:
          </label>
          <Input name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Rol:</label>
          <Input name="role" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <Input name="email" type="email" />
        </div>
        <Button text="Añadir" isSubmit={true} />
      </form>
    </div>
  );
};

export default AddCollab;
