import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
   const[blogs, setBlogs] = useState(null);
   const handleDelete = (id) => {
     const newBlog = blogs.filter(blog => blog.id!== id);
     setBlogs(newBlog);
   }
    const [name, setName] = useState('KAFA');
    const [isPending, setIsPending]= useState(true);
   useEffect(()=>{
      fetch('http://localhost:8000/blogs')  
        .then(res=>{
          return res.json();
        }) 
        .then(data=>{
         setBlogs(data);
         setIsPending(false);
        })
   },[]);
    
    return (
        <div className="home">
          {isPending && <div> Loading....</div>}
          {blogs && <BlogList blogs={ blogs } title="my blogs" /> }
        </div>
        
     );
}
 
export default Home;