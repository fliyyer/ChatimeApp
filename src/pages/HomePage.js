import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadCategoryList from '../components/ThreadCategoryList';
import ThreadList from '../components/ThreadList';
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralDownVoteThread,
  asyncToggleNeutralUpVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states); // @TODO: get talks, users, and authUser state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate threads and users data
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDislike = (id) => {
    // @TODO: dispatch async action to toggle dislike thread
    dispatch(asyncToggleDownVoteThread(id));
  };

  const onNeutralLike = (id) => {
    // @TODO: dispatch async action to toggle neutral like thread
    dispatch(asyncToggleNeutralUpVoteThread(id));
  };

  const onNeutralDislike = (id) => {
    // @TODO: dispatch async action to toggle neutral dislike thread
    dispatch(asyncToggleNeutralDownVoteThread(id));
  };

  const threadCategoryList = threads.filter((thread, index) => (
    threads.findIndex((obj) => obj.category === thread.category) === index
  ));

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <div className="container-fluid d-flex">
        <div className="row pt-5 mt-4">
          <div className="col">
            <Card>
              <h4 className="card-header">Category</h4>
              <ThreadCategoryList threads={threadCategoryList} />
            </Card>
          </div>
        </div>

        <div className="row px-lg-4 mx-auto mt-3">
          <div className="col">
            <Stack className="mb-3" direction="horizontal" gap={2}>
              <h4 className="intro">Forum Discussion</h4>
              <div className="bg-light ms-auto">
                <Link
                  className=" bg-primary rounded text-decoration-none text-white p-2 outline-none"
                  to="/create-new-thread"
                >
                  Add Thread
                </Link>
              </div>
            </Stack>

            <ThreadList
              threads={threadList}
              like={onLike}
              dislike={onDislike}
              neutralLike={onNeutralLike}
              neutralDislike={onNeutralDislike}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
