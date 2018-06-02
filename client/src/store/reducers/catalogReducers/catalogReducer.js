import { FETCH_RESOURCE } from "../../constants";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_RESOURCE:
      return action.payload;
    default:
      return state;
  }
}
