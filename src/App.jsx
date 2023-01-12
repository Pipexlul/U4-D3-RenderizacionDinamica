import { useState, useEffect, useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { baseCollabs } from "./data/collaborators.json";

import "./App.css";

import AddFilterCollabWrapper from "./components/AddFilterCollabWrapper";
import AddCollab from "./components/AddCollab";
import FilterCollab from "./components/FilterCollab";
import CollabList from "./components/CollabList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

import { validateInputs } from "./Utils";

export const AddCollabContext = createContext(null);
export const FilterCollabContext = createContext(null);
export const CollabListContext = createContext(null);

function App() {
  // Returns a new array to avoid errors with comparing the reference of the two identical arrays
  const initialAddCollabState = () => {
    return {
      name: "",
      role: "",
      email: "",
    };
  };

  // useReducer is definitely not necessary here
  // the prop drilling it saves is not worth the complexity
  // but I wanted to learn and apply the concept
  const newCollabReducerFn = (state, action) => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "ROLE":
        return { ...state, role: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "RESET":
        return initialAddCollabState();
      default:
        return state;
    }
  };

  const [collabs, setCollabs] = useState(baseCollabs);

  const [filteredCollabs, setFilteredCollabs] = useState(null);

  const [newCollab, dispatch] = useReducer(
    newCollabReducerFn,
    initialAddCollabState()
  );

  const [filter, setFilter] = useState("");
  const [filterMode, setFilterMode] = useState(0);

  // Indicates which collaborator entry is selected. -1 means no entry is selected.
  const [selectedEntry, setSelectedEntry] = useState(-1);

  const [shouldUpdatePopper, setShouldUpdatePopper] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTarget, setModalTarget] = useState(null);

  // During first time load, update the collaborator objects with an unique id
  // This is because the initial data is loaded from a .json file so it had to be static (1, 2, 3, etc..)
  // We apply new ids to the initial data and only run this function once
  useEffect(() => {
    const updatedCollabs = [];

    baseCollabs.forEach((collab) => {
      updatedCollabs.push({ ...collab, id: uuidv4() });
    });

    setCollabs(updatedCollabs);
  }, []);

  // If CollabList is displaying a filtered list, and there has been a change in the real collabs array (addition or deletion)
  // Then force a new filter
  useEffect(() => {
    if (filteredCollabs !== null) {
      filterCollabs();
    }
  }, [collabs]);

  const addNewCollab = () => {
    const { valid, faultyInputs } = validateInputs(
      [
        { name: "Nombre", value: newCollab.name },
        { name: "Rol", value: newCollab.role },
        { name: "Email", value: newCollab.email, email: true },
      ],
      collabs
    );

    if (valid) {
      setCollabs([...collabs, { ...newCollab, id: uuidv4() }]);
      setShouldUpdatePopper(true);
      dispatch({ type: "RESET" });
    } else {
      alert(faultyInputs[0].reason);
    }
  };

  const filterCollabs = () => {
    const filterCheck = filter.toLowerCase();

    let success = true;
    switch (filterMode) {
      case 0: // Filter by name
        setFilteredCollabs(
          collabs.filter((collab) =>
            collab.name.toLowerCase().includes(filterCheck)
          )
        );
        break;
      case 1: // Filter by role
        setFilteredCollabs(
          collabs.filter((collab) =>
            collab.role.toLowerCase().includes(filterCheck)
          )
        );
        break;
      case 2: // Filter by email
        setFilteredCollabs(
          collabs.filter((collab) =>
            collab.email.toLowerCase().includes(filterCheck)
          )
        );
        break;
      default:
        success = false;
        break;
    }

    if (success) {
      setShouldUpdatePopper(true);
      setSelectedEntry(-1);
    }
  };

  const deleteCollab = (id) => {
    setCollabs(collabs.filter((collab) => collab.id !== id));
    setShouldUpdatePopper(true);
    setSelectedEntry(-1);
  };

  // We pass true as the third argument to validateInputs to indicate that
  // In the event of a the user trying to update an entry with the same email
  // It will not trigger an error. But it will if the email already exists in another entry
  const updateCollab = (target, updateInfo) => {
    const { valid, faultyInputs } = validateInputs(
      [
        { name: "Nombre", value: updateInfo.name },
        { name: "Rol", value: updateInfo.role },
        { name: "Email", value: updateInfo.email, email: true, id: target.id },
      ],
      collabs,
      true
    );

    if (valid) {
      setCollabs(
        collabs.map((collab) =>
          collab.id === target.id ? { ...collab, ...updateInfo } : collab
        )
      );
      setShouldUpdatePopper(true);
      setSelectedEntry(-1);

      return true;
    } else {
      alert(faultyInputs[0].reason);

      return false;
    }
  };

  const setUpModal = (id) => {
    const target = collabs.find((collab) => collab.id === id);

    if (target) {
      setModalTarget(target);
      setShowModal(true);
    }
  };

  // Again, the use of useReducer and useContext might have been a bit too overkill
  // for this project, but I really gained a lot of knowledge so it's worth it in my eyes
  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen">
        <AddFilterCollabWrapper>
          <AddCollabContext.Provider
            value={{ newCollab, dispatch, addNewCollab }}
          >
            <AddCollab />
          </AddCollabContext.Provider>
          <FilterCollabContext.Provider
            value={{
              filter,
              setFilter,
              filterMode,
              setFilterMode,
              setFilteredCollabs,
              filterCollabs,
              setSelectedEntry,
              setShouldUpdatePopper,
            }}
          >
            <FilterCollab />
          </FilterCollabContext.Provider>
        </AddFilterCollabWrapper>

        <CollabListContext.Provider
          value={{
            shouldUpdatePopper,
            setShouldUpdatePopper,
            filteredCollabs,
            setUpModal,
          }}
        >
          <CollabList
            list={collabs}
            filteredList={filteredCollabs}
            selected={selectedEntry}
            setSelected={setSelectedEntry}
            deleteCollab={deleteCollab}
          />
        </CollabListContext.Provider>
        <Footer />
      </div>

      {showModal ? (
        <Modal
          title="Editar colaborador"
          desc="Edite los campos que desee modificar"
          showModal={showModal}
          setShowModal={setShowModal}
          toModify={modalTarget}
          saveFunc={updateCollab}
        />
      ) : null}
    </>
  );
}

export default App;
