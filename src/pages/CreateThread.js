import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function CreateThread() {
  const dispatch = useDispatch();

  const onThreadInput = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <section className="w-full bg-white min-h-screen mx-auto pt-10 md:w-4/5">
      <div className="px-4 mt-4">
        <h3 className="font-Philosopher font-bold text-2xl text-primary">
          Create New Thread
        </h3>
        <ThreadInput threadInput={onThreadInput} />
      </div>
    </section>
  );
}

export default CreateThread;
