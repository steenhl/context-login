// GlobalContext.js
import { createContext, useState } from 'react';

// Opretter konteksten
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Opretter et state som bliver delt mellem forskellige komponenter
    const [user, setUser] = useState(null);

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
};
