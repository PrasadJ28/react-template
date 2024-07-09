
import { combineReducers } from 'redux'
import counterReducer from './dashboard/dashBoardReducer';

//Author prasadj
//Register all the reducers in this file
const rootReducer = combineReducers({
    counter: counterReducer,
})

export default rootReducer;