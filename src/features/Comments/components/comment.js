import React from "react";
import PropTypes from "prop-types";
import { Panel, ButtonToolbar, Button } from "rsuite";

const comment = ({ comment }) => {
  return (
    <Panel header={comment.name} bordered style={{ margin: 20 }}>
      {comment.body}

      <ButtonToolbar style={{ background: "#000", padding: 10 }}>
        <Button color="red" appearance="ghost">
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
};

export default comment;
