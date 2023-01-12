import CollabEntry from "./components/CollabEntry";

export const validateInputs = (inputs, colList) => {
  const faultyInputs = [];

  inputs.forEach(({ name, value, email }) => {
    if (!value) {
      faultyInputs.push({ name, reason: "Campo no debe estar vacio" });
    }

    if (email) {
      if (colList.find((col) => col.email === value)) {
        faultyInputs.push({
          name,
          reason: "Correo ya se encuentra en la lista",
        });
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
