import React, { useEffect } from "react";
import { fetchComments } from "./commentsSlice";
import { useDispatch } from "react-redux";

const Comment = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  return <div></div>;
};

export default Comment;
