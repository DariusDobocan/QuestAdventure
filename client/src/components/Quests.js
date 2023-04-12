import React, { Component } from 'react';
import axios from 'axios';

class QuestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quests: []
    };
  }

  componentDidMount() {
    axios.get('/api/allquests')
      .then(res => {
        this.setState({ quests: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { quests } = this.state;

    return (
      <div style={{width:"50%"}}>
        <h1>Quest List</h1>
        {quests.map(quest => (
          <div className="card" key={quest._id}>
          <div className="card-content">
            <span className="card-title">{quest.title}</span>
            <p>
              {quest.subject}
            </p>
            <p className="right">
              Tokens:{quest.body}
            </p>
          </div>
        </div>
        ))}
      </div>
    );
  }
}

export default QuestList;