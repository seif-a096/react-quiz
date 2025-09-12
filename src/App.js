import { useEffect, useReducer, useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";

let initState = {
  questions: [],
  // loading ,error ,ready, active ,finished
  status: "loading",
  index: 0,
  newAnswer: null,
  points: 0,
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
        index: ++state.index,
        newAnswer: null,
      };

    default:
      return state;
  }
}
export default function App() {
  const [{ status, questions, index, newAnswer }, dispatch] = useReducer(
    reducer,
    initState
  );
  let numQuestions = questions.length;

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
            <Question
              question={questions[index]}
              dispatch={dispatch}
              newAnswer={newAnswer}
            />
            {newAnswer && (
              <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "next-question" })}
              >
                Next
              </button>
            )}
          </>
        )}
      </Main>
    </div>
  );
}
