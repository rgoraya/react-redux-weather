import { FETCH_CITY_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CITY_WEATHER: 
      return action.payload.data;
    default: 
      return state;
  }
}

