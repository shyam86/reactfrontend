import React from 'react'
import { BrowserRouter, NavLink, Route }  from 'react-router-dom'
import './bootstrap.min.css';

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


class Services extends React.Component{
  constructor(){
    super();
    
    this.state = {
      users: [],
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3005/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }
  
  render(){
    const {users} = this.state;
    
    return(
      <div>
        <table className="t01" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((users)=>(
              <tr >
                <th scope="row"></th>
                <td> {users.firstName} </td>
                <td> {users.lastName} </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
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
							<NavLink  className="nav-link" exact to="/services">Services</NavLink>
							<NavLink className="nav-link" exact to="/contact">Contact</NavLink>
						</ul>
					</div>
				</nav>
				<div id="content" className="container pt-4">
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/contact" component={Contact} />
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
			<div>
				<h1>Hello World! You're on the home page</h1>
				<p>This is a paragraph of text on the homepage.</p>
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

class App2 extends React.Component {
	render() {
		return (
			<div>
				<h1>This is the Services Panel</h1>
				<p>Here we will give a vague, buzzword filled soliloqy about why our customers choose us! But we will not tell you exactly what we do.</p>
			</div>
		)
	}
}

class Contact extends React.Component {
	render() {
		return (
			<div>
				<h1>This is the Contact Panel</h1>
				<form>
					<div className="form-group">
						<input type="text" placeholder="Your Name"></input>
					</div>
					<div className="form-group">
						<input type="email" placeholder="Enter email"></input>
						<small id="emailHelp" class="form-text text-muted">We will only share your email with a select group of Russian hackers.</small>
					</div>
					<div class="form-group form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    					<label class="form-check-label" for="exampleCheck1">If the answer to whether this box is checked is <strong>!(!true && 5 > 6) && !(10 == "10" || false && !true)</strong> we will pass your details to third parties.</label>
 					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}




export default App;