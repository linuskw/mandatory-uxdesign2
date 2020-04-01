import React from 'react';
import './Stats.css';

class Stats extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gamesPlayed: 0,
      totalCorrect: 0,
      totalWrong: 0,
    }

    this.statsRender = this.statsRender.bind(this);
  }

  componentDidMount(){
    if (localStorage.getItem('gamesPlayed')) {
      this.setState({ gamesPlayed: localStorage.getItem('gamesPlayed') })
    } else {
      localStorage.setItem('gamesPlayed', this.state.gamesPlayed)
    }

    if (localStorage.getItem('totalCorrect')) {
      this.setState({ totalCorrect: localStorage.getItem('totalCorrect') })
    } else {
      localStorage.setItem('totalCorrect', this.state.totalCorrect)
    }

    if (localStorage.getItem('totalWrong')) {
      this.setState({ totalWrong: localStorage.getItem('totalWrong') })
    } else {
      localStorage.setItem('totalWrong', this.state.totalWrong)
    }
  }

  statsRender(){
    let tempCorrect = parseInt(this.state.totalCorrect);
    let tempWrong = parseInt(this.state.totalWrong);
    let tempTotalAnswers = tempCorrect + tempWrong;
    let percentage = Math.round(100 * tempCorrect / tempTotalAnswers);

    console.log(tempCorrect, tempWrong, tempTotalAnswers, percentage);
    return(
      <>
        <h3>GAMES PLAYED</h3>
        <h2>{this.state.gamesPlayed}</h2>
        <h3>CORRECT ANSWERS</h3>
        <h2>{tempCorrect}</h2>
        <h3>INCORRECT ANSWERS</h3>
        <h2>{tempWrong}</h2>
        <h3>CORRECT PERCENTAGE</h3>
        <h2>{percentage}%</h2>
      </>
    )
  }

  render(){
    return(
      <>
        <div className="statsWrap">
          { this.statsRender() }
        </div>
      </>
    )
  }
}

export default Stats;
