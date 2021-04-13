import React from "react";
import PropTypes from "prop-types";
import { Panel, ButtonToolbar, Button } from "rsuite";

const comment = ({ comment, onDelete }) => {
  return (
  <Panel header={<h1>{comment.id}</h1>} bordered style={{ margin: 20 }}>
      {comment.body}

      <ButtonToolbar style={{ background: "#000", padding: 10 }}>
        <Button onClick={() => onDelete(comment.id)} color="red" appearance="ghost">
          Delete
        </Button>
        <Button color="cyan" appearance="ghost">
          Patch
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onDelete:PropTypes.func.isRequired
};

export default comment;
