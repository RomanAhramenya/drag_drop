import {combineReducers, createStore} from 'redux'
import { dataCardreducer } from './reducers/dataCardreducer';

const redusers = combineReducers({
    dataCard : dataCardreducer
})
const store = createStore(redusers);

export default store
window.store = store