import React from 'react'
import { BrowserRouter, NavLink, Route }  from 'react-router-dom'
import './bootstrap.min.css';
import Users from './components/Users'
import Register from './components/Register'

// app component
class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Page />
			</BrowserRouter>	
		);
	}
}

// page component
class Page extends React.Component {
	render() {
		return (
			<div id="page">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
					<div className="container-fluid">
						<ul className="navbar-nav mr-auto container">
							<NavLink className="nav-link" exact to="/">Home</NavLink>
							<NavLink className="nav-link" exact to="/about">About</NavLink>
							<NavLink  className="nav-link" exact to="/users">Users</NavLink>
							<NavLink className="nav-link" exact to="/register">Register</NavLink>
						</ul>
					</div>
				</nav>
				<div id="content" className="container pt-4">
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/users" component={Users} />
					<Route exact path="/register" component={Register} />
				</div>
				<div id="footer">
					<Route component={Footer} />
				</div>
			</div>
		)
	}
};

// footer component
class Footer extends React.Component{
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark footer">
				<div className="container-fluid">
					<ul className="navbar-nav mr-auto container">
						<li className="nav-item"><a href="#" target="blank" className="nav-link">All rights reserved</a></li>
					</ul>
				</div>
			</nav>	
		)
	}
};

// panel classes
class Home extends React.Component {
	render() {
		return (
			<div className="carousel-item active">
           <img src={'https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg'} alt="" width="100%"/>
      </div>
			)
	}
}

class About extends React.Component {
	render() {
		return (
			<div>
				<h1>This is the About Panel</h1>
				<p>Here is some more text. This paragraph tells you how cool and unique our company is.</p>
			</div>
		)
	}
}




export default App;