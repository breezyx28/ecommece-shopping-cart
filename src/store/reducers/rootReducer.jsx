import ItemsReducer from './ItemsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    items:ItemsReducer
});

export default rootReducer;