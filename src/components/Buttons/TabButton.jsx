import React from "react";

const TabButton = ({ text, myFilterId, filterMode, setFilterMode }) => {
  return (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <button
        className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
          filterMode === myFilterId
            ? `text-white bg-green-600`
            : `text-green-600 bg-white`
        }`}
        onClick={(e) => {
          setFilterMode(myFilterId);
        }}
        type="button"
        key={myFilterId}
      >
        {text}
      </button>
    </li>
  );
};

export default TabButton;
