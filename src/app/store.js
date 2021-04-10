import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/Comments/commentsSlice'

export default configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
