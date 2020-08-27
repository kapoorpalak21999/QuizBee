import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  './assets/style.css';
import quizservice from "./quizService";
import QuestionBox from "./components/questionbox";
import Result from "./components/result";

class QuizBee extends Component {
	state = {
		questionBank :[],
		score :0,
		responses:0,
		count:0,
		sn : 1
	};
	
	getQuestions = () => {
		quizservice().then(question => {
			this.setState({
				questionBank : question
			});
		});
	};

	computeAnswer = (answer, correctAnswer) => {
		if (answer===correctAnswer) {
			this.setState({
				score:this.state.score+1
			});
			
			
		}
		this.setState({
			responses:this.state.responses < 5? this.state.responses + 1 : 5
		});
	};
	playAgain = () => {
		this.getQuestions();
		this.setState({
			score : 0,
			responses :0,
			count :0,
			sn : 1
		});
	};
	componentDidMount(){
		this.getQuestions();
	}
	render(){

		return (
			<div className = "container">
				<div className = "title">QuizBee</div>
					{this.state.count  === 5 ? (<Result score = {this.state.score} playAgain = {this.playAgain} />):null}
				
				{this.state.questionBank.length > 0 &&
					this.state.count < 5 && 
					this.state.questionBank.map(
					({question,answers,correct,questionId}) => (
					<QuestionBox question = {question}
					options={answers}
					key={questionId}
					s={this.state.sn}
					selected = {answer => this.computeAnswer(answer,correct)}
					/>
					)
					)}

					{this.state.count < 4 ? (<button className = "next" onClick = {() => {
					this.getQuestions();
					this.setState({
						count:this.state.count + 1,
						sn : this.state.sn+1
					});
					
					
								
					
				}}> Next Question </button>)
: null
				}

					{this.state.count === 4 ? (<button className = "next" onClick = {() => {
					this.getQuestions();
					this.setState({
						count:this.state.count + 1,
						sn : this.state.sn+1
					});
					
					
								
					
				}}> Finish</button>): null
				}
			


						
				




			
				
				
			</div>
		);
	}
}


ReactDOM.render(
	<QuizBee/>,
	document.getElementById('root')


	);