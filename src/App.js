import { BrowserRouter ,Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Products from './Products';

import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
         <Route path='/Login' element={<Login/>} />
         <Route path="/" element={<Navigate to="/login" />}/>
         <Route path='/Products' element={<Products/>} />
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
