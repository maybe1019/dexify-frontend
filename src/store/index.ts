import { configureStore } from '@reduxjs/toolkit'
import myAccountReducer from './reducers/myAccountSlice'

const store = configureStore({
  reducer: {
    myAccount: myAccountReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store