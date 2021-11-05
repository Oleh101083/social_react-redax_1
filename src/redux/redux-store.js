import {combineReducers,createStore} from 'redux'
import dialogsReducer from './dialogsReducer'
import musicPostReducer from './musicPostReducer'
import newPostReducer from './newsPostReducer'
import profileReducer from './profileReducer'

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    newPostPage:newPostReducer,
    musicPostPage:musicPostReducer
})


let store = createStore(redusers)

export default store