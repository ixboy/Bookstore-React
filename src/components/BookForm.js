import { default as React, useState } from 'react';
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const addTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };



  return (
    <div className="mx-auto m-4">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" id="titleId" value={title} onChange={addTitle} placeholder="Book title" />
        <select type="select">
          <option value="test">Learning</option>
          <option value="test">Programing</option>
          <option value="test">Movies</option>
          <option value="test">Novels</option>
          <option value="test">Comic</option>
        </select>
        <input type="submit" value="Add Book" />
      </form>
    </div>
  )
};

export default AddBook;
