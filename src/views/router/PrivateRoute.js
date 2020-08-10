import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ children, isLoggedIn, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) => {
          return isLoggedIn ? children : <Redirect to="/" />;
        }}
      ></Route>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
