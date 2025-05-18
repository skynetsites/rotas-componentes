// Importações de hooks, bibliotecas, componentes e dados de um objeto
import { useLocation, Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import UserSidebar from "./UserSidebar";
import Logo from "./Logo";
import { SiteData } from "../data"; // Importando dados de um objeto

const Header = () => {
  const location = useLocation(); // Hook para acessar a URL atual
  const currentPath = location.pathname;
  const data = SiteData.siteinfo; // Pega informações partir de um objeto

  // Gera o menu a partir dos dados do site
  const menu = data.menu.map((v) => ({
    label: v.name,
    icon: v.icon,
    template: () => (
      <Link
        to={v.link || "#"}
        className={`p-menuitem-link flex items-center font-semibold 
          py-2 gap-2 border-round-md transition-all transition-duration-300 
          ${currentPath === v.link 
            ? 'bg-blue-600 text-white' // Destaca o menu ativo
            : 'text-blue-700 hover:text-white hover:bg-blue-500'}`} // Estilo ao passar o mouse
            title={v.name}
      >
        <i className={v.icon}></i>
        {v.name}
      </Link>
    )
  }));

  return (
    // Cabeçalho fixo
    <header className="px-3 xl:px-4 pb-3 sticky top-0 z-5 bg-gray-50">
      <div className="my-4">
        {/* Logo */}
        <Logo className="gap-1 xl:text-6xl text-4xl text-blue-700 font-bold" />
      </div>
      {/* Menu de navegação e sidebar do perfil */}
      <Menubar model={menu} end={<UserSidebar />} className="bg-white" />
    </header>
  );
};

export default Header;
