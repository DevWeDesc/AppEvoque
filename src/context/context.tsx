import { createContext, useState } from "react";
import { IContextApp } from "../../types/types";

export const AppContext = createContext({} as any);

export const AppContextProvider = ({ children }: IContextApp) => {
  const [loadingPosts, setLoadingPosts] = useState(true);
  return (
    <AppContext.Provider value={{ loadingPosts, setLoadingPosts }}>
      {children}
    </AppContext.Provider>
  );
};
