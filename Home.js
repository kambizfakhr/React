import { useState } from "react";
const Home = () => {
   // let name = "kafa";
    const[name,setName] = useState('kafa');
    const [age,setAge] = useState(25);
    const handleClick =() =>{
       
        setName('kambiz fakhr');
        setAge(30);
    }
    
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p> { name } is { age } years old</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
        
     );
}
 
export default Home;