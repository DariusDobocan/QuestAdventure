import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import questsReducer from './questsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  quests: questsReducer
});
