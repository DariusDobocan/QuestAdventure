import React from 'react';
import { Link } from 'react-router-dom';
import QuestList from './quests/QuestList';

const Dashboard = () => {
  return (
    <div style={{marginLeft:"10px"}}>
      <p style={{fontFamily: "monaco,Consolas,Lucida Console,monospace"}}>Your quests:</p>
      <QuestList />
      <div className="fixed-action-btn">
        <Link to="/quests/new" className="btn-floating btn-large red">
          <i className="material-icons">create</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
