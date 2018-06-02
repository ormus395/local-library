import { FETCH_RESOURCE } from "../../constants";

import axios from "axios";

export const fetchResource = search => async dispatch => {
  const res = await axios.get("/api/catalog/search/" + search);

  dispatch({ type: FETCH_RESOURCE, payload: res });
};
