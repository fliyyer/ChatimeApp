import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ category }) {
  return (
    <section>
      <p className="inline-block m-1 px-2 py-1  border rounded-3">
        {category}
      </p>
    </section>
  );
}

const threadItemShape = {
  category: PropTypes.string.isRequired,
};

ThreadCategoryItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadCategoryItem;
