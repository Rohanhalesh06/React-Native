import createDataContext from "./createDataContext";


const reducer = function(state,action){
    switch(action.type){
        case 'add':
            return [...state,{title:`blog post #${state.length}`}]
        default:
            return state;
    }

}

    const addBlog = function(dispatch){
        return function(){
            dispatch({type:'add'})
        }
    }
    


export const {Context ,Provider} = createDataContext(reducer,{addBlog},[])








