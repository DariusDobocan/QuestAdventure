import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import QuestField from './QuestField';
import validateCredits from "../../utils/validateCredits";
import FIELDS from './formFields';

class QuestForm extends Component {
  renderFields(){
    return _.map(FIELDS, ({label, name}) => {
      return (<Field key={name} component={QuestField} type="text" label={label} name={name} />
    );
    });
  }
  render(){
    return(
      <div>
      <form style={{margin: "10px 10px"}} onSubmit={this.props.handleSubmit(this.props.onQuestSubmit)}>
        {this.renderFields()}
        <Link to="/quests" className="btn-flat white-text" style={{backgroundColor: "#272635"}}>
          Cancel
          <i className="material-icons right">cancel</i>
        </Link>
        <button type="submit" className="btn-flat right white-text" style={{backgroundColor: "#272635"}}>
        Next
        <i className="material-icons right">done</i>
        </button>
      </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  console.log(validateCredits(values.body || ""));
  errors.body = validateCredits(values.body || "");

  _.each(FIELDS, ({ name }) => {
    if(!values[name]){
      errors[name]= 'You cannot let this field empty';
    }
  });

  
  return errors;
}

export default reduxForm({
  validate,
  form: 'questForm',
  destroyOnUnmount: false
})(QuestForm);
