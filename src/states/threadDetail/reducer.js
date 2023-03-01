/* eslint-disable operator-linebreak */
import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...threadDetail.comments];
    case ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy:
          threadDetail.upVotesBy.includes(action.payload.userId) &&
          threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVotesBy:
          threadDetail.downVotesBy.includes(action.payload.userId)
          && threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
