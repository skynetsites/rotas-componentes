// Importações de hooks, bibliotecas e dados de um objeto
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { SiteData } from "../data"; // Importando dados de um objeto

const Home = () => {
  const data = SiteData.home; // Pega informações partir de um objeto

  return (
    <div className="max-w-6xl mx-auto">
      {/* Seção bem-vindo com título e descrição */}
      <section className="text-center mb-10">
        <div className="flex flex-column align-items-center text-center mb-8">
          <h1 className="text-5xl text-gray-800 mt-0 mb-4">{data.title}</h1>
          <p className="text-lg mb-5 xl:w-9 text-gray-700 mt-0">{data.description}</p>

          {/* Botões links internos */}
          <div className="flex justify-content-center gap-3">
            {data.button.map((v, i) => (
              <Link key={i} to={v.link} title={v.label}>
                <Button label={v.label} icon={v.icon} className={v.class} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de recursos */}
      <section>
        <h2 className="text-4xl text-center text-gray-800 font-semibold mt-0 mb-9">
          {data.resources.title}
        </h2>

        {/* Listagem de recursos */}
        <div className="grid">
          {data.resources.resource.map((v, i) => (
            <div key={i} className="col-12 md:col-4 p-2 relative">
              <i className={`${v.icon} text-5xl absolute top-0 right-0 p-4 text-blue-800`} />
              <Card title={v.title} className="shadow-2 h-full">
                <p className="my-0">{v.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
