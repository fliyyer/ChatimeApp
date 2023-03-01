import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRAL_UP_VOTE_THREAD: 'TOGGLE_NEUTRAL_UP_VOTE_THREAD',
  TOGGLE_NEUTRAL_DOWN_VOTE_THREAD: 'TOGGLE_NEUTRAL_DOWN_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }),
    );

    try {
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }),
      );
    }
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }),
    );

    try {
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }),
      );
    }
  };
}

function asyncToggleNeutralUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleNeutralUpVoteThreadActionCreator({ threadId, userId: authUser.id }),
    );

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleNeutralUpVoteThreadActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncToggleNeutralDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleNeutralDownVoteThreadActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleNeutralDownVoteThreadActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralUpVoteThreadActionCreator,
  toggleNeutralDownVoteThreadActionCreator,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralUpVoteThread,
  asyncToggleNeutralDownVoteThread,
};
