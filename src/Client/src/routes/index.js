import React, { Component } from 'react';
import { Route, withRouter, Switch,Redirect } from 'react-router-dom';

import TopNav from 'Containers/TopNav'
import Sidebar from 'Containers/Sidebar';

import outcome from './outcome';
import secondMenu from './second-menu';

import { connect } from 'react-redux';

class MainApp extends Component {

	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	render() {
		const { match, containerClassnames} = this.props;
		return (
			<div id="app-container" className={containerClassnames}>
				<TopNav history={this.props.history} />
				<Sidebar/>
				<main>
					<div className="container-fluid">
						<Switch>
							<Route path={`${match.url}/outcome`} component={outcome} />
							<Route path={`${match.url}/second-menu`} component={secondMenu} />
							<Redirect to="/error" />
						</Switch>
					</div>
				</main>
			</div>
		);
	}
}
const mapStateToProps = ({ menu }) => {
	const { containerClassnames} = menu;
	return { containerClassnames };
  }
  
  export default withRouter(connect(mapStateToProps, {})(MainApp));