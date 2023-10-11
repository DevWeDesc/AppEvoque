import { createContext, useState } from "react";

export const AppContext = createContext({} as any);

export const ContextApp = ({ children }: any) => {
  const [loadingPosts, setLoadingPosts] = useState(true);
  return (
    <AppContext.Provider value={(loadingPosts, setLoadingPosts)}>
      {children}
    </AppContext.Provider>
  );
};
