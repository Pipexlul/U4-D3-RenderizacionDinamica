import { useState } from "react";

import { baseCollabs } from "./data/collaborators.json";

import "./App.css";

function App() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="flex flex-row justify-center">
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
              <label className="block text-gray-700 font-medium mb-2">
                Rol:
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-lg"
                type="text"
                name="role"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email:
              </label>
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
      </div>

      <div className="container flex flex-col items-center justify-center mx-auto max-w-lg p-6">
        <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Lista de colaboradores
          </h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">
            Información de los colaboradores y capacidad de editarlos
          </p>
        </div>
        <ul className="flex flex-col">
          <li className="flex flex-row mb-2 border-gray-400 text-neutral-900">
            <div className="transition duration-500 shadow shadow-lime-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium">Juanito Perez</div>
                <div className="text-sm text-gray-600">
                  Desarrollador Back-end
                </div>
              </div>
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
        </ul>
      </div>
    </div>
  );
}

export default App;
