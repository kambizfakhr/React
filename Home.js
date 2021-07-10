import { useState } from "react";
const Home = () => {
   const[blogs, setBlogs] = useState([
       {title:'my new website', body:'lorem ispum...', author:'kambiz', id:1},
       {title:'kafa academy', body:'lorem ispum...', author:'kafa', id:2},
       {title:'React Learning', body:'lorem ispum...', author:'kambiz', id:3}
   ]);
    
    
    return (
        <div className="home">
           { blogs.map(blog => (
               <div className="blog-preview" key={blog.id}>
                   <h2> { blog.title }</h2>
                   <p>writen by: { blog.author }</p>
               </div>
           ))}
        </div>
        
     );
}
 
export default Home;