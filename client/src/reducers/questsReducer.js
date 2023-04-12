import { FETCH_QUESTS } from '../actions/types';

export default function(state = [], action){
  switch (action.type){
    case FETCH_QUESTS:
      return action.payload;
    default:
      return state;
  }
}
