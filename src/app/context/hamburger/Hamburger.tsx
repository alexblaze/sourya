import React, { createContext, useState, useContext } from "react";

interface HamburgerContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerContext = createContext<HamburgerContextType | null>(null);

export const useHamburgerContext = () => {
  const context = useContext(HamburgerContext);
  if (!context) {
    throw new Error(
      "useHamburgerContext must be used within a HamburgerProvider"
    );
  }
  return context;
};

interface HamburgerProviderProps {
  children: React.ReactNode;
}

export const HamburgerProvider: React.FC<HamburgerProviderProps> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen((open) => !open);

  const contextValue: HamburgerContextType = {
    isOpen,
    toggleMenu,
  };

  return (
    <HamburgerContext.Provider value={contextValue}>
      {children}
    </HamburgerContext.Provider>
  );
};
