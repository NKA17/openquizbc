import React, { Component } from 'react';
import './App.css';

const newQuiz = {
  name: "Food Quiz",
  author: "Nate",
  question: [
    {
      questionName: "What do you like most?",
      answers: [
        {
          text: "apples",
        },
        {
          text: "oranges",
        },
        {
          text: "bananas",
        }
      ]
    }
  ]
}

const quizzes = [
  {
    name: "Food Quiz",
    author: "Nate",
    question: [
      {
        questionName: "What do you like most?",
        answers: [
          {
            text: "apples",
          },
          {
            text: "oranges",
          },
          {
            text: "bananas",
          }
        ]
      }
    ]
  },
  {
    name: "Movie Quiz",
    author: "Nate",
    question: [
      {
        questionName: "What do you like most?",
        answers: [
          {
            text: "Avengers",
          },
          {
            text: "Lord of The Rings",
          },
          {
            text: "Star Wars",
          }
        ]
      }
    ]
  },
  {
    name: "Computer Quiz",
    author: "Nate",
    question: [
      {
        questionName: "What do you like most?",
        answers: [
          {
            text: "Java",
          },
          {
            text: "Python",
          },
          {
            text: "C",
          }
        ]
      }
    ]
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quizzes: quizzes
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:8080/get-all-quizzes')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(myJson => {
  //       this.setState({
  //         quizzes: myJson
  //       }, () => {
  //         console.log(this.state.quizzes)
  //       })
  //     });
  // }

  handleAddQuiz = (e) => {
    e.preventDefault();
    console.log(e);
    fetch('http://localhost:8080/get-quiz', {
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newQuiz),
    })
      .then(res => {
        if (res.status === 200) {
          console.log("quiz added");
        } else {
          console.log("something died")
        }
      }
      ).catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1" >OpenQuiz</span>
          <i class="far fa-plus-square"></i>
        </nav>
        <button onClick={e => this.handleAddQuiz(e)}>Add quiz</button>
        <div className="card">
          <div className="card-body">
            {quizzes.map((quiz, index) => {
              return (
                <div className="container" key={index}>
                  <p className="title">Quiz Name: {quiz.name}</p>
                  <p>Author: {quiz.author}</p>
                  <div className="card">
                    <div className="card-body" >
                      {quiz.question.map((question, index) => {
                        return (
                          <div key={index}><p>Question {index+1}: {question.questionName}</p>
                          {question.answers.map(answer => {
                            return (
                              <p>{answer.text}</p>
                            )
                          })}
                          </div>
                        )
                      })}
                    </div></div>
                  <hr />
                </div>
              )
            })}
          </div></div>
      </div>
    )
  }
}

export default App;
