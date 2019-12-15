import React, {Component} from 'react';

class LoginPage extends Component {
	state = {
		username:this.props.location.state.id
	};

	componentDidMount() {
    }

	render() {
        return (
			<h1>DashboardHome with username - {this.state.username} </h1>
		);
	}

}

