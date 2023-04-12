import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allfetchQuests } from '../../actions';

class QuestList extends Component {
  componentDidMount(){
    this.props.allfetchQuests();
}

  renderQuests() {
    return this.props.quests.reverse().map(quest => {
      return(
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

export default connect(mapStateToProps, { allfetchQuests })(QuestList);
