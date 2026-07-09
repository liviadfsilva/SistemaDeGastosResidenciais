import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PessoaDetalhes from "./pages/PessoaDetalhes";
import Resumo from "./pages/Resumo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pessoas/:id" element={<PessoaDetalhes />} />
      <Route path="/resumo" element={<Resumo />} />
    </Routes>
  );
}

export default App;