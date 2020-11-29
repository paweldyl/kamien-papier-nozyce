import React from "react";

class UsersChoice extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<section className = "users-choice">
				<img onClick = {() => this.props.startGame(0)} src = "img/rock.png" />
				<img onClick = {() => this.props.startGame(2)} src = "img/scissors.png" />
				<img onClick = {() => this.props.startGame(1)} src = "img/paper.png" />
			</section>
		);
	}
}

export default UsersChoice;