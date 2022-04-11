import {configureStore} from '@reduxjs/toolkit'
import currentState from './reducer/currentState'
import mainPageReducer from './reducer/mainPageReducer'
const store = configureStore({
    reducer: {
       mainPage: mainPageReducer,
       currentState : currentState
    }
})

window.store=store;
export default store