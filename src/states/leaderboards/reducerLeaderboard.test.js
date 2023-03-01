/* eslint-disable quotes */
/**
 *  Test scenario for leaderboardsReducer
 *
 *    - should return the initial state when given by unknown action
 *    - should return isPreload when given by SET_IS_PRELOAD action
 *  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import leaderboardsReducer from "./reducer";

describe("LeaderboardsReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the leaderboards when given by RECEIVE_LEADERBOARDS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_LEADERBOARDS",
      payload: {
        leaderboards: [
          {
            avatar: "http//fotouser.com",
            name: "user-test",
            email: "user-test@gmail.com",
          },
        ],
      },
    };
    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
