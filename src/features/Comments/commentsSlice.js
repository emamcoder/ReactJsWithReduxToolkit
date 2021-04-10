import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { dispatch }) => {
    return await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=5"
    ).then((res) => res.json());
  }
);

const commentAdapter = createEntityAdapter({
  selectId: (comment) => comment.id,
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: {
    [fetchComments.pending](state) {
      state.loading = true;
    },
    [fetchComments.fulfilled](state, { payload }) {
      state.loading = false;
      commentAdapter.setAll(state, payload);
    },
    [fetchComments.rejected](state) {
      state.loading = false;
    },
  },
});

export const commentsSelectors = commentAdapter.getSelectors((state) => state.comments)

export default commentsSlice.reducer;
