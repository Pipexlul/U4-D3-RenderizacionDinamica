import React from "react";

const CollabEntry = ({ name, role, email, id }) => {
  return (
    <li
      key={id}
      className="flex flex-row mb-2 border-gray-400 text-neutral-900"
    >
      <div className="transition duration-500 shadow shadow-lime-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
        <div className="text-sm text-gray-600">{email}</div>
        <button className="flex justify-end w-24 text-right">
          <svg
            width="12"
            fill="currentColor"
            height="12"
            className="text-gray-500 hover:text-gray-800"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CollabEntry;
