import { useState } from "react";

import { baseCollabs } from "./data/collaborators.json";

import "./App.css";

import AddFilterCollabWrapper from "./components/AddFilterCollabWrapper";
import AddCollab from "./components/AddCollab";
import FilterCollab from "./components/FilterCollab";
import CollabList from "./components/CollabList";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen">
      <AddFilterCollabWrapper>
        <AddCollab />
        <FilterCollab />
      </AddFilterCollabWrapper>

      <CollabList list={baseCollabs} />
    </div>
  );
}

export default App;
