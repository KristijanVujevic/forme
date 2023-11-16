import "./App.css";
import Forme from "./Components/forme";

function App() {
  const students = [
    {
      id: "d21",
      firstname: "John",
      lastname: "McCormac",
      year: 1962,
      color: "#0a6d31",
    },
    {
      id: "z32",
      firstname: "Lucy",
      lastname: "Liu",
      year: 1977,
      color: "#48f3dd",
    },
    {
      id: "a55",
      firstname: "Ivan",
      lastname: "Drago",
      year: 1955,
      color: "#8a27eb",
    },
  ];
  return (
    <div className="App">
      <Forme students={students} />
    </div>
  );
}

export default App;
