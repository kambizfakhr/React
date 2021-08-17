import Navbar from './Navbar'
import Home from './Home'
function App() {
  const title = "welcome to my blog!";
  const likes = 50;
  const link = "http://www.wikichejoor.ir";
  return (
    <div className="App">
      <Navbar />
    <div className="content">
      <Home />
    </div>
    </div>
  );
}

export default App;
