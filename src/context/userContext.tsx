"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Recupera e seta o usuário do localStorage
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  
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