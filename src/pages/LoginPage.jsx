// Importações de hooks, bibliotecas e context
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Login = () => {
  const toast = useRef(null); // Referência para exibir notificações
  const navigate = useNavigate(); // navegação entre páginas
  const { user, login } = useAuth(); // Pegando o usuário atual

  // Estado que guarda os dados do formulário
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  // Se já estiver logado, redireciona direto pro perfil
  useEffect(() => {
    if (user) {
      navigate(`/user/${user.id}`);
    }
  }, [user, navigate]);

  // Atualiza o estado do formulário ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mostra um alerta na tela (toast)
  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };

  // Validação básica de e-mail
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Quando clica em "Entrar"
  const handleLogin = (e) => {
    e.preventDefault();

    const { email, senha } = formData;
    const errors = [];

    // Valida e-mail
    if (!isValidEmail(email)) {
      errors.push("E-mail inválido.");
    }

    // Valida senha
    if (!senha) {
      errors.push("Senha é obrigatória.");
    }

    // Se tiver erro, mostra alerta
    if (errors.length > 0) {
      showToast("error", "Erro no login", errors.join("\n"));
      return;
    }

    // Valida login com dados fixos de teste
    if (email === "isaias@skynetreact.com" && senha === "123456") {
      login(email, 123);
      navigate(`/user/123`);
    } else {
      showToast("error", "Erro", "E-mail ou senha inválida.");
    }
  };

  return (
    <div className="p-fluid max-w-30rem mx-auto p-4 border-round-lg surface-card shadow-2">
      {/* Componente de notificação */}
      <Toast ref={toast} />

      {/* Dados de teste acesso de usuário */}
      <h1 className="text-center text-5xl text-gray-800 mt-0 mb-4">Login</h1>
      <h2 className="text-center text-sm mt-0 mb-2">Dados teste de login:</h2>
      <p className="text-center text-sm mt-0 mb-3">
        <b>E-mail:</b> isaias@skynetreact.com
        <br />
        <b>Senha:</b> 123456
      </p>

      {/* Formulário de login */}
      <form onSubmit={handleLogin} className="p-fluid">
        {/* Campo de e-mail */}
        <div className="field mb-3">
          <label htmlFor="email" className="block text-900 font-medium mb-1">
            E-mail
          </label>
          <InputText
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
            placeholder="Digite seu email"
          />
        </div>

        {/* Campo de senha */}
        <div className="field mb-3">
          <label htmlFor="senha" className="block text-900 font-medium mb-1">
            Senha
          </label>
          <Password
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            toggleMask
            feedback={false}
            className="w-full"
            inputClassName="w-full"
            placeholder="Digite sua senha"
          />
        </div>

        {/* Botão de enviar */}
        <Button
          type="submit"
          label="Entrar"
          icon="pi pi-sign-in"
          className="w-full"
        />
      </form>

      {/* Botão de Cadastre-se */}
      <div className="flex justify-content-center mt-3">
        <Link to="/register">
          <Button
            label="Cadastre-se"
            icon="pi pi-user-plus"
            className="w-auto text-lg"
            title="Cadastre-se"
            text
          />
        </Link>
      </div>
    </div>
  );
};

export default Login;
