// Importações de hooks, bibliotecas e context
import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Register = () => {
  const toast = useRef(null); // Referência para exibir notificações
  const navigate = useNavigate(); // navegação entre páginas
  const { user, login } = useAuth(); // Pegando o usuário atual

  // Estado do formulário com nome, e-mail e senha
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  // Se já estiver logado, redireciona pro perfil
  useEffect(() => {
    if (user) {
      navigate(`/user/${user.id}`);
    }
  }, [user, navigate]);

  // Atualiza os campos do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para mostrar alertas na tela
  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 4000 });
  };

  // Validação simples de e-mail
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Quando clicar em "Criar Conta"
  const handleRegister = (e) => {
    e.preventDefault();
    const { nome, email, senha } = formData;
    const errors = [];

    // Validações básicas dos campos
    if (!nome) errors.push("Nome é obrigatório.");
    if (!email) {
      errors.push("E-mail é obrigatório.");
    } else if (!isValidEmail(email)) {
      errors.push("Formato de e-mail inválido.");
    }
    if (!senha) errors.push("Senha é obrigatória.");

    // Se tiver erro, mostra alerta
    if (errors.length) {
      showToast("error", "Erro no cadastro", errors.join("\n"));
      return;
    }

    // Gera um ID fake, simula cadastro e redireciona
    const newUserId = Math.floor(Math.random() * 1000) + 1;
    login(email, newUserId, nome);
    navigate(`/user/${newUserId}`);
  };

  return (
    <div className="p-fluid max-w-30rem mx-auto p-4 border-round-lg surface-card shadow-2">
      {/* Componente de notificação */}
      <Toast ref={toast} />
      <h1 className="text-center text-5xl text-gray-800 mt-0 mb-4">Registrar</h1>
      
      {/* Formulário de cadastre-se */}
      <form onSubmit={handleRegister} className="p-fluid">
        {/* Campo Nome */}
        <div className="field mb-3">
          <label htmlFor="nome" className="block text-900 font-medium mb-1">
            Nome
          </label>
          <InputText
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
            className="w-full"
          />
        </div>

        {/* Campo E-mail */}
        <div className="field mb-3">
          <label htmlFor="email" className="block text-900 font-medium mb-1">
            E-mail
          </label>
          <InputText
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            className="w-full"
          />
        </div>

        {/* Campo Senha */}
        <div className="field mb-3">
          <label htmlFor="senha" className="block text-900 font-medium mb-1">
            Senha
          </label>
          <Password
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            toggleMask
            feedback={false}
            placeholder="Crie uma senha"
            className="w-full"
            inputClassName="w-full"
          />
        </div>

        {/* Botão de criar conta */}
        <Button
          type="submit"
          label="Criar Conta"
          icon="pi pi-user-plus"
          className="w-full p-button-primary"
        />
      </form>

      {/* Botão de já tem conta? entre */}
      <div className="flex justify-content-center mt-4">
        <Link to="/login" title="Já tem conta? Entre">
          <Button
            label="Já tem conta? Entre"
            icon="pi pi-sign-in"
            className="w-auto text-lg"
            text
          />
        </Link>
      </div>
    </div>
  );
};

export default Register;
