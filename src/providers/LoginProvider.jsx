import { createContext } from "react";
import PropTypes from 'prop-types';


export const LoginContext =createContext(null);

const LoginProvider = ({ children }) => {
    const loginInfo = {name: 'Hello'}
    return (

            <LoginContext.Provider value={loginInfo}>
                {children}
            </LoginContext.Provider>
            
    
    );
};

export default LoginProvider;

LoginProvider.propTypes = {
    children: PropTypes.node,
}

/**
 * 1. reate context and export it
 * 2. set provider with value
 * 3. use LoginProvider in main.jsx file
 * 4. access children in LoginProvider component as children and use it in the middle of the provider
 */
