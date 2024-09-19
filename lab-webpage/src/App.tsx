import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./main/Mainpage";
import Overview from "./about/Overview";
import Location from "./about/Location";
import Pi from "./about/Pi";
import Members from "./about/Members";

function App() {
  return (
    <div className="m-auto">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about/Overview" element={<Overview />} />
        <Route path="/about/Pi" element={<Pi />} />
        <Route path="/about/Location" element={<Location />} />
        <Route path="/about/Members" element={<Members />} />
      </Routes>
    </div>
  );
}

export default App;
