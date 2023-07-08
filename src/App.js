import { BrowserRouter ,Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import Product from './Product';

import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
         <Route path='/Login' element={<Login/>} />
         <Route path="/" element={<Navigate to="/login" />}/>
         <Route path='/Products' element={<Products/>} />
         <Route path='/Product' element={<Product/>} />
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
