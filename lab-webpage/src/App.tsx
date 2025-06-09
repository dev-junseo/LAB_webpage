import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./main/Mainpage";
import Overview from "./about/Overview";
import Location from "./about/Location";
import Leader from "./about/Leader";
import Members from "./about/Members";
import Project from "./project/Project";
import Gallery from "./activities/Gallery";
import Facilities from "./facilities/Facilities";
import News from "./activities/News";
import Research_areas from "./project/Research_area";

function App() {
  return (
    <div className="m-auto">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about/Overview" element={<Overview />} />
        <Route path="/about/Pi" element={<Leader />} />
        <Route path="/about/Location" element={<Location />} />
        <Route path="/about/Members" element={<Members />} />
        <Route path="/project/Research_Areas" element={<Research_areas />} />
        <Route path="/project/Project" element={<Project />} />
        <Route path="/facilities/Facilities" element={<Facilities />} />
        <Route path="/activities/News" element={<News />} />
        <Route path="/activities/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
