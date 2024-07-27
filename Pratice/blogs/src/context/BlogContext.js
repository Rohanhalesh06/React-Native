import createDataContext from "./createDataContext";


const reducer = function(state,action){
    console.log(action)
    switch(action.type){
        case 'del':{
            //return state.filter((blogPost)=>{ action.payload === blogPost.id})
            return state.filter(function(Blogpost){
                return  action.payload !== Blogpost.id
            })
        }

        case 'add':
            return [
                ...state,
                {title:`blog post #${state.length}`,
                 id:Math.floor(Math.random() * 9999)       
                }
            ]
   
        default:
            return state;
    }

}

    const addBlog = function(dispatch){
        return function(){
            dispatch({type:'add'})
        }
    }

    const delBlog = function(dispatch){
        return function(id){
            dispatch({type:'del',payload:id})
        }
    }
    


export const {Context ,Provider} = createDataContext(reducer,{addBlog,delBlog},[])








