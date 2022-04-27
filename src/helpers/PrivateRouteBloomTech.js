import React from 'react';
import {Route, Redirect} from 'react-router-dom';

/* 
This is simply creating Private route to protect components. You are creating a template that can be overlaid ANY other component, with logic that will supersede the logic of the real component until this is satisfied.
The desired component is being passed as a Component along with all the other properties belonging to it: your usual props passed AND other properties realted to useHistory and such.

*/
function PrivateRoute({component: Component, ...rest}) {
    return <Route 
    {...rest}
    render = {((props) => {
        if(localStorage.getItem('token')) {
            return <Component {...props} />
        }else{
            return <Redirect to ='/login'/>
        }
    })}
    />
}

export default PrivateRoute