import React, { Component } from 'react';
import FileUpload from './FileUpload.js';
import HeaderComponent from './HeaderComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from './HomeComponent.js';
import AboutComponent from './AboutComponent.js';
import StepsComponent from './StepsComponent/StepsComponent.js';
import Metagraph from './MetaGraphComponent/Metagraph.js'

class MainComponet extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomeComponent} />
                    <Route exact path='/aboutus' component={AboutComponent} />
                    <Route exact path='/steps' component={StepsComponent} />
                    <Route path='/uploads' component={FileUpload} />
                    <Route path='/metagraph' component={Metagraph} />
                    <Redirect to="/home" />
                </Switch>
            </>
        );
    }
}

export default MainComponet;
