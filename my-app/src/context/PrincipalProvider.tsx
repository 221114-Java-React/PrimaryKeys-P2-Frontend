import { createContext, useEffect, useState } from "react";
import Principal from "../models/Principal";

export const PrincipalContext = createContext<Principal | null>(null);
export const SetPrincipalContext = createContext<Function | null>(null);

export default function PrincipalProvider({children}: any){
    const [principal, setPrincipal] = useState<Principal | null>(null);
    
    /*TODO
    finish principalProvider

    see what getItem (auth) actually retrieves
    */ 

    useEffect(()=> {
        const data = window.sessionStorage.getItem("auth");
    });

    return(
    <PrincipalContext.Provider value={principal}>
        <SetPrincipalContext.Provider value={setPrincipal}>
            {children}
        </SetPrincipalContext.Provider>
    </PrincipalContext.Provider>)
}