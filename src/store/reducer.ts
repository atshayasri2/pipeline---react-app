import { combineReducers } from "redux";
import compareReducer from "./compare/compare.reducer";
import finalReducer from './final/final.reducer';

const allReducers = () => combineReducers({ compareReducer,finalReducer });

export type AllReduxStoreTypes = ReturnType<ReturnType<typeof allReducers>>;

export default allReducers;