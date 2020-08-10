import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DefaultLayoutAdmin from "./layouts/DefaultLayoutAdmin";
import PrivateRouter from "./router/PrivateRoute";
import routes from "../routes";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              <PrivateRouter path="/admin">
                <DefaultLayoutAdmin routes={routes}></DefaultLayoutAdmin>
              </PrivateRouter>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="/">
                <div>Home</div>
                <Link to="/login">Login</Link>
                <Link to="/admin">Admin</Link>
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
