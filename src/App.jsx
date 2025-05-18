// Importações de hooks, bibliotecas, componentes e context
import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import { SiteData } from "./data";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { createGlobalStyle } from "styled-components";

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  // Resert
  *, *::before, *::after {
    outline: none;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family, Arial, sans-serif);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    height:  100%;
    object-fit: cover;
  }
  
  /* Estiliza o spinner de carregamento */
  .custom-spinner .p-progress-spinner-circle {
    stroke: var(--blue-600) !important;
  }

  .p-toast .p-toast-message .p-toast-detail {
    white-space: pre-line;
  }

  /* Estiliza a imagem dentro do Avatar */
  .use-avatar img {
    width: auto !important;
    height: 100% !important;
  }
  
  /* Estiliza o card */
  .p-card .p-card-title {
    margin-bottom: 1rem;
  }

  .p-card .p-card-content {
    padding: 0;
  }
`;

// Carregamento dinâmico das páginas (lazy loading)
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const UnderConstructionPage = lazy(() => import("./pages/UnderConstructionPage"));

const App = () => {
  const location = useLocation();    // Hook para acessar a URL atual
  const { user } = useAuth();        // Verifica o usuário autenticado
  const data = SiteData.usersidebar; // Pega informações partir de um objeto

  // Adiciona uma tag <link> de CSS ao <head> se ainda não existir
  const addCssLink = (href) => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  };

  // Remove a tag <link> com base no href, se existir
  const removeCssLink = (href) => {
    const link = document.querySelector(`link[href="${href}"]`);
    if (link) {
      document.head.removeChild(link);
    }
  };

  // Função de subir suavemente ao top
  const smoothScrollToTop = (duration) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const step = (t) => {
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      window.scrollTo(0, start * (1 - eased));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const [isAppLoading, setIsAppLoading] = useState(true); // Estado de carregamento da aplicação
  const [showSpinner, setShowSpinner] = useState(true);   // Estado para controle de exibição do spinner

  // Combina as rotas "em construção" a partir do menu do sidebar
  const rotasUnderConstruction = [
    ...data.favorites.menu,
    ...data.application.menu,
    ...data.account.menu,
  ];

  const userData =
    user && user.id === 123 
    ? SiteData.specificUser 
    : SiteData.defaultUser;

useEffect(() => {
  const path = location.pathname; // Pega o caminho da URL atual

  // Cria a tag <link> para carregar o CSS
  const cssUrl = 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css';
  
  addCssLink(cssUrl); // Adiciona o CSS ao montar

  // Manipular o título da página e as rotas
  const title =
    path.startsWith("/user/") && userData?.name
      ? `${userData.name} - Perfil`
      : path === "/"
      ? "Página Inicial"
      : path === "/about"
      ? "Sobre"
      : path === "/contact"
      ? "Contato"
      : rotasUnderConstruction.some((route) => route.link === path)
      ? "Página em Construção"
      : !isValidRoute(path)
      ? "404 - Página não Encontrada"
      : "Nova Página";

  document.title = title;

  smoothScrollToTop(1500);  // Chama função de subir suavemente ao topo

  const timer = setTimeout(() => {
    setShowSpinner(false);  // Esconde o spinner após 1 segundo
    setIsAppLoading(false); // Marca o fim do carregamento
  }, 1000); // Ajuste o tempo de atraso conforme necessário

  // Função de limpeza (cleanup)
  return () => {
    clearTimeout(timer); // Limpa o timer
    removeCssLink(cssUrl); // Remove o CSS ao desmontar
  };

}, [location, userData, rotasUnderConstruction]); // Atualiza quando a localização mudar

  // Função para verificar se a rota é válida
  const isValidRoute = (path) => {
    const validRoutes = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/register",
      "/home",
      "/user/:id",
    ];
    return validRoutes.includes(path);
  };

  // Verifica se a página está em construção
  const isUnderConstruction = rotasUnderConstruction.some(
    (route) => route.link === location.pathname
  );

  return (
    <>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      {showSpinner && <LoadingSpinner absolute={true} />}{" "}
      {/* Exibe o spinner enquanto a aplicação carrega */}
      {!showSpinner && !isAppLoading && (
        <Suspense fallback={<LoadingSpinner absolute={true} />}>
          {/* Quando o carregamento for concluído, renderiza as rotas */}
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Rota de usuário com parâmetro dinâmico */}
              <Route
                path="/user/:id"
                element={user ? <UserProfilePage /> : <Navigate to="/login" />}
              />

              <Route
                path="/home"
                element={
                  user ? (
                    <Navigate to={`/user/${user.id}`} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />

              {/* Verifica se a página está em construção */}
              {isUnderConstruction && (
                <>
                  {/* Renderiza páginas em construção para as rotas configuradas */}
                  {rotasUnderConstruction.map((v, i) => (
                    <Route
                      key={i}
                      path={v.link}
                      element={<UnderConstructionPage />}
                    />
                  ))}
                </>
              )}
              {/* Rota para página não encontrada */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Suspense>
      )}
    </>
  );
};

// Componente com AuthProvider para o contexto de autenticação
const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
