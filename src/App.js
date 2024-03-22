
import './App.css';
import Login from './components/login';
import Weather from './components/weather';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
      </BrowserRouter>
      
      </>
      
    </div>
  );
}

export default App;
