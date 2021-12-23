import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  PROFESSIONS_STORE_NAME,
  professionsReducer,
} from "./modules/professions";
import { SKILLS_STORE_NAME, skillsReducer } from "./modules/skills";
import { USER_STORE_NAME, userReducer } from "./modules/user";

const reducers = combineReducers({
  [PROFESSIONS_STORE_NAME]: professionsReducer,
  [SKILLS_STORE_NAME]: skillsReducer,
  [USER_STORE_NAME]: userReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
