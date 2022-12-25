//DO NOT change the function names

import { ADD, REDUCE } from "./actionTypes";

//function to return the add action object
const handleAddActionObj = (value) => {
  return { type: ADD, payload: value };
};

//function to return the reduce action object
const handleReduceActionObj = (value) => {
  return { type: REDUCE, payload: value };
};

export { handleAddActionObj, handleReduceActionObj };
