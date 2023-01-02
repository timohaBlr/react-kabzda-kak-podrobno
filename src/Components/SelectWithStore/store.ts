import {combineReducers, legacy_createStore as createStore} from "redux";
import {selectReducer} from "./SelectWithStoreReducer";

export type StoreType = ReturnType<typeof createStore>

const reducers = combineReducers({state: selectReducer})
export const store = createStore(reducers)