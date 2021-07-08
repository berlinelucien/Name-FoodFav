import React from "react";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Details from "../components/Details";
import UserForm from "../components/UserForm";
import Home from "../components/Home";
import {NoMatch} from "../components/NoMatch";
import { Navbar, NavLink } from "react-bootstrap";


const AppRouter = () => (
  // <div className="App">
  <BrowserRouter>
    {/* <nav className="navbar navbar-light"> */}
    {/* <div className="container"> */}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
      <Nav className="justify-content-center" fill variant="pills">
        {/* <div className="links"> */}

          <Nav.Item>
            <NavLink>
              <Link to={`/`}>Home</Link>
              </NavLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={`/UserForm`}>Register</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to={`/details`} className="link">
                Details
              </Link>
            </Nav.Link>
          </Nav.Item>
 
      </Nav>
    </Navbar>
    {/* </div> */}
    {/* </nav> */}

    <div className="container">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={UserForm} path="/UserForm" />
        <Route component={Details} path="/details" />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
  // </div>
);

export default AppRouter;
