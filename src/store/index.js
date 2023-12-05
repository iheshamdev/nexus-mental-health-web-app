import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const middlewares = [];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development',
});

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    if (store.asyncReducers[key]) {
        return false;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(rootReducer(store.asyncReducers));
    return store;
};

export const persistor = persistStore(store);