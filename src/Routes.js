import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './screens/AboutUs'
import EdgeLearn from './screens/EdgeLearn'
import GettingStarted from './screens/GettingStarted'
import Landing from './screens/Landing'
import Support from './screens/Support'


const Routes = () => {
    return (
        <Fragment>
            <Router>
                
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/aboutus' component={AboutUs}/>
                        <Route path='/edgelearn' component={EdgeLearn}/>
                        <Route path='/gettingstarted' component={GettingStarted}/>
                        <Route path='/support' component={Support}/>
                    </Switch>
                    <Footer/>
                
            </Router>
        </Fragment>
    )
}

export default Routes
