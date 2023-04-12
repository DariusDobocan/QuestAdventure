import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const dropdown = () => {
    return(
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
           ^
        </Dropdown.Toggle>

        <Dropdown.Menu style={{borderColor:"black"}}>
          <Dropdown.Item style={{backgroundColor:"white", color:"black"}} href="/api/logout">Logout</Dropdown.Item>
          <Dropdown.Item style={{backgroundColor:"white", color:"black"}} href="/myprofile">My Profile</Dropdown.Item>
          <Dropdown.Item style={{backgroundColor:"white", color:"black"}} href="/allquests">Quests</Dropdown.Item>
          <Dropdown.Item style={{backgroundColor:"white", color:"black"}} href="/users">LeaderBoard</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  
    );
  };
export default dropdown;