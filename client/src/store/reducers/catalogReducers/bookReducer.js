import { FETCH_BOOKS } from "../../constants";
let initialState = {};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
