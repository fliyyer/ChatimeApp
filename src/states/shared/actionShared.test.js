/* eslint-disable quotes */
/**
 *
 *
 *  asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 *   asyncPopulateLeaderboards thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and cell alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { receiveLeaderboardsActionCreator } from "../leaderboards/action";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveUsersActionCreator } from "../users/action";
import { asyncPopulateLeaderboards, asyncPopulateUsersAndThreads } from "./action";

const fakeThreadsResponse = [
  {
    id: "thread-1",
    title: "Thread Test",
    body: "Thread Test 1",
    category: "react",
    user: "user-1",
    commentTo: "",
    createdAt: "2022-09-22T10:06:55.588Z",
    upVotesBy: [],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: "user-1",
    name: "User Test 1",
    email: "usertest@gmail.com",
    avatar: "https://usertest@gmail.com",
  },
];

const fakeLeaderboardsResponse = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncPopulateUsersAndThreads thunk", () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThread;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers;
    api.getAllThread = api._getAllThreads;

    // delete backup
    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThread = () => Promise.resolve(fakeThreadsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThread = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe("asyncPopulateLeaderboards thunk", () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllLeaderboards = api.getAllleaderBoards;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllleaderBoards = api._getAllLeaderboards;

    // delete backup
    delete api._getAllLeaderboards;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getAllleaderBoards = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and cell alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.getAllleaderBoards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
