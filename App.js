import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Create from './Create';
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
          <Route exact path="/">
             <Home />
          </Route>
          <Route path="/create">
             <Create />
          </Route>
        </Switch>
        
      </div>
      </div>
    </Router>
  );
}

export default App;
