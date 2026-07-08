import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PessoaDetalhes from "./pages/PessoaDetalhes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pessoas/:id" element={<PessoaDetalhes />} />
    </Routes>
  );
}

export default App;