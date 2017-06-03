import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Home from '../container/Home'
import City from '../container/City'
import User from '../container/User'
import Search from '../container/Search'
import Detail from '../container/Detail'
import NotFound from '../container/404'

import Tabar from '../components/Tabar'

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        {/*<ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >*/}
                            <Route path="/home" component={Home} />
                            <Route path="/city" component={City} />
                            <Route path="/user" component={User} />
                            <Route path="/search/:id" component={Search} />
                            <Route path="/detail/:id" component={Detail} />
                            <Route path="/near" component={NotFound} />
                            <Route path="/stroll" component={NotFound} />
                            <Route path="/order" component={NotFound} />
                            <Redirect from="/" to="/home" />
                            <Route path="*" component={NotFound} />
                        {/*</ReactCSSTransitionGroup>*/}
                    </Switch>

                    <Tabar></Tabar>
                </div>
            </Router>

        );
    }
}

export default RouterMap