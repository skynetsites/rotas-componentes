// Importações de hooks e bibliotecas
import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Carrega o componente (lazy loading)
const App = lazy(() => import("./App.jsx"));

// Renderiza dentro do BrowserRouter pra ativar as rotas
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/rotas-componentes">
    <App />
  </BrowserRouter>
);
