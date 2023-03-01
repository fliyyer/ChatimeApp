import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategoryItem, { threadItemShape } from './ThreadCategoryItem';

function ThreadCategoryList({ threads }) {
  return (
    <div className="list-category">
      {
      threads.map((thread) => (
        <ThreadCategoryItem key={thread.id} {...thread} />
      ))
      }
    </div>
  );
}

ThreadCategoryList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadCategoryList;
