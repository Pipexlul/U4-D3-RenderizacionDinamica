import CollabEntry from "./CollabEntry";

const CollabList = ({ list, filteredList }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xl p-6">
      <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Lista de colaboradores
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500">
          Información de los colaboradores y capacidad de editarlos
        </p>
      </div>
      <ul className="flex flex-col">
        {(filteredList === null ? list : filteredList).map(
          ({ name, id, role, email }) => {
            return (
              <CollabEntry
                key={id}
                id={id}
                name={name}
                role={role}
                email={email}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default CollabList;
