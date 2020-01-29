import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
// import Cookie from "./Cookie/Cookie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <main>
            <Switch>
              <Route exact path="/" component={Rate} />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
        </div>

        <div className="container" id="cookie-info">
          {/* <Cookie/> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
