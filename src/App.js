import React from "react";
import "./App.css";
import FamilyTree from "./components/FamilyTree";
import { Provider } from "react-redux";
import store from "./store";
import FamilyForm from "./components/FamilyForm";


function App() {

  return (
    <Provider store={store}>
      <FamilyForm />

      <div className="App">
        <FamilyTree />
      </div>
    </Provider>
  );
}

export default App;
