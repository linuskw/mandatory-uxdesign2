import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css';

class TopBar extends React.Component{
  constructor(props){
    super(props)

    this.menuClick = this.menuClick.bind(this)
  }

  menuClick(){
    this.props.topBarMenuClick();
  }

  render(){
    return(
      <>
        <div className="topBarWrap">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" onClick={ this.menuClick }>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                Quiz Master
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </>
    )
  }
}

export default TopBar;
