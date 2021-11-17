import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const addAuthor = (e) => {
    const author = e.target.value;
    setAuthor(author);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="mx-auto m-4">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" id="titleId" value={title} onChange={addTitle} placeholder="Book title" />
        <input type="text" id="authorId" value={author} onChange={addAuthor} placeholder="Book Author" />
        <select type="select">
          <option value="test">Learning</option>
          <option value="test">Programing</option>
          <option value="test">Movies</option>
          <option value="test">Novels</option>
          <option value="test">Comic</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
