// Importações de hooks, bibliotecas, context e dados de um objeto
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { SiteData } from "../data"; // Importando dados de um objeto

function UserSidebar() {
  const [visible, setVisible] = useState(false); // Estado para controlar a visibilidade do Sidebar
  const btnRef1 = useRef(null); // Referências para os botões do menu favoritos
  const btnRef2 = useRef(null); // Referências para os botões do menu aplicativo
  const btnRef3 = useRef(null); // Referências para os botões do menu conta

  const usersidebar = SiteData.usersidebar; // Pega informações partir de um objeto

  const { user } = useAuth(); // Obtém o usuário autenticado do contexto de autenticação

  const navigate = useNavigate(); // Função de navegação dentro do React Router

  const handleButtonClick = () => {
    // Controla a exibição do Sidebar ou redireciona para o login
    if (user) {
      setVisible(true);
    } else {
      navigate("/login");
    }
  };

  // Definindo os dados do usuário ou valores padrão, dependendo da condição
  const data =
    user && user.id === 123 
    ? SiteData.specificUser 
    : SiteData.defaultUser;

  return (
    <div className="flex justify-content-center align-items-center gap-2 sm:py-1">
      <Link
        to={user ? `/user/${user.id}` : "/login"} // Link condicional para perfil ou login
        className="flex justify-content-center align-items-center gap-2"
        title={user ? data.name: 'Entrar / Registrar'}
      >
        {user ? (
          <>
            <Avatar
              image={data.avatar}
              shape="circle"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                border: "0.15rem solid var(--blue-500)", // Estilo para o Avatar
              }}
            />
            <span>
              {" "}
              Olá, <strong>{data.name}</strong>!
            </span>
          </>
        ) : (
          <>
            <i className="pi pi-user"></i> <strong>Entrar / Registrar</strong>
          </>
        )}
      </Link>

      <Button
        className="bg-blue-600"
        icon={user ? "pi pi-ellipsis-v" : "pi pi-sign-in"} // Icone dependendo do estado do usuário
        rounded
        onClick={handleButtonClick} // Ação para abrir ou redirecionar
        style={{ width: "2.6rem", height: "2.6rem" }}
        title={user ? 'Abrir sidebar do perfil': 'Entrar / Registrar'}
      />

      <div className="card flex justify-content-center">
        <Sidebar
          visible={visible} // Controla a visibilidade do Sidebar
          position="right"
          onHide={() => setVisible(false)} // Fecha o Sidebar
          content={({ closeIconRef, hide }) => (
            <div className="min-h-screen flex relative lg:static surface-ground">
              <div
                id="app-sidebar-2"
                className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                style={{ width: "280px" }}
              >
                <div className="flex flex-column h-full">
                  <div className="flex align-items-center justify-content-start px-4 pt-3 flex-shrink-0">
                    <span>
                      <Button
                        type="button"
                        ref={closeIconRef}
                        onClick={(e) => hide(e)} // Função de fechar o sidebar
                        icon="pi pi-times"
                        rounded
                        outlined
                        className="h-2rem w-2rem"
                        text
                      />
                    </span>
                  </div>

                  <div className="overflow-y-auto">
                    {[ // Mapeia as seções do sidebar
                      usersidebar.favorites,
                      usersidebar.application,
                      usersidebar.account,
                    ].map((section, idx) => {
                      const ref = [btnRef1, btnRef2, btnRef3][idx];
                      return (
                        <ul key={idx} className="list-none p-3 m-0">
                          <li>
                            <StyleClass
                              nodeRef={ref}
                              selector="@next"
                              enterFromClassName="hidden"
                              enterActiveClassName="slidedown"
                              leaveToClassName="hidden"
                              leaveActiveClassName="slideup"
                            >
                              <div
                                ref={ref}
                                className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                              >
                                <span className="font-medium uppercase">
                                  {section.title} {/* Título da seção do sidebar */}
                                </span>
                                <i className="pi pi-chevron-down"></i>
                                <Ripple />
                              </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 overflow-hidden">
                              {section.menu.map((v, i) => (
                                <li key={i}>
                                  <Link
                                    className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                    to={
                                      v.link == `/profile`
                                        ? `/user/${user.id}` // Link condicional para o perfil do usuário
                                        : v.link
                                    }
                                    title={v.name}
                                    onClick={() => setVisible(false)} // Executa função de fechar o sidebar
                                  >
                                    <i className={`${v.icon} mr-2`}></i>
                                    <span className="font-medium">
                                      {v.name} {/* Nome do item no menu */}
                                    </span>
                                    <Ripple />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      );
                    })}
                  </div>

                  <div className="mt-auto">
                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                    <div className="flex flex-row align-items-center justify-content-between my-3">
                      <Link
                        to={`/user/${user.id}`} // Navega para o perfil do usuário
                        className="flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                        title={data.name}
                      >
                        <Avatar image={data.avatar} shape="circle" />
                        <span>
                          {" "}
                          Olá, <strong>{data.name}</strong>!
                        </span>
                      </Link>
                      <Button
                        className="bg-blue-600"
                        icon="pi pi-sign-out"
                        rounded
                        onClick={() => {
                          localStorage.removeItem("user"); // Remove o usuário do localStorage
                          window.location.href = "/login"; // Redireciona para a Página de Login
                        }}
                        style={{ width: "2.6rem", height: "2.6rem" }}
                        title="Sair"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}

export default UserSidebar;
