import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";

const rootPersistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const rootReducer = combineReducers({
	auth,
});

export default persistReducer(rootPersistConfig, rootReducer);
