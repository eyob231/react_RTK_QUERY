import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice.ts'
import { booksSlice } from './booksReducer.ts'
import { postApiSlice } from './api/postApiSlice.ts'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    getBook:booksSlice.reducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer
  },
  middleware: (get) => get().concat(postApiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch