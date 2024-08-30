import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './main/Mainpage';
import Overview from './about/Overview';

function App() {
  return (
    <div className='m-auto'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about/Overview' element={<Overview/>} />
      </Routes>
    </div>
  );
}

export default App;
