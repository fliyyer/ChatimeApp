import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <section>
      <div className="w-full bg-white mx-auto mt-4 p-4">
        <h4 className="text-bold">
          <strong>Active user leaderboard</strong>
        </h4>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
    </section>
  );
}

export default LeaderboardsPage;
