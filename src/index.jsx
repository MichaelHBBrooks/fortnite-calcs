import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Main } from './Main.jsx';
import { Nav } from './Nav.jsx';

import '../stylesheets/main.scss';

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
        		<div>
	        		<Main />
	        		<Nav /> 
        		</div>
        	</BrowserRouter>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('react-root'));