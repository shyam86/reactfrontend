import React from 'react'
import { BrowserRouter, NavLink, Route }  from 'react-router-dom'
import '../bootstrap.min.css';

export default class Users extends React.Component{
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
        <div className="table-responsive">
          <table className="t01" >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
               
              </tr>
            </thead>
            <tbody>
              {users.map((users)=>(
                <tr >
                  <th scope="row">{users.id}</th>
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