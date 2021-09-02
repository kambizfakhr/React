import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
function App() {
  const title = "welcome to my blog!";
  const likes = 50;
  const link = "http://www.wikichejoor.ir";
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
             <Home />
          </Route>
        </Switch>
        
      </div>
      </div>
    </Router>
  );
}

export default App;
