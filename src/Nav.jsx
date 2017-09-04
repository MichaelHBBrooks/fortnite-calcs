import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
    render() {
        return (
            <nav>
				<ul>
					<li>
						<Link to ='/'>
							14
						</Link>
					</li>
					<li>
						<Link to='/dmg'>
							Damage Calculator
						</Link>
					</li>
				</ul>
			</nav>
        );
    }
}