"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definição dos tipos
import { User } from './Types'; 

// Tipo do contexto
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Criação do contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Criação do Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};