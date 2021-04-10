import {createSlice, createEntityAdapter, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (_, {dispatch}) => {
        const data = await (fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()))
        dispatch(setAllComments(data))
    }
)

const commentAdapter = createEntityAdapter({
    selectId: (comment) => comment.id
})

const commentsSlice = createSlice({
    name:'comments',
    initialState:commentAdapter.getInitialState(),
    reducers:{
        setAllComments: commentAdapter.setAllgit
    },
    extraReducers:{}
})

export const {setAllComments} = commentsSlice.actions

export default commentsSlice.reducer