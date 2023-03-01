import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ commentThread }) {
  const [content, setContent] = useState('');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
    }
  }

  function handleCommentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="comment-input">
      <h4 className="comment-input__intro mt-2">Leave a comment</h4>
      <form className="comment-input__form" onSubmit={commentThreadHandler}>
        <textarea
          className="comment-input__text form-control"
          placeholder="Write Your comment . . ."
          id="thread"
          style={{ height: 200 }}
          value={content}
          onChange={handleCommentChange}
          required
        />
        <button
          className="bg-primary rounded border-0 text-white p-2 mt-4 outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
