import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FirstExample from "./FirstExample";
import SecondExample from "./SecondExample";
import ThirdExample from "./ThemeExample";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">First Example</Link>
        </li>
        <li>
          <Link to="/SecondExample">Second Example</Link>
        </li>
        <li>
          <Link to="/ThirdExample">Third (Theme) Example</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <FirstExample />
        </Route>
        <Route path="/SecondExample">
          <SecondExample />
        </Route>
        <Route path="/ThirdExample">
          <ThirdExample />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
