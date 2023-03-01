import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({ threads, like, dislike, neutralLike, neutralDislike }) {
  return (
    <section>
      <div className="row d-flex">
        <div className="col-4">
          {threads.map((thread) => (
            <ThreadItem
              key={thread.id}
              {...thread}
              like={like}
              dislike={dislike}
              neutralLike={neutralLike}
              neutralDislike={neutralDislike}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};

export default ThreadList;
