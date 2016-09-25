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



