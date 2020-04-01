import React from 'react';
import { Button, Typography } from '@material-ui/core';
import './QuizStart.css';

class QuizStart extends React.Component{
  constructor(props){
    super(props)

    this.gameStartClick = this.gameStartClick.bind(this);
  }

  gameStartClick(){
    this.props.gameStartClick();
  }

  render(){
    return(
      <>
        <div className="quizStartWrap">
          <Button color="inherit" onClick={ this.gameStartClick }>Start game</Button>
        </div>
      </>
    )
  }
}

export default QuizStart;
