import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { isAuthenticated, loading } = useSelector(state => state.authReducer)
    console.log(isAuthenticated,loading)
    return (
        <Fragment>
                <Route
                    {...rest}
                    render={props => {
                        if (!isAuthenticated) {
                            return <Redirect to='/login' />
                        }

                        // if (isAdmin === true && user.role !== 'admin') {
                        //     return <Redirect to="/" />
                        // }

                        return <Component {...props} />
                    }}
                />
        </Fragment>
    )
}

export default ProtectedRoute
