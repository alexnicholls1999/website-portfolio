import React from 'react';
import { Redirect, Route, useLocation } from "react-router-dom";


function Protected({ authenticated, children, initAttemptedRoute, ...props}) {
    return (
        <Route
            {...props}
                render={({ location }) => 
                    authenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}

export default Protected
