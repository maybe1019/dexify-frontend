import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import myAccountReducer from './reducers/myAccountSlice';
import themeModeReducer from './reducers/themeModeSlice';
import allFundsReducer from './reducers/allFundsSlice';

const store = configureStore({
  reducer: {
    myAccount: myAccountReducer,
    themeMode: themeModeReducer,
    allFunds: allFundsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
