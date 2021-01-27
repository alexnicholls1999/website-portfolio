import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function RedirectToLogin({authenticated, children, initAttemptedRoute, ...Props}) {
    return (
        <Route
            {...Props}
            render={({ location }) => 
                !authenticated ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: initAttemptedRoute,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default RedirectToLogin
