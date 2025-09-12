import { useEffect, useReducer, useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";

let initState = {
  questions: [],
  // loading ,error ,ready, active ,finished
  status: "loading",
  index: 0,
  newAnswer: null,
  points: 0,
  highScore: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "data-recieved":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "data-failed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "new-answer":
      let question = state.questions[state.index];
      return {
        ...state,
        newAnswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "next-question":
      return {
        ...state,
        index: state.index + 1,
        newAnswer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initState,
        questions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };

    default:
      return state;
  }
}
export default function App() {
  const [{ status, questions, index, newAnswer, points, highScore }, dispatch] =
    useReducer(reducer, initState);
  let numQuestions = questions.length;
  let maxPoints = questions.reduce((acc, question) => acc + question.points, 0);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "data-recieved", payload: data }))
      .catch((err) => dispatch({ type: "data-failed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              maxPoints={maxPoints}
              points={points}
              newAnswer={newAnswer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              newAnswer={newAnswer}
            />
            {newAnswer !== null && index < numQuestions - 1 ? (
              <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "next-question" })}
              >
                Next
              </button>
            ) : (
              ""
            )}
            {index === numQuestions - 1 ? (
              <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "finish" })}
              >
                Finish Quiz
              </button>
            ) : (
              ""
            )}
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPoints={maxPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
