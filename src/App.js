import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
