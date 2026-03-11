import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Presencial from "./Pages/Presencial";
import Virtual from "./Pages/Virtual";
import Cursos from "./Pages/Cursos";
import CarreraDetalle from "./Pages/CarreraDetalle";
import AreaVirtual from "./Pages/AreaVirtual";
import CursosDetalle from "./Pages/CursosDetalle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presencial" element={<Presencial />} />
        <Route path="/presencial/:id" element={<CarreraDetalle />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/virtual/:id" element={<AreaVirtual />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:id" element={<CursosDetalle />} />
      </Routes>
    </>
  );
}

export default App;