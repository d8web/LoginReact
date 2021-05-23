import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import About from './pages/About/index'
import SignIn from './pages/Signin/Signin'
import SignUp from './pages/Signup/Signup'
import NotFound from './pages/NotFound/index'

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/about">
                <About/>
            </Route>

            <Route exact path="/signin">
                <SignIn/>
            </Route>

            <Route exact path="/signup">
                <SignUp/>
            </Route>

            <Route>
                <NotFound/>
            </Route>

        </Switch>
    )
}

export default Routes