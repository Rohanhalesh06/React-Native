import React ,{useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = function({children}){
    const [CurrentBlogs,setBlogs] = useState([]);

    const updateBlogPost = function(){
        setBlogs([...CurrentBlogs,{title:`BlogPost #${CurrentBlogs.length+1}`}])
    }

    return <BlogContext.Provider value={{data:CurrentBlogs,updateBlogPost:updateBlogPost}}>{children}</BlogContext.Provider>
}

export default BlogContext;