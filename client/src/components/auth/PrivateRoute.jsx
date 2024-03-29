import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
	console.log(rest);
	return (
		<Route
			{...rest}
			render={(props) =>
				auth.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
