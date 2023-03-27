import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [user,setUser] = useState({});
    return (
        <AppContext.Provider value={{user,setUser}}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
  return useContext(AppContext);
}