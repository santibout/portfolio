import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
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
import WorkInProgress from "./WorkInProgress";

const Main = () => {
  return (
    // <HashRouter basename="/">
    <Router>
      <Route
        render={({ location }) =>
          console.log(location) || (
            <div className="main-container">
              <Nav {...location} />
              <MainMiddle />
              <TransitionGroup id="right-contain">
                <CSSTransition
                  key={location.pathname}
                  classNames="fade"
                  timeout={0}
                >
                  <div className="main-right">
                    <Switch location={location}>
                      <Route exact path="/" component={() => <MainRight />} />
                      <Route path="/contact" component={() => <Contact />} />
                      <Route path="/projects" component={() => <Projects />} />
                      <Route
                        path="/login"
                        component={() => <WorkInProgress />}
                        // component={() => <Login />}
                      />
                      <Route path="/resume" component={() => <Resume />} />
                      <Route
                        path="/register"
                        // component={() => <Register />}
                        component={() => <WorkInProgress />}
                      />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )
        }
      />
    {/* </HashRouter> */}
    </Router>
  );
};

export default Main;
