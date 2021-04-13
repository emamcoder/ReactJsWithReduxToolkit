import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    return await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=5"
    ).then((res) => res.json());
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
    });
    return id;
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
    [deleteComment.pending](state) {
      state.loading = true;
    },
    [deleteComment.rejected](state) {
      state.loading = false;
    },
    [deleteComment.fulfilled](state, { payload: id }) {
      state.loading = false;
      commentAdapter.removeOne(state, id);
    },
  },
});

export const commentsSelectors = commentAdapter.getSelectors(
  (state) => state.comments
);

export default commentsSlice.reducer;
