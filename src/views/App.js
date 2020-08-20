import React, { Component } from "react";
import "antd/dist/antd.css";
import "./style/custom.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DefaultLayoutAdmin from "./layouts/DefaultLayoutAdmin";
import DefaultLayoutUser from "./layouts/DefaultLayoutUser";
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
            <Route exact path="/admin-login">
              <LoginPage />
            </Route>
            <Route path="/">
              <DefaultLayoutUser />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
