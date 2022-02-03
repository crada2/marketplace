import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App(){
    return (
        <div className="App">
          <Routes>
              <Route index element={<Home />} />
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      );
}
export default App;