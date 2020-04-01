import React from 'react';
import { Button, Typography } from '@material-ui/core';
import '../App.css';
import './Menu.css';

class Menu extends React.Component{
  constructor(props){
    super(props)

    this.gameClick = this.gameClick.bind(this);
    this.statsClick = this.statsClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
  }

  gameClick(){
    this.props.menuGameClick();
  }

  statsClick(){
    this.props.menuStatsClick();
  }

  aboutClick(){
    this.props.menuAboutClick();
  }

  render(){
    return(
      <>
        <div className="menuBackground">
          <div className="sideMenu">
            <h1>Menu</h1>

            <ul>
              <li><Button color="inherit" onClick={ this.gameClick }>Game</Button></li>
              <li><Button color="inherit" onClick={ this.statsClick }>Stats</Button></li>
              <li><Button color="inherit" onClick={ this.aboutClick }>About</Button></li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Menu;
