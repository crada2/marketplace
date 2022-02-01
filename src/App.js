import "./App.css";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";

function App() {
  return (
    <Routes>
      <Route index element={<Create />} />
    </Routes>
  );
}

export default App;
