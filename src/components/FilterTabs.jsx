import TabButton from "./Buttons/TabButton";

const FilterTabs = ({ currentFilter, setFilterMode, tabNames }) => {
  return (
    <div className="flex flex-wrap">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Filtros:</h3>
      <div className="w-full">
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          {tabNames.map((filterName, index) => {
            return (
              <TabButton
                key={index}
                text={filterName}
                myFilterId={index}
                filterMode={currentFilter}
                setFilterMode={setFilterMode}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterTabs;
