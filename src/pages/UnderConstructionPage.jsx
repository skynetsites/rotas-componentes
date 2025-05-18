// Importações bibliotecas e dados de um objeto
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { SiteData } from "../data"; // Importando dados de um objeto

const UnderConstruction = () => {
  const data = SiteData.underconst; // Pega informações partir de um objeto

  return (
    <div className="flex flex-column align-items-center justify-content-center text-center mb-5 w-5 mx-auto">
      
      {/* Emoji de aviso */}
      <div className="text-8xl mb-1">🚧</div>
      
      {/* Cabeçalho com título e descrição */}
      <h2 className="text-4xl mt-0 mb-2">{data.title}</h2>
      <p className="mb-5">{data.description}</p>
      
      {/* Botões links internos */}
      <div className="flex gap-3">
        {data.button.map((v, i) => (
          <Link key={i} to={v.link} title={v.label}>
            <Button label={v.label} icon={v.icon} className={v.class} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UnderConstruction;
