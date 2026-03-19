import { createContext } from 'react';

type Usuario = {
  nome: string;
  estaLogado: boolean;
};

type UserContextType = {
  usuario: Usuario;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>;
};

export const UserContext = createContext<UserContextType | null>(null);