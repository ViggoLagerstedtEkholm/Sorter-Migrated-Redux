import playReducer from "./Play";
import algorithmReducer from "./Algorithm";
import {combineReducers} from "redux";

export const allReducers = combineReducers({
    play : playReducer,
    algorithm : algorithmReducer
});
