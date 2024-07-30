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

            case 'edit':

                return state.map(function(BlogPost){
                    if(BlogPost.id ==  action.payload.id)
                        return action.payload
                    else
                        return BlogPost
                })


   
        default:
            return state;
    }

}

    const addBlog = function(dispatch){
        return function(title,content,callback){
            dispatch({type:'add',payload:{title,content}})
            if(callback){callback()}
        }
    }

    const delBlog = function(dispatch){
        return function(id){
            dispatch({type:'del',payload:id})

        }
    }

    const editBlog = function(dispatch){
        return function(id,title,content,callback){
            dispatch({
                type:'edit',
                payload:{id,title,content}
            });
            if(callback){callback()}


        }
    }
    


export const {Context ,Provider} = createDataContext(reducer,{addBlog,delBlog,editBlog},[{title:'Test title',content:'Test content',id:'1'}])








