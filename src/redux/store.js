import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { reducer } from "./slice";


const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persiStore = persistStore(store);