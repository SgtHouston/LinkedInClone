import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute(props) {
    const {user, checked} = useSelector(state => state.user)

    if(!checked){
        return 'loading...'
    } 

    if (!user) {
        return <Redirect to="/"/>
    }

    return (
        <Route {...props}>
            {props.children}
        </Route>
    )
}

export default ProtectedRoute
