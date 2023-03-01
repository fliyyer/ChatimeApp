import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <section>
      <div className="d-flex align-items-center justify-content-between">
        <div className="leaderboards-users align-items-center d-flex">
          <img
            src={user.avatar}
            alt={`${user.name}`}
            className="rounded-5 me-2"
          />
          <div>
            <h5 className="mt-4">{user.name}</h5>
            <p className="font-thin text-sm">{user.email}</p>
          </div>
        </div>
        <p>{score}</p>
      </div>
    </section>
  );
}

const userLeaderboardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userLeaderboardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
