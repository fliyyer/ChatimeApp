import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadCommentList({ comments }) {
  return (
    <section>
      <div className="coment-list">
        <h4 className="comment-list__intro mt-2">{`Comments (${comments.length})`}</h4>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <ThreadCommentItem key={comment.id} {...comment} />
          ))
        ) : (
          <div className="comment-list__null">- No Comment</div>
        )}
      </div>
    </section>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape))
    .isRequired,
};

export default ThreadCommentList;
