import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react";
let initState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "dec": {
      return { ...state, count: state.count - state.step };
    }
    case "inc": {
      return { ...state, count: state.count + state.step };
    }
    case "setCount": {
      return { ...state, count: action.payload };
    }
    case "reset":
      return initState;
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: +e.target.value });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "reset" });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
