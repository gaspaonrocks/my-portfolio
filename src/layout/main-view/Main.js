import React, { Component } from 'react';
import Routes from '../../config/Routes';

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = { category: '' }
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.category}</h1>
                <Routes />
            </div>
        );
    }
}