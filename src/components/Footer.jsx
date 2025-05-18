// Importações de hooks, bibliotecas, componentes e dados de um objeto
import { useLocation, Link } from "react-router-dom";
import Logo from "./Logo";
import { SiteData } from "../data"; // Importando dados de um objeto

const Footer = () => {
  const location = useLocation(); // Hook para acessar a URL atual
  const currentPath = location.pathname; // Pega o caminhoda da URL atual
  const data = SiteData.siteinfo; // Pega informações partir de um objeto

  return (
    // Rodapé
    <footer className="bg-blue-900 text-blue-50 py-7 px-3">
      <div className="flex flex-column max-w-full mx-auto pt-2">
        {/* Logo */}
        <Logo className="gap-2 xl:text-5xl text-4xl text-blue-50 font-bold mb-3" />

        {/* Slogan */}
        <p className="text-center mb-6">{data.description}</p>

        {/* Menu de navegação */}
        <div className="flex justify-content-center gap-4 mb-3">
          {data.menu.map((v, i) => (
            <Link 
              key={i} 
              to={v.link || "#"} 
              className={`px-2 py-1 border-b-2 transition-all transition-duration-300
              ${currentPath === v.link
                ? 'text-white border-white' // Destaca o menu ativo
                : 'text-blue-100 border-transparent hover:text-white hover:border-blue-100' // Estilo ao passar o mouse
              }`}
              title={v.name}
              target="_blank"
            >
              {v.name}
            </Link>
        ))}
        </div>

        {/* Redes sociais */}
        <div className="flex justify-content-center gap-3 mb-7">
          {data.social.map((v, i) => (
            <Link
              key={i} 
              to={v.link || "#"}
              aria-label={v.name}
              className="text-blue-50 text-2xl transition-colors duration-300 hover:text-white"
              title={v.name}
            >
              <i className={v.icon}></i>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center m-0">
          <p className="m-0">&copy; {new Date().getFullYear()} {data.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
