import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Academia from "./components/Academia";
import Contacto from "./components/contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
