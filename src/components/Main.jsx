import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import One from "./One";
import Nav from "./Nav";
import MainMiddle from "./MainMiddle";
import MainRight from "./MainRight";
import Contact from "./Contact";
import "../css/main.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Projects from "./Projects";
import Login from "./Login";
import Register from "./register";
import Resume from "./Resume";

const Main = () => {
  return (
    <Router>
      <Route
        render={({ location }) =>
          console.log(location) || (
            <div className="main-container">
              <Nav />
              <MainMiddle />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  // timeout={{ enter: 500, exit: 500 }}
                >
                  <div className="main-right">
                    <Switch location={location}>
                      <Route exact path="/" component={() => <MainRight />} />
                      <Route path="/contact" component={() => <Contact />} />
                      <Route path="/projects" component={() => <Projects />} />
                      <Route path="/login" component={() => <Login />} />
                      <Route path="/resume" component={() => <Resume />} />
                      <Route path="/register" component={() => <Register />} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )
        }
      />
    </Router>
  );
};

export default Main;
