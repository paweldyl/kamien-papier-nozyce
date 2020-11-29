import React from "react";

class Result extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<section className = "result">
				<img style = {this.props.stylesImg1} className = "result-img" src = {`img/${this.props.playersChoice}.png`} />
				<div style = {this.props.stylesVs} className = "vs"> VS </div>
				<img style = {this.props.stylesImg2} className = "result-img" src = {`img/${this.props.computersChoice}.png`} />
			</section>
		);
	}
}

export default Result;