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
                { title:action.payload.title,
                  
                 
                  id:Math.floor(Math.random() * 9999),       
                  
                  content:action.payload.content
                }
            ]
   
        default:
            return state;
    }

}

    const addBlog = function(dispatch){
        return function(title,content){
            dispatch({type:'add',payload:{title,content}})
        }
    }

    const delBlog = function(dispatch){
        return function(id){
            dispatch({type:'del',payload:id})
        }
    }
    


export const {Context ,Provider} = createDataContext(reducer,{addBlog,delBlog},[{title:'Test title',content:'Test content',id:'1'}])








