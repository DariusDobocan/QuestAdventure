import axios from 'axios';
import { FETCH_USER, FETCH_QUESTS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitQuest = (values, history) => async dispatch => {
  const res = await axios.post('/api/quests', values);

  history.push('/quests');
  dispatch({ type: FETCH_USER, payload: res.data })
};

export const fetchQuests = () => async dispatch => {
  const res = await axios.get('/api/quests');

  dispatch({ type: FETCH_QUESTS, payload: res.data })
};

export const allfetchQuests = () => async dispatch => {
  const res = await axios.get('/api/allquests');

  dispatch({ type: FETCH_QUESTS, payload: res.data })
};

export const submitContestant = (values) => async dispatch => {
  const res = await axios.post('/api/allquests', values);

  dispatch({ type: FETCH_USER, payload: res.data })
};