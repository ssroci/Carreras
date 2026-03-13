import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Presencial from "./Pages/Presencial";
import Virtual from "./Pages/Virtual";
import Cursos from "./Pages/Cursos";
import Categoria from "./Pages/Categoria";
import CategoriaVirtual from "./Pages/CategoriaVirtual";
import Universidades from "./Pages/Universidades";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route path="/universidades" element={<Universidades />} />

        <Route path="/presencial" element={<Presencial />} />
        <Route path="/presencial/:tipo" element={<Categoria />} />

        <Route path="/virtual" element={<Virtual />} />
        <Route path="/virtual/:categoria" element={<CategoriaVirtual />} />

        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </>
  );
}

function App() {
  return <AppRoutes />;
}

export default App;
