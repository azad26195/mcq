'use strict';

import React,{ Component } from 'react';
import { 
	AppState,
	Text 
} from 'react-native';

import AppNavigator from './containers/AppNavigator';

class App extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
            return(
                <AppNavigator store={this.props.store}/> 
            );
    }
}

export default App
