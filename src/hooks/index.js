import { createContext } from "react";

const FontContext = createContext({})

export function FontProvider({children}){
    return <FontContext.Provider value={{}}></FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont  must be used within a FontProvider")
    }
    return context;
}