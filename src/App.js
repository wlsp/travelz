import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
import './App.css';
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Destinations from "./Components/Destination";
import Explore from "./Components/Explore";
import Partner from "./Components/Partner";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Navigation/>
      <Home/>
      <Switch>
        <Route path="/destinations" component={Destinations} />
        <Route path="/explore" component={Explore} />
        <Route path="/partner" component={Partner} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
