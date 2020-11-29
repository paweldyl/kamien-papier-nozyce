import React from "react";

class MatchHistory extends React.Component{
	render(){
		let player, computer;
		const list = this.props.history.map((item,index) => {
			if(item.playersChoice === "scissors")
				player = "nożyce";
			else if(item.playersChoice === "paper")
				player = "papier";
			else
				player = "kamień";

			if(item.computersChoice === "scissors")
				computer = "nożyce";
			else if(item.computersChoice === "paper")
				computer = "papier";
			else
				computer = "kamień";
			return(
				<tr key = {index}>
					<td>{index + 1}</td>
					<td>{player}</td>
					<td>{computer}</td>
					<td style = {{color: item.color}}>{item.outcome}</td>
				</tr>
			);
		})
		return(
			<section className = "match-history">
				<table>
					<thead>
						{this.props.history.length > 0 && (
							<tr>
								<td>id</td>
								<td>ty</td>
								<td>komputer</td>
								<td>wynik</td>
							</tr>
						)}
					</thead>
					<tbody>{list}</tbody>
				</table>
			</section>
		);
	}
}

export default MatchHistory; 