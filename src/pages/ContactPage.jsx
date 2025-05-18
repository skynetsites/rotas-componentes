// Importações de hooks, bibliotecas e dados de um objeto
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { SiteData } from "../data"; // Importando dados estáticos do site

const Contact = () => {
  const toast = useRef(null); // Referência para exibir notificações
  const data = SiteData.contact; // Pega informações partir de um objeto

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Função que atualiza os campos conforme o usuário digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para exibir notificações com o Toast
  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };

  // Validação básica de formato de e-mail usando regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Lógica de envio do formulário e validação dos campos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    const { name, email, message } = formData;

    // Verificações de campos obrigatórios
    if (!name) errors.push("Nome é obrigatório.");
    if (!email) {
      errors.push("E-mail é obrigatório.");
    } else if (!isValidEmail(email)) {
      errors.push("Formato de e-mail inválido.");
    }
    if (!message) errors.push("Mensagem é obrigatória.");

    // Se houver erros, exibe Toast de erro
    if (errors.length > 0) {
      showToast("error", "Erro no envio", errors.join("\n"));
      return;
    }

    // Envio do formulário via POST para o Formspree
    try {
      const response = await fetch("https://formspree.io/f/xjkwrqew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Sucesso: limpa o formulário e exibe Toast positivo
      if (response.ok) {
        showToast(
          "success",
          "Sucesso",
          "Sua mensagem foi enviada com sucesso!"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      // Erro de envio
      showToast("error", "Erro", "Sua mensagem não foi enviada!");
    }
  };

  return (
    <div className="max-w-full mx-auto">
      {/* Componente de notificação */}
      <Toast ref={toast} />

      {/* Cabeçalho com título e descrição */}
      <div className="flex flex-column align-items-center text-center mb-4">
        <h1 className="text-5xl text-gray-800 mt-0 mb-4">{data.title}</h1>
        <p className="text-lg mb-5 xl:w-9 text-gray-700 mt-0">{data.description}</p>
      </div>

      {/* Informações e formulário */}
      <div className="grid flex-column-reverse md:flex-row">
        
        {/* Informações de contato e redes sociais */}
        <div className="col-12 md:col-5">
          <Card title="Informações de Contato" className="shadow-2">
            <div className="flex flex-column gap-3 mb-5">
              {Object.values(data.info).map((v, i) => (
                <div key={i} className="flex align-items-start">
                  <i className={`${v.icon} text-3xl mr-3 text-blue-600`}></i>
                  <div>
                    <h3 className="m-0">{v.title}</h3>
                    <p>{v.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="mt-4">
              <h3>{data.social.title}</h3>
              <div className="flex gap-2">
                {SiteData.siteinfo.social.map((v, i) => (
                <Link 
                  key={i} 
                  to={v.link || "#"}
                  title={v.label}
                  target="_blank"
                >
                  <Button
                    key={i}
                    icon={v.icon}
                    className="p-button-rounded p-button-outlined"
                  />
                </Link>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Formulário de contato */}
        <div className="col-12 md:col-7">
          <Card title="Formulário de Contato" className="shadow-2">
            <form onSubmit={handleSubmit} method="POST" className="p-fluid">
              {/* Campo Nome */}
              <div className="field mb-3">
                <label htmlFor="name" className="font-medium mb-2 block">
                  Nome
                </label>
                <InputText
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Campo E-mail */}
              <div className="field mb-3">
                <label htmlFor="email" className="font-medium mb-2 block">
                  E-mail
                </label>
                <InputText
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu email"
                />
              </div>

              {/* Campo Mensagem */}
              <div className="field mb-3">
                <label htmlFor="message" className="font-medium mb-2 block">
                  Mensagem
                </label>
                <InputTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Digite sua mensagem"
                />
              </div>

              {/* Botão de enviar mensagem */}
              <Button
                type="submit"
                label="Enviar Mensagem"
                icon="pi pi-send"
                className="p-button-raised"
              />
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
