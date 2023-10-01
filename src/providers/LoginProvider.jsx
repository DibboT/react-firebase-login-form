import { createContext } from "react";


const LoginContext =createContext(null);

const LoginProvider = () => {
    const loginInfo = {name: 'Hello'}
    return (

            <LoginContext.Provider value={loginInfo}>

            </LoginContext.Provider>
            
    
    );
};

export default LoginProvider;

/**
 * 1. reate context
 * 2. set provider with value
 * 3. 
 */
