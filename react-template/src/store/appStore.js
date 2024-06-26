import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

const appStore = configureStore({
    reducer: rootReducer

})

export default appStore;