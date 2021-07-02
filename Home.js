const Home = () => {
    const handleClick =(e) =>{
        console.log('hello, Kafa Academy',e);
    }
    const handleClickAgain = (nam,e) => {
        console.log('hello ' +nam,e.target);
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me!</button><br />
            <button onClick={(e)=> handleClickAgain('kambiz',e)}>Click Me Again</button>
        </div>
        
     );
}
 
export default Home;