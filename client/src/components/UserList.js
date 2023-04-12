import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { users } = this.state;

    return (
      <div style={{textAlign:"center"}}>
        <h1>User List</h1>
        {users.map(user => (
          <div key={user._id}>
            <p>{user.username}</p>
            <p>Tokens: {user.credits}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;