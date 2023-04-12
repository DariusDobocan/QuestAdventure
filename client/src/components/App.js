import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import QuestNew from './quests/QuestNew';


import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import MyProfile from './MyProfile';
import UserList from './UserList';
import Quests from './Quests';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
        <BrowserRouter>
          <div className="container-fluid" >
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/quests" component={Dashboard} />  
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/allquests" component={Quests} />
            <Route path="/quests/new" component={QuestNew} />
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
