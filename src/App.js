import React from "react";
import UsersChoice from "./UsersChoice";
import Result from "./Result";
import MatchHistory from "./MatchHistory";

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      playersChoice: "",
      computersChoice: "",
      stylesOutcome: {},
      stylesImg1: {},
      stylesVs: {},
      stylesImg2: {},
      outcome: "",
      history: []
    }
    this.startGame = this.startGame.bind(this);
    this.setChoice = this.setChoice.bind(this);
    this.setStyles = this.setStyles.bind(this);
  }
  startGame(which){
    console.log(which);
    this.setState({
      stylesOutcome: {transitionDuration: "0s"},
      stylesImg1: {transitionDuration: "0s"},
      stylesVs: {transitionDuration: "0s"},
      stylesImg2: {transitionDuration: "0s"}
    });
    this.setChoice(which);
    this.setStyles();
    this.addToHistory();
  }
  async addToHistory(){
    await sleep(1);
    this.setState(prevState => {
      let color;
      if(this.state.outcome === "wygrałeś")
        color = "green";
      else if(this.state.outcome === "przegrałeś")
        color = "red";
      else
        color = "black";
      let list = prevState.history.concat({
        playersChoice: prevState.playersChoice,
        computersChoice: prevState.computersChoice,
        outcome: prevState.outcome,
        color: color
      });
      return{
        history: list
      };
    });
    console.log(this.state.history)
  }
  async setStyles(){
    await sleep(0); 
    let color;
    if(this.state.outcome === "wygrałeś")
      color = "green";
    else if(this.state.outcome === "przegrałeś")
      color = "red";
    else
      color = "black";

    this.setState({
      stylesImg1: {
        transform: "scale(1.0)",
        opacity: "1"
      }
    });
    await sleep(250);

    this.setState({
      stylesVs: {
        transform: "scale(1.0)",
        opacity: "1"
      }
    });
    await sleep(350);

    this.setState({
      stylesImg2: {
        transform: "scale(1.0)",
        opacity: "1"
      }
    });
    await sleep(450);

    this.setState({
      stylesOutcome: {
        transform: "scale(1.0)",
        color: color,
        opacity: "1"
      }
    });
  }
  setChoice(which){
    const computer_number = Math.floor(Math.random() * 3);
    let computer;
    switch(computer_number){
      case 0: 
        computer = "rock"
        break;
      case 1: 
        computer = "paper"
        break;
      case 2: 
        computer = "scissors"
        break;
    }
    let player;
    switch(which){
      case 0: 
        player = "rock"
        break;
      case 1: 
        player = "paper"
        break;
      case 2: 
        player = "scissors"
        break;
    }
    let outcome;
    if(which === (computer_number + 1) % 3)
      outcome = "wygrałeś";
    else if(which === computer_number)
      outcome = "remis";
    else
      outcome = "przegrałeś";
    this.setState({
      playersChoice: player,
      computersChoice: computer,
      outcome: outcome
    });
  }
  render(){
    return (
      <div className="app">
        <header><img src = "https://lh3.googleusercontent.com/proxy/kRxvmkk1f28eopcgQftIMdIwPFCL4OsjKwZ47dr41J5pv72L_ciD_2RHMyJheXyaOxXv6JoxBr2iRImkSK98bWMbVtgiFbsQKKsU951y7m5_HEE" /></header>
        <main>
          <UsersChoice 
            startGame = {this.startGame}
          />
          <h1 style = {this.state.stylesOutcome} className = "win-lose">{this.state.outcome}</h1>
          <Result 
            playersChoice = {this.state.playersChoice}
            computersChoice = {this.state.computersChoice}
            stylesImg1 = {this.state.stylesImg1}
            stylesVs = {this.state.stylesVs}
            stylesImg2 = {this.state.stylesImg2}
          />
          <MatchHistory 
            history = {this.state.history}
          />
        </main>
      </div>
    );
  }
    
}

export default App;
