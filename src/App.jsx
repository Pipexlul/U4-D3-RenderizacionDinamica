import {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { baseCollabs } from "./data/collaborators.json";

import "./App.css";

import AddFilterCollabWrapper from "./components/AddFilterCollabWrapper";
import AddCollab from "./components/AddCollab";
import FilterCollab from "./components/FilterCollab";
import CollabList from "./components/CollabList";
import Modal from "./components/Modal";

import { validateInputs } from "./Utils";
import Footer from "./components/Footer";

export const AddCollabContext = createContext(null);
export const FilterCollabContext = createContext(null);
export const CollabListContext = createContext(null);

function App() {
  const initialAddCollabState = () => {
    return {
      name: "",
      role: "",
      email: "",
    };
  };

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

  const [selectedEntry, setSelectedEntry] = useState(-1);

  const [shouldUpdatePopper, setShouldUpdatePopper] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTarget, setModalTarget] = useState(null);

  // During first time load, update the collaborator objects with an unique id.
  useEffect(() => {
    const updatedCollabs = [];

    baseCollabs.forEach((collab) => {
      updatedCollabs.push({ ...collab, id: uuidv4() });
    });

    setCollabs(updatedCollabs);
  }, []);

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
