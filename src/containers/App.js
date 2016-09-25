'use strict';

import React,{ Component } from 'react';
import { 
	AppState,
	Text 
} from 'react-native';

import theme from './themes/base-theme';

class App extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
            return(
                <Text>{"Hiee"}</Text>
            );
    }
}

export default App
