import React from "react";
import Shapes from "./components/Shapes";
import "./styles/app.scss";

/**
 * @function App
 * @returns {JSX.Element} - Jsx.
 */

function App() {
  return (
    <div className="pages">
      <Shapes />
    </div>
  );
}

export default App;
