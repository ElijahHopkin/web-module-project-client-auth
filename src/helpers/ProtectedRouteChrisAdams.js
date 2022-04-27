import React from 'react';
import {Route, Redirect} from 'react-router-dom'

/* 
from TA Chris Adams. This is simpler to apply in the App because you simply bookend the desired component with this exported component. This code 'makes' the desired component into a child of THIS one.
You'll put the route in the first iteration of this 'Protected Route'
*/
function ProtectedRoute(props) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default ProtectedRoute
