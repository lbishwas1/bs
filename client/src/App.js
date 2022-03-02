
import './App.css';
import Landing from './components/Landing/Landing.jsx';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './components/auth/Login/Login'
import Register from './components/auth/Register/Register';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import Settings from './components/dashboardpages/Settings';
// import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from './components/auth/PrivateRoute';
import MyBooks from './components/dashboardpages/MyBooks';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = './login';
	}
}
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Landing} />

						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<PrivateRoute path="/settings" component={Settings} />
						<PrivateRoute path="/mybooks" component={MyBooks} />

					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
