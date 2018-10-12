import { combineReducers } from "redux";
import weatherForCity from './weather_for_city'

const rootReducer = combineReducers({
  weatherForCity: weatherForCity
})

export default rootReducer