import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import View from "./pages/View";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="view" element={<View />} />
      </Route>
    </Routes>
  );
}

export default App;
