// Importações de bibliotecas
import { ProgressSpinner } from "primereact/progressspinner";

// Componente que exibe um spinner de carregamento, com opção de posicionamento absoluto
const LoadingSpinner = ({ absolute }) => {
  return (
    <div
      className={`flex justify-content-center align-items-center 
      ${absolute ? "absolute w-full h-screen bg-overlay z-5" : "h-20rem"}`} // Define estilos condicionais com base na prop 'absolute'
      style={{
        ...(absolute && {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centraliza absolutamente o spinner na tela
        }),
      }}
    >
      <ProgressSpinner
        className="w-3rem h-3rem custom-spinner" // Define tamanho e estilo customizado do spinner
        strokeWidth="8" // Espessura da borda do spinner
        fill="transparent" // Fundo transparente
        animationDuration=".5s" // Duração da animação do spinner
      />
    </div>
  );
};

export default LoadingSpinner;
