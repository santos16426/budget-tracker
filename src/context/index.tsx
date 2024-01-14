import React, { ReactNode, createContext, useContext, useState } from "react";

type AppContextProps = {
  activePage: {
    page: string | null;
    setPage: React.Dispatch<React.SetStateAction<string | null>>;
  };
  sidebar: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [page, setPage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const activePage = {
    page,
    setPage,
  };
  const sidebar = {
    isOpen,
    setIsOpen,
  };
  return (
    <AppContext.Provider
      value={{
        activePage,
        sidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be within an AppProvider");
  }
  return context;
};
