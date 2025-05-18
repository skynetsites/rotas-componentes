// Importações de hooks, bibliotecas e dados de um objeto
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { SiteData } from "../data"; // Importando dados de um objeto

const About = () => {
  const data = SiteData.aboutus; // Pega informações partir de um objeto

  return (
    <div className="max-w-full mx-auto">
      {/* Cabeçalho com título e descrição */}
      <div className="flex flex-column align-items-center text-center">
        <h1 className="text-5xl text-gray-800 mt-0 mb-4">{data.title}</h1>
        <p className="text-lg mb-5 xl:w-9 text-gray-700 mt-0">
          {data.subtitle}
        </p>
      </div>

      {/* Card histórico e valores */}
      <Card className="shadow-2">
        <h2 className="text-gray-800 mt-0 mb-2">{data.ourhistory.title}</h2>
        {data.ourhistory.description.map((v, i) => (
          <p key={i} className="text-gray-700">{v}</p>
        ))}
        
        <Divider /> {/* Linha divisória entre seções */}
        
        {/* Nossos Valores*/}
        <h2 className="text-gray-800">{data.ourvalues.title}</h2>
        <p className="text-gray-700">{data.ourvalues.description}</p>
        
        {/* Lista de valores */}
        <div className="grid">
          {data.ourvalues.values.map((v, i) => (
            <div key={i} className="col-12 md:col-4">
              <h3 className="text-2xl text-gray-800">{v.title}</h3>
              <p className="text-gray-700 m-0">{v.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default About;
