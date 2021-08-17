import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
   const[blogs, setBlogs] = useState(null);
   const handleDelete = (id) => {
     const newBlog = blogs.filter(blog => blog.id!== id);
     setBlogs(newBlog);
   }
    const [name, setName] = useState('KAFA');

   useEffect(()=>{
      fetch('http://localhost:8000/blogs')  
        .then(res=>{
          return res.json();
        }) 
        .then(data=>{
         setBlogs(data);

        })
   },[]);
    
    return (
        <div className="home">
          {blogs && <BlogList blogs={ blogs } title="salam" /> }
        </div>
        
     );
}
 
export default Home;