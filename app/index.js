import React, {Component} from 'react';
import {
    Text,
    View,
    Navigator
} from 'react-native';

import HomeComponent from './Home'

const routes = {
    Home:HomeComponent
}

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const navigatorProps = {
                initialRoute: {name:"Home"},
                renderScene: (route, navigator) => {
                const Component = routes[route.name];
        return <Component route={route} navigator={navigator} />
    },
        configureScene : (route)=>{
            return Navigator.SceneConfigs[route.sceneConfig] || Navigator.SceneConfigs.PushFromRight;
        }
    }
        return (
            <Navigator {...navigatorProps} />
    );
    }
}