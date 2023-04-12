import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from "./Dropdown";

class Header extends Component{
  renderContent(){
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1"><a href="/auth/google">Login With Google</a></li>,
      ];
      default:
        return [
          <li style={{ margin: '0 10px' }}><Dropdown /></li>
        ];
    }
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper" style={{backgroundColor:"#272635"}}>
          <Link
            to={this.props.auth ? '/quests' : '/'}
            calssName="left brand-logo"
            style={{ marginLeft: '10px'}}
          >
            Quest Adventure
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
