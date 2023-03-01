import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import CreateThread from './pages/CreateThread';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  ); // @TODO: get authUser and isPreLoad state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    // @TODO: dispatch async action to sign out
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-new-thread" element={<CreateThread />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
