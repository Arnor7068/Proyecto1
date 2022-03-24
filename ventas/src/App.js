import logo from './logo.svg';
import './App.css';
import Home from './home';
import Admin from './admin';
import Login from './login';
import Producto from './producto';
import Usuario from './usuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
      </BrowserRouter>

      );
}

      export default App;
