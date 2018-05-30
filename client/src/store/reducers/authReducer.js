import { FETCH_USER } from "../constants";
import { LOGIN } from "../constants";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN:
      return action.payload || false;
    default:
      return state;
  }
}
