import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const reducer = function(state,action){
   // console.log(action)
    switch(action.type){
        case 'del':{
            //return state.filter((blogPost)=>{ action.payload === blogPost.id})
            return state.filter(function(Blogpost){
                return  action.payload !== Blogpost.id
            })
        }

            case 'getBlogs':
                return action.payload


   
        default:
            return state;
    }

}

    const addBlog = function(){
        return function(title,content,callback){
            const request = jsonserver.post('/blogPosts',{title,content})
            if(callback)
                callback()
        }

    }    

    const delBlog = function(dispatch){
        return async function(id){
            await jsonserver.delete(`blogPosts/${id}`)
            dispatch({type:'del',payload:id})

        }
    }

    const editBlog = function(){
        return async function(id,title,content,callback){
            await jsonserver.put(`blogPosts/${id}`,{title,content})
            if(callback){callback()}


        }
    }

    const getBlogs = function(dispatch){
        return async function(){
            //console.log("Dispatched")
        const  response = await jsonserver.get('blogPosts')
         dispatch({type:'getBlogs',payload:response.data})
        }
    }
    
export const {Context ,Provider} = createDataContext(reducer,{addBlog,delBlog,editBlog,getBlogs},[])








