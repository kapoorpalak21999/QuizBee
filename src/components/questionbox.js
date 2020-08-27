import React, { useState } from "react";

const QuestionBox = ({question, options, s,selected,}) => {
	const [answer, setAnswer] = useState(options);
	return (
		<div className = "questionBox">
			<div className = "question">{s + "."} {question}</div>
			{answer.map((text,index) => (
				<div>
				<button name ={text} key ={index} className ="answerBtn" onClick = {() => {
					setAnswer([text]);
					selected(text);
					
				}}>
				{text}
				</button>
				</div>
				

				
			))}
		</div>


		);
};



// const QuestionBox = ({question, options, selected}) => {
// 	const [answer, setAnswer] = useState(options);
// 	return (
// 		<div id="answers">
//                 <ul>
//                     <li onClick={this.checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
//                     <li onClick={this.checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
//                     <li onClick={this.checkAnswer} className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
//                     <li onClick={this.checkAnswer} className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
//                 </ul>
//             </div>

// 		);
// };

export default QuestionBox;