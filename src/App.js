import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";

import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar />
        <Sidebar /> */}

        <Routes>
          <Route path="/" element={<Line />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
