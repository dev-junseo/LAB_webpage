import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './main/Mainpage';

function App() {
  return (
    <div className='m-auto'>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
