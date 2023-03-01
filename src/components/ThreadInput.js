import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <form className="input-thread" onSubmit={threadInputHandler}>
      <div className="mb-3">
        <label htmlFor="Title" className="label-title mb-2">
          Title
        </label>
        <input
          type="text"
          className="title form-control"
          id="title"
          value={title}
          onChange={onTitleChange}
          placeholder="Please enter the title..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="thread" className="thread-label mb-2">
          Thread
        </label>
        <textarea
          className="thread form-control"
          placeholder="Please create a thread..."
          id="thread"
          style={{ height: 200 }}
          value={body}
          onChange={onBodyChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="category-label mb-2">
          Category
        </label>
        <input
          type="text"
          className="category form-control"
          id="category"
          value={category}
          onChange={onCategoryChange}
          placeholder="Select your category"
          required
        />
      </div>
      <button
        className="w-full bg-primary rounded text-white p-2 mt-4 outline-none hover:bg-primaryHover"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
