import React from 'react';
import { Button, Typography, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel, Modal } from '@material-ui/core';
import axios from 'axios';
import './QuizGame.css';

class QuizGame extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      quizArrayDB: [],
      quizArrayClient: [],
      answerArray: ["", "", "", "", "", "", "", "", "", ""],
      result: 0,
      notAllAnswered: false,
      gamesPlayed: 0,
      totalCorrect: 0,
      totalWrong: 0,
    }

    this.quizRender = this.quizRender.bind(this);
    this.answerShuffle = this.answerShuffle.bind(this);
    this.answerReg = this.answerReg.bind(this);
    this.quizWinCheck = this.quizWinCheck.bind(this);
  }

  componentDidMount(){
    axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
      .then((response) => {
        this.setState({ quizArrayDB: response.data.results })
        this.answerShuffle(this.state.quizArrayDB)
      });


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

  answerShuffle(questions){
    let tempQArr = [];
    for (var i = 0; i < this.state.quizArrayDB.length; i++) {
      let answerList = [];
      answerList.push(this.state.quizArrayDB[i].correct_answer)
      for (var j = 0; j < this.state.quizArrayDB[i].incorrect_answers.length; j++) {
        answerList.push(this.state.quizArrayDB[i].incorrect_answers[j]);
        answerList.sort(() => Math.random() - 0.5);
      }
      tempQArr.push({ id: i, question: this.state.quizArrayDB[i].question, answers: answerList })
    }
    this.setState({ quizArrayClient: tempQArr })
  }

  answerReg(e){
    let value = e.target.value;
    let id = e.target.name.split("_").pop();
    let tempAArr = this.state.answerArray;
    tempAArr[id] = value;
    this.setState({
      answerArray: tempAArr,
      result: 0})
  }

  quizRender(){
    return this.state.quizArrayClient.map((questions, index) => {
      const { id, question, answers } = questions;
      return(
        <FormControl component="fieldset" margin="normal" key={id}>
          <FormLabel component="legend">Q{id+1}. {question.replace(/&#039;/g, '\'').replace(/&quot;/g, '\"').replace(/&eacute;/g, '\é').replace(/&amp;/g, '\&').replace(/&oacute;/g, '\ó').replace(/&pi;/g, '\π').replace(/&euml;/g, '\ë').replace(/&rsquo;/g, '\'').replace(/&deg;/g, '\°')}</FormLabel>
          <RadioGroup aria-label="question" name={"answer_" + id} value={this.state.answerArray[id]} onChange={this.answerReg}>
            <FormControlLabel value={answers[0]} control={<Radio color="default" />} label={answers[0].replace(/&#039;/g, '\'').replace(/&quot;/g, '\"').replace(/&eacute;/g, '\é').replace(/&amp;/g, '\&').replace(/&oacute;/g, '\ó').replace(/&pi;/g, '\π').replace(/&euml;/g, '\ë').replace(/&rsquo;/g, '\'').replace(/&deg;/g, '\°')} />
            <FormControlLabel value={answers[1]} control={<Radio color="default" />} label={answers[1].replace(/&#039;/g, '\'').replace(/&quot;/g, '\"').replace(/&eacute;/g, '\é').replace(/&amp;/g, '\&').replace(/&oacute;/g, '\ó').replace(/&pi;/g, '\π').replace(/&euml;/g, '\ë').replace(/&rsquo;/g, '\'').replace(/&deg;/g, '\°')} />
            <FormControlLabel value={answers[2]} control={<Radio color="default" />} label={answers[2].replace(/&#039;/g, '\'').replace(/&quot;/g, '\"').replace(/&eacute;/g, '\é').replace(/&amp;/g, '\&').replace(/&oacute;/g, '\ó').replace(/&pi;/g, '\π').replace(/&euml;/g, '\ë').replace(/&rsquo;/g, '\'').replace(/&deg;/g, '\°')} />
            <FormControlLabel value={answers[3]} control={<Radio color="default" />} label={answers[3].replace(/&#039;/g, '\'').replace(/&quot;/g, '\"').replace(/&eacute;/g, '\é').replace(/&amp;/g, '\&').replace(/&oacute;/g, '\ó').replace(/&pi;/g, '\π').replace(/&euml;/g, '\ë').replace(/&rsquo;/g, '\'').replace(/&deg;/g, '\°')} />
          </RadioGroup>
        </FormControl>
      )
    })
  }

  quizWinCheck(){
    if (!this.state.answerArray.includes("")) {
      for (var i = 0; i < this.state.answerArray.length; i++) {
        if (this.state.answerArray[i] === this.state.quizArrayDB[i].correct_answer) {
          this.setState({
            result: this.state.result += 1,
            notAllAnswered: false});
          this.props.gameResultModal(this.state.result);
        }
      }

      let tempGames = this.state.gamesPlayed;
      tempGames++;

      let tempCorrect = parseInt(this.state.totalCorrect) + this.state.result;

      let tempWrong = parseInt(this.state.totalWrong) + (10 - parseInt(this.state.result));

      this.setState({
        gamesPlayed: tempGames,
        totalCorrect: tempCorrect,
        totalWrong: tempWrong})
      localStorage.setItem('gamesPlayed', tempGames)
      localStorage.setItem('totalCorrect', tempCorrect)
      localStorage.setItem('totalWrong', tempWrong)
    } else {
      this.setState({ notAllAnswered: true })
    }

  }

  render(){
    console.log(this.state.quizArrayDB);
    return(
      <>
        <div className="content">
          <div className="quizWrap">
            { this.quizRender() }
          </div>
          { this.state.notAllAnswered ?
            <h4 className="answerWarning">Answer every question!</h4> :
            null }
          <Button color="inherit" onClick={ this.quizWinCheck }>Finish</Button>
        </div>
      </>
    )
  }
}

export default QuizGame;
