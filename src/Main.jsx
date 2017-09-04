import React from 'react';
import { Route } from 'react-router-dom';

export class Main extends React.Component {
    render() {
        return (
            <main>
                <Route exact={true} path='/' component={Home} />
                <Route path='/:menu' component={MenuItem} />
			</main>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <h1>
				Hello and welcome to Fortnite Damage Calculators.
			</h1>
        );
    }
}

class MenuItem extends React.Component {
    render() {
        return (
            <h1>{this.props.match.params.menu}</h1>
        );
    }
}