import { combineReducers } from 'redux';
import textBoxReducer from "./textBoxReducer";

const reducers = combineReducers({
    textBox: textBoxReducer
})

export default reducers
