// Importações de hooks, bibliotecas e dados de um objeto
import { Link } from "react-router-dom";
import { SiteData } from '../data'; // Importando dados de um objeto

const Logo = ({ className }) => {
  const data = SiteData.siteinfo; // Pega informações partir de um objeto

  return (
    // Link da logo
    <Link 
      to="/" 
      className={`flex justify-content-center align-items-center ${className}`}
      title={data.name}
    >
      <i className={data.icon}></i>
      <span>{data.name}</span>
    </Link>
  );
};

export default Logo; // Exportando o componente Logo