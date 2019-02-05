import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    
    this.state = {
      users: [],
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3002/users')
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



export default App;