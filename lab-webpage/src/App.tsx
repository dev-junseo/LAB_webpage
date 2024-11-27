import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./main/Mainpage";
import Overview from "./about/Overview";
import Location from "./about/Location";
import Leader from "./about/Leader";
import Members from "./about/Members";
import Project from "./project/Project";
import Gallery from "./gallery/Gallery";

function App() {
  return (
    <div className="m-auto">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about/Overview" element={<Overview />} />
        <Route path="/about/Pi" element={<Leader />} />
        <Route path="/about/Location" element={<Location />} />
        <Route path="/about/Members" element={<Members />} />
        <Route path="/project/Project" element={<Project />} />
        <Route path="/gallery/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
