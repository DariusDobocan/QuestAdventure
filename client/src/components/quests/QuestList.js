import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuests } from '../../actions';

class QuestList extends Component {
  componentDidMount(){
    this.props.fetchQuests();
}

  renderQuests() {
    return this.props.quests.reverse().map(quest => {
      return(
        <div className="card" style={{width:"50%"}} key={quest._id}>
          <div className="card-content">
            <span className="card-title" style={{fontFamily: "monaco,Consolas,Lucida Console,monospace"}}>{quest.title}</span>
            <p style={{fontFamily: "monaco,Consolas,Lucida Console,monospace"}}>
              {quest.subject}
            </p>
            <p style={{fontFamily: "monaco,Consolas,Lucida Console,monospace"}}>
              Tokens:{quest.body}
            </p>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        {this.renderQuests()}
      </div>
    );
  }
}


function mapStateToProps({ quests }) {
  return { quests };
}

export default connect(mapStateToProps, { fetchQuests })(QuestList);
