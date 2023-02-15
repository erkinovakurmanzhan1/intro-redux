import { createStore } from "redux";

export const calculatorActionTypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
};

const initialState = {
  result: 0,
};
export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActionTypes.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case calculatorActionTypes.SUBTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    case calculatorActionTypes.DIVIDE:
      return {
        ...state,
        result: state.result / action.payload,
      };
    case calculatorActionTypes.MULTIPLY:
      return {
        ...state,
        result: state.result * action.payload,
      };

    default:
      return state;
  }
};


export const store = createStore(calculatorReducer);