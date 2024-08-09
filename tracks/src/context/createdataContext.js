import React,{ useReducer } from "react";

export default function(reducer,actions,initialValue){
    const Context = React.createContext();

    const Provider = function({children}){
        const [state,dispatch] = useReducer(reducer,initialValue);

        const boundActions = {};

        for(let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return (

            <Context.Provider value={{state,...boundActions}}>
                {children}
                
            </Context.Provider>

        );
    }
    
    return {Context,Provider};
}