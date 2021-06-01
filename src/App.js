import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Layouts/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Certifications" component={Certifications} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
