import { useEffect, useReducer, useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
let initState = {
  questions: [],
  // loading ,error ,ready, active ,finished
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "data-recieved":
      return {
        ...state,
        status: "ready",
        questions: action.data,
      };
    case "data-failed":
      return {
        ...state,
        status: "error",
      };
    default:
      return;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
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
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
