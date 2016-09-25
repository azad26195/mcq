'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/core';
import { Drawer } from 'native-base';
import { 
	BackAndroid,
	Platform,
	StatusBar,
	Navigator 
} from 'react-native';

import { closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';

import Login from './components/login';
import Home from './components/home';
import SplashPage from './components/splashscreen';
import SideBar from './components/sideBar';
import { statusBarColor } from "./styles/base-theme";

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};


//global navigation object
export var globalNav = {};

class AppNavigator extends Component {
	constructor(props) {
	  super(props);
	}

	componentDidMount() {
	}

}



