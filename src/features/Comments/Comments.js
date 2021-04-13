import React, { useEffect, useCallback } from "react";
import {
  fetchComments,
  commentsSelectors,
  deleteComment,
} from "./commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./components/comment";

const Comments = () => {
  const dispatch = useDispatch();
  const allComment = useSelector(commentsSelectors.selectAll);

  const onDelete = useCallback((id) => {
    dispatch(deleteComment(id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return allComment.map((comment) => (
    <Comment key={comment.id} comment={comment} onDelete={onDelete}/>
  ));
};

export default Comments;
