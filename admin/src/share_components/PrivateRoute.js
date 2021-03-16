import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

function mapStateToProps({ auth }) {
  // console.log("state: ", state);
  return {
    isLogin: auth.isLogin,
    message: auth.message,
    loading: auth.loading,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
