import logo from './logo.svg';
import './App.css';
import Home from './home';
import Admin from './admin';
import Login from './login';
import Producto from './producto';
import Usuario from './usuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Add from './add';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      </BrowserRouter>

      );
}

      export default App;
