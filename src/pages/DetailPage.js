import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ThreadDetail from '../components/ThreadDetail';
import {
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleNeutralUpVoteThreadDetail,
  asyncToggleNeutralDownVoteThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleUpVoteThreadDetail(threadId));
  };

  const onDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleDownVoteThreadDetail(threadId));
  };

  const onNeutralLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleNeutralUpVoteThreadDetail(threadId));
  };

  const onNeutralDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleNeutralDownVoteThreadDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section>
      <div className="detail-page-thread">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          like={onLikeThreadDetail}
          dislike={onDislikeThreadDetail}
          neutralLike={onNeutralLikeThreadDetail}
          neutralDislike={onNeutralDislikeThreadDetail}
          addCommentThread={onCommentThread}
        />
      </div>
    </section>
  );
}

export default DetailPage;
