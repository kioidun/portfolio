import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/ui/home/home";
import About from "./components/ui/about/about";
import Experience from "./components/ui/experience/experience";
import Contact from "./components/ui/contact/contact";
import Layout from "./components/Layout"
import Navigation from './components/common/Navigation'

function App() {
  return (
    <React.Fragment>
      {/* <Navigation/> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
