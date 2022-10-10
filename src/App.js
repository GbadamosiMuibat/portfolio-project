import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";


function App() {
  return (
   <Router>
    <div className="App">

    <Route exact path="/"  component={<Home />} />
    <Route exact path="/About"  component={<About />} />

     
    </div>
    </Router>
  );
}

export default App;
