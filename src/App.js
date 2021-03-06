import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Destinations from "./Components/Destination";
import Partner from "./Components/Partner";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Switch>
        <Route path="/destinations" component={Destinations} />
        <Route path="/about" component={About} />
        <Route path="/partner" component={Partner} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
