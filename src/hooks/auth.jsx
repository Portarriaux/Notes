// * Criação do contexto com createContext
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

//todo: AuthProvider: Define e fornece os dados do contexto para todos os componentes
//todo: que estão dentro da sua árvore.É o provedor de dados.
function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ name: "Jhonatan", email: "jhonatan@gmail.com" }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// todo: useAuth: É um acesso a esses dados. Ele pega os dados fornecidos pelo
// todo: AuthProvider e os disponibiliza para o componente que o usa.
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
