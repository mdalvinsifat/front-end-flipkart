import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./useSlice";
import CategoryReducer from "./CategorySlice";



import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['socket'],
}

const rootReducer = combineReducers({
 auth : authReducer, 
CategoryOffer :  CategoryReducer 
})

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  

const store = configureStore({
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})







export default store ; 