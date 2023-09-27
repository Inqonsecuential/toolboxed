import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '@/games/2048/store/game';

export const store = configureStore({
  reducer: {
    app: gameReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
