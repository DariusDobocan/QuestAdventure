import React, { Component } from 'react';
import axios from 'axios';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    axios.get('/api/current_user')
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.state;
    
    return (
      <div>
        {user ? (
            
          <div style={{textAlign:"center", fontFamily: "monaco,Consolas,Lucida Console,monospace"}}>
            <h2>My Profile</h2>
            <img href={user.thumbnail}></img>
            <p>{user.username}</p>
            <p>Tokens: {user.credits}</p>
            <p>Badge: {user.badge}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default MyProfile;