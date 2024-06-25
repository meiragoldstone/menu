import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import About from './Pages/About';
import Add from './Pages/Add';
import Home from './Pages/Home';
import Delete from './Pages/Delete';
import Retrieve from './Pages/Retrieve';
import Update from './Pages/Update';
import Layout from './Layout/Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter className = "App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Retrieve" element={<Retrieve />} />
        <Route path="Delete" element={<Delete />} />
        <Route path="Add" element={<Add />} />
        <Route path="Update" element={<Update />} />
        <Route path="About" element={<About />} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
