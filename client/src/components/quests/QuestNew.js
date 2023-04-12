import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import QuestForm from './QuestForm';
import QuestFormReview from './QuestFormReview';


class QuestNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <QuestFormReview
        onCancel={() => this.setState({ showFormReview: false})}
      />;
    }

    return (
      <QuestForm
          onQuestSubmit={() => this.setState({ showFormReview: true })}
        />
    );
  }

  render(){
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({form: 'questForm'})(QuestNew);
