"use client"

import { useUserProfile } from "@/core/services/queries";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { data: user, isLoading, isError } = useUserProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isError,
        isLoggedIn: !!user,
        isOpen,
        setIsOpen,
        step,
        setStep,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
