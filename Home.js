import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
   const[blogs, setBlogs] = useState([
       {title:'my new website', body:'lorem ispum...', author:'kambiz', id:1},
       {title:'kafa academy', body:'lorem ispum...', author:'kafa', id:2},
       {title:'React Learning', body:'lorem ispum...', author:'kambiz', id:3}
   ]);
    
    
    return (
        <div className="home">
          <BlogList blogs={ blogs } title="salam"/>
        </div>
        
     );
}
 
export default Home;