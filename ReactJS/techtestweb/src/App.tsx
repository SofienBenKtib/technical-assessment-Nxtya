import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Colors from "./data/Colors";

function App() {
  return (
    <div>
      <ColorPicker predefinedColors={Colors.predefinedColors} />
    </div>
  );
}

export default App;
