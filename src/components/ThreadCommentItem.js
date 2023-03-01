import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils';

const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.attribs.class === 'remove') {
      return <> </>;
    }
  },
};

function ThreadCommentItem({ content, createdAt, owner }) {
  return (
    <section>
      <div className="comment-item d-flex">
        <div className="comment-item__photo me-2">
          <img
            src={owner.avatar}
            alt={`${owner.name}`}
            className="rounded-5 mr-2"
          />
        </div>
        <div className="comment-item__detail">
          <header>
            <div className="comment-item__info mt-2">
              <h5 className="comment-item__user-name mb-1">
                <strong>{owner.name}</strong>
              </h5>
              <p className="comment-item__created-at">{postedAt(createdAt)}</p>
            </div>
          </header>
          <article>
            <p className="comment-item__body mb-2">{parse(content, options)}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

const ownerCommentItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerCommentItemShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape,
};

export { threadCommentItemShape };

export default ThreadCommentItem;
