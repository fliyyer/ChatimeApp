/* eslint-disable quotes */
/* eslint-disable max-len */
/**
 * test scenario for threadsReducer
 *
 * - threadsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new threads when given by ADD_THREAD action
 *  - should return the threads with the toggle up vote thread when given by TOGGLE_UP_VOTE_THREAD
 *  - should return the threads with the toggle down vote thread when given by TOGGLE_DOWN_VOTE_THREAD
 *  - should return the threads with the toggle neutral up vote thread when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD
 *  - should return the threads with the toggle neutral down vote thread when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD
 *
 */

import threadsReducer from "./reducer";

describe("threadsReducers function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
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
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with the new threads when given by ADD_THREAD action", () => {
    // arrange
    const initialState = [
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

    const action = {
      type: "ADD_THREAD",
      payload: {
        thread: [
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
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it("should return the threads with the toggle up vote thread when given by TOGGLE_UP_VOTE_THREAD", () => {
    // arange
    const initialState = [
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

    const action = {
      type: "TOGGLE_UP_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "user-1",
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it("should return the threads with the toggle down vote thread when given by TOGGLE_DOWN_VOTE_THREAD", () => {
    // arrange
    const initialState = [
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

    const action = {
      type: "TOGGLE_DOWN_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "user-1",
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
