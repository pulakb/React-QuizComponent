import React, { Component } from 'react';

let quizData = {
    "quiz_questions": [
      {
        "id": 1,
        "instruction_text": "How many continents are there on Planet Earth?",
        "answer_options": ["5", "6", "7", "8"],
        "answer": "7"
      },
      {
        "id": 2,
        "instruction_text": "What's your favorite number?",
        "answer_options": ["1", "2", "3", "4"],
        "answer": "4"
      }
    ]
  };

class Quiz extends Component {
    constructor (props) {
        super(props);

        this.setState = {quiz_position: 1};
    }

    render() {
        return (
            <div>
                <div className='QuizQuestion'>{quizData['quiz_questions'][0]['instruction_text']}</div>
            </div>
        )
    }
}

export default Quiz;