import React, { ReactNode, createContext, useContext, useState } from "react";

type AppContextProps = {
  activePage: {
    page: string | null;
    setPage: React.Dispatch<React.SetStateAction<string | null>>;
  };
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [page, setPage] = useState<string | null>(null);

  const activePageValue = {
    page,
    setPage,
  };
  return (
    <AppContext.Provider
      value={{
        activePage: activePageValue,
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
