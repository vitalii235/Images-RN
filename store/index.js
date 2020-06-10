import {combineReducers} from 'redux'
import { getImages } from './reducers/get'

const rootReducer = combineReducers({
    getImages
})

export default rootReducer