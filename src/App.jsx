import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color/Color.jsx";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(color) {
    setColors([{ ...color, id: uid() }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
