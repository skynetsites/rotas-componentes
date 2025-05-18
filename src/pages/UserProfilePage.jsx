// Importações de hooks, bibliotecas, componentes e dados de um objeto
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import LoadingSpinner from "../components/LoadingSpinner";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { SiteData } from "../data"; // Importando dados de um objeto

// Função para obter dados de um objeto do usuário com base no ID (usuário específico ou padrão)
const getCurrentUser = (id) => {
  return id === "123" 
         ? SiteData.specificUser  
         : SiteData.defaultUser;
};

const UserProfile = () => {
  // Estados e referências principais do perfil
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(getCurrentUser(id));

  // Estados relacionados a interações do usuário (seguir, mensagem, toast)
  const [isFollowing, setIsFollowing] = useState(false);
  const [messageDialog, setMessageDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useRef(null);

  // Função utilitária para exibir notificações (toast)
  const showToast = (severity, summary, detail, life = 3000) => {
    toast.current?.show({ severity, summary, detail, life });
  };

  // Efeito para carregar dados do usuário e estado de seguimento ao mudar o ID
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 600)); // Simula atraso

      setUser(getCurrentUser(id)); // Carrega usuário

      const followingUsers =
        JSON.parse(localStorage.getItem("followingUsers")) || [];
      setIsFollowing(followingUsers.includes(id)); // Verifica se está seguindo

      setLoading(false);
    };

    fetchData();
  }, [id]);

  // Lógica para seguir ou deixar de seguir um usuário
  const handleFollow = () => {
    const followingUsers =
      JSON.parse(localStorage.getItem("followingUsers")) || [];
    let updatedFollowersCount = user.stats.followers;

    if (isFollowing) {
      const updatedFollowingUsers = followingUsers.filter(
        (userId) => userId !== id
      );
      localStorage.setItem(
        "followingUsers",
        JSON.stringify(updatedFollowingUsers)
      );
      setIsFollowing(false);
      updatedFollowersCount -= 1;
      showToast("success", "Deixou de seguir", "Você deixou de seguir esse usuário");
    } else {
      followingUsers.push(id);
      localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
      setIsFollowing(true);
      updatedFollowersCount += 1;
      showToast("success", "Seguindo", "Você agora está seguindo esse usuário");
    }

    // Atualiza contagem de seguidores
    setUser((prevUser) => ({
      ...prevUser,
      stats: {
        ...prevUser.stats,
        followers: updatedFollowersCount,
      },
    }));
  };

  // Envia a mensagem do usuário (simulado com timeout)
  const handleSendMessage = () => {
    if (message.trim() === "") {
      showToast("error", "Erro", "Por favor, insira uma mensagem");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setMessageDialog(false);
      setMessage("");
      showToast("success", "Mensagem enviada", "Sua mensagem foi enviada com sucesso");
    }, 2000);
  };

  // Mostra spinner enquanto os dados estão sendo carregados
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Componente de notificação */}
      <Toast ref={toast} />

      {/* Card principal */}
      <Card className="shadow-2">
        <div className="flex flex-column md:flex-row align-items-center md:align-items-start text-center md:text-left mb-5">
          {/* Avatar do usuário */}
          <Avatar
            image={user.avatar}
            onError={(e) => {
              e.target.src = "https://www.w3schools.com/w3images/avatar2.png";
            }}
            size="xlarge"
            shape="circle"
            style={{
              width: "10rem",
              height: "10rem",
              border: "0.4rem solid var(--blue-500)",
            }}
            className="p-overlay-badge use-avatar"
          >
            {/* Indicador de status */}
            <Badge
              value={user.badge}
              size="large"
              style={{ top: "1.35rem", right: "1.35rem" }}
            />
          </Avatar>

          {/* Informações principais */}
          <div className="flex flex-column mt-3 md:mt-0 md:ml-4 flex-grow-1">
            <h1 className="m-0">{user.name}</h1>
            <p className="text-color-secondary">@{user.username}</p>
            <p className="mt-0 mb-2">{user.role} • {user.location}</p>

            <div className="flex gap-3 mt-3 justify-content-center md:justify-content-start">
              <Button
                label={isFollowing ? "Deixar de Seguir" : "Seguir"}
                icon="pi pi-user-plus"
                className="p-button-raised"
                onClick={handleFollow}
              />
              <Button
                label="Mensagem"
                icon="pi pi-envelope"
                className="p-button-outlined"
                onClick={() => setMessageDialog(true)}
              />
            </div>

            {/* Estatísticas */}
            <div className="flex gap-4 mt-3 justify-content-center md:justify-content-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {user.stats.posts}
                </div>
                <div className="text-sm text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {user.stats.followers}
                </div>
                <div className="text-sm text-gray-500">Seguidores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {user.stats.following}
                </div>
                <div className="text-sm text-gray-500">Seguindo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Abas sobre, projetos e atividades */}
        <TabView>
          <TabPanel header="Sobre">
            {/* Bio */}
            <h3>Bio</h3>
            {user.bio.map((v, i) => (
              <p key={i} className="text-gray-700">{v}</p>
            ))}

            {/* Habilidades */}
            <h3 className="mt-5">Habilidades</h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {user.skills.map((v, i) => (
                <Tag key={i}
                  className="px-4 py-2"
                  {...(/^#([0-9A-F]{3}){1,2}$/i.test(v.color)
                    ? { style: { backgroundColor: v.color } }
                    : { severity: v.color })}
                >
                  <div className="flex align-items-center gap-2">
                    <i className={`fa-brands ${v.icon} text-2xl`}></i>
                    <span className="text-lg">{v.name}</span>
                  </div>
                </Tag>
              ))}
            </div>

            {/* Informações de Contato */}
            <h3>Informações de Contato</h3>
            <div className="flex flex-column gap-2">
              <div>
                <i className="pi pi-envelope mr-2"></i>
                <Link to={`mailto:${user.contacts.email}`} title={user.contacts.email}>{user.contacts.email}</Link>
              </div>
              <div>
                <i className="pi pi-phone mr-2"></i>
                <Link to={`tel:${user.contacts.phone}`} title={user.contacts.phone}>{user.contacts.phone}</Link>
              </div>
              <div>
                <i className="pi pi-github mr-2"></i>
                <Link to={`https://${user.contacts.github}`} title={user.contacts.github} target="_blank" rel="noopener noreferrer">{user.contacts.github}</Link>
              </div>
            </div>
          </TabPanel>

          <TabPanel header="Projetos">
            {/* Projetos */}
            <div className="grid">
              {user.projects.map((v, i) => (
                <div key={i} className="col-12 md:col-4 p-2">
                  <Card title={v.name} className="shadow-2 h-full flex flex-column">
                    <p className="flex-grow-1 m-0 mb-2">{v.description}</p>
                    <small className="flex-grow-1 text-sm m-0 m-0"><span className="font-bold">Tecnologias: </span>
                    {v.technologies.map((v, i) => (
                      <span key={i} className="mb-3">
                        {v}{", "}
                      </span>
                    ))}
                    </small>
                    <Link to={v.link} className="flex justify-content-end mt-1" title="Ver Detalhes" target="_blank">
                      <Button label="Ver Detalhes" text />
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel header="Atividades">
            {/* Atividades  */}
            {user.activity && user.activity.length > 0 ? (
              <ul className="list-none mt-3 m-0 p-0">
                {user.activity.map((v, i) => (
                  <li key={i} className="mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    {v}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-column align-items-center text-center p-5">
                <i className="pi pi-calendar text-5xl text-primary mb-3"></i>
                <h3>Histórico de Atividades</h3>
                <p>Sem atividades recentes registradas.</p>
              </div>
            )}
          </TabPanel>
        </TabView>
      </Card>

      {/* Diálogo/modal de envio de mensagem */}
      <Dialog
        visible={messageDialog}
        onHide={() => setMessageDialog(false)}
        header="Enviar Mensagem"
      >
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="message">Mensagem</label>
            <InputTextarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              autoFocus
              rows={5}
              placeholder="Digite sua mensagem..."
              className="my-2"
            />
          </div>
          <Button
            label="Enviar"
            icon="pi pi-paper-plane"
            className="p-button-raised"
            onClick={handleSendMessage}
            disabled={isSubmitting}
            loading={loading}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default UserProfile;
