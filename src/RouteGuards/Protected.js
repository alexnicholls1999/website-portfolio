import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'

function Protected({authenticated, children, initAttemptedRoute, ...Props}) {
    initAttemptedRoute = useLocation().pathname;

    return (
        <Route 
            {...Props}
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

export default Protected;
