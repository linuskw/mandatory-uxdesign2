import React from 'react';
import TopBar from './components/TopBar.js';
import Menu from './components/Menu.js';
import QuizStart from './components/QuizStart.js';
import QuizGame from './components/QuizGame.js';
import ResultModal from './components/ResultModal.js';
import Stats from './components/Stats.js';
import About from './components/About.js';
import './App.css';
import 'typeface-roboto';

import FocusTrap from 'focus-trap-react';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      menuState: false,
      gameStartScreen: true,
      gameScreen: false,
      gameRestart: false,
      modalState: false,
      statScreen: false,
      aboutScreen: false,
      result: 0,
    }

    this.topBarMenuClick = this.topBarMenuClick.bind(this);
    this.menuGameClick = this.menuGameClick.bind(this);
    this.menuStatsClick = this.menuStatsClick.bind(this);
    this.menuAboutClick = this.menuAboutClick.bind(this);
    this.gameStartScreenClick = this.gameStartScreenClick.bind(this);
    this.gameResultModal = this.gameResultModal.bind(this);
    this.modalRestart = this.modalRestart.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  topBarMenuClick(){
    if (!this.state.menuState) {
      this.setState({ menuState: true })
    } else {
      this.setState({ menuState: false })
    }
  }

  menuGameClick(){
    if (!this.state.menuState) {
      this.setState({ menuState: true })
    } else {
      this.setState({ menuState: false })
    }

    if (!this.state.gameScreen) {
      this.setState({
        gameStartScreen: true,
        statScreen: false,
        aboutScreen: false
      })
    }
  }

  menuStatsClick(){
    if (!this.state.menuState) {
      this.setState({ menuState: true })
    } else {
      this.setState({ menuState: false })
    }

    if (!this.state.statScreen) {
      this.setState({
        statScreen: true,
        gameScreen: false,
        gameStartScreen: false,
        aboutScreen: false
      })
    } else {
      this.setState({ statScreen: false })
    }
  }

  menuAboutClick(){
    if (!this.state.menuState) {
      this.setState({ menuState: true })
    } else {
      this.setState({ menuState: false })
    }

    if (!this.state.aboutScreen) {
      this.setState({
        aboutScreen: true,
        gameScreen: false,
        gameStartScreen: false,
        statScreen: false
      })
    }
  }

  gameStartScreenClick(){
    if (this.state.gameStartScreen) {
      this.setState({
        gameScreen: true,
        gameStartScreen: false,
        gameRestart: false
      })
    } else {
      this.setState({ gameScreen: false })
    }
  }

  gameResultModal(result){
    console.log("hej");
    this.setState({ result: result });
    if (!this.state.modalState) {
      this.setState({ modalState: true })
    } else {
      this.setState({ modalState: false })
    }
  }

  modalRestart(){
    this.setState({
      modalState: false
    })
  }

  modalClose(){
    this.setState({
      modalState: false,
      gameScreen: false,
      gameStartScreen: true
    })

  }

  render(){
    console.log(this.state.result);
    return (
      <>
      <div className="background">
        <div className="pageWrap">
          { this.state.menuState ?
            <FocusTrap>
              <Menu
                menuGameClick={ this.menuGameClick }
                menuStatsClick={ this.menuStatsClick }
                menuAboutClick={ this.menuAboutClick }
              />
            </FocusTrap> :
            null }

          <TopBar topBarMenuClick={ this.topBarMenuClick } />

          { this.state.modalState ?
            <FocusTrap>
              <ResultModal
                result={ this.state.result }
                modalRestart={ this.modalRestart }
                modalClose={ this.modalClose }
              />
            </FocusTrap> :
            null }

          { this.state.gameStartScreen ?
            <QuizStart
              gameStartClick={ this.gameStartScreenClick } /> :
            null}

          { this.state.gameScreen ?
            <QuizGame
              gameResultModal={ this.gameResultModal }
              gameRestart={ this.state.gameRestart }/> :
              null
           }

          { this.state.statScreen ?
              <Stats /> :
              null}

          { this.state.aboutScreen ?
              <About /> :
              null}
          </div>
        </div>
      </>
    )
  }
}

export default App;
