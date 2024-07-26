import createDataContext from "./createDataContext";
const BlogReducer = function(state,action){
    switch(action.type){
        case 'add':
            return [...state,{title: `Blog post #${state.length +1 }`}]
        default :
            return state;
    }
}



const addBlogPosts = function(dispatch){
    return function(){
        dispatch({type:'add'})
    }

    
}

export const {Context,Provider} = createDataContext(BlogReducer,{addBlogPosts},[])

