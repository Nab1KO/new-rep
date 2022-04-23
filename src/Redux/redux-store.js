import { combineReducers, createStore } from "redux";
import DialogsReducer from "./Dialog-reducer";
import NewsReducer from "./News-reducer";
import ProfileReducer from "./Profile-reducer";
import UsersReducer from "./Users-reducer";


let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    newsPage: NewsReducer,
    UsersPage: UsersReducer
});

let store = createStore(reducers);


export default store;