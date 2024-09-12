import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const Role = {
    SUPER:"SUPER",
    ADM: "ADM",
    USER: "USER",
}

export function AuthProvider({children}) {
    const [user, setUser] = useState({
        autenticaed: null,
        user: null,
        role: null,
    });

    const signIn = async ({email, password}) => {
        
        if (email === "super@email.com" && password === "Super123!"){
        setUser({autenticaed:true, 
            user: {id: 1, name: "Super Usuário", email},
        role: Role.SUPER});
        } else if (email === "adm@email.com" && password === "Adm123!"){
            setUser({autenticaed:true, 
                user: {id: 2, name: "Administrador", email},
            role: Role.ADM,
        });
        } else if (email === "user@email.com" && password === "user123!"){
            setUser({autenticaed:true, 
                user: {id: 3, name: "Usuario Comum", email},
            role: Role.USER,
        });
        } else {
            setUser({
            autenticaed: false, 
            user: null,
            role: null,
        });
        }
    };

    const signOut = async () => {
        setUser({});
    };

    useEffect(()=>{
        console.log("AuthProvider: ", user);
    }, [user]);

   return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
        {children}
        </AuthContext.Provider>
    );
    }

    export function useAuth() {
     const context = useContext(AuthContext);
     if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
     }
     return context;
    }
