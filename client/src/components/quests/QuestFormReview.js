import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const QuestFormReview = ({ onCancel, formValues, submitQuest, history }) => {
  const reviewFields = _.map(FIELDS, field => {
    return (
      <div key={field.name} >
        <label style={{color:"black"}}>{field.label}</label>
        <div>
          {formValues[field.name]}
        </div>
      </div>
    );
  });

  return(
    <div style={{fontFamily: "monaco,Consolas,Lucida Console,monospace", margin:"10px 10px"}}>
      <h5>Rewiew Before Sending!</h5>
      {reviewFields}
      <button
        className="white-text btn-flat" onClick={onCancel} style={{ marginTop: '50px', backgroundColor:"#272635"}}>
        Back
        <i className='material-icons left'>keyboard_arrow_left</i>
      </button>
      <button
        onClick={() => submitQuest(formValues, history)}
        className="white-text right btn-flat" style={{ marginTop: '50px', backgroundColor:"#272635"}}>
        Send
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return{
    formValues: state.form.questForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(QuestFormReview));
