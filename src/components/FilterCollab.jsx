import { useContext } from "react";

import Button from "./Buttons/Button";
import Input from "./Input";

import { FilterCollabContext } from "../App";
import FilterTabs from "./FilterTabs";
import ClearButton from "./Buttons/ClearButton";

const filterNames = ["Nombre", "Rol", "Email"];

const FilterCollab = () => {
  const {
    filter,
    setFilter,
    filterMode,
    setFilterMode,
    setFilteredCollabs,
    filterCollabs,
  } = useContext(FilterCollabContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-4">
        Filtrar lista de colaboradores
      </h2>
      <form className="bg-white rounded-lg shadow-md p-6">
        <FilterTabs
          currentFilter={filterMode}
          setFilterMode={setFilterMode}
          tabNames={filterNames}
        />
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {`Filtrar por ${filterNames[filterMode]}:`}
          </label>
          <Input
            name="filter"
            onChangeHandler={setFilter}
            isChangeHandlerDispatch={false}
            value={filter}
          />
        </div>
        <div className="flex justify-between">
          <Button text="Filtrar" isSubmit={true} clickAction={filterCollabs} />
          <ClearButton
            text="Limpiar filtros"
            clearAction={() => {
              setFilteredCollabs(null);
              setFilter("");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterCollab;
