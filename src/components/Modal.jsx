import { useState, useEffect } from "react";

import Input from "./Input";

const Modal = ({
  title,
  desc,
  toModify,
  showModal,
  setShowModal,
  cancelFunc,
  saveFunc,
}) => {
  const [modifyName, setModifyName] = useState(toModify.name);
  const [modifyRole, setModifyRole] = useState(toModify.role);
  const [modifyEmail, setModifyEmail] = useState(toModify.email);

  useEffect(() => {
    if (toModify.name !== modifyName) {
      setModifyName(toModify.name);
    }
  }, [toModify.name]);

  useEffect(() => {
    if (toModify.role !== modifyRole) {
      setModifyRole(toModify.role);
    }
  }, [toModify.role]);

  useEffect(() => {
    if (toModify.email !== modifyEmail) {
      setModifyEmail(toModify.email);
    }
  }, [toModify.email]);

  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between px-5 pt-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
            <div className="relative px-6 pb-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {desc}
              </p>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre:
                </label>
                <Input
                  name="modifyName"
                  onChangeHandler={setModifyName}
                  value={modifyName}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Rol:
                </label>
                <Input
                  name="modifyRole"
                  onChangeHandler={setModifyRole}
                  value={modifyRole}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <Input
                  name="modifyEmail"
                  onChangeHandler={setModifyEmail}
                  value={modifyEmail}
                />
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => {
                  if (cancelFunc) {
                    cancelFunc();
                  }
                  setShowModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => {
                  if (saveFunc) {
                    if (
                      saveFunc(toModify, {
                        name: modifyName,
                        role: modifyRole,
                        email: modifyEmail,
                      })
                    ) {
                      setShowModal(false);
                    }
                  }
                }}
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
};

export default Modal;
