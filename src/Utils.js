import CollabEntry from "./components/CollabEntry";

export const validateInputs = (inputs, colList, isUpdate = false) => {
  const faultyInputs = [];

  inputs.forEach(({ name, value, email, id }) => {
    if (!value) {
      faultyInputs.push({ name, reason: "Campo no debe estar vacio" });
    }

    if (email) {
      if (!isUpdate) {
        if (colList.find((col) => col.email === value)) {
          faultyInputs.push({
            name,
            reason: "Correo ya se encuentra en la lista",
          });
        }
      } else if (id) {
        if (colList.find((col) => col.email === value && col.id !== id)) {
          faultyInputs.push({
            name,
            reason: "Correo ya se encuentra en la lista",
          });
        }
      }
    }
  });

  if (!faultyInputs.length) {
    return {
      valid: true,
    };
  } else {
    return {
      valid: false,
      faultyInputs,
    };
  }
};
