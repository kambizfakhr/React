import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
   const[blogs, setBlogs] = useState([
       {title:'my new website', body:'lorem ispum...', author:'kambiz', id:1},
       {title:'kafa academy', body:'lorem ispum...', author:'kafa', id:2},
       {title:'React Learning', body:'lorem ispum...', author:'kambiz', id:3}
   ]);
   const handleDelete = (id) => {
     const newBlog = blogs.filter(blog => blog.id!== id);
     setBlogs(newBlog);
   }
    const [name, setName] = useState('KAFA');

   useEffect(()=>{
    console.log('use effect is running...');
    console.log(name);
   },[name]);
    
    return (
        <div className="home">
          <BlogList blogs={ blogs } title="salam" handleDelete={ handleDelete }/>
          <button onClick={()=> setName('kambiz fakhr')}>change name</button>
          <p>{ name }</p>
          <BlogList blogs={ blogs.filter((blog) => blog.author==='kambiz') } title="مطالب کامبیز فخر"/>
        </div>
        
     );
}
 
export default Home;