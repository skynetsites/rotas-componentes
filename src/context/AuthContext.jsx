// Importações de hooks
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(); // Cria o contexto de autenticação

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Estado que armazena os dados do usuário

  useEffect(() => {
    // Tenta carregar o usuário salvo no localStorage ao iniciar
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Função de login agora inclui o nome do usuário
  const login = (email, id, name) => {
    const userData = { email, id, name };
    localStorage.setItem("user", JSON.stringify(userData)); // Salva no localStorage
    setUser(userData); // Atualiza o estado
  };

  const logout = () => {
    localStorage.removeItem("user"); // Remove do localStorage
    setUser(null); // Limpa o estado
  };

  return (
    // Fornece o contexto para os componentes filhos
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado para consumir o contexto
export function useAuth() {
  return useContext(AuthContext);
}

