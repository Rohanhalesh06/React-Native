import React,{createContext,useReducer} from "react";

const Context = createContext()

const reducer = function(state,action){
    switch(action.type){
        case 'add':
            return [...state,{title:`blog post #${state.length}`}]
        default:
            return state;
    }

}




export const Provider = function({children}){
    const [state,dispatch] = useReducer(reducer,[]);


    const addBlog = function(){
        dispatch({type:'add'})
    }
    


        return  <Context.Provider value={{data:state,addBlog}}>{children}</Context.Provider>
}

export default Context;







