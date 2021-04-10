import React, { useEffect } from "react";
import { fetchComments, commentsSelectors } from "./commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import Comment from './components/comment'

const Comments = () => {
  const dispatch = useDispatch();
  const allComment = useSelector(commentsSelectors.selectAll)

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  
  return allComment.map((comment) => <Comment key={comment.id} comment = {comment}/>)
};

export default Comments;
