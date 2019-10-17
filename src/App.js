import React from "react";
import "./styles.css";
import DynamicTitle from "./components/DynamicTitle";
import CustomForm from "./components/CustomForm";

function App() {
  return (
    <div className="App">
      <DynamicTitle />
      <CustomForm />
      <h1>App.js</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
