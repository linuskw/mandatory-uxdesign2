import React from 'react';
import { Button } from '@material-ui/core';

import './ResultModal.css';
class ResultModal extends React.Component{
  constructor(props){
    super(props)

  }

  gameClose(){

  }

  render(){
    return(
      <div className="modalBackground">
        <div className="modalWrap">
          <h2>Congratulations!</h2>
          <p>You answered { this.props.result }/10 questions <br></br> correct!</p>
          <div className="modalButtonWrap">
            <Button color="inherit" onClick={ this.props.modalRestart }>RE-START</Button>
            <Button color="inherit" onClick={ this.props.modalClose }>CLOSE</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultModal;
