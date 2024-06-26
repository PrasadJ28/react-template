
import { combineReducers } from 'redux'
import { dashboardReducer } from './dashboard/dashBoardReducer';

//Author prasadj
//Register all the reducers in this file
const rootReducer = combineReducers({
    dashboard: dashboardReducer
})

export default rootReducer;