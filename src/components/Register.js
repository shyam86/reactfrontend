
import React from 'react'
import { BrowserRouter, NavLink, Route }  from 'react-router-dom'
import '../bootstrap.min.css';

export default class Register extends React.Component {
	render() {
		return (
			<div>
				<h1>Registration Form</h1>
    		<form action="http://localhost:3005/user_create" method="POST">
    Enter your details below
		<hr/>
					<div className="form-group">
					<input name="firstname" placeholder="First Name"/>
					</div>
					<div className="form-group">
					<input name="lastname" placeholder="Last Name"/>
					</div>
					<div className="form-group">
					<input name="email" placeholder="Email"/>
					</div>
					<div className="form-group">
					<input name="username" placeholder="User Name"/>
					</div>
					<div className="form-group">
					<input name="password" placeholder="password"/>
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
